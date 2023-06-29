export default class Card {
 constructor(data, templateSelector, handleCardClick, handleCardTrashClick, buttonDisableClass, handleLikeButton ) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likeCount = data.likes.length;
    this._handleDeleteButton = handleCardTrashClick;
    this._author = data.owner._id;
    this._buttonDisableClass = buttonDisableClass;
    this._cardId = data._id;
    this._handleLikeButton = handleLikeButton
    this._like = 0;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }
  getLike(){
    return  this._like;
  };
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__img').setAttribute('alt', this._name);
    this._element.querySelector('.card__img').setAttribute('src', this._link);
    this._setLike(this._likeCount);
    if(this._author!='1803e661d4f67d811aa86eac'){
      this._disableTrashButton()

    }
    return this._element;
  }

  getCardId() {
    return this._cardId;
  }

  getCard(){
    return this;
  };

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setLike(number){
    this._element.querySelector('.card__like-count').textContent = number
  }

  _disableTrashButton(){
    this._element.querySelector('.card__button-trash').setAttribute('disabled', true);
    this._element.querySelector('.card__button-trash').classList.add(this._buttonDisableClass);
  }

  toggleLike(newLikeCont, evt){
    evt.target.classList.toggle('card__button-like_active');
    if(this._like){
        this._like = 0;
      }else {
        this._like = 1;
      }
      this._setLike(newLikeCont.length);
  }
  _handleLikeButtonClick(evt) {
   this._handleLikeButton(evt);
  }

  _handleDeleteButtonClick(evt) {
    this._handleDeleteButton()
    // this._element.remove();
    // this._element = null;
  }

  _handleImageClick() {
    this._handleCardClick(this._name, this._link);
  }



  _setEventListeners() {
    this._element.querySelector('.card__button-like').addEventListener('click', this._handleLikeButtonClick.bind(this));
    this._element.querySelector('.card__button-trash').addEventListener('click', this._handleDeleteButtonClick.bind(this));
    this._element.querySelector('.card__img').addEventListener('click', this._handleImageClick.bind(this));


  }


}

