process.stdin.resume();
process.stdin.setEncoding('utf8');

// input
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => main(input.toString().split('\n')));

// helper functions
const head = (array) => {if(array.length === 0) return array; else return array[0];}
const tail = (array) => {if(array.length === 0) throw new Error("index outbound exception"); else return array.slice(1)}
const isEmpty = (array) => {if(array.length === 0) return array.length === 0;}


/**
 * @description
 */
async function halfHalf(strSequence) {

  /**
   * @tailrec
   */
  function loop(arraySequence, flag, strAcct){
    if (isEmpty(arraySequence)) return strAcct;
    else {
      if (flag) return loop(tail(arraySequence), false, strAcct + head(arraySequence));
      else return loop(tail(arraySequence), true, strAcct);
    }
  }

  const arraySequence = strSequence.split('');
  const arrayHalf = arraySequence.slice(0, arraySequence.length/2);
  return loop(arrayHalf, true, '');
}

/**
 * @description
 */
async function entryPoint(dataIn){

  /**
   * @tailrec
   */
  async function loop(arrayIn, arrayAcct){
    if(isEmpty(arrayIn)) return arrayAcct;
    else return loop(tail(arrayIn), [...arrayAcct, await halfHalf(head(arrayIn))]);
  }

  dataIn.shift();
  return await loop(dataIn, Array());
}

/**
 * @description
 */
async function main(dataIn){
  const arrayResult = await entryPoint(dataIn);
  arrayResult.forEach(element => console.log(element));
}
