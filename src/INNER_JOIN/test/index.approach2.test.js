const innerjoin = require('../main/index.approach2');

describe('INNER_JOIN contest', () => {

  let numberOfTests = 0;

  //
  test(`test #${numberOfTests} :: function indexObject :: normal case`, () => {

    const carMake = [
      {"carMakeId":1,"carMake":"Toyota"},
      {"carMakeId":2,"carMake":"Acura"},
      {"carMakeId":3,"carMake":"Lexus"},
      {"carMakeId":4,"carMake":"GMC"},
      {"carMakeId":5,"carMake":"Mitsubishi"}
    ];

    const result = {
      "1": {"carMakeId":1,"carMake":"Toyota"},
      "2": {"carMakeId":2,"carMake":"Acura"},
      "3": {"carMakeId":3,"carMake":"Lexus"},
      "4": {"carMakeId":4,"carMake":"GMC"},
      "5": {"carMakeId":5,"carMake":"Mitsubishi"}
    };

    expect(innerjoin.indexingArrayToObject(carMake,"carMakeId")).toEqual(result);
  })

  //
  test(`test #${++numberOfTests} :: function innerJoin :: normal case`, () => {

    const carMake = [
      {"carMakeId":1,"carMake":"Toyota"},
      {"carMakeId":2,"carMake":"Acura"},
      {"carMakeId":3,"carMake":"Lexus"},
      {"carMakeId":4,"carMake":"GMC"},
      {"carMakeId":5,"carMake":"Mitsubishi"}
    ];
  
    const person = [
      {"id":1,"firstName":"Hilary","lastName":"Mannie","carMakeId":1},
      {"id":2,"firstName":"Cash","lastName":"Lantaff","carMakeId":2},
      {"id":3,"firstName":"Willi","lastName":"Huntingdon","carMakeId":3},
      {"id":4,"firstName":"Marten","lastName":"Jobke","carMakeId":4},
      {"id":5,"firstName":"Henry","lastName":"Davitashvili","carMakeId":5},
      {"id":6,"firstName":"Jocelyn","lastName":"Ceschini","carMakeId":6},
      {"id":7,"firstName":"Ailee","lastName":"Calderon","carMakeId":7},
      {"id":8,"firstName":"Wenona","lastName":"Fenty","carMakeId":8},
      {"id":9,"firstName":"Lura","lastName":"Crop","carMakeId":9},
      {"id":10,"firstName":"Antonie","lastName":"Vallender","carMakeId":10}
    ];

    const result = [
      {"id":1,"firstName":"Hilary","lastName":"Mannie","carMakeId":1,"carMake":"Toyota"},
      {"id":2,"firstName":"Cash","lastName":"Lantaff","carMakeId":2,"carMake":"Acura"},
      {"id":3,"firstName":"Willi","lastName":"Huntingdon","carMakeId":3,"carMake":"Lexus"},
      {"id":4,"firstName":"Marten","lastName":"Jobke","carMakeId":4,"carMake":"GMC"},
      {"id":5,"firstName":"Henry","lastName":"Davitashvili","carMakeId":5,"carMake":"Mitsubishi"}
    ];

    const keyToIndexing = "carMakeId";

    expect(innerjoin.innerJoin(person,carMake,keyToIndexing)(innerjoin.indexingArrayToObject)).toEqual(result);
  })
})