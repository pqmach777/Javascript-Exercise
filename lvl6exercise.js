
// function lvl6exercise1(num) {
//     // Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
//     if (num = 1) {
//         console.log('hello');
//     } 
//     else if (num = 2) {
//         console.log('world');
//     }
//     else {
//         console.log('bye');
//     }
	
// }
// lvl6exercise1()

// function lvl6exercise2() {
// 	// Push 10 "hello" strings into the array using a for loop, then return it
//     var array = [];
//     for (var count = 0; count < 10; count ++){
//         array.push("hello")
//     }
//     console.log(array)
// }
// lvl6exercise2()

function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    var count = 0;
    while (count < 10){
        count = count + 1;
        array.pop();
    }
    console.log(array)
}
lvl6exercise3()
