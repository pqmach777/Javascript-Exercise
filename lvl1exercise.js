function lvl1exercise1() {
    // Declare a variable without instantiating it and return it!
    var apples;
    console.log(apples);
    return apples;
}
lvl1exercise1()

function lvl1exercise2() {
	// Declare and instantiate a number and return it
    var numbers = 1;
    console.log(numbers)
    return numbers;
}
lvl1exercise2() 

function lvl1exercise3() {
    // Declare and instantiate a floating point number that isn't a whole number and return it
    var float = 5.32;
    console.log(float);
    return float;
}
lvl1exercise3() 

function lvl1exercise4() {
	// Declare and instantiate a string "Hello World!" and return it
    var string = 'Hello World!';
    console.log(string)
    return string;
}
lvl1exercise4() 
function lvl1exercise5() {
	// Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
    var stringNumber = ["Hello World!", 4]
    console.log(stringNumber);
    return stringNumber;
}
lvl1exercise5()
function lvl1exercise6() {
	// Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
    var stringNumber = {string: "Hello World!", number: 4}
    console.log(stringNumber);
    var keys =['string','number'];
    for (var i=0; i<keys.length; i++){
        var keyName = keys[i];
    console.log(stringNumber[keyName]);
    }
}
lvl1exercise6()
function lvl1exercise7() {
	// Declare and instantiate a boolean value 'false' and return it
    var string = false;
    console.log(string)
}
lvl1exercise7()
