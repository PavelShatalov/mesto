import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
// import Popup from './Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

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
const selectors = {
  inputSelector: '.popup__input',
  buttonElement: '.popup__submit-send',
  inactiveButtonClass: 'popup__submit-send_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
const changeFromValidation = new FormValidator(selectors, document.querySelector('#popupChangeForm'));
changeFromValidation.enableValidation();

const addFromValidation = new FormValidator(selectors, document.querySelector('#addPopupForm'));
addFromValidation.enableValidation();

// Инициализация карточек
function createCardInstance(item){
  const card = new Card(item, '.cardTemplate',
  ( name, link ) => {
  popupWithImage.open(name,link);
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage('#imgPopup');//popupImg
popupWithImage.setEventListeners();
const cardsSection = new Section({items: initialCards, renderer: item => {
  const cardElement = createCardInstance(item);

  cardsSection.addItem( cardElement,true);
}},'.elements')
cardsSection.renderItems();

//работа с попапом
const openAddButton = document.querySelector('.profile__button-add');
const popupWithFormAdd = new PopupWithForm('#addPopup', (data) => {
  const cardElement = createCardInstance({ name: data['card-name'], link: data['url'] });
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

const popupName = document.querySelector('.popup__input[name="name"]');
const popupProfession = document.querySelector('.popup__input[name="profession"]');
openChangeButton.addEventListener('click',()=>{
  const data = userInfo.getUserInfo();
  popupName.value = data.name;
  popupProfession.value = data.description;
  popupWithFormChange.open();
});
popupWithFormChange.setEventListeners();
