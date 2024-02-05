import Engine from "./engine.js";
import SuvEngine from "./engine.js";
import SportEngine from "./engine.js";

describe("Engine", () => {
  it("should be defined", () => {
    expect(Engine).toBeDefined();
  });

  it("should be a constructor", () => {
    expect(new Engine()).toBeInstanceOf(Engine);
  });
});

describe("SuvEngine", () => {
  it("should extend Engine", () => {
    expect(new SuvEngine()).toBeInstanceOf(Engine);
  });

});

describe("SportEngine", () => {
  it("should extend Engine", () => {
    expect(new SportEngine()).toBeInstanceOf(Engine);
  });
});
