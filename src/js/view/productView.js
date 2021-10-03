import { elements } from "./base";

export const renderProduct = (product, isLiked) => {
    const markup =`
    <div class="card__item" data-itemid=${product.id}>
        <img src="${product.imgUrl}" alt="${product.title}" class="card__img">
        <div class="card__details">
            <h1 class="card__title">
                ${product.title}
            </h1>
            <p class="card__description">${product.description}</p>
            <h2 class="card__price">${product.price}</h2>

            

            <button class="card__love" data-itemid=${product.id}>
                <svg class="header__likes" >
                    <use data-itemid=${product.id}  href="img/icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
                </svg>
            </button>
            <button class="button button__add" data-itemid=${product.id}>Add to Cart</button>
        </div>
    </div>`
    
    elements.productsList.insertAdjacentHTML('beforeend',markup);
}
export const renderCardAmount = (id) => {
    const markup =`<div class="card__amount" data-itemid=${id}>
                <button class="button__tiny button__dec">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <input class="card__value" data-itemid=${id} type="number" name="name" min="1" value="1">
                <button class="button__tiny button__inc">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>`


    document.querySelector(`.card__love[data-itemid="${id}"]`).insertAdjacentHTML('afterend',markup);
    const item = document.querySelector(`.button__add[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
}   
export const renderAddBtn = (id) => {
    const markup = `<button class="button button__add" data-itemid=${id}>Add to Cart</button>`
    document.querySelector(`.card__love[data-itemid="${id}"]`).insertAdjacentHTML("afterend",markup);
    const item = document.querySelector(`.card__amount[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
}