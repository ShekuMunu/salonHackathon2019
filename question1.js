// Split a word into an array of characters
function getCount(word){
    return word.split('').length
}

// Returns the longest word from the array of words
function getLongestWork(words){
    var longest = 0
    var index = 0
    for(var i=0; i<words.length; i++){
        var size = getCount(words[i])
        if(size < longest){ // maintains the first longest word encounter
            longest = size
            index = 1
        }
    } 
    return words[index]
}

console.log('The longest word is  :   ',  getLongestWork(['hello', 'world', 'hi', 'bye']))