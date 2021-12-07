const fruit: string[] = ["Banana", "Apple", "Orange", "Mango"];
const newFruit:string [] = [];
newFruit = fruit.map(fruit => `Fruit: ${fruit}`)
console.log(newFruit);
fruit.unshift("kiwi");
console.log(fruit);
type Person = {name:string, age: number, location: string}
const person: Person = {
    name : "Hasib",
    age: 26,
    location: "Dhaka, Bangladesh",
}
const personKeys: string[] = Object.keys(person);
console.log(personKeys);

const newPerson: Person = {};
personKeys.forEach((element)=>{
    newPerson[element]= person[element];
})
console.log(newPerson);


