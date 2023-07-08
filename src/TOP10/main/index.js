process.stdin.resume();
process.stdin.setEncoding('utf8');

//
let input = '';
process.stdin.on('data', (chunk) => input += chunk);
process.stdin.on('end', () => entryPoint(input.toString().split('\n')));


function masterChef(ranked) {
  switch (true) {
    case ranked <= 0:
      return 'NO';

    case ranked >= 0 && ranked <= 10:
      return 'YES';

    default:
      return 'NO';
  }
}

function entryPoint(dataIn) {

  const testCases = dataIn.shift();
  for (let index = 0; index < testCases; index++) {
    console.log(masterChef(dataIn[Number(index)]));
  }
}

entryPoint(Array('4', '15', '10', '1', '50'));

/**
 * export for testing
 */
module.exports = { masterChef }