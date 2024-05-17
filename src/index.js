import "@/scss/index.scss";
import { initHeaderFixed } from "@/scripts/headerFixed";
import { initChoices } from "@/scripts/choices";
import { initCart } from "@/scripts/cart";
import { renderProducts } from "@/scripts/renderProducts";
import { store } from "./scripts/Store";

const init = () => {
  initHeaderFixed();
  initChoices();
  initCart();
  renderProducts();
};

init();



store
console.log("store:", store)
