import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {

  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__form');
    this._submitCallback = submitCallback;

  }

  setEventListeners() {
    super.setEventListeners();

    this._button.addEventListener('submit', (event)=>{
      event.preventDefault();
      this._submitCallback(this._card)
    });
  }

  setActionCard(card) {
    this._card = card;
  }
}
