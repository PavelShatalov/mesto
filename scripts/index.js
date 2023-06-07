import Card from './Card.js';
import FormValidator from './FormValidator.js';
// Общие переменные
const popups = document.querySelectorAll(".popup")
const popupChange = document.querySelector('#popupChange');
const openChangeButton = document.querySelector('.profile__button-change');
const closeChangePopupButton = document.querySelector('#closeChangePopupButton');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input[name="name"]');
const jobInput = document.querySelector('.popup__input[name="profession"]');
const popupChangeForm = document.querySelector('#popupChangeForm');
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
const elementsContainer = document.querySelector('.elements');
const popupImg = document.querySelector('#imgPopup');
const closeImgPopupButton = document.querySelector('#closeImgPopupButton');
const openPopupAdd = document.querySelector('.profile__button-add');
const cardNameInput = document.querySelector('.popup__input[name="card-name"]');
const urlInput = document.querySelector('.popup__input[name="url"]');
const sendPopupAdd = document.querySelector('#addPopupForm');
const addPopup = document.querySelector('#addPopup');
const closeAddPopupButton = document.querySelector('#closeAddPopupButton');
const img = popupImg.querySelector('.popup__img');
const sendPopupAddButton = document.querySelector('#addSubmit')
// Функции для работы с попапами
// Открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

  // Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

  // Открыть попап с картинкой
export function openCardPopup(name, link) {
  popupImg.querySelector('.popup__description').textContent = name;
  img.setAttribute('alt', name);
  img.setAttribute('src', link)
  openPopup(popupImg)
}

  // Обработчик отправки формы редактирования профиля
function handleChangeFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupChange);
}

  // Обработчик отправки формы добавления карточки
function handleAddFormSubmit (evt) {
  evt.preventDefault();
  const card = new Card( {
    name: cardNameInput.value,
    link: urlInput.value
  }, '.cardTemplate');
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
  evt.target.reset()
  closePopup(addPopup);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

  // Обработчики событий
openChangeButton.addEventListener('click', () => {
  const valid = new FormValidator({
    fieldset: '.popup__inputs',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-send',
    inactiveButtonClass: 'popup__submit-send_inactive',
    inputErrorClass: 'popup__input_type_error',
    inputErrorActiveClass: 'popup__input-error_active'
  }, '#popupChangeForm');
  valid.enableValidation();
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupChange);

});
closeChangePopupButton.addEventListener('click', () => {
  closePopup(popupChange);
});
popupChangeForm.addEventListener('submit', handleChangeFormSubmit);
openPopupAdd.addEventListener('click', () => {
  const valid = new FormValidator({
    fieldset: '.popup__inputs',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-send',
    inactiveButtonClass: 'popup__submit-send_inactive',
    inputErrorClass: 'popup__input_type_error',
    inputErrorActiveClass: 'popup__input-error_active'
  }, '#addPopupForm');
  valid.enableValidation();
  openPopup(addPopup);
  sendPopupAddButton.classList.add('popup__submit-send_inactive')
  sendPopupAddButton.setAttribute('disabled', true)
});
sendPopupAdd.addEventListener('submit', handleAddFormSubmit);
closeAddPopupButton.addEventListener('click', () => {
  closePopup(addPopup);
});
closeImgPopupButton.addEventListener('click', () => {
  closePopup(popupImg);
});

document.addEventListener('click', (evt) => { // Вешаем обработчик на весь документ
  popups.forEach(element => {
    if(evt.target === element)
    closePopup(element)
  });
});

// Инициализация карточек // fixed
initialCards.forEach(item => {
  const card = new Card(item, '.cardTemplate');
  const cardElement = card.generateCard();
  elementsContainer.append(cardElement); // fixed
});
// // запуск валидации форм
// enableValidation();
