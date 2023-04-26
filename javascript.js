// Объявляем переменные, выбирая соответствующие элементы из DOM
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close'); // Кнопка для закрытия окна
let sendPopupButton = document.querySelector('.popup__submit-send'); // Кнопка для отправки данных из попапа

// Функция для открытия попапа
function openPopup() {
popupBg.classList.add('popup__bg_active'); // Добавляем класс 'active' для фона
popup.classList.add('popup_active'); // И для самого окна
}

// Функция для закрытия попапа
function closePopup() {
popupBg.classList.remove('popup__bg_active'); // Убираем активный класс с фона
popup.classList.remove('popup_active'); // И с окна
}

// Функция для отправки данных из попапа и обновления профиля на странице
function send() {
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input[name="name"]');
let jobInput = document.querySelector('.popup__input[name="profession"]');
// Получаем значения полей nameInput и jobInput
const name = nameInput.value;
const job = jobInput.value;
// Выбираем элементы, куда будут вставлены новые значения полей
const profileTitle = document.querySelector('.Profile-Info__title');
const profileSubtitle = document.querySelector('.Profile-Info__subtitle');
// Вставляем новые значения с помощью textContent
profileTitle.textContent = name;
profileSubtitle.textContent = job;
}

// Добавляем обработчики событий на кнопки для открытия попапа
openPopupButtons.forEach((button) => {
button.addEventListener('click', (e) => {
e.preventDefault(); // Предотвращаем дефолтное поведение браузера
openPopup();
});
});

// Добавляем обработчик событий на кнопку отправки данных из попапа
sendPopupButton.addEventListener('click', (e) => {
e.preventDefault();
send(); // Вызываем функцию send
closePopup(); // Закрываем попап
});

// Добавляем обработчик событий на кнопку закрытия попапа
closePopupButton.addEventListener('click', () => {
closePopup();
});

// Обработчик событий для кнопок "Нравится"
let likeAction = document.querySelectorAll('.card__button-like');
let like = document.querySelector('.card__img-like');
likeAction.forEach((button) => { // Перебираем все кнопки
button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
e.preventDefault(); // Предотвращаем дефолтное поведение браузера
like.classList.toggle('card__img-like_active'); // Переключаем активность иконки "Нравится"
});
});

