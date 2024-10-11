import { useContext, useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Context from '../context/Context';

function CategoriesBar() {
  const [lastValorInput, setLastValorInput] = useState('');

  const context = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    if (context && context.valueInput !== lastValorInput) {
      setLastValorInput(context.valueInput);
      if (context.valueInput) {
        navigate('/');
        context.setSidebarOpen(false);
        context.sendProductsRequest(context.valueInput);
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
      className=""
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
        className=""
        htmlFor={ category.name }
      >
        {category.name}
      </label>
    </span>
  ));

  return (
    <aside
      id="categories"
      className=""
    >
      <div className="">
        <p className="">Categorias</p>
        <FaArrowLeft
          size="1.5em"
          className=""
          onClick={ () => toggleCategories() }
        />
      </div>
      <div className="">
        <span className="" />
      </div>
      {categoriesList}
    </aside>
  );
}

export default CategoriesBar;
