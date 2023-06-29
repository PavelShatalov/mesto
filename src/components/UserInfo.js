export default class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarElement }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElemen = document.querySelector(avatarElement)
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent
    };
  }

  setAvatar(link)
  {
    this._avatarElemen.setAttribute('src', link);
  }

  setUserInfo({ name, description, avatarImg}) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = description;
    this.setAvatar(avatarImg);
  }
}
