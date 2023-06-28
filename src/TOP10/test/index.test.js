const top10 = require('../main/index');

describe('TOP10 contest', () => {
    
    let numberOfTest = 0;

    //
    test(`test # ${++numberOfTest} :: function masterChef :: normal case`, () => {
        expect(top10.masterChef(15)).toEqual('NO');
    })

    //
    test(`test # ${++numberOfTest} :: function masterChef :: normal case`, () => {
        expect(top10.masterChef(10)).toEqual('YES');
    })

    //
    test(`test # ${++numberOfTest} :: function masterChef :: normal case`, () => {
        expect(top10.masterChef(8)).toEqual('YES');
    })

    //
    test(`test # ${++numberOfTest} :: function masterChef :: corner case`, () => {
        expect(top10.masterChef(0)).toEqual('NO');
    })

    //
    test(`test # ${++numberOfTest} :: function masterChef :: corner case`, () => {
        expect(top10.masterChef(-5)).toEqual('NO');
    })

    //
    test(`test # ${++numberOfTest} :: funciton start :: normal case`, () => {
        
        const dataIn = Array('4','15','10','1','50');
        const arrayResult = Array('NO','YES','YES','NO');

        expect(top10.start(dataIn)).toEqual(arrayResult);
    })

    //
    test(`test # ${++numberOfTest} :: funciton start :: normal case`, () => {
        
        const dataIn = Array('5','15','-10','-1','-50','0');
        const arrayResult = Array('NO','NO','NO','NO','NO');
        
        expect(top10.start(dataIn)).toEqual(arrayResult);
    })
})