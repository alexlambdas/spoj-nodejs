const cpttrn7 = require('../main/index');

describe('CPTTRN7 contest', () => {
    
    let numberOfTest = 0;

    //
    test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
        expect(await cpttrn7.getDiamondCharacter(true,true,true)).toBe('/');
    })

    //
    test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
        expect(await cpttrn7.getDiamondCharacter(true,true,false)).toBe('\\');
    })

    //
    test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
        expect(await cpttrn7.getDiamondCharacter(true,false,true)).toBe('/');
    })

    //
    test(`test #${++numberOfTest} :: function getDiamondCharacter :: normal case`, async () => {
        expect(await cpttrn7.getDiamondCharacter(true,false,false)).toBe('\\');
    })

    //
    test(`test #${++numberOfTest} :: function getDiamondCharacter :: corner case`, async () => {
        expect(await cpttrn7.getDiamondCharacter(false)).toBe('.');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(4,0,true)).toBe('./\\.');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(4,1,true)).toBe('/..\\');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(2,0,true)).toBe('/\\');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(6,0,true)).toBe('../\\..');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(6,1,true)).toBe('./..\\.');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(6,2,true)).toBe('/....\\');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(2,1,false)).toBe('\\/');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(4,2,false)).toBe('\\../');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(4,3,false)).toBe('.\\/.');
    })

    //
    test(`test #${++numberOfTest} :: function buildDiamondLine :: normal case`, async () => {
        expect(await cpttrn7.buildDiamondLine(6,4,false)).toBe('.\\../.');
    })
})