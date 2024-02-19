import { useContext, useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import Context from '../context/Context';

function CategoriesBar() {
  const [lastValorInput, setLastValorInput] = useState('');

  const context = useContext(Context);

  useEffect(() => {
    if (context && context.valueInput !== lastValorInput) {
      setLastValorInput(context.valueInput);
      if (context.valueInput) {
        context.sendProductsRequest(context.valueInput);
        context.toggleCategories();
      }
    }
  }, [context, lastValorInput]);

  if (!context) return null;

  const {
    categories,
    valueInput,
    handleRadioChange,
    toggleCategories,
    sidebarOpen,
  } = context;

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
      id="categories"
      className={ `
      flex
      flex-col
      lg:w-1/5
      bg-white
      justify-start
      items-center
      max-h-screen
      overflow-auto
      overscroll-contain
      shadow-xl
      toggle
      ${sidebarOpen ? 'open' : ''}
      ` }
    >
      <div className="flex w-full pt-6 items-center justify-center">
        <p className="w-full text-xl font-bold">Categorias</p>
        <FaArrowLeft
          size="1.5em"
          className="mr-5 cursor-pointer"
          onClick={ () => toggleCategories() }
        />
      </div>
      <div className="w-full flex justify-start my-6">
        <span className="w-60 width" />
      </div>
      {categoriesList}
    </aside>
  );
}

export default CategoriesBar;
