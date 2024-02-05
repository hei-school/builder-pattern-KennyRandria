import Car from "./car.js";
import Engine from "./engine.js";

class CarBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.car = new Car();
  }

  setSeats(number) {
    this.car.seats = number;
  }

  setEngine(engine) {
    this.car.engine = engine;
  }

  setTripComputer() {
    this.car.tripComputer = true;
  }

  setGPS() {
    this.car.gps = true;
  }

  getResult() {
    return this.car;
  }
}

export default CarBuilder;
