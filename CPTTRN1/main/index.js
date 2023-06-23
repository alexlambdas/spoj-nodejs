process.stdin.resume();
process.stdin.setEncoding('utf8');

/**
 * input
 */
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

/**
 * helper functions
 */
const head = (array) => { if (array.length === 0) return array; else return array[0]; }
const tail = (array) => { if (array.length === 0) throw new Error("index outbound exception"); else return array.slice(1) }
const isEmpty = (array) => { if (array.length === 0) return true; else return false; }

/**
 * solution contest
 */
async function buildChessBoardLine(columns, flagLine) {

  function loop(nColumns, flag, strAcct) {
    if (nColumns === 0) return strAcct;
    else {
      if(flag) return loop(nColumns-1, false, strAcct+'*');
      else return loop(nColumns-1, true, strAcct+'.');
    }
  }

  if(flagLine) return await loop(columns, true, '');
  else return await loop(columns, false, '');
}

async function buildChessBoardTable(rows, columns){

  async function loop(nRows, flagLine, arrayAcct){
    if(nRows === 0) return arrayAcct;
    else{
      if(flagLine) return loop(nRows-1, false, [...arrayAcct, await buildChessBoardLine(columns, flagLine)]);
      else return loop(nRows-1, true, [...arrayAcct, await buildChessBoardLine(columns, flagLine)]);
    }
  }

  return await loop(rows, true, Array());
}

async function entryPoint(dataIn){

  async function loop(arrayDataIn){
    if(!isEmpty(arrayDataIn)){
      const testCase = head(arrayDataIn).split(' ');
      const arrayResult = await buildChessBoardTable(Number(testCase[0]), Number(testCase[1]));
      arrayResult.forEach(element => console.log(element));
      console.log();
      return loop(tail(arrayDataIn));
    }
  }

  dataIn.shift();
  await loop(dataIn);
}

/**
 * local test
 */
async function main(){
  const dataIn = Array('3','3 1','4 4','2 5');
  await entryPoint(dataIn);
}
main();


