import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;
    this._submitButton = this._formElement.querySelector('.popup__submit-send')
  }

  _getInputValues() {
    const inputs = Array.from(this._formElement.querySelectorAll('.popup__input'));
    const values = {};
    inputs.forEach(input => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues()); // обрабатывает что будет когда нажата кнопка
    });
  }

  close() {
    super.close();
    // this._submitButton.setAttribute('disabled', true);
    this._formElement.reset();
  }

  actionMessage(message){
    this._submitButton.textContent = message
  }
}
