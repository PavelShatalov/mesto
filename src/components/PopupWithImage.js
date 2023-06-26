import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector('.popup__img');
    this._captionElement = this._popup.querySelector('.popup__description');
  }

  open(caption, imageUrl) {

    this._imageElement.src = imageUrl; //    this._imageElement.setAttribute('src', imageUrl)
    this._imageElement.alt = caption;  //    this._imageElement.setAttribute('alt', caption);
    this._captionElement.textContent = caption;
    super.open();
  }
}



// export function openCardPopup(name, link) {
//   popupImg.querySelector('.popup__description').textContent = name;
//   img.setAttribute('alt', name);
//   img.setAttribute('src', link)
//   openPopup(popupImg)
// }
