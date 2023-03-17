import './style.css'
import { Card } from './components/Card.js';
import { Section } from './components/Section.js';
import { api } from './components/Api.js';

const searchInput = document.querySelector(".form__input");
const errorMessage = document.querySelector(".search__error");
const noResultsMessage = document.querySelector(".search__no-results");
const formCard = document.querySelector(".form");

function renderCards(data) {
  console.log(data);
  const card = new Card(data,'#card-template');
  return card.createCard();
};

function searchRepos (query) {
  api.searchRepos(query)
    .then((res) => {
      console.log(res);
      if (res.total_count === 0) {
        noResultsMessage.style.display = "block";
      } else {
      const cards = new Section({
        items: res,
        renderer: (item) => {
          cards.addItem(renderCards(item))
        }},
        '.elements__cards'
      )}
    })
    .catch((err) => {
      console.log(err);
  });
  formElementCard.reset();
}

function handleSubmit(e){
  //e.preventDefault();
  if  (searchInput.validity.valid) {
    searchRepos(searchInput.value);
    localStorage.setItem("searchValue", JSON.stringify(searchInput.value));
  } else {
    errorMessage.textContent = searchInput.validationMessage;
    errorMessage.style.display = "block";
  }
}

formCard.addEventListener('submit', handleSubmit());
