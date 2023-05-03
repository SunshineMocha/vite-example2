export class CatService{
    
    static BASE_URL = 'https://catfact.ninja'

    static getBreeds(){
        const url = this.BASE_URL + '/breeds';
        
        return fetch(url)
        .then(resp => resp.json())
        .then(data => this.elaborateData(data));
    }
    static getFacts(){
        const url = this.BASE_URL + '/facts';
        
        return fetch(url)
        .then(resp => resp.json())
        .then(data => this.elaborateData(data));
    }
    static elaborateData(obj){
        // console.log('obj', obj);
        const data = obj.data;
        // console.log('facts', facts);
        //const first6 = facts.filter((f, i) => i < 6);
        const first6 = this.getFirst6(data);
        return first6;
    }
    static getFirst6(array){
        const tempArray = [];

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (i < 6) {
                tempArray.push(element);
            } else{
                break;
            }    
        }
        return tempArray;
    }
}