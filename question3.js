
// takes in a dictionary and spit our a sorted one by keys
function getSortedDictionary(keysValues){
    
    //get the keys and sort them
    var sortedKeys = (Object.keys(keysValues).sort())

    // rebuilding the dictionary based on the sorted keys
    sortedKeyValues = {}
    for(var i=0; i<sortedKeys.length; i++){
        sortedKeyValues[sortedKeys[i]] = keysValues[sortedKeys[i]]
    }
    return JSON.stringify(sortedKeyValues)
}

console.log(getSortedDictionary({"key": "value", "ab": "hi there", "we": "say what"}))

