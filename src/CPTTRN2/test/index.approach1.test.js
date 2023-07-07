const cpttrn2 = require('../main/index.approach1');

describe('CPTTRN2 contest', () => {

  let numberOfTest = 0;

  //
  test(`test #${++numberOfTest} :: function moduleOfN :: normal case`, () => {
    
    const moduleOf2 = cpttrn2.moduleOfN(2);
    expect(moduleOf2(4)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function moduleOfN :: normal case`, () => {
    
    const moduleOf2 = cpttrn2.moduleOfN(2);
    expect(moduleOf2(3)).toBe(false);
  })

  //
  test(`test #${++numberOfTest} :: function topAndBottomPattern :: corner case`, () => {
    
    const indexRow = 0;
    const numberOfRows = 5;
    expect(cpttrn2.topAndBottomPattern(indexRow,numberOfRows)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function topAndBottomPattern :: normal case`, () => {
    
    const indexRow = 1;
    const numberOfRows = 5;
    expect(cpttrn2.topAndBottomPattern(indexRow,numberOfRows)).toBe(false);
  })

  //
  test(`test #${++numberOfTest} :: function topAndBottomPattern :: corner case`, () => {
    
    const indexRow = 4;
    const numberOfRows = 5;
    expect(cpttrn2.topAndBottomPattern(indexRow,numberOfRows)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function iterateOverOneRow :: corner case`, () => {
    
    const indexRow = 0;
    const rows = 4;
    const columns = 4;
    const result = '****';

    expect(cpttrn2.iterateOverOneRow(indexRow, rows, columns)).toBe(result);
    
  })

  //
  test(`test #${++numberOfTest} :: function iterateOverOneRow :: corner case`, () => {
    
    const indexRow = 3;
    const rows = 4;
    const columns = 4;
    const result = '****';

    expect(cpttrn2.iterateOverOneRow(indexRow, rows, columns)).toBe(result);
    
  })

  //
  test(`test #${++numberOfTest} :: function iterateOverOneRow :: normal case`, () => {
    
    const indexRow = 2;
    const rows = 5;
    const columns = 6;
    const result = '*....*';

    expect(cpttrn2.iterateOverOneRow(indexRow, rows, columns)).toBe(result);
    
  })

  //
  test(`test #${++numberOfTest} :: function iterateOverManyRows :: normal case`, () => {
    
    const rows = 5;
    const columns = 6;
    const result = [
      '******',
      '*....*',
      '*....*',
      '*....*',
      '******'
    ];

    expect(cpttrn2.iterateOverManyRows(rows, columns)(cpttrn2.iterateOverOneRow)).toEqual(result);
    
  })

  //
  test(`test #${++numberOfTest} :: function iterateOverManyRows :: corner case`, () => {
    
    const rows = 1;
    const columns = 1;
    const result = ['*'];

    expect(cpttrn2.iterateOverManyRows(rows, columns)(cpttrn2.iterateOverOneRow)).toEqual(result);
    
  })

  //
  test(`test #${++numberOfTest} :: function iterateOverManyRows :: corner case`, () => {
    
    const rows = 1;
    const columns = 7;
    const result = ['*******'];

    expect(cpttrn2.iterateOverManyRows(rows, columns)(cpttrn2.iterateOverOneRow)).toEqual(result);
    
  })

  //
  test(`test #${++numberOfTest} :: function iterateOverManyRows :: corner case`, () => {
    
    const rows = 5;
    const columns = 1;
    const result = ['*','*','*','*','*'];

    expect(cpttrn2.iterateOverManyRows(rows, columns)(cpttrn2.iterateOverOneRow)).toEqual(result);
    
  })
})