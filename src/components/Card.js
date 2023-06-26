export default class Card {
 constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__img').setAttribute('alt', this._name);
    this._element.querySelector('.card__img').setAttribute('src', this._link);

    return this._element;
  }

  _handleLikeButtonClick(evt) {
    evt.target.classList.toggle('card__button-like_active');
  }

  _handleDeleteButtonClick(evt) {
    this._element.remove();
    this._element = null;
  }

_handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }


  _setEventListeners() {
    this._element.querySelector('.card__button-like').addEventListener('click', this._handleLikeButtonClick.bind(this));
    this._element.querySelector('.card__button-trash').addEventListener('click', this._handleDeleteButtonClick.bind(this));
    this._element.querySelector('.card__img').addEventListener('click', this._handleImageClick.bind(this));
    this._element.querySelector('.card__img').addEventListener('click', this._handleImageClick.bind(this));

  }
}

