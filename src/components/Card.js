export class Card {
  constructor(data, cardTemplateSelector) {
    this._cardTemplate = document.querySelector(cardTemplateSelector)
      .content.querySelector('.card');
    this._name = data.full_name;
    this._link = data.html_url;
    this._description = data.description;
  }

  createCard() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    const cardTitle = this._cardElement.querySelector('.card-title');
    const cardLink = this._cardElement.querySelector('.card-link');
    const cardName = this._cardElement.querySelector('.card-name');
    const cardText = this._cardElement.querySelector('.card-text');

    cardTitle.textContent = this._link;
    cardLink.href = this._link;
    cardName.textContent = this._name;
    cardText.textContent = this._description;
    return this._cardElement;
  };
}
