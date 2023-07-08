const cpttrn2 = require('../main/index.approach2');

describe('CPTTRN2 contest', () => {

  let numberOfTest = 0;

  //
  test(`test #${++numberOfTest} :: function moduleOfN :: normal case`, () => {

    const moduleOf5 = cpttrn2.moduleOfN(5);
    expect(moduleOf5(15)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function moduleOfN :: normal case`, () => {

    const moduleOf5 = cpttrn2.moduleOfN(5);
    expect(moduleOf5(14)).toBe(false);
  })

  //
  test(`test #${++numberOfTest} :: function isTopOrBottomOfSquare :: normal case`, () => {

    const indexRow = 2;
    const numberOfRows = 5;
    expect(cpttrn2.isTopOrBottomOfSquare(indexRow,numberOfRows)).toBe(false);
  })

  //
  test(`test #${++numberOfTest} :: function isTopOrBottomOfSquare :: corner case`, () => {

    const indexRow = 0;
    const numberOfRows = 5;
    expect(cpttrn2.isTopOrBottomOfSquare(indexRow,numberOfRows)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function isTopOrBottomOfSquare :: corner case`, () => {

    const indexRow = 4;
    const numberOfRows = 5;
    expect(cpttrn2.isTopOrBottomOfSquare(indexRow,numberOfRows)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function positionOnTheGrid :: normal case`, () => {

    const indexRow = 4;
    const indexColumn = 3;
    const rows = 6;
    const columns = 7;
    expect(cpttrn2.positionOnTheGrid(indexRow,indexColumn,rows,columns)).toBe(false);
  })

  //
  test(`test #${++numberOfTest} :: function positionOnTheGrid :: corner case`, () => {

    const indexRow = 5;
    const indexColumn = 3;
    const rows = 6;
    const columns = 7;
    expect(cpttrn2.positionOnTheGrid(indexRow,indexColumn,rows,columns)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function positionOnTheGrid :: corner case`, () => {

    const indexRow = 0;
    const indexColumn = 3;
    const rows = 6;
    const columns = 7;
    expect(cpttrn2.positionOnTheGrid(indexRow,indexColumn,rows,columns)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function positionOnTheGrid :: corner case`, () => {

    const indexRow = 5;
    const indexColumn = 0;
    const rows = 6;
    const columns = 7;
    expect(cpttrn2.positionOnTheGrid(indexRow,indexColumn,rows,columns)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function positionOnTheGrid :: corner case`, () => {

    const indexRow = 5;
    const indexColumn = 6;
    const rows = 6;
    const columns = 7;
    expect(cpttrn2.positionOnTheGrid(indexRow,indexColumn,rows,columns)).toBe(true);
  })

  //
  test(`test #${++numberOfTest} :: function buildLinePattern :: normal case`, () => {

    const indexRow = 4;
    const rows = 6;
    const columns = 7;
    const result = '*.....*';

    expect(cpttrn2.buildLinePattern(indexRow,rows,columns)(cpttrn2.positionOnTheGrid)).toBe(result);
  })

  //
  test(`test #${++numberOfTest} :: function buildLinePattern :: corner case`, () => {

    const indexRow = 5;
    const rows = 6;
    const columns = 7;
    const result = '*******';

    expect(cpttrn2.buildLinePattern(indexRow,rows,columns)(cpttrn2.positionOnTheGrid)).toBe(result);
  })

  //
  test(`test #${++numberOfTest} :: function buildLinePattern :: corner case`, () => {

    const indexRow = 0;
    const rows = 6;
    const columns = 7;
    const result = '*******';

    expect(cpttrn2.buildLinePattern(indexRow,rows,columns)(cpttrn2.positionOnTheGrid)).toBe(result);
  })

  //
  test(`test #${++numberOfTest} :: function buildGridPattern :: corner case`, () => {

    const rows = 6;
    const columns = 7;
    const result = [
      '*******',
      '*.....*',
      '*.....*',
      '*.....*',
      '*.....*',
      '*******'
    ]

    expect(cpttrn2.buildGridPattern(rows,columns)(cpttrn2.buildLinePattern)(cpttrn2.positionOnTheGrid)).toEqual(result);
  })
})