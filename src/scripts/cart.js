import { renderCart } from "./renderCart";
import { cartStore } from "./Store";
const headerCartBtn = document.querySelector(".header__cart-button");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector(".cart__close");
const toggleCart = (e) => {
  cart.classList.toggle("cart_open");

  if (cart.classList.contains("cart_open") && window.innerWidth >= 1360) {
    cart.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const initCart = async() => {
   await cartStore.init();
    renderCart();

  headerCartBtn.addEventListener("click", toggleCart);
  cartClose.addEventListener("click", (e) => {
    cart.classList.remove("cart_open");
  });
};
