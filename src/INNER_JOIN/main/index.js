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

function fnArrayReduceToObj(arrayDataIn){
  return arrayDataIn.reduce((prev, current) => Object.assign(prev, { [current.department_id]: current }), {});
}

function fnInnerJoin(arrayEmployee, objDepartament){

  return arrayEmployee.reduce((prev, current, index) => {

    switch(true){

      case objDepartament[`${current.department_id}`] != undefined:
        return [
          ...prev,
          {
            id: index,
            departamentId: current.department_id,
            nameEmploye: current.name,
            nameDepartament: objDepartament[`${current.department_id}`].name,
          }
        ];

      default:
        return [...prev];
    }

  }, []);
}

async function start(){
  const objDepartament = await fnArrayReduceToObj(department);
  const result = await fnInnerJoin(employee, objDepartament);
  console.log(result);
}

start();

