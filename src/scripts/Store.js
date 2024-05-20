class Store {
  constructor() {
    this.observers = [];
    this.products = [];
    this.categories = new Set();
  }

  // метод для добавления новых ноблюдателей
  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }
  // метод наблюдения об изменениях в хранилище

  notifyObservers() {
   console.log(this)
    this.observers.forEach((observer) => observer());
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
    console.log(products)
    products.forEach((product) => {
      if (product.categories) {
        product.categories.forEach((category) => {
          console.log("Store ~ product.categories.forEach ~ category:", category)
          this.categories.add(category);
        });
      }
    });
    this.notifyObservers();
  }
}

export const store = new Store();
