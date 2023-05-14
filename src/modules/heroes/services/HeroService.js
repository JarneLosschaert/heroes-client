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

  async all() {
    let fullUrl = url;
    fullUrl += "/list";
    fullUrl += "?page=" + this.page;
    fullUrl += "&language=" + this.getLanguage();

    const response = await fetch(fullUrl);
    const data = await response.json();

    return data;
  }

  async find(id) {
    let fullUrl = url + "/" + id;
    fullUrl += "?language=" + this.getLanguage();
    console.log(fullUrl);
    const response = await fetch(fullUrl);
    const data = await response.json();

    return data;
  }

  async create(hero) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": hero.name,
        "description": hero.description,
        "power-level": hero.powerLevel,
        "birthday": hero.birthday,
        "race": hero.race,
        "image":hero.image,
      }),
    })
  }
}
