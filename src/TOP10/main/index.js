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
const isEmpty = (array) => { if (array.length === 0) return array.length === 0; }

/**
 * solution contest
 */
function masterChef(numberRanked){
    if(numberRanked <= 0) return 'NO';
    else if(numberRanked >= 0 && numberRanked <= 10) return 'YES';
    else return 'NO';
}

function start(arrayDataIn){

    function loop(arrayData, arrayAcct){
        if(isEmpty(arrayData)) return arrayAcct;
        else return loop(tail(arrayData), [...arrayAcct, masterChef(Number(head(arrayData)))]);
    }

    arrayDataIn.shift();
    return loop(arrayDataIn, Array());
}

function entryPoint(arrayDataIn){

    const arrayResult = start(arrayDataIn);
    arrayResult.forEach(element => console.log(element));
}

entryPoint(Array('4','15','16','1','50','60','3','4','9'));

/**
 * export for testing
 */
module.exports = { masterChef, start }