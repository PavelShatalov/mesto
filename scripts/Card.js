import { openCardPopup } from './index.js';

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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
    evt.target.closest('.card').remove();
  }

  _handleImageClick() {
    openCardPopup(this._name, this._link);
  }

  _setEventListeners() {
    this._element.querySelector('.card__button-like').addEventListener('click', this._handleLikeButtonClick.bind(this));
    this._element.querySelector('.card__button-trash').addEventListener('click', this._handleDeleteButtonClick.bind(this));
    this._element.querySelector('.card__img').addEventListener('click', this._handleImageClick.bind(this));
  }
}

