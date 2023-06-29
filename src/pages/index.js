import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
// import Popup from './Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import './index.css';

// полученние данных
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
  headers: {
    authorization: '789a651d-0180-4c70-97c5-9aa0e481c31b',
    'Content-Type': 'application/json'
  }
});


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

const popupWithImage = new PopupWithImage('#imgPopup');//popupImg
popupWithImage.setEventListeners();
const changeAvatarFromValidation = new FormValidator(selectors,document.querySelector('#changeAvatarForm') )
changeAvatarFromValidation.enableValidation();

//инициализация

// информация о пользователе
const userInfo = new UserInfo({ nameSelector: '.profile__title', descriptionSelector: '.profile__subtitle', avatarElement:'#avatar'});
api.getUserInfo().then((data)=>{
  userInfo.setUserInfo({name:data.name,description:data.about,avatarImg:data.avatar})
}).catch((err) => {
  console.log(err); // выведем ошибку в консоль
});

// карточки
function createCardInstance(item){
  const card = new Card(item, '.cardTemplate',
  ( name, link ) => {
    popupWithImage.open(name,link);
  }, ()=>{
    popupWithConfirmation.open()
    popupWithConfirmation.setActionCard(card.getCard());
  },'card__button-trash_inactive',(evt)=>{
    api.toggleLike(card.getCardId(), card.getLike()).then((likes)=>{
      card.toggleLike(likes, evt);
    }).catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

  });
  const cardElement = card.generateCard();
  return cardElement;
}
let cardsSection;
api.getInitialCards().then((data)=>{
  cardsSection = new Section({items: data, renderer: item => {
    const cardElement = createCardInstance(item);
    cardsSection.addItem( cardElement,true);
  }},'.elements')
  cardsSection.renderItems();
}).catch((err) => {
  console.log(err); // выведем ошибку в консоль
});

// слушатели

// изминение профиля
const openChangeButton = document.querySelector('.profile__button-change');
const popupWithFormChange = new PopupWithForm('#popupChange',(data)=>{
  popupWithFormChange.actionMessage('Сохранение...')
  api.setUserInfo({name: data['name'] ,profession:data['profession']}).
  then((data)=>{
    userInfo.setUserInfo({name:data.name, description:data.about, avatarImg:data.avatar})
    changeFromValidation.disableButton();
    popupWithFormChange.close();

  }).catch((err) => {
    console.log(err); // выведем ошибку в консоль
  }).finally(()=>{popupWithFormChange.actionMessage('Сохранить')});
});

const popupName = document.querySelector('.popup__input[name="name"]');
const popupProfession = document.querySelector('.popup__input[name="profession"]');
openChangeButton.addEventListener('click',()=>{
  api.getUserInfo().then((data)=>{
    popupName.value = data.name;
    popupProfession.value = data.description;
    popupWithFormChange.open();
  }).catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });
});
popupWithFormChange.setEventListeners();

// Добавление новой карточки

const openAddButton = document.querySelector('.profile__button-add');
const popupWithFormAdd = new PopupWithForm('#addPopup', (data) => {
  popupWithFormAdd.actionMessage('Создание...')
  api.addNewCard({name:data['card-name'] ,link:data['url']}).
  then((data)=>{
    const cardElement = createCardInstance(data);
    cardsSection.addItem(cardElement, false);
    addFromValidation.disableButton();
    popupWithFormAdd.close();
  }).catch((err) => {
    console.log(err); // выведем ошибку в консоль
  }).finally(()=>{ popupWithFormAdd.actionMessage('Создание...');});

});
popupWithFormAdd.setEventListeners();

openAddButton.addEventListener('click', () => {
  popupWithFormAdd.open();
});


const popupWithConfirmation = new PopupWithConfirmation('#confirmationPopup',(card)=>{
  api.deleteCard(card.getCardId()).then((data)=>{
    card.deleteCard();
    popupWithConfirmation.close();
  }).catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

})
popupWithConfirmation.setEventListeners();


const changeAvatarButton = document.querySelector('#changeAvatarButton')

changeAvatarButton.addEventListener('click',(evt)=>{
  popupWithFormAvatar.open();
})


const popupWithFormAvatar = new PopupWithForm('#changeAvatarPopup',(data)=>{ // колбэк на submit
  popupWithFormAvatar.actionMessage('Сохранение...')
  api.changeAvatar(data['url']).then((data)=>{
    userInfo.setAvatar(data.avatar);
    changeAvatarFromValidation.disableButton();
    popupWithFormAvatar.close();
  }).catch((err) => {
    console.log(err); // выведем ошибку в консоль
  }).finally(()=>{popupWithFormAvatar.actionMessage('Сохранить')});
})
popupWithFormAvatar.setEventListeners()

