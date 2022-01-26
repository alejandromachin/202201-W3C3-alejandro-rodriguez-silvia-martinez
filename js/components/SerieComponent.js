import Component from "./Component.js";

class SerieComponent extends Component {
  serie;

  constructor(parentElement, className, htmlTag, serie) {
    super(parentElement, className, htmlTag);
    this.serie = serie;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
                <img
                  class="serie__poster"
                  src="${this.serie.poster}"
                  alt="${this.serie.name}poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator}(${this.serie.year})</p>
                <ul class="score">
               
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>`;
  }
}
export default SerieComponent;
