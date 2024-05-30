import { fetchProducts } from "./APi";
import { debounce } from './debounce';

export const filterProducts = () => {
  const filterForm = document.querySelector(".filter__form");

  const applyFilters = () => {
    const formData = new FormData(filterForm);
    const type = formData.get("type");
    const minPrice = formData.get("minPrice");
    const maxPrice = formData.get("maxPrice");

    const params = {};

    if (type) params.type = type;
    if (minPrice) params.minPrice = minPrice;
    if (maxPrice) params.maxPrice = maxPrice;

    fetchProducts(params);
  };
  applyFilters();

  const applyPriceFilters = debounce(applyFilters, 800)
  filterForm.addEventListener("input", (event) => {
    const target = event.target;

    if (target.name === "type") {
      filterForm.minPrice.value = "";
      filterForm.maxPrice.value = "";
      applyFilters();
      return;
    }

    if (target.name === "minPrice" || target.name === "maxPrice") {
      applyPriceFilters()
    }
  });
};
