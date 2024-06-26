import { API_URL } from "./APi";
import { cartStore } from "./Store";

export const ProductCard = (product) => {
  return (
    <li class="goods__item">
      <article class="goods__card card">
        <img
          class="card__img"
          src={`${API_URL}${product.photoUrl}`}
          alt={product.name}
        />

        <div class="card__content">
          <h3 class="card__title">{product.name}</h3>

          <div class="card__footer">
            <p class="card__date-delivery">сегодня в&nbsp;14:00</p>
            <button
              class="card__button"
              onMouseEnter={(e) => {
                e.target.innerHTML = 'В корзину';
              }}
              onMouseLeave={(e) => {
                e.target.innerHTML = `${product.price}&nbsp;Р`;
              }}
            onClick={() => {cartStore.addProductCart(product.id) }}>
              {product.price}&nbsp;Р
            </button>
          </div>
        </div>
      </article>
    </li>
  );
};
