function fnArrayReduceToObj(arrayDataIn){
  return arrayDataIn.reduce((prev, current) => Object.assign(prev, { [current.department_id]: current }), {});
}

function fnInnerJoin(arrayEmployee, objDepartament){

  return arrayEmployee.reduce((prev, current, index) => {

    if(objDepartament[`${current.department_id}`] != undefined){
      return [
        ...prev,
        {
          id: index,
          departamentId: current.department_id,
          nameEmploye: current.name,
          nameDepartament: objDepartament[`${current.department_id}`].name,
        }
      ];
    }
    else return [...prev];

  }, []);
}

/**
 * export for testing
 */
module.exports = { fnArrayReduceToObj, fnInnerJoin }

