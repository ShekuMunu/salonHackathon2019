const fs = require("fs")

function readCSVfile(file){
    // reading the csv file and it content into an array of lines
    var rows = fs.readFileSync(file).toString().split('\n')
    var dictionaryMap = {}

    for(var i=0; i<rows.length; i++){ // grabe each line
        var row = rows[i].split(',')

        for(var j=0; j<row.length-1; j++){ // grade each items in the line

            //Is key already in the dictionaryMap?
            if(Object.keys(dictionaryMap).some(key => key == row[j])){
                dictionaryMap[row[j]] += parseInt(row[3])
            }else{
                dictionaryMap[row[j]] = parseInt(row[3])
            }
        }
    }
    return dictionaryMap
}



console.log(readCSVfile('./helloworld.txt'))