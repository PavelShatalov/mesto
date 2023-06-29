export default class Api {

  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  getUserInfo() {
    const url = `${this._baseUrl}/users/me`;

    return fetch(url, {
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  // answer
  // {
  //   "name": "Jacques Cousteau",
  //   "about": "Sailor, researcher",
  //   "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  //   "_id": "e20537ed11237f86bbb20ccb",
  //   "cohort": "cohort0"
  // }

  getInitialCards() {
    const url = `${this._baseUrl}/cards`;

    return fetch(url, {
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
 // answer
  // [
  //   {
  //     "likes": [],
  //     "_id": "5d1f0611d321eb4bdcd707dd",
  //     "name": "Байкал",
  //     "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  //     "owner": {
  //       "name": "Jacques Cousteau",
  //       "about": "Sailor, researcher",
  //       "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  //       "_id": "ef5f7423f7f5e22bef4ad607",
  //       "cohort": "local"
  //     },
  //     "createdAt": "2019-07-05T08:10:57.741Z"
  //   },
  //   {
  //     "likes": [],
  //     "_id": "5d1f064ed321eb4bdcd707de",
  //     "name": "Архыз",
  //     "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  //     "owner": {
  //       "name": "Jacques Cousteau",
  //       "about": "Sailor, researcher",
  //       "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  //       "_id": "ef5f7423f7f5e22bef4ad607",
  //       "cohort": "local"
  //     },
  //     "createdAt": "2019-07-05T08:11:58.324Z"
  //   }
  // ]


  setUserInfo({name, profession}) {
    const url = `${this._baseUrl}/users/me`;

    return fetch(url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: profession
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  // answer
  // {
  //   "name": "Marie Skłodowska Curie",
  //   "about": "Physicist and Chemist",
  //   "avatar": "https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg",
  //   "_id": "e20537ed11237f86bbb20ccb",
  //   "cohort": "cohort0",
  // }

  addNewCard({name, link}) {
    const url = `${this._baseUrl}/cards`;
    return fetch(url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}`;
    return fetch(url, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  toggleLike(cardId, isLiked) {
    if (isLiked) {
      return this._deleteLike(cardId);
    } else {
      return this._setLike(cardId);
    }
  }

  _setLike(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;
    return fetch(url, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(res => {
      return res.likes;
    });
  }

  _deleteLike(cardId) {
    const url = `${this._baseUrl}/cards/${cardId}/likes`;
    return fetch(url, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(res => {
      return res.likes;
    });
  }

  changeAvatar(link) {
    const url = `${this._baseUrl}/users/me/avatar`;
    return fetch(url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}
