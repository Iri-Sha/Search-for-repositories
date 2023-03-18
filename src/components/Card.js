export class Card {
  constructor(data, cardTemplateSelector) {
    this._cardTemplate = document.querySelector(cardTemplateSelector)
      .content.querySelector('.card');
    console.log(data);
    this._name = data.name;
    this._link = data.link;
    this._description = data.description;
  }

  createCard() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    const cardTitle = this._cardElement.querySelector('.card-title');
    const cardName = this._cardElement.querySelector('.card-name');
    const cardDescription = this._cardElement.querySelector('.card-description');
    console.log(this._link, this._name, this._description);
    cardTitle.textContent = this._link;
    cardTitle.href = this._link;
    cardName.textContent = this._name;
    cardDescription.textContent = this._description;
    return this._cardElement;
  };
}
