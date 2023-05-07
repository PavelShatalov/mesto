// Общие переменные
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
const sendPopupButtonAdd = document.querySelector('#addPopupForm');
const addPopup = document.querySelector('#addPopup');
const closeAddPopupButton = document.querySelector('#closeAddPopupButton');

// Функции для работы с попапами
// Открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

  // Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

  // Открыть попап с картинкой
function openCardPopup(name, link) {
  popupImg.querySelector('.popup__description').textContent = name;
  popupImg.querySelector('.popup__img').setAttribute('alt', name);
  popupImg.querySelector('.popup__img').setAttribute('src', link)
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
});
sendPopupButtonAdd.addEventListener('submit', handleAddFormSubmit);
closeAddPopupButton.addEventListener('click', () => {
  closePopup(addPopup);
});
closeImgPopupButton.addEventListener('click', () => {
  closePopup(popupImg);
});

  // Инициализация карточек
initialCards.forEach(item => {
  elementsContainer.append(createCard(item.name, item.link));
});

