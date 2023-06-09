// export default class FormValidator {
//   constructor(settings, formElement) {
//     this._settings = settings;
//     this._formElement = formElement;
//     this._fieldset = settings.fieldset
//     this._inputSelector = settings.inputSelector
//     this._submitButtonSelector = settings.submitButtonSelector
//     this._inactiveButtonClass = settings.inactiveButtonClass
//     this._inputErrorClass = settings.inputErrorClass
//     this._inputErrorActiveClass = settings.inputErrorActiveClass
//   }

//  enableValidation() {
//     const formList = Array.from(document.querySelectorAll(this._formSelector));
//     formList.forEach((formElement) => {
//       formElement.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//       });
//       const fieldsetList = Array.from(formElement.querySelectorAll(this._fieldset));

//       fieldsetList.forEach(() => {
//         this._setEventListeners(formElement);
//       });
//     })
//   };

//   _setEventListeners (formElement) {
//     const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
//     const buttonElement = formElement.querySelector(this._submitButtonSelector);
//     this._toggleButtonState(inputList, buttonElement);
//     inputList.forEach((inputElement) => {
//       const checkInputValidity = (formElement, inputElement) => this._checkInputValidity(formElement, inputElement);
//       const toggleButtonState = (inputList, buttonElement) => this._toggleButtonState(inputList, buttonElement);
//       inputElement.addEventListener('input', function () {
//         checkInputValidity(formElement, inputElement);
//         toggleButtonState(inputList, buttonElement);
//       });
//     });
//   };

//   _toggleButtonState(inputList, buttonElement) {
//     if (this._hasInvalidInput(inputList)) {
//       buttonElement.classList.add(this._inactiveButtonClass);
//       buttonElement.setAttribute('disabled', true)
//     } else {
//       buttonElement.classList.remove(this._inactiveButtonClass);
//       buttonElement.removeAttribute('disabled')
//     }
//   };

//   _hasInvalidInput (inputList) {
//     return inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   };

//   _checkInputValidity(formElement, inputElement) {
//     if (!inputElement.validity.valid) {
//       this._showInputError(formElement, inputElement, inputElement.validationMessage);
//     } else {
//       this._hideInputError(formElement, inputElement);
//     }
//   };

//   _hideInputError(formElement, inputElement) {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove(this._inputErrorClass);
//     errorElement.classList.remove(this._inputErrorActiveClass);
//     errorElement.textContent = '';
//   };

//   _showInputError(formElement, inputElement, errorMessage) {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.add(this._inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(this._inputErrorActiveClass);
//   };
// }



export default class FormValidator {
  constructor(params, formElement) {
    this._params = params;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(params.buttonElement);
    this._inputList = Array.from(this._formElement.querySelectorAll(params.inputSelector));
    this._errorClass = params.errorClass;
    this._inputErrorClass = params.inputErrorClass;
    this._inactiveButtonClass = params.inactiveButtonClass;
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._toggleButtonState();
  }

  disableButton(){
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }
}
