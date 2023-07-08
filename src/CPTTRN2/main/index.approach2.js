//
process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

/**
 * 
 * @description
 * A currified function, it will return a function that takes the dividend
 * as a numeric parameter and performs the module operation
 * 
 * @param divisor 
 * type Number, it is a divisor
 * 
 * @returns 
 * type Function, make module operation
 * 
 */
function moduleOfN(divisor) {
  return function (dividend) {
    return (dividend % divisor === 0);
  }
}

/**
 * @description
 * A predicate function, it returns true if we are at the top or bottom position of a
 * square, otherwise, it returns false
 * 
 * @param indexRow
 * type Number, the index of the rows in the two-dimensional array
 *  
 * @param numberOfRows 
 * type Number, the total number of the rows in a two-dimensional array
 * 
 * @returns 
 * type Boolean
 * 
 */
function isTopOrBottomOfSquare(indexRow, numberOfRows){
  return (indexRow === 0 || indexRow === (numberOfRows-1));
}

/**
 * 
 * @description
 * A predicate function, it returns true if we are at the top or bottom position of
 * a square, or if we are in the first or last column of the current row, in otherwise,
 * it returns false
 * 
 * @param indexRow
 * type Number, the index of the rows in the two-dimensional array
 *  
 * @param indexColumn
 * type Number, the index of the columns in the two-dimensional array
 *  
 * @param rows 
 * type Number, the total number of the rows in a two-dimensional array
 * 
 * @param columns 
 * type Number, the total number of the columns in a two-dimensional array
 * 
 * @returns 
 * type Boolean
 * 
 */
function positionOnTheGrid(indexRow, indexColumn, rows, columns){

  const modOperation = moduleOfN(columns-1);

  switch(true){
    case columns === 1: 
      return true; 

    case isTopOrBottomOfSquare(indexRow, rows): 
      return true;

    case modOperation(indexColumn): 
      return true;

    default: 
      return false;
  }
}

/**
 * 
 * @description
 * A currified function, it will return another function that accepts a predicate function
 * as an argument, with the return logic '*' or '.'
 * 
 * @param indexRow
 * type Number, the index of the rows in the two-dimensional array
 *  
 * @param rows
 * type Number, the total number of the rows in the two-dimensional array
 *  
 * @param columns
 * type Number, the total number of the columns in the two-dimensional array
 *  
 * @returns 
 * type Function, 
 * 
 */
function buildLinePattern(indexRow, rows, columns) {
  return function(fnPositionOnTheGrid){
    let strLine = '';
    for(let indexColumn = 0; indexColumn < columns; indexColumn++){
      if(fnPositionOnTheGrid(indexRow, indexColumn, rows, columns)) strLine = strLine + '*';
      else strLine = strLine + '.';
    }
    return strLine;
  }
}

/**
 * 
 * @description
 * A currified function, that returns a function, that it will return another function,
 * and each one of them takes functions as an arguments. Finally it returns an array
 * with the desired pattern
 * 
 * @param rows
 * type Number, the total number of rows in the two-dimensional array
 *  
 * @param columns
 * type Number, the total number of columns in the two-dimensional array
 *  
 * @returns 
 * type Array
 * 
 */
function buildGridPattern(rows, columns){
  return function(fnBuildLinePatter){
    return function(fnPositionOnTheGrid){
      let arrayResult = Array();
      for(let indexRow = 0; indexRow < rows; indexRow++){
        arrayResult.push(fnBuildLinePatter(indexRow, rows, columns)(fnPositionOnTheGrid));
      }
      return arrayResult;
    }
  }
}

/**
 * 
 * @description
 * Application entry point
 * 
 * @param dataIn
 * type Array, with the number of test cases and the data to be evaluated for 
 * each one of them
 *  
 */
function entryPoint(dataIn){

  const times = dataIn.shift();
  for(let index = 0; index < times; index++){
    const testCase = dataIn.shift().split(' ');
    const rows = Number(testCase[0]);
    const columns = Number(testCase[1]);
    let arrayResult = buildGridPattern(rows,columns)(buildLinePattern)(positionOnTheGrid);
    arrayResult.forEach(element => console.log(element));
    console.log();
  }
}

module.exports = {
  moduleOfN,
  isTopOrBottomOfSquare,
  positionOnTheGrid,
  buildLinePattern,
  buildGridPattern
}