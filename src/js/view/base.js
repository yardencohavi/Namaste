export const elements = {
    productsList: document.querySelector('.products__grid'),
    cartList: document.querySelector('.cart__list'),
    cardItem: document.querySelector('.card__item'),
    likesMenu: document.querySelector('.likes__field'),
    likesList: document.querySelector('.likes__list'),
    likeBtn: document.querySelector('.card__love'),
    cardAmount: document.querySelector('.card__amount'),
    cartSubtotal: document.querySelector('.cart__subtotal'),
    cartEmpty: document.querySelector('.cart__empty')
}

export const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `
    parent.insertAdjacentHTML('afterbegin' , loader);
}
export const clearLoader = () => {
    const loader = document.querySelector("loader");
    if(loader) loader.parentElement.removeChild(loader);
}