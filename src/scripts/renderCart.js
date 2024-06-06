import { cartStore } from "./Store";
import { initCart } from "@/scripts/cart";

export const renderCart = () => {
  const cartList = document.querySelector(".cart__list");

  const updateList = () => {
    console.log("updateList");
    const cart = cartStore.getCart();
    console.log("updateList ~ cart:", cart)
  };

  cartStore.subscribe(updateList);
  updateList();
};
