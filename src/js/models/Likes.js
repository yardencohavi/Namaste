export default class Likes{
    constructor(){
        this.likes = [];
    }
    addLike(id,title,description,img){
        const like = {
            id,
            title,
            description,
            img
        }
        this.likes.push(like);
        this.persistData();
        return like;
    }
    deleteLike(id){
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index ,1);
        this.persistData();
    }
    isLiked(id){
        return this.likes.findIndex(el => el.id === id) !== -1;
    }
    getNumLikes(){
        return this.likes.length;
    }
    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }
    readStorage(){
        const storage =JSON.parse(localStorage.getItem('likes'));
        if(storage){
            this.likes = storage;}
    }
}