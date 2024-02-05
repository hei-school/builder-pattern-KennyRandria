import Director from "./director.js";
import CarBuilder from "./carbuilder.js";
import { Car } from "./car.js";
import { SuvEngine, SportEngine } from "./engine.js";

describe("Director", () => {
  it("should be defined", () => {
    expect(Director).toBeDefined();
  });

  it("should create an SUV with correct properties", () => {
    const carBuilder = new CarBuilder();
    const director = new Director(carBuilder);

    director.makeSUV();

    const car = carBuilder.getResult();

    expect(car.seats).toBe(4);
    expect(car.engine).toBeInstanceOf(SuvEngine);
    expect(car.tripComputer).toBe(true);
    expect(car.gps).toBe(true);
  });

  it("should create a sports car with correct properties", () => {
    const carBuilder = new CarBuilder();
    const director = new Director(carBuilder);

    director.makeSportsCar();

    const car = carBuilder.getResult();

    expect(car.seats).toBe(2);
    expect(car.engine).toBeInstanceOf(SportEngine);
    expect(car.tripComputer).toBe(true);
    expect(car.gps).toBe(undefined); // Sports car doesn't have GPS
  });
});
