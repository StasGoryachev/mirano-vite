import { fetchProducts } from "./APi";

export const initSearchProducts = () => {
  const headerForm = document.querySelector(".header__form");
  const goodsTitle = document.querySelector(".goods__title");

  headerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(headerForm);
    const searchQuery = formData.get("search").trim();

    if (searchQuery) {
      goodsTitle.textContent = "Результат поиска";
      fetchProducts({ search: searchQuery });
    }
  });
};
