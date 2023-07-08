/**
 * @description
 * 
 * @param dataIn 
 * type Array,
 * 
 * @param keyToIndexig 
 * type String,
 * 
 * @returns 
 * Object
 * 
 */
function indexingArrayToObject(dataIn = Array(), keyToIndexig) {

  function reduceObj(prev, current) {
    return Object.assign(prev, { [current[keyToIndexig]]: current });
  }

  return dataIn.reduce((prev, current) => reduceObj(prev, current), {});
}

/**
 * 
 * @description
 * 
 * @param primaryTable 
 * type Array,
 * 
 * @param foreignTable 
 * type Array,
 * 
 * @returns 
 * Array,
 * 
 */
function innerJoin(primaryTable, foreignTable, keyToIndex){
  return function(fnIndexingArrayToObject){

    const indexedObject = fnIndexingArrayToObject(foreignTable, keyToIndex);

    return primaryTable.reduce((prev, current) => {
      if(indexedObject[`${current[keyToIndex]}`] != undefined){
        return [
          ...prev,
          {
            ...current,
            ...indexedObject[`${current[keyToIndex]}`]
          }
        ];
      }
      else return [...prev];
    }, []);
  }
}

module.exports = {
  indexingArrayToObject,
  innerJoin
}