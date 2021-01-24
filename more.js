function add(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    return sum;
}
// let result = add(10, 5, 12);
// console.log(result);

function add2(numbers) {
    let sum = numbers[0] + numbers[1] + numbers[2];
    return sum;
}
function add3(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let sum = sum + number[i];

    }
    return sum;
}
let result = add3([5, 8, 6]);
console.log(result);