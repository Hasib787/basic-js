// Array practice
var friendsAge = [25, 14, 18, 27, 30];
var HasanAge = friendsAge[2];
friendsAge[1] = 8;
console.log(friendsAge);

var position = friendsAge.indexOf(18);
console.log(position);
console.log(HasanAge);
console.log(friendsAge);

friendsAge.push(40);
friendsAge.push(22);
console.log(friendsAge);
friendsAge.pop();
console.log(friendsAge);
friendsAge.shift();
console.log(friendsAge);
friendsAge.unshift(787);
console.log(friendsAge);


//slice and splice

var bankLine = ['Hasib', 'Moni', 'Sweety', 'Swarna', 'Surovi'];
var part = bankLine.slice(1, 3);
console.log(part);
console.log(bankLine);
var anotherPart = bankLine.splice(2, 3);
console.log(anotherPart);
console.log(bankLine);
//



