import Component from "./Component";

class Button extends Component {
  element;
  constructor(parentElement, className, actionOnClick) {
    super(parentElement, className, "i");
  }

  addListeners(actionOnclick) {
    this.element.addEventListener("click", actionOnClick);
  }
}

export default Button;
