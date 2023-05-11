const url = "http://heroes.laravel/heroes";

export default class HeroService {
    constructor() {
        this.page = 1;
        this.perPage = 15;
    }

    setPage(page) {
        this.page = page;
        return this;
    }

    setPerPage(perPage) {
        this.perPage = perPage;
        return this;
    }

    async all() {
        let fullUrl = url;
        fullUrl //+= "?perPage=" + this.perPage;
        //fullUrl += "&page=" + this.page;


        console.log(fullUrl);
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