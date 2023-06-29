(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r,o,i,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleCardClick=r,this._likeCount=e.likes.length,this._handleDeleteButton=o,this._author=e.owner._id,this._buttonDisableClass=i,this._cardId=e._id,this._handleLikeButton=a,this._like=0}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"getLike",value:function(){return this._like}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".card__title").textContent=this._name,this._element.querySelector(".card__img").setAttribute("alt",this._name),this._element.querySelector(".card__img").setAttribute("src",this._link),this._setLike(this._likeCount),"1803e661d4f67d811aa86eac"!=this._author&&this._disableTrashButton(),this._element}},{key:"getCardId",value:function(){return this._cardId}},{key:"getCard",value:function(){return this}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setLike",value:function(t){this._element.querySelector(".card__like-count").textContent=t}},{key:"_disableTrashButton",value:function(){this._element.querySelector(".card__button-trash").setAttribute("disabled",!0),this._element.querySelector(".card__button-trash").classList.add(this._buttonDisableClass)}},{key:"toggleLike",value:function(t,e){e.target.classList.toggle("card__button-like_active"),this._like?this._like=0:this._like=1,this._setLike(t.length)}},{key:"_handleLikeButtonClick",value:function(t){this._handleLikeButton(t)}},{key:"_handleDeleteButtonClick",value:function(t){this._handleDeleteButton()}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_setEventListeners",value:function(){this._element.querySelector(".card__button-like").addEventListener("click",this._handleLikeButtonClick.bind(this)),this._element.querySelector(".card__button-trash").addEventListener("click",this._handleDeleteButtonClick.bind(this)),this._element.querySelector(".card__img").addEventListener("click",this._handleImageClick.bind(this))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._params=e,this._formElement=n,this._buttonElement=this._formElement.querySelector(e.buttonElement),this._inputList=Array.from(this._formElement.querySelectorAll(e.inputSelector)),this._errorClass=e.errorClass,this._inputErrorClass=e.inputErrorClass,this._inactiveButtonClass=e.inactiveButtonClass}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){var t=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))})),this._toggleButtonState()}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},f.apply(this,arguments)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._formElement=n._popup.querySelector(".popup__form"),n._submitCallback=e,n._submitButton=n._formElement.querySelector(".popup__submit-send"),n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=Array.from(this._formElement.querySelectorAll(".popup__input")),e={};return t.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var t=this;f(y(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._getInputValues())}))}},{key:"close",value:function(){f(y(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"actionMessage",value:function(t){this._submitButton.textContent=t}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._imageElement=e._popup.querySelector(".popup__img"),e._captionElement=e._popup.querySelector(".popup__description"),e}return e=a,(n=[{key:"open",value:function(t,e){this._imageElement.src=e,this._imageElement.alt=t,this._captionElement.textContent=t,v(_(a.prototype),"open",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var E=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t,e){e?this._container.append(t):this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var j=function(){function t(e){var n=e.nameSelector,r=e.descriptionSelector,o=e.avatarElement;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._descriptionElement=document.querySelector(r),this._avatarElemen=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,description:this._descriptionElement.textContent}}},{key:"setAvatar",value:function(t){this._avatarElemen.setAttribute("src",t)}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.description,r=t.avatarImg;this._nameElement.textContent=e,this._descriptionElement.textContent=n,this.setAvatar(r)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var L=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){var t=this,e="".concat(this._baseUrl,"/users/me");return fetch(e,{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var t=this,e="".concat(this._baseUrl,"/cards");return fetch(e,{headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserInfo",value:function(t){var e=this,n=t.name,r=t.profession,o="".concat(this._baseUrl,"/users/me");return fetch(o,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(t){return e._getResponseData(t)}))}},{key:"addNewCard",value:function(t){var e=this,n=t.name,r=t.link,o="".concat(this._baseUrl,"/cards");return fetch(o,{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(t){return e._getResponseData(t)}))}},{key:"deleteCard",value:function(t){var e=this,n="".concat(this._baseUrl,"/cards/").concat(t);return fetch(n,{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"toggleLike",value:function(t,e){return e?this._deleteLike(t):this._setLike(t)}},{key:"_setLike",value:function(t){var e=this,n="".concat(this._baseUrl,"/cards/").concat(t,"/likes");return fetch(n,{method:"PUT",headers:this._headers}).then((function(t){return e._getResponseData(t)})).then((function(t){return t.likes}))}},{key:"_deleteLike",value:function(t){var e=this,n="".concat(this._baseUrl,"/cards/").concat(t,"/likes");return fetch(n,{method:"DELETE",headers:this._headers}).then((function(t){return e._getResponseData(t)})).then((function(t){return t.likes}))}},{key:"changeAvatar",value:function(t){var e=this,n="".concat(this._baseUrl,"/users/me/avatar");return fetch(n,{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(t){return e._getResponseData(t)}))}},{key:"_getResponseData",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._button=n._popup.querySelector(".popup__form"),n._submitCallback=e,n}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;R(B(a.prototype),"setEventListeners",this).call(this),this._button.addEventListener("submit",(function(e){e.preventDefault(),t._submitCallback(t._card)}))}},{key:"setActionCard",value:function(t){this._card=t}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(c);function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var U=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"789a651d-0180-4c70-97c5-9aa0e481c31b","Content-Type":"application/json"}}),x={inputSelector:".popup__input",buttonElement:".popup__submit-send",inactiveButtonClass:"popup__submit-send_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},M=new i(x,document.querySelector("#popupChangeForm"));M.enableValidation();var V=new i(x,document.querySelector("#addPopupForm"));V.enableValidation();var N=new g("#imgPopup");N.setEventListeners();var F=new i(x,document.querySelector("#changeAvatarForm"));function H(t){var e=new n(t,".cardTemplate",(function(t,e){N.open(t,e)}),(function(){Y.open(),Y.setActionCard(e.getCard())}),"card__button-trash_inactive",(function(t){U.toggleLike(e.getCardId(),e.getLike()).then((function(n){e.toggleLike(n,t)})).catch((function(t){console.log(t)}))}));return e.generateCard()}F.enableValidation();var J,z=new j({nameSelector:".profile__title",descriptionSelector:".profile__subtitle",avatarElement:"#avatar"});Promise.all([U.getUserInfo(),U.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];z.setUserInfo({name:o.name,description:o.about,avatarImg:o.avatar}),(J=new E({items:i,renderer:function(t){var e=H(t);J.addItem(e,!0)}},".elements")).renderItems()})).catch((function(t){console.log(t)}));var $=document.querySelector(".profile__button-change"),G=new h("#popupChange",(function(t){G.actionMessage("Сохранение..."),U.setUserInfo({name:t.name,profession:t.profession}).then((function(t){z.setUserInfo({name:t.name,description:t.about,avatarImg:t.avatar}),M.disableButton(),G.close()})).catch((function(t){console.log(t)})).finally((function(){G.actionMessage("Сохранить")}))})),K=document.querySelector('.popup__input[name="name"]'),Q=document.querySelector('.popup__input[name="profession"]');$.addEventListener("click",(function(){var t=z.getUserInfo();K.value=t.name,Q.value=t.description,G.open()})),G.setEventListeners();var W=document.querySelector(".profile__button-add"),X=new h("#addPopup",(function(t){X.actionMessage("Создание..."),U.addNewCard({name:t["card-name"],link:t.url}).then((function(t){var e=H(t);J.addItem(e,!1),V.disableButton(),X.close()})).catch((function(t){console.log(t)})).finally((function(){X.actionMessage("Создание...")}))}));X.setEventListeners(),W.addEventListener("click",(function(){V.disableButton(),X.open()}));var Y=new A("#confirmationPopup",(function(t){U.deleteCard(t.getCardId()).then((function(e){t.deleteCard(),Y.close()})).catch((function(t){console.log(t)}))}));Y.setEventListeners(),document.querySelector("#changeAvatarButton").addEventListener("click",(function(t){F.disableButton(),Z.open()}));var Z=new h("#changeAvatarPopup",(function(t){Z.actionMessage("Сохранение..."),U.changeAvatar(t.url).then((function(t){z.setAvatar(t.avatar),F.disableButton(),Z.close()})).catch((function(t){console.log(t)})).finally((function(){Z.actionMessage("Сохранить")}))}));Z.setEventListeners()})();