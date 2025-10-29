// number: output 60
let applePrice = 20;
let orrangePrice = 40;
let price = applePrice + orrangePrice;
console.log(price);

//string: output 2040
let applePrice1 = '20';
let orrangePrice1 = '40';
let price1 = applePrice1 + orrangePrice1;
console.log(price1);

// number and string addition: output 2040
let applePrice2 = '20';
let orrangePrice2 = 40;
let price2 = applePrice2 + orrangePrice2;
console.log(price2);

// number and string addition: output 2040
let applePrice3 = 20;
let orrangePrice3 = '40';
let price3 = applePrice3 + orrangePrice3;
console.log(price3);

// solution of number and string addition by convert string in int by parseInt: output 60
let applePrice4 = parseInt('20');
let orrangePrice4 = 40;
let price4 = applePrice4 + orrangePrice4;
console.log(price4);

// Output: NaN (Not a Number, if the string does not consist of numeric characters, parseInt() will return NaN)
let applePrice5 = 20;
let amla = parseInt('amla');
let price5 = applePrice5 + amla;
console.log(price5);

// Adding a number and a non-numeric string result: string concatenation. Example: 20 + 'amla' = '20amla'
let applePrice6 = 20;
let amlaa = 'amla';
let price6 = applePrice6 + amlaa;
console.log(price6);