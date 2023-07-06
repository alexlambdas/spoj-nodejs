process.stdin.resume();
process.stdin.setEncoding('utf8');

// input
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

// helper functions
const head = (array) => { if (array.length === 0) return array; else return array[0]; }
const tail = (array) => { if (array.length === 0) throw new Error("index outbound exception"); else return array.slice(1) }
const isEmpty = (array) => { if (array.length === 0) return array.length === 0; }


/**
 * 
 * @description
 * function that return a character need for build a diamond
 * 
 * @param defaultCase 
 * Boolean, if true, return default character (dot)
 * 
 * @param up 
 * Boolean, if true, means that we are in diamond upper part's 
 * 
 * @param slash 
 * Boolean, if true, then return slash character, else return backslash character
 * 
 * @returns 
 * String, it can be a string slash(/), or backslash(\\) or dot(.)
 * 
 */
function getDiamondCharacter(defaultCase, up = true, slash = true){

  switch(true){

    case defaultCase && up && slash:
      return '/';

    case defaultCase && up && !slash:
      return '\\';

    case defaultCase && !up && !slash:
      return '\\';

    case defaultCase && !up && slash:
      return '/';

    default:
      return '.';
  }
}


/**
 * 
 * @description
 * function that build a single line for diamond pattern
 * 
 * @param lineSize 
 * Number, size of the line of the diamond
 * 
 * @param indexLine 
 * Number, index of diamond line's
 * 
 * @param up 
 * Boolean, means that we are in diamond upper part's
 * 
 * @returns 
 * String, that represents a single diamond line in the pattern
 * 
 */
function buildDiamondLine(lineSize, indexLine, up) {

  async function loop(size, columnFlag, strAcct) {

    switch(true){

      case size === 0:
        return strAcct;

      case HALF_DIAMOND - (indexLine + 1) === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + getDiamondCharacter(true,up,true));

      case HALF_DIAMOND + indexLine === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + getDiamondCharacter(true,up,false));

      case indexLine - HALF_DIAMOND === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + getDiamondCharacter(true,up,false));

      case MAX_INDEX - (indexLine - HALF_DIAMOND) === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + getDiamondCharacter(true,up,true));

      default:
        return loop(size-1, columnFlag+1, strAcct + getDiamondCharacter(false));

    }
  }

  const MAX_INDEX = lineSize - 1;
  const HALF_DIAMOND = lineSize / 2;
  return loop(lineSize, 0, '');  
}


/**
 * 
 * @description
 * function that build a complete diamond pattern
 * 
 * @param diamondSize 
 * Number, size of the diamond pattern
 * 
 * @returns 
 * Array of String
 * 
 * @example
 * 
 * diamond of size 2
 * 
 * [
 *  './\.',
 *  '/..\',
 *  '\../',
 *  '.\/.'
 * ]
 * 
 */
function buildOneDiamond(diamondSize){

  async function loop(index, arrayAcct){

    switch(true){

      case index === diamondSize*2:
        return arrayAcct;

      case (diamondSize - 1) <= index:
        return loop(index+1, [...arrayAcct, await buildDiamondLine(diamondSize*2, index, true)])

      default:
        return loop(index+1, [...arrayAcct, await buildDiamondLine(diamondSize*2, index, false)]);
    }
  }

  return loop(0, Array());
}


/**
 * 
 * @description
 * from one complete diamond, we go to repeat pattern to complete columns required
 * 
 * @param columns 
 * Number, columns required in the contest, for diamond pattern
 * 
 * @param size 
 * Number, size of the diamond pattern
 * 
 * @returns 
 * Array of String
 * 
 * @example
 * 
 * diamond of size 2 and 3 columns
 * 
 * [
 *  './\../\../\.',
 *  '/..\/..\/..\',
 *  '\../\../\../',
 *  '.\/..\/..\/.'
 * ]
 * 
 */
async function gridColumns(columns, size){

  function loopOverDiamondLine(column, diamondLine, strAcct){
    if(column === 0) return strAcct;
    else return loopOverDiamondLine(column-1, diamondLine, strAcct+diamondLine);
  }

  async function loop(ondeDiamond, arrayAcct){
    if(isEmpty(ondeDiamond)) return arrayAcct;
    else return loop(tail(ondeDiamond), [...arrayAcct, await loopOverDiamondLine(columns, head(ondeDiamond), '')]);
  }

  const diamond = await buildOneDiamond(size);
  return loop(diamond, Array());
}


/**
 * 
 * @description
 * helper function, from array of gridColumns function, we return the same pattern that exist, 
 * with one row of complete diamond
 * 
 * @param diamondFromGridColumns 
 * Array, one complete diamond with columns pattern from gridColumns function
 * 
 * @returns 
 * Array of String, with the pattern of columns of the diamond, plus one complete diamond row
 * 
 * @example
 * 
 * diamond of size 2 and 3 columns, plus one complete diamond row
 * 
 * [
 *  './\../\../\.',
 *  '/..\/..\/..\',
 *  '\../\../\../',
 *  '.\/..\/..\/.',
 *  './\../\../\.',
 *  '/..\/..\/..\',
 *  '\../\../\../',
 *  '.\/..\/..\/.'
 * ]
 * 
 */
function addDiamondRows(diamondFromGridColumns, diamondAcct){

  function loop(diamondPatternColumns, arrayAcct){
    if(isEmpty(diamondPatternColumns)) return arrayAcct;
    else return loop(tail(diamondPatternColumns), [...arrayAcct, head(diamondPatternColumns)]);
  }

  return loop(diamondFromGridColumns, Array.from(diamondAcct));
}


/**
 * 
 * @description
 * from array complete with pattern of the columns, now, we go to repeat the pattern of rows for complete
 * diamond grid
 * 
 * @param rows 
 * Number, rows of the pattern of the diamond grid
 * 
 * @param columns 
 * Number, columns of the pattern of the diamond grid
 * 
 * @param size
 * Number, size of one diamond
 *  
 * @returns 
 * Array of String, with pattern of the grid of the diamonds
 * 
 * @example
 * 
 * pattern with: diamond of size 1, and 4 columns, and 2 rows
 * 
 * [
 *  '/\/\/\/\',
 *  '\/\/\/\/',
 *  '/\/\/\/\',
 *  '\/\/\/\/'
 * ]
 * 
 */
async function gridRows(rows, columns, size){

  async function loop(indexRow, arrayAcct){

    switch(true){

      case rows === 1:
        return await gridColumns(columns, size);

      case indexRow === 0:
        return arrayAcct;

      default:
        return loop(indexRow-1, await addDiamondRows(diamondFromGridColumns, Array.from(arrayAcct)));
    }
  }

  const diamondFromGridColumns = await gridColumns(columns, size);
  return loop(rows-1, Array.from(diamondFromGridColumns));
}

function start(dataIn){

  async function loop(data, arrayAcct){
    if(isEmpty(data)) return arrayAcct;
    else{
      const testCase = head(data).split(' ');
      const rows = Number(testCase[0]);
      const columns = Number(testCase[1]);
      const size = Number(testCase[2]);
      const result = await gridRows(rows,columns,size);
      arrayAcct = [...arrayAcct, ...result, ''];
      return loop(tail(data), arrayAcct);
    }
  }

  dataIn.shift();
  return loop(dataIn, Array());
}

async function entryPoint(dataIn){

  const result = await start(dataIn);
  result.forEach(element => console.log(element));
}

entryPoint(Array('3','3 1 2','4 4 1','2 5 2'));



/**
 * export for testing
 */
module.exports = { 
  getDiamondCharacter, 
  buildDiamondLine, 
  buildOneDiamond,
  gridColumns,
  addDiamondRows,
  gridRows,
}