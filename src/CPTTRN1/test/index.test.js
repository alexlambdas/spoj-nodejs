const cpttrn1 = require('../main/index');

describe('CPTTRN1 contest', () => {

  let numberOfTest = 0;
  
  //
  test(`test #${++numberOfTest} :: function buildChessBoardLine :: normal case`, async () => {
    expect(await cpttrn1.buildChessBoardLine(2, true)).toEqual('*.');
  });

  //
  test(`test #${++numberOfTest} :: function start :: normal case`, async () => {

    const dataIn = Array('3','3 1','4 4','2 5');
    const result = [
      [ '*', '.', '*' ],
      [ '*.*.', '.*.*', '*.*.', '.*.*' ],
      [ '*.*.*', '.*.*.' ]
    ];

    expect(await cpttrn1.start(dataIn)).toEqual(result);
  });

})