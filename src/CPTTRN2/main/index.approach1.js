process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

function moduleOfN(n) {
  return function (number) {
    if(number%n === 0) return true;
    else return false;
  }
}

function topAndBottomPattern(indexRow, numberOfRows){
  if(indexRow === 0 || indexRow === (numberOfRows-1)) return true;
  else return false;
}

function iterateOverOneRow(indexRow, rows, columns){

  let strResult = '';
  const modOperation = moduleOfN(columns-1);
  
  for(let index = 0; index < columns; index++){

    switch(true){

      case columns === 1:
        strResult = strResult + '*'; 
        break;

      case topAndBottomPattern(indexRow, rows): 
        strResult = strResult + '*'; 
        break;

      case modOperation(index): 
        strResult = strResult + '*'; 
        break;

      default: 
        strResult = strResult + '.';
    }
  }

  return strResult;
}

function iterateOverManyRows(rows,columns){
  return function(fnIterateOverOneRow){
    let arrayResult = Array();
    for(let index = 0; index < rows; index++){
      arrayResult.push(fnIterateOverOneRow(index,rows,columns));
    }
    return arrayResult;
  }
}

function entryPoint(dataIn){  

  const times = dataIn.shift();
  for(let index = 0; index < times; index++){

    const testCase = dataIn.shift().split(' ');
    const rows = Number(testCase[0]);
    const columns = Number(testCase[1]);
    let arrayResult = iterateOverManyRows(rows,columns)(iterateOverOneRow);
    arrayResult.forEach(element => console.log(element));
    console.log();
  }
}

entryPoint(Array('3','3 1','4 4','2 5'));

module.exports = {
  moduleOfN,
  topAndBottomPattern,
  iterateOverOneRow,
  iterateOverManyRows,
}

