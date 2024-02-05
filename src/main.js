import Director from "./director.js";
import CarBuilder from "./car-builder.js";

const director = new Director(new CarBuilder());

director.makeSUV();

const car = director.builder.getResult();

console.log(car);

director.makeSportsCar();

const car2 = director.builder.getResult();

console.log(car2);
