import Component from "./Component.js";

class RatingComponent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "ul");
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<li class="score__star">
                    <i class="icon-score far fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon-score far fa-star" title="5/5"></i>
                  </li>`;
  }
}
