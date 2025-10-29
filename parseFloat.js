// as like as parseInt()
// when a number add with a string it concate 
// solution is to convert the string by using parseInt() or parseFloat()
// parseFloat() for float and parseInt() for integer

// 1. output: 1010.5 (for addition)
let a = 10;
let b = '10.5';
let r = a + b;
console.log(r);

// 2. output: 20.5
let a1 = 10;
let b1 = parseFloat('10.5');
let r1 = a1 + b1;
console.log(r1);

// 3. output: 105 (for multiplication and other string(if consist of number) without parseInt() or parseFloat() it works)
let a3 = 10;
let b3 = '10.5';
let r3 = a3 * b3;
console.log(r3);