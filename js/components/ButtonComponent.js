import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, actionOnClick) {
    super(parentElement, className, "i");

    this.addListeners(actionOnClick);
  }

  addListeners(actionOnclick) {
    this.element.addEventListener("click", actionOnclick);
  }
}

export default ButtonComponent;
