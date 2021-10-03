

export default class Cart {
    constructor(){
        this.items = []

    }
    addItem(product){
        const item = {
            id : product.id,
            title: product.title,
            price: product.price,
            amount: 1,
            total: product.price
        }
        this.items.push(item);
        return item;
    }
    getSubtotal(){
        this.subtotal=0;
        this.items.forEach(item => {
            this.subtotal += item.total
        });
        return this.subtotal;
    }
    getAmount(id){
        return this.items.find(el => el.id === parseInt(id)).amount;
    }
    deleteItem(id){
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index ,1);
    }
    updateCount(id,amount){
        this.items.find(el => el.id === parseInt(id)).amount = amount;
    }
    updateTotal(id , type){
        const el = this.items.find(el => el.id === parseInt(id));
        if(type === 'inc'){
            el.total +=  el.price;
        }else{
            el.total -= el.price;
        }
        return el.total;
    }
}