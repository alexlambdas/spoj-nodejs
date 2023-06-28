process.stdin.resume();
process.stdin.setEncoding('utf8');

// input
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

// helper functions
const head = (array) => {if(array.length === 0) return array; else return array[0];}
const tail = (array) => {if(array.length === 0) throw new Error("index outbound exception"); else return array.slice(1)}
const isEmpty = (array) => {if(array.length === 0) return array.length === 0;}


/**
 * solution contest
 */
async function halfHalf(strSequence) {

  function loop(arrayData, flag, strAcct){
    if (isEmpty(arrayData)) return strAcct;
    else {
      if (flag) return loop(tail(arrayData), false, strAcct + head(arrayData));
      else return loop(tail(arrayData), true, strAcct);
    }
  }

  const arraySequence = strSequence.split('');
  const arrayHalf = arraySequence.slice(0, arraySequence.length/2);
  return loop(arrayHalf, true, '');
}

async function start(dataIn){

  async function loop(arrayIn, arrayAcct){
    if(isEmpty(arrayIn)) return arrayAcct;
    else return loop(tail(arrayIn), [...arrayAcct, await halfHalf(head(arrayIn))]);
  }

  dataIn.shift();
  return loop(dataIn, Array());
}

async function entryPoint(dataIn){

  const arrayResult = await start(dataIn);
  arrayResult.forEach(element => console.log(element));
}

/**
 * export for testing
 */
module.exports = { halfHalf, start }
