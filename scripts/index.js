// Объявляем переменную для элемента DOM страницы, представляющего собой попап
let popup = document.querySelector('.popup');

// Объявляем переменные для кнопок открытия и закрытия попапа
let openPopupButton = document.querySelector('.profile__button-change');
let closePopupButton = document.querySelector('.popup__close');

// Объявляем константы для элементов DOM страницы, содержащих информацию о пользователе (имя и профессия)
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// Объявляем переменные для текстовых полей ввода имени и профессии в попапе
let nameInput = document.querySelector('.popup__input[name="name"]');
let jobInput = document.querySelector('.popup__input[name="profession"]');

// Объявляем переменную для кнопки отправки данных из попапа
let sendPopupButton = document.querySelector('.popup__form');

// Функция для открытия попапа
function openPopup() {
// Заполняем текстовые поля ввода текущими значениями имени и профессии на странице
nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;
// Добавляем класс для отображения попапа на странице
popup.classList.add('popup_opened');
};

// Добавляем обработчик событий на кнопку открытия попапа
openPopupButton.addEventListener('click', (e) => {
openPopup(); // Вызываем функцию для открытия попапа
});

// Функция для закрытия попапа
function closePopup() {
// Удаляем класс для скрытия попапа на странице
popup.classList.remove('popup_opened');
}

// Добавляем обработчик событий на кнопку закрытия попапа
closePopupButton.addEventListener('click', () => {
closePopup(); // Вызываем функцию для закрытия попапа
});

// Функция для отправки данных из попапа и обновления профиля на странице
function handleFormSubmit (evt) {
evt.preventDefault(); // Предотвращаем дефолтное поведение браузера (отправку формы)
// Обновляем значения имени и профессии на странице
profileTitle.textContent = nameInput.value;
profileSubtitle.textContent = jobInput.value;
closePopup(); // Закрываем попап после успешной отправки данных
}

// Добавляем обработчик событий на кнопку отправки данных из попапа
sendPopupButton.addEventListener('submit', handleFormSubmit);



// // Обработчик событий для кнопок "Нравится"
// let likeAction = document.querySelectorAll('.card__button-like');
// let like = document.querySelector('.card__img-like');
// likeAction.forEach((button) => { // Перебираем все кнопки
// button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
// e.preventDefault(); // Предотвращаем дефолтное поведение браузера
// like.classList.toggle('card__img-like_active'); // Переключаем активность иконки "Нравится"
// });
// });

