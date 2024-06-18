import "@/scss/index.scss";
import { initHeaderFixed } from "@/scripts/headerFixed";
import { initChoices } from "@/scripts/choices";
import { initCart } from "@/scripts/cart";
import { renderProducts } from "@/scripts/renderProducts";
import { productStore } from "./scripts/Store";
import { fetchProducts } from "./scripts/APi";
import { initChoicesType } from "./scripts/choicesType";
import { filterProducts } from "./scripts/filterProducts";
import { initSearchProducts } from "./scripts/searchProduct";
import { initOrder } from "./scripts/orderController";

const init = () => {
  initHeaderFixed();
  initChoices();
  initChoicesType()
  initCart();
  initSearchProducts();
  fetchProducts();
  renderProducts();
  filterProducts()
  initOrder();
};

init();

productStore;

