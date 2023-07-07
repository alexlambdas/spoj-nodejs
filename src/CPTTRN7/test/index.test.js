const cpttrn7 = require('../main/index');

describe('CPTTRN7 contest', () => {

  let numberOfTest = 0;

  //
  test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
    expect(await cpttrn7.getDiamondCharacter(true, true, true)).toBe('/');
  })

  //
  test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
    expect(await cpttrn7.getDiamondCharacter(true, true, false)).toBe('\\');
  })

  //
  test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
    expect(await cpttrn7.getDiamondCharacter(true, false, true)).toBe('/');
  })

  //
  test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
    expect(await cpttrn7.getDiamondCharacter(true, false, false)).toBe('\\');
  })

  //
  test(`test #${++numberOfTest} :: function getDiamondCharacter :: corner case`, async () => {
    expect(await cpttrn7.getDiamondCharacter(false)).toBe('.');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(4, 0, true)).toBe('./\\.');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(4, 1, true)).toBe('/..\\');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(2, 0, true)).toBe('/\\');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(6, 0, true)).toBe('../\\..');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(6, 1, true)).toBe('./..\\.');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(6, 2, true)).toBe('/....\\');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(2, 1, false)).toBe('\\/');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(4, 2, false)).toBe('\\../');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(4, 3, false)).toBe('.\\/.');
  })

  //
  test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
    expect(await cpttrn7.buildDiamondLine(6, 4, false)).toBe('.\\../.');
  })

  //
  test(`test #${++numberOfTest} :: function buildOneDiamond :: normal case`, async () => {

    const result = [
      './\\.',
      '/..\\',
      '\\../',
      '.\\/.'
    ];

    expect(await cpttrn7.buildOneDiamond(2)).toEqual(result);
  })

  //
  test(`test #${++numberOfTest} :: function buildOneDiamond :: normal case`, async () => {

    const result = [
      '/\\',
      '\\/'
    ];

    expect(await cpttrn7.buildOneDiamond(1)).toEqual(result);
  })

  //
  test(`test #${++numberOfTest} :: function gridColumns :: normal case`, async () => {

    const result = [
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.'
    ];

    expect(await cpttrn7.gridColumns(3,2)).toEqual(result);
  })

  //
  test(`test #${++numberOfTest} :: function gridColumns :: normal case`, async () => {

    const result = [
      './\\../\\../\\../\\../\\.',
      '/..\\/..\\/..\\/..\\/..\\',
      '\\../\\../\\../\\../\\../',
      '.\\/..\\/..\\/..\\/..\\/.'
    ];

    expect(await cpttrn7.gridColumns(5,2)).toEqual(result);
  })

  //
  test(`test #${++numberOfTest} :: function addDiamondRows :: normal case`, async () => {

    const diamondFromGridColumns =  [
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/'
    ];

    const diamondAcct = [
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/'
    ];

    const result = [
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/'
    ];

    expect(await cpttrn7.addDiamondRows(diamondFromGridColumns,diamondAcct)).toEqual(result);

  })

  //
  test(`test #${++numberOfTest} :: function addDiamondRows :: normal case`, async () => {

    const diamondFromGridColumns =  [
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.',
    ];

    const diamondAcct = [
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.',
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.'
    ];

    const result = [
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.',
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.',
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.'
    ];

    expect(await cpttrn7.addDiamondRows(diamondFromGridColumns,diamondAcct)).toEqual(result);

  })

  //
  test(`test #${++numberOfTest} :: function gridRows :: normal case`, async () => {

    const rows = 4;
    const columns = 6;
    const size = 1;

    const result = [
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/',
      '/\\/\\/\\/\\/\\/\\',
      '\\/\\/\\/\\/\\/\\/'
    ];

    expect(await cpttrn7.gridRows(rows,columns,size)).toEqual(result);
  })

  //
  test(`test #${++numberOfTest} :: function gridRows :: normal case`, async () => {

    const rows = 3;
    const columns = 3;
    const size = 2;

    const result = [
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.',
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.',
      './\\../\\../\\.',
      '/..\\/..\\/..\\',
      '\\../\\../\\../',
      '.\\/..\\/..\\/.'
    ];

    expect(await cpttrn7.gridRows(rows,columns,size)).toEqual(result);
  })
})