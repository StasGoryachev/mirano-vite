import "@/scss/index.scss";
import { initHeaderFixed } from "@/scripts/headerFixed";
import { initChoices } from "@/scripts/choices";
import { initCart } from "@/scripts/cart";
import { renderProducts } from "@/scripts/renderProducts";
import { store } from "./scripts/Store";
import { fetchProducts } from "./scripts/APi";

const init = () => {
  initHeaderFixed();
  initChoices();
  initCart();
//   fetchProducts({type: "toys"});
// fetchProducts({type: "bouquets"});
fetchProducts();
renderProducts();
};

init();

store;
console.log("store:", store);
