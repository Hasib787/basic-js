function learnWeb() {
    console.log("First open your computer");
    console.log("Then open VS code...Start Programming");
}
learnWeb();

//Function with parameter

function doubleIt(num) {
    var result = num * 2;
    return result;
}
var first=doubleIt(10);
var second=doubleIt(50);
var total=first+second;
console.log(total);

//function with multiple parameters

function addNumber(num1, num2){
    var result=num1+num2;
    return result;
}
var sum = addNumber(5,20);
console.log(sum);