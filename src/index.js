import './style.css'
import { Card } from './components/Card.js';
import { api } from './components/Api.js';

const searchInput = document.querySelector(".form__input");
const errorMessage = document.querySelector(".search__error");
const noResultsMessage = document.querySelector(".elements-error");
const formCard = document.querySelector(".form_search");
const resultList = document.querySelector(".elements__result");

function renderCards(data) {
  const card = new Card(data,'#card-template');
  return card.createCard();
};

function searchRepos (query) {
  api.searchRepos(query)
    .then((res) => {
      const resultCards = res.items.slice(0, 10);
      if (res.total_count === 0) {
        removeLastResults(resultList);
        noResultsMessage.style.display = "block";
      } else {
        removeLastResults(resultList);
        resultCards.map((item) => {
          const cardItem = {
            name: item.name,
            link: item.html_url,
            description: item.description
          };
          resultList.prepend(renderCards(cardItem));
        })
      }
    })
    .catch((err) => {
      console.log(err);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  if  (!searchInput.validity.valid) {
    errorMessage.textContent = searchInput.validationMessage;
    errorMessage.style.display = "block";
  } else {
    searchRepos(searchInput.value);
    localStorage.setItem("searchValue", JSON.stringify(searchInput.value));
  }
}

function removeLastResults(items) {
  const lastResultsItems = items.querySelectorAll(".card");
  lastResultsItems.forEach((item) => {
    item.remove();
  });
}

formCard.addEventListener('submit', handleSubmit);

searchInput.addEventListener("input", (e) => {
  e.target;
  errorMessage.style.display = "none";
  noResultsMessage.style.display = "none";
});
