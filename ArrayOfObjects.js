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

const singleCars = cars.find((car)=>{
    return car.name === "Ford";
});
console.log("Single Car", singleCars);

