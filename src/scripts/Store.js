class Store {
  constructor() {
    this.observers = [];
    this.products = [];
  }

  // метод для добавления новых ноблюдателей
  subscribe(observerFunction) {
    this.observers.push(observerFunction);
  }
  // метод наблюдения об изменениях в хранилище

  notifyObservers() {
    this.observers.forEach((observer) => observer());
  }

  getProducts() {
    return this.products;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.notifyObservers();
  }
}

export const store = new Store("Стас", 28);

