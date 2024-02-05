import CarBuilder from "./carbuilder.js";
import { Car } from "./car.js"; // Importing individual classes for clarity

describe("CarBuilder", () => {
  it("should be defined", () => {
    expect(CarBuilder).toBeDefined();
  });

  it("should create a new Car instance when reset", () => {
    const carBuilder = new CarBuilder();
    expect(carBuilder.car).toBeInstanceOf(Car);
  });

  it("should set properties of the Car instance", () => {
    const carBuilder = new CarBuilder();
    const seats = 5;
    const engine = { /* mock engine object */ };

    carBuilder.setSeats(seats);
    carBuilder.setEngine(engine);

    const car = carBuilder.getResult();

    expect(car.seats).toBe(seats);
    expect(car.engine).toBe(engine);
  });

  it("should return a new Car instance when getResult is called multiple times", () => {
    const carBuilder = new CarBuilder();

    const car1 = carBuilder.getResult();
    const car2 = carBuilder.getResult();

    expect(car1).not.toBe(car2);
  });
});
