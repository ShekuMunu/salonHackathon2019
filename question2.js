
// Get an array of numbers and gives back and array of odd numbers
function getAllOdds(numbers){
    return numbers.filter(number => number%2 === 1)
}

console.log(getAllOdds([1, 2, 3, 13, 4, 5, 8, 7]))