// 1 - Write a statement that console logs "Hello" if the two variables are equal
if (first === second){
    console.log("Hello");
}

var first = 3;
var second = 5;

// 2 - Expand your answer above to console log "Goodbye" if the variables are not equal
if (first === second){
    console.log("Hello");
} else {
    console.log("Goodbye");
}

/*
3 - Write a statement that assigns the value of the addition of the first & second variables
    to a new variable called third IF first is greater than second. If second is greater than
    first assign the difference of the first & second variables to third.
*/

if (first === second){
    console.log("Hello");
} else if (first > second){
    var third = first + second;
} else if (first < second){
    var third = second - first;
} else {
    console.log("Goodbye");
}