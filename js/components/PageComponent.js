import series from "../series.js";
import Component from "./Component.js";
import SerieComponent from "./SerieComponent.js";

class PageComponent extends Component {
  constructor(parentElement, className) {
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
    const list = document.querySelector(".series-list");
    const listwatched = document.querySelector(".series-list--watched");

    series.forEach((serie) => {
      if (serie.watched) {
        const serieCard = new SerieComponent(listwatched, "serie", "li", serie);
      } else {
        const serieCard = new SerieComponent(list, "serie", "li", serie);
      }
    });
  }
}

export default PageComponent;
