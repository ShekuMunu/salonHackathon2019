const fs = require("fs")

// Takes in a file and returns the 10th line of that file, if not found 
// 'such a line is not found' is return in the place of undefined
function readFile(file){
    var data = fs.readFileSync(file).toString().split('\n')
    return data[0] || 'Such a line is not found'
}

console.log(readFile('./helloworld.txt'))