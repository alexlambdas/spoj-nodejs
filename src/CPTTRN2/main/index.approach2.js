process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

function moduleOfN(n) {
  return function (number) {
    if (number % n === 0) return true;
    else return false;
  }
}

function topAndBottomPattern(indexRow, numberOfRows){
  if(indexRow === 0 || indexRow === (numberOfRows-1)) return true;
  else return false;
}

function symbolPredicate(indexRow, indexColumn, rows, columns){

  const modOperation = moduleOfN(columns-1);

  switch(true){

    case columns === 1: 
      return true; 

    case topAndBottomPattern(indexRow, rows): 
      return true;

    case modOperation(indexColumn): 
      return true;

    default: 
      return false;
  }
}

function buildLinePattern(indexRow, rows, columns) {
  return function(fnPredicate){
    let strLine = '';
    for(let indexColumn = 0; indexColumn < columns; indexColumn++){
      if(fnPredicate(indexRow, indexColumn, rows, columns)) strLine = strLine + '*';
      else strLine = strLine + '.';
    }
    return strLine;
  }
}

function buildGridPattern(rows, columns){
  return function(fnBuildLinePatter){
    return function(fnPredicate){
      let arrayResult = Array();
      for(let indexRow = 0; indexRow < rows; indexRow++){
        arrayResult.push(fnBuildLinePatter(indexRow, rows, columns)(fnPredicate));
      }
      return arrayResult;
    }
  }
}

function entryPoint(dataIn){

  const times = dataIn.shift();
  for(let index = 0; index < times; index++){

    const testCase = dataIn.shift().split(' ');
    const rows = Number(testCase[0]);
    const columns = Number(testCase[1]);
    let arrayResult = buildGridPattern(rows,columns)(buildLinePattern)(symbolPredicate);
    arrayResult.forEach(element => console.log(element));
    console.log();
  }
}

entryPoint(Array('3','3 1','4 4','2 5'));