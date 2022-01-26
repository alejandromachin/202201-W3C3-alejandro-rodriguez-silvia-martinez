import Component from "./Component.js";

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
              <li class="serie">
                <img
                  class="serie__poster"
                  src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">The Sopranos</h4>
                <p class="serie__info">David Chase (1999)</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>
            
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
              <li class="serie">
                <img
                  class="serie__poster"
                  src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">The Sopranos</h4>
                <p class="serie__info">David Chase (1999)</p>
                <ul class="score">
                  <li class="score__star">
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
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              </li>
             
            </ul>
          </section>
        </section>
      </main>
    `;
  }
}

export default PageComponent;
