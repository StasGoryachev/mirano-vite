class Store {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export const store = new Store('Стас', 28);
console.log("store:", store)
