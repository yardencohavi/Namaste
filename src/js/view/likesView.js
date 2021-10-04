import { elements } from "./base";

export const toggleLikeBtn = (islLiked,id) => {
    const iconString = islLiked ? 'icon-heart' : 'icon-heart-outlined' ;
    document.querySelector(`.card__love use[data-itemid="${id}"]`).setAttribute('href' , `img/icons.svg#${iconString}`);
}  
export const toggleLikeMenu = numlikes => {
    elements.likesMenu.style.visibility = numlikes > 0 ? 'visible' : 'hidden' ;
}
export const renderLike = like => {
    const markup = `
        <li>
            <a class="likes__link" href="#${like.id}">
                <img src="${like.imgUrl}" alt="${like.title}" class="cart__img">
                <div class="likes__data">
                    <h4 class="likes__name">${like.title}</h4>
                    <p class="likes__price">${like.price}₪</p>
                </div>
            </a>
        </li>
    `;
    elements.likesList.insertAdjacentHTML('beforeend', markup);
};
export const deleteLike = id => {
    const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    if(el) el.parentElement.removeChild(el);
}