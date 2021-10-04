
import data from '/public/products.json'


export default class Products {
    
    constructor(){
        this.products = [];
    }
    getProduct(id){
        data.products.forEach(product => {
            if(product.id === id){
                return product;
            }
        });
    }
    calcAmount(){
        this.amount = 1;
    }
    calcTotal(amount){
        return amount * this.price;
    }
    updateAmount(){
        const newAmount = type === 'dec' ? this.amount - 1 : this.amount + 1 ;
        this.amount = newAmount;
    }
}