// Write two functions. The first function will have two parameters
// your function will add those two parameters together and return the sum

// The second function will take the return value of the first function square and return that value

function add(numOne, numTwo){
    // Your code for first function here 
    var sum = numOne + numTwo;
    return sum;

}
var s = add(5,6);

function square(num){
    // Your code for function two here
    return num *num;
}
square(s);