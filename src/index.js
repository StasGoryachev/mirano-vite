import "@/scss/index.scss";
import { initHeaderFixed } from "@/scripts/headerFixed";
import { initChoices } from "@/scripts/choices";
import { initCart } from "./scripts/cart";





const init = () => {
  initHeaderFixed()
  initChoices();
  initCart()
}

init()