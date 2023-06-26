import Card from './Card.js';
import FormValidator from './FormValidator.js';
// import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import '../pages/index.css';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// запуск валидации форм
const changeFromValidation = new FormValidator({
  inputSelector: '.popup__input',
  buttonElement: '.popup__submit-send',
  inactiveButtonClass: 'popup__submit-send_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, document.querySelector('#popupChangeForm'));
changeFromValidation.enableValidation();

const addFromValidation = new FormValidator({
  inputSelector: '.popup__input',
  buttonElement: '.popup__submit-send',
  inactiveButtonClass: 'popup__submit-send_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}, document.querySelector('#addPopupForm'));
addFromValidation.enableValidation();

// Инициализация карточек
const cardsSection = new Section({items: initialCards, renderer: item => {
  const card = new Card(item, '.cardTemplate',
  ( name, link ) => {
  const popupWithImage = new PopupWithImage('#imgPopup');//popupImg
  popupWithImage.open(name,link);
  popupWithImage.setEventListeners()});

  const cardElement = card.generateCard();
  cardsSection.addItem( cardElement,true);
}},'.elements')
cardsSection.renderItems();

//работа с попапом
const openAddButton = document.querySelector('.profile__button-add');
const popupWithFormAdd = new PopupWithForm('#addPopup', (data) => {
  const card = new Card({ name: data['card-name'], link: data['url'] }, '.cardTemplate',
    (name, link) => {
      const popupWithImage = new PopupWithImage('#imgPopup');
      popupWithImage.open(name, link);
      popupWithImage.setEventListeners();
    });
  const cardElement = card.generateCard();
  cardsSection.addItem(cardElement, false);
  addFromValidation.disableButton();
  popupWithFormAdd.close();
});
popupWithFormAdd.setEventListeners();

openAddButton.addEventListener('click', () => {
  popupWithFormAdd.open();
});

const userInfo = new UserInfo({ nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle'});

const openChangeButton = document.querySelector('.profile__button-change');
const popupWithFormChange = new PopupWithForm('#popupChange',(data)=>{
  userInfo.setUserInfo({name:data['name'], description:data['profession']})
  changeFromValidation.disableButton();
  popupWithFormChange.close();
});

openChangeButton.addEventListener('click',()=>{
  const data =userInfo.getUserInfo();
  document.querySelector('.popup__input[name="name"]').value = data.name;
  document.querySelector('.popup__input[name="profession"]').value = data.description;
  popupWithFormChange.open();
});
popupWithFormChange.setEventListeners();
