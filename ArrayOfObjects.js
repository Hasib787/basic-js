let cars = [
  {
    name: "Ford",
    models: "Mustang, F150, F250",
    color: "red",
    year: "1954",
    price: "19000",
  },
  {
    name: "Chevy",
    models: "Camaro, Corvette",
    color: "blue",
    year: "1954",
    price: "20000",
  },
  {
      name: "Dodge",
      models: "Charger, Ram",
      color: "green",
      year: "1995",
      price: "30000",
  },

  {
      name: "Ford",
      models: "Mustang, F150, F250",
      color: "darkBlue",
      year: "2000",
      price: "40000",
  },
  {
      name: "Chevy",
      models: "Camaro, Corvette",
      color: "White",
      year: "2021",
      price: "50000",
  },
];

const car = {
    name: "Toyota",
    models: "Corolla, Camry",
    color: "black",
    year: "2020",
    price: "60000",
}
cars.push(car);
// console.log(cars);

const newCars = cars.map(car=>{
    return name = car.name;
});
// console.log(newCars.toString().split(",").join("\n"));


const addCar = {
    name: "BMW",
    models: "X5, X6",
    color: "black",
    year: "2019",
    price: "70000",
}
// cars.unshift(addCar);
// console.log(cars);

const singleCars = cars.find((car)=>{
    return car.name === "Ford";
});
// console.log("Single Car", singleCars);

const addCar2 = {
    name: "Honda",
    models: "Civic, Accord",
    color: "red",
    year: "2012",
    price: "80000",
}
// cars.splice(4, 0, addCar2);
// console.log(cars);

const carName = Object.values(addCar2);
console.log(carName);