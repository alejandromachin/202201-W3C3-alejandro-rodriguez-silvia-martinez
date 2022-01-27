import RatingComponent from "./RatingComponent.js";

describe("Given a RatingComponent component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a div", () => {
      const parentElement = document.createElement("container");

      new RatingComponent(parentElement, "class");

      expect(parentElement.querySelector(".class")).not.toBeNull();
    });
  });
});
