import { useContext } from 'react';
import CategoriesContext from '../context/CategoriesContext';

function CategoriesBar() {
  const categoriesContext = useContext(CategoriesContext);
  const categoriesList = categoriesContext.map((category) => (
    <span key={ category.id } id="categories-list">
      <input
        name="categories"
        value={ category.id }
        type="radio"
        id={ category.name }
      // onClick={ this.handlerInputChange }
      />
      <label
        data-testid="category"
        htmlFor={ category.name }
      >
        {category.name}
      </label>
    </span>
  ));

  return (
    <aside>
      {categoriesList}
    </aside>
  );
}

export default CategoriesBar;
