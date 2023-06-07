import {openCardPopup} from './index.js';
export default class Card {
  constructor(data, templateSelector) { //templateSelector = "cardTemplate"
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
    this._element.querySelector('.card__title').textContent =this._name;
    this._element.querySelector('.card__img').setAttribute('alt', this._name);
    this._element.querySelector('.card__img').setAttribute('src', this._link);
    // Обработчик клика на кнопке лайка

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__button-like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__button-like_active');
    });
    // Обработчик клика на кнопке удаления карточки
    this._element.querySelector('.card__button-trash').addEventListener('click', function (evt) {
      evt.target.closest('.card').remove();
    });
    // Обработчик клика на картинку карточки
    const name = this._name;
    const link = this._link;
    this._element.querySelector('.card__img').addEventListener('click', function (evt) {
    openCardPopup(name, link);
    });
  }

}

