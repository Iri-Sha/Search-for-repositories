class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  searchRepos(query) {
    return fetch(`${this._baseUrl}${query}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseUrl: "https://api.github.com/search/repositories?q=",
  headers: {
    Accept: "application/vnd.github+json",
    //auth: 'YOUR-TOKEN',
  },
});
