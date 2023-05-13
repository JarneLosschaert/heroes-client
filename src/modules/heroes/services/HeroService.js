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
        const response = await fetch(url + "/" + id);
        const data = await response.json();

        return data;
    }
}