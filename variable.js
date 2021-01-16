
var bookPrice = 120;
var myPhonePrice = 10000;

console.log(bookPrice);
console.log(typeof bookPrice);
console.log(myPhonePrice);

// String variable
var fatherName = "Md. Hannan Khalifa";
var motherName = "Selina Begom";

console.log(fatherName);
console.log(typeof fatherName);
console.log(motherName);

//Boolean variable.
var isCold = true;
var isHappyCodding = true;

console.log(isCold);
console.log(typeof isCold);
console.log(isHappyCodding);

//explore string case change index split
var promise = "I promise I will work hard to become a good programmer";
console.log(promise.split("I"));
console.log(promise.indexOf("good"));
console.log(promise.toUpperCase());

//integer float parseInt parseFloat type conversion

var number1 = 25;
var number2 = "20.5";
number2 = parseFloat(number2);
console.log(number1 + number2);

//adding float number will get some problem

var number3 = 0.1;
var number4 = 0.2;
var total = number3 + number4;
 total = total.toFixed(4);
 console.log(total);
