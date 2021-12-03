let fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.push("Kiwi");
console.log(fruit);
fruit.unshift("Lemon");
console.log(fruit);
fruit.pop();
console.log(fruit);
let fruit1 = fruit.slice(1, 3);
console.log(fruit1);
let newFruit = fruit.splice(1, 3);
console.log(newFruit);
console.log(fruit);


