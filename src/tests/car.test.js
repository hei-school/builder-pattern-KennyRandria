import Car from "./car.js";

describe("Car", () => {
  it("should be defined", () => {
    expect(Car).toBeDefined();
  });

  it("should have a constructor", () => {
    expect(new Car()).toBeInstanceOf(Car);
  });

  it("should set properties correctly in the constructor", () => {
    const seats = 5;
    const engine = { /* mock engine object */ };
    const tripComputer = { /* mock trip computer object */ };
    const gps = { /* mock GPS object */ };

    const car = new Car(seats, engine, tripComputer, gps);

    expect(car.seats).toBe(seats);
    expect(car.engine).toBe(engine);
    expect(car.tripComputer).toBe(tripComputer);
    expect(car.gps).toBe(gps);
  });
});
