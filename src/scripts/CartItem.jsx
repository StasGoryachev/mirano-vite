import { API_URL } from "./APi";

export const CartElem = (product) => (
   <li class="cart__item" key={product.id}>
     <img src={`${API_URL}${product.photoUrl}`} alt={product.name} class="cart__image" />
     <h4 class="cart__item-title">{product.name}</h4>
     <div class="cart__counter">
       <button
         type="button"
         class="cart__counter-btn">
         -
       </button>
       <input
         type="number"
         class="cart__counter-input"
         min="0"
         max="99"
         value={product.quantity}
       />
       <button
         type="button"
         class="cart__counter-btn">
         +
       </button>
     </div>
     <p class="cart__price">{product.price * product.quantity}&nbsp;&#8381;</p>
   </li>
 );