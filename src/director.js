import CarBuilder from "./car-builder.js";

class Director {
  constructor(builder) {
    this.builder = builder;
  }

  makeSUV() {
    this.builder.reset();
    this.builder.setSeats(4);
    this.builder.setEngine(new SuvEngine());
    this.builder.setTripComputer();
    this.builder.setGPS();
  }

  makeSportsCar() {
    this.builder.reset();
    this.builder.setSeats(2);
    this.builder.setEngine(new SportEngine());
    this.builder.setTripComputer();
  }
}

export default Director;
