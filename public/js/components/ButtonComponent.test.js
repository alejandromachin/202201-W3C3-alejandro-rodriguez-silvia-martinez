import ButtonComponent from "./ButtonComponent";

describe("Given a ButtonComponent", () => {
  describe("When instantiated", () => {
    test("Then is should not be null ", () => {
      const parentElement = document.createElement("container");

      new ButtonComponent(parentElement);

      expect(parentElement.querySelector("i")).not.toBeNull();
    });
  });
});
