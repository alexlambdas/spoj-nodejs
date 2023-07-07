const innerjoin = require('../main/index.approach1');

describe('INNER_JOIN contest', () => {

  let numberOfTest = 0;

  //
  test(`test #${++numberOfTest} :: function fnArrayReduceToObj :: normal case`, () => {
    
    const department = [
      { department_id: 12, name: 'Sales' },
      { department_id: 13, name: 'Marketing' },
      { department_id: 14, name: 'Engineering' },
      { department_id: 15, name: 'Accounting' },
      { department_id: 16, name: 'Operations' }
    ];

    const departamentReduce = {
      "12": { department_id: 12, name: 'Sales' },
      "13": { department_id: 13, name: 'Marketing' },
      "14": { department_id: 14, name: 'Engineering' },
      "15": { department_id: 15, name: 'Accounting' },
      "16": { department_id: 16, name: 'Operations' }
    }

    expect(innerjoin.fnArrayReduceToObj(department)).toEqual(departamentReduce);
  })

  //
  test(`test #${++numberOfTest} :: function fnInnerJoin :: normal case`, async () => {
    
    const employee = [
      { name: 'Alice', department_id: 12 },
      { name: 'Bob', department_id: 13 },
      { name: 'Chris', department_id: 13 },
      { name: 'Dan', department_id: 14 },
      { name: 'Eve', department_id: null }
    ];
  
    const department = [
      { department_id: 12, name: 'Sales' },
      { department_id: 13, name: 'Marketing' },
      { department_id: 14, name: 'Engineering' },
      { department_id: 15, name: 'Accounting' },
      { department_id: 16, name: 'Operations' }
    ];

    const resultInnerJoin = [
      {
        id: 0,
        departamentId: 12,
        nameEmploye: 'Alice',
        nameDepartament: 'Sales'
      },
      {
        id: 1,
        departamentId: 13,
        nameEmploye: 'Bob',
        nameDepartament: 'Marketing'
      },
      {
        id: 2,
        departamentId: 13,
        nameEmploye: 'Chris',
        nameDepartament: 'Marketing'
      },
      {
        id: 3,
        departamentId: 14,
        nameEmploye: 'Dan',
        nameDepartament: 'Engineering'
      }
    ];

    const objDepartament = await innerjoin.fnArrayReduceToObj(department);
    expect(innerjoin.fnInnerJoin(employee, objDepartament)).toEqual(resultInnerJoin);
  })
})