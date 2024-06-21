import { API_URL } from "./APi";
class Store {
  constructor() {
    this.observers = [];
  }

  // метод для добавления новых ноблюдателей
  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }
  // метод наблюдения об изменениях в хранилище

  notifyObservers() {
    console.log(this);
    this.observers.forEach((observer) => observer());
  }
}

class ProductStore extends Store {
  constructor() {
    super();
    this.products = [];
    this.categories = new Set();
  }
  getProducts() {
    return this.products;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts);
    this.notifyObservers();
  }

  getCategories() {
    return this.categories;
  }

  updateCategories(products) {
    this.categories.clear();
    console.log(products);
    products.forEach((product) => {
      if (product.categories) {
        product.categories.forEach((category) => {
          console.log(
            "Store ~ product.categories.forEach ~ category:",
            category,
          );
          this.categories.add(category);
        });
      }
    });
    this.notifyObservers();
  }
}

class CartStore extends Store {
  constructor() {
    super();
    this.cart = [];
  }
  async init() {
    await this.registerCart();
    await this.fetchCart();
  }


  async registerCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart/register`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  getCart() {
    return this.cart;
  }

  async fetchCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart`, {
        method: "GET",
        // куки будут передваться серверу
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }

      const data = await response.json();
      this.cart = data;
      this.notifyObservers();
    } catch (error) {
      console.error(`Ошибка при отправке данных: ${error}`);
    }
  }

  async postCart({ id, quantity }) {
    try {
      const response = await fetch(`${API_URL}/api/cart/items`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: id, quantity }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }

      const data = await response.json();
      this.cart = data;
      this.notifyObservers();
    } catch (error) {
      console.error(`Ошибка при отправке данных: ${error}`);
    }
  }

  async addProductCart(id) {
    await this.postCart({ id, quantity: 1 });
  }

  clearCart() {
   this.cart = []
   this.notifyObservers()
  }
}

export const productStore = new ProductStore();
export const cartStore = new CartStore()
