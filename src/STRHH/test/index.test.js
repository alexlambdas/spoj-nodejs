const strhh = require('../main/index');

describe('STRHH contest', () => {

  let numberOfTest = 0;

  //
  test(`test #${++numberOfTest} :: function halfHalf :: normal case`, async () => {
    expect(await strhh.halfHalf('your')).toEqual('y');
  })

  //
  test(`test #${++numberOfTest} :: function halfHalf :: normal case`, async () => {
    expect(await strhh.halfHalf('progress')).toEqual('po');
  })

  //
  test(`test #${++numberOfTest} :: function halfHalf :: normal case`, async () => {
    expect(await strhh.halfHalf('is')).toEqual('i');
  })

  //
  test(`test #${++numberOfTest} :: function halfHalf :: normal case`, async () => {
    expect(await strhh.halfHalf('noticeable')).toEqual('ntc');
  })

  //
  test(`test #${++numberOfTest} :: function start :: normal case`, async () => {
    
    const dataIn = Array('4','your','progress','is','noticeable');
    const result = Array('y','po','i','ntc');
    
    expect(await strhh.start(dataIn)).toEqual(result);
  })
})