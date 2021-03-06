import { renderProduct } from "../view/productView";

export default class Likes{
    constructor(){
        this.likes = [];
    }
    addLike(product){
        const like = {
            id : product.id,
            title: product.title,
            price: product.price,
            img: product.imgUrl
        }
        this.likes.push(like);
    }
    deleteLike(id){
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index ,1);

    }
    isLiked(id){
        return this.likes.findIndex(el => el.id === parseInt(id)) !== -1;
    }
    getNumLikes(){
        return this.likes.length;
    }

}