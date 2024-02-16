import { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function CategoriesBar() {
  const [lastValorInput, setLastValorInput] = useState('');

  const context = useContext(Context);

  useEffect(() => {
    if (context && context.valueInput !== lastValorInput) {
      setLastValorInput(context.valueInput);
      if (context.valueInput) {
        context.sendProductsRequest(context.valueInput);
      }
    }
  }, [context, lastValorInput]);

  if (!context) return null;

  const { categories, valueInput, handleRadioChange } = context;

  const categoriesList = categories.map((category) => (
    <span
      key={ category.id }
      id="categories-list"
      className="flex justify-start w-full my-1"
    >
      <input
        className="appearance-none"
        name="categories"
        data-testid="category"
        value={ category.id }
        type="radio"
        id={ category.name }
        checked={ valueInput === category.id }
        onChange={ handleRadioChange }
      />
      <label
        className="hover:font-bold hover:underline text-lg font-medium"
        htmlFor={ category.name }
      >
        {category.name}
      </label>
    </span>
  ));

  return (
    <aside
      className="
      flex
      flex-col
      lg:w-1/5
      phone:w-2
      justify-start
      items-center
      max-h-screen
      overflow-auto
      overscroll-contain
      shadow-xl
      "
    >
      <p className="w-full mt-6 text-xl font-bold">Categorias</p>
      <div className="w-full flex justify-start my-6">
        <span className="w-60 width" />
      </div>
      {categoriesList}
    </aside>
  );
}

export default CategoriesBar;
