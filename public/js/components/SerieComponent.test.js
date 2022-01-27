import SerieComponent from "./SerieComponent.js";

describe("Given a SerieComponent", () => {
  describe("When instantiated", () => {
    test("Then is should not be null ", () => {
      const parentElement = document.createElement("container");
      const series = [];

      new SerieComponent(parentElement, "series", "div", series);

      expect(parentElement.querySelector(".series")).not.toBeNull();
    });
  });
});
