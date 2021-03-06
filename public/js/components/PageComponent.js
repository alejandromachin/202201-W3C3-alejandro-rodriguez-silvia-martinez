/* eslint-disable no-unused-vars */
import series from "../series.js";
import ButtonComponent from "./ButtonComponent.js";
import Component from "./Component.js";
import RatingComponent from "./RatingComponent.js";
import SerieComponent from "./SerieComponent.js";

class PageComponent extends Component {
  serieComponents = [];

  constructor(parentElement) {
    super(parentElement, "page");
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
      <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">

          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            
            <ul class="series-list">
            
            </ul>
          </section>

          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            
            <ul class="series-list series-list--watched">
             
             
            </ul>
          </section>
        </section>
      </main>
    `;

    this.renderSeries();

    this.renderButton();
  }

  renderSeries() {
    const list = document.querySelector(".series-list");
    const listwatched = document.querySelector(".series-list--watched");
    const serieList = document.querySelectorAll(".serie");
    list.innerHTML = "";
    listwatched.innerHTML = "";
    series.forEach((serie) => {
      if (serie.watched) {
        this.serieComponents.push(
          new SerieComponent(listwatched, "serie", "li", serie)
        );
      } else {
        this.serieComponents.push(
          new SerieComponent(list, "serie", "li", serie)
        );
      }
    });
    const scoreList = document.querySelectorAll(".score");
    scoreList.forEach((score) => {
      const rating = new RatingComponent(score, "score", () => {
        this.element.watched = true;
      });
    });
  }

  renderButton() {
    this.serieComponents.forEach((serieComponent) => {
      const button = new ButtonComponent(
        serieComponent.element,
        "fas fa-times-circle icon--delete",
        () => this.deleteSerie(serieComponent.serie.id)
      );
    });
  }

  deleteSerie(id) {
    const index = series.findIndex((serie) => {
      if (serie.id === id) {
        return true;
      }
      return false;
    });
    series.splice(index, 1);

    this.generateHTML();
  }
}
export default PageComponent;
