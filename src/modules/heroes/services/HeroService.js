const url = "http://heroes.laravel/api/heroes";

export default class HeroService {
  constructor() {
    this.page = 1;
  }

  setPage(page) {
    this.page = page;
    return this;
  }

  getLanguage() {
    let language = localStorage.getItem("language");
    if (language != "en" && language != "nl") {
      language = "en";
    }
    return language;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  async all(filter) {
    let fullUrl = url;
    fullUrl += "/list";
    fullUrl += "?page=" + this.page;
    fullUrl += "&language=" + this.getLanguage();

    fullUrl += "&name=" + filter.name;
    fullUrl += "&minPowerLevel=" + filter.minPowerLevel;
    fullUrl += "&maxPowerLevel=" + filter.maxPowerLevel;

    const response = await fetch(fullUrl);
    const data = await response.json();

    return data;
  }

  async favorites() {
    let fullUrl = url;
    fullUrl += "/favorites";
    fullUrl += "?page=" + this.page;

    const config = {
      headers: {
        Authorization: "Bearer " + this.getToken(),
      },
    };

    const response = await fetch(fullUrl, config);
    const data = await response.json();

    return data;
  }

  async find(id) {
    let fullUrl = url + "/" + id;
    fullUrl += "?language=" + this.getLanguage();

    const response = await fetch(fullUrl);
    const data = await response.json();

    return data;
  }

  async create(hero) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.getToken(),
      },
      body: JSON.stringify({
        name: hero.name,
        description: hero.description,
        "power-level": hero.powerLevel,
        birthday: hero.birthday,
        race: hero.race,
        image: hero.image,
      }),
    }).catch((error) => {
      console.error(error);
    });
  }

  async update(hero) {
    const fullUrl = url + "/" + hero.id;
    fetch(fullUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: hero.name,
        description: hero.translations.description,
        "power-level": hero["power-level"],
        birthday: hero.birthday,
        race: hero.translations.race,
        image: hero.image,
      }),
    }).catch((error) => {
      console.error(error);
    });
  }

  async delete(heroId) {
    const fullUrl = url + "/" + heroId;
    fetch(fullUrl, {
      method: "DELETE",
    }).catch((error) => {
      console.error(error);
    });
  }
}
