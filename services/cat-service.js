class PokeService{
    
    static BASE_URL = 'https://catfact.ninja'

    static getPage(index){
        const url = this.BASE_URL + '/breed';
        return fetch(url).then(resp => resp.json()).then(catPage => this.getDetails(catPage.results))
    }

    static getDetails(catsBreed){
        const requests = [];
        for (const cats of catsBreed) {
            const name = cats.name;
            const url = this.BASE_URL + 'breeds/' + name;
            const request = fetch(url).then(resp => resp.json());
            requests.push(request);
        }
        return Promise.all(requests) // lancia tutte le chiamate che abbiamo fatto nell'array
    }
}