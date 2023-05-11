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
const popupDescription = popupImg.querySelector('.popup__description');
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
function openCardPopup(name, link) {
  // popupImg.querySelector('.popup__description').textContent = name;
  // popupImg.querySelector('.popup__img').setAttribute('alt', name);
  // popupImg.querySelector('.popup__img').setAttribute('src', link)
  popupDescription.textContent = name;
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
  elementsContainer.prepend(createCard(cardNameInput.value, urlInput.value));
  evt.target.reset()
  closePopup(addPopup);
}

  // Функция добавления карточки в список
function createCard(name, link) {
  const cardTemplate = document.querySelector('.cardTemplate').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__img').setAttribute('alt', name);
  cardElement.querySelector('.card__img').setAttribute('src', link);
  // Обработчик клика на кнопке лайка
  cardElement.querySelector('.card__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button-like_active');
  });
  // Обработчик клика на кнопке удаления карточки
  cardElement.querySelector('.card__button-trash').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
  // Обработчик клика на картинку карточки
  cardElement.querySelector('.card__img').addEventListener('click', function (evt) {
    openCardPopup(name, link);
  });
  return cardElement;
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

  // Обработчики событий
openChangeButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  openPopup(popupChange);
});
closeChangePopupButton.addEventListener('click', () => {
  closePopup(popupChange);
});
popupChangeForm.addEventListener('submit', handleChangeFormSubmit);
openPopupAdd.addEventListener('click', () => {
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



//errors
// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add('popup__input_type_error');
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add('popup__input-error_active');
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove('popup__input_type_error');
//   errorElement.classList.remove('popup__input-error_active');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   console.log(buttonElement)
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__submit-send_inactive');
//     buttonElement.setAttribute('disabled', true)
//   } else {
//     buttonElement.classList.remove('popup__submit-send_inactive');
//     buttonElement.removeAttribute('disabled')
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const buttonElement = formElement.querySelector('.popup__submit-send'); //here1
//   toggleButtonState(inputList, buttonElement);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);// здесь
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     const fieldsetList = Array.from(formElement.querySelectorAll('.popup__inputs'));

//     fieldsetList.forEach((fieldSet) => {
//       setEventListeners(fieldSet);
//     });
//   })
// };

// Инициализация карточек
initialCards.forEach(item => {
  elementsContainer.append(createCard(item.name, item.link));
});
// // запуск валидации форм
// enableValidation();
