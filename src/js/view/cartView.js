import { elements } from "./base";

export const renderItem = (product) => {
    const markup =`
    <li class="card__item cart__item" data-itemid=${product.id}>
        <img src="${product.imgUrl}" alt="${product.title}" class="cart__img">
        <div class"cart__details">
            <h1 class="cart__title">
                ${product.title}
            </h1>
            <h2 class="cart__price">${product.price}₪</h2>
        </div>
        <div class="cart__row">
            <div class="cart__amount" data-itemid=${product.id}>
                <button class="button__tiny button__dec">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <input class="card__value" data-itemid=${product.id} type="number" readonly="readonly" id="amount" min="1" value="1">
                <button class="button__tiny button__inc">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>
            <p class="cart__total" data-itemid=${product.id}>${product.price}₪</p>
            <button class="button button__remove">X
            </button>
        </div>
    </li>`
    elements.cartEmpty.textContent="";
    elements.cartList.insertAdjacentHTML('beforeend',markup);
}
export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
}
export const renderAmount = (id,newValue) => {
    document.querySelectorAll(`.card__value[data-itemid="${id}"]`).forEach(el => {
        el.value = newValue
    })
}
export const renderTotalItem = (id,total) => {
    const newtotal = total.toFixed(1);
    document.querySelector(`.cart__total[data-itemid="${id}"]`).textContent = `${newtotal}₪`;
}
export const rendersubTotal = (subtotal) => {
    const newsubtotal = subtotal.toFixed(1);
    elements.cartSubtotal.textContent = `${newsubtotal}₪`;
}
export const renderEmpty = () => {
    elements.cartEmpty.textContent="No items in cart.";
}