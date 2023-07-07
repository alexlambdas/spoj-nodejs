function moduleOfN(n){
  return function(number){
    if(number%n === 0) return true;
    else return false;
  }
}

function iterateOverArray(columns){
  return function(fnPredicate){
    let result = Array();
    for(let index = 0; index < columns; index++){
      if(fnPredicate(index)) result.push('A');
      else result.push('D');
    }
    return result;
  }
}

function iterateOverMatrix(rows, columns){
  return function(fnIterateOverArray){
    return function(fnPredicate){
      let result = Array();
      for(let index = 0; index < rows; index++){
        result.push(fnIterateOverArray(columns)(fnPredicate));
      }
      return result;
    }
  }
}

const fnModuleOf2 = moduleOfN(2);
const result2 = iterateOverMatrix(5,5)(iterateOverArray)(fnModuleOf2);
console.log(result2);

const fnModuleOf4 = moduleOfN(4);
const result4 = iterateOverMatrix(5,5)(iterateOverArray)(fnModuleOf4);
console.log(result4);


