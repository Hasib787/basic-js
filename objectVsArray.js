let ami = {
    age: 25,
    weight: 60,
    height: 68,
    color: 'skyblue'
}
let lookingFor = 'age';
let myAge = ami[lookingFor];
ami.weight = 90;
console.log(ami);
