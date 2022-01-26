import Component from "./Component.js";

class ButtonComponent extends Component {
  element;
  constructor(parentElement, className, actionOnClick) {
    super(parentElement, className, "i");
  }

  addListeners(actionOnclick) {
    this.element.addEventListener("click", actionOnClick);
  }
}

export default ButtonComponent;
