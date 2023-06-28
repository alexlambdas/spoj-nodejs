process.stdin.resume();
process.stdin.setEncoding('utf8');

/**
 * input
 */
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));

/**
 * helper funtions
 */
const head = (array) => { if (array.length === 0) return array; else return array[0]; }
const tail = (array) => { if (array.length === 0) throw new Error("index outbound exception"); else return array.slice(1) }
const isEmpty = (array) => { if (array.length === 0) return array.length === 0; }

/**
 * solution contest
 */
async function getDiamondCharacter(boolean_default, boolean_up = true, boolean_slash = true){

  switch(true){

    case boolean_default && boolean_up && boolean_slash:
      return '/';

    case boolean_default && boolean_up && !boolean_slash:
      return '\\';

    case boolean_default && !boolean_up && !boolean_slash:
      return '\\';

    case boolean_default && !boolean_up && boolean_slash:
      return '/';

    default:
      return '.';
  }
}

async function buildDiamondLine(number_size, number_line, boolean_up) {

  async function loop(size, columnFlag, strAcct) {

    switch(true){

      case size === 0:
        return strAcct;

      case HALF_DIAMOND - (number_line + 1) === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + await getDiamondCharacter(true,boolean_up,true));

      case HALF_DIAMOND + number_line === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + await getDiamondCharacter(true,boolean_up,false));

      case number_line - HALF_DIAMOND === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + await getDiamondCharacter(true,boolean_up,false));

      case MAX_INDEX - (number_line - HALF_DIAMOND) === columnFlag:
        return loop(size-1, columnFlag+1, strAcct + await getDiamondCharacter(true,boolean_up,true));

      default:
        return loop(size-1, columnFlag+1, strAcct + await getDiamondCharacter(false));

    }
  }

  const MAX_INDEX = number_size - 1;
  const HALF_DIAMOND = number_size / 2;
  return loop(number_size, 0, '');  
}

entryPoint(Array('1'));

/**
 * export for testing
 */
module.exports = { getDiamondCharacter, buildDiamondLine }