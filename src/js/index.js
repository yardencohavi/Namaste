import "/dist/styles/main.scss";
import data from '/public/products.json';
import Likes from "./models/Likes";
import Cart from "./models/Cart";
import * as productView from './view/productView';
import * as cartView from './view/cartView';
import * as likesView from './view/likesView';
import {elements} from "./view/base";

const state = {};

window.addEventListener("load", () => {
    controlProduct();
});

/**
 * PRODUCT CONTROLLER
 */
const controlProduct = () => {
    state.products = data.products;
    // renderLoader(elements.productsList);
    state.products.forEach(el => {
        productView.renderProduct(el, false);
    })
}

/**
 * CART CONTROLLER
 */
state.cart = new Cart();
const controlCart = (id) => {
    if (!state.cart) {
        state.cart = new Cart();
    }
    const newProduct = state.products.find(el => el.id === parseInt(id));
    state.cart.addItem(newProduct);
    cartView.renderItem(newProduct);
}

/**
 * LIKE CONTROLLER
 */
state.likes = new Likes();
likesView.toggleLikeMenu(state.likes.getNumLikes());

const controlLike = (id) => {
    if (!state.likes) state.likes = new Likes();
    const curProduct = state.products.find(el => el.id === parseInt(id));
    if (!state.likes.isLiked(id)) {
        state.likes.addLike(curProduct);
        likesView.toggleLikeBtn(true, id);
        likesView.renderLike(curProduct);
    } else {
        state.likes.deleteLike(id);
        likesView.toggleLikeBtn(false, id);
        likesView.deleteLike(id);
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
}

elements.productsList.addEventListener("click", e => {
   
    const id = e.target.closest(".card__item").dataset.itemid;
    if (e.target.matches('.button__add, .button__add *')) {
        controlCart(id);
        productView.renderCardAmount(id);
    }
    if (e.target.matches('.card__love, .card__love *')) {
        controlLike(id);
    }
   
    if (e.target.matches('.button__dec, .button__dec *')) {
        const curAmount = state.cart.getAmount(id);
        if (curAmount > 1) {
            state.cart.updateCount(id, curAmount - 1);
            cartView.renderAmount(id, curAmount - 1);
            const total = state.cart.updateTotal(id, 'dec');
            cartView.renderTotalItem(id,total);
        } else if (curAmount === 1) {
            state.cart.deleteItem(id);
            cartView.deleteItem(id);
            productView.renderAddBtn(id);
        }
    } else if (e.target.matches('.button__inc, .button__inc *')) {
        const curAmount = state.cart.getAmount(id);
        state.cart.updateCount(id, curAmount + 1);
        cartView.renderAmount(id, curAmount + 1);
        const total = state.cart.updateTotal(id, 'inc');
            cartView.renderTotalItem(id,total);
    }
    state.subtotal = state.cart.getSubtotal();
    cartView.rendersubTotal(state.subtotal);
    if(state.subtotal === 0){
        cartView.renderEmpty();
    }
})
elements.cartList.addEventListener("click", e => {
    const id = e.target.closest('.card__item').dataset.itemid;
    if (e.target.matches('.button__remove')) {
        state.cart.deleteItem(id);
        cartView.deleteItem(id);
        productView.renderAddBtn(id);
    }
    if (e.target.matches('.button__dec, .button__dec *')) {
        const curAmount = state.cart.getAmount(id);
        if (curAmount > 1) {
            state.cart.updateCount(id, curAmount - 1);
            cartView.renderAmount(id, curAmount - 1);
            const total = state.cart.updateTotal(id, 'dec');
            cartView.renderTotalItem(id,total);
        } else if (curAmount === 1) {
            state.cart.deleteItem(id);
            cartView.deleteItem(id);
            productView.renderAddBtn(id);
        }
    } else if (e.target.matches('.button__inc, .button__inc *')) {
        const curAmount = state.cart.getAmount(id);
        state.cart.updateCount(id, curAmount + 1);
        cartView.renderAmount(id, curAmount + 1);
        const total = state.cart.updateTotal(id, 'inc');
            cartView.renderTotalItem(id,total);
    }
    state.subtotal = state.cart.getSubtotal();
    cartView.rendersubTotal(state.subtotal);
    if(state.subtotal === 0){
        cartView.renderEmpty();
    }
})