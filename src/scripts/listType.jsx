export const ListType = (categories) => (
  <ul class="filter__type_list">
    {categories.map((category) => (
      <li class="filter__type_item">
        <button class="filter__type_button" type="button">
          {category}
        </button>
      </li>
    ))}
  </ul>
);

