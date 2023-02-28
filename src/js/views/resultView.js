import View from "./View";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = `No recipe found for your query! Please try again`;
  _message = "";

  

  _generateMarkup() {
    return this._data.map(this._generateMarkuPreview).join("");
  }

  _generateMarkuPreview(result) {
    return `
    <li class="preview">
      <a class="preview__link preview__link--active" href="#${result.id}">
        <figure class="preview__fig">
          <img src="${result.image}" alt="${result.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${result.title}</h4>
          <p class="preview__publisher">${result.publisher}</p>
        </div>
      </a>
    </li>
    `;
  }
}

export default new ResultsView();
