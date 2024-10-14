/* eslint-disable react/jsx-max-depth */
import { useContext, useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../context/Context';

import cartICon from '../images/Cart.svg';
import userIcon from '../images/User.svg';
import favoritesIcon from '../images/Favorites.svg';

function SideBar() {
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
      className={
        ` bg-white
          overflow-hidden
          toggle
        ${sidebarOpen ? 'open' : ''}
      }`
      }
    >
      {/* <div className="">
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
      {categoriesList} */}
      <section className="flex h-full flex-col items-center">
        {/* <div className="flex flex-col justify-between w-[1.188rem] h-[18.75rem]">
          <a className="font-medium text-gray-500" href="zs">Home</a>
          <a className="font-medium text-gray-500" href="ss">Sobre</a>
          <a className="font-medium text-gray-500" href="ss">Contate-nos</a>
        </div> */}
        <div className="w-full">
          <FaArrowLeft
            size="1.5em"
            className="ml-4 mt-6"
            onClick={ () => toggleCategories() }
          />
        </div>
        <div
          className="h-14 w-11/12 mt-6"
        >
          <input
            className="h-full w-full rounded-[8px] bg-[#F5F5F5] pl-4"
            placeholder="Digite o que você procura"
            data-testid="query-input"
          />
          <button
            data-testid="query-button"
              // onClick={ handleClick }
            aria-label="Pesquisar"
            className=""
          >
            {/* <img
                className="absolute top-8 left-[282px]"
                src={ searchIcon }
                alt="search-icon"
              /> */}
          </button>
        </div>
        <div className="flex flex-col justify-evenly h-52 items-start w-11/12">
          <span className="flex items-center w-4/5">
            <img src={ favoritesIcon } alt="favorites-icon" />
            <p>Favoritos</p>
          </span>
          <Link to="/cart" className="flex items-center w-4/5">
            <img src={ cartICon } alt="cart-icon" />
            <p>Carrinho</p>
          </Link>
          <span className="flex items-center w-4/5">
            <img src={ userIcon } alt="user-icon" />
            <p>Perfil</p>
          </span>
        </div>
      </section>
    </aside>
  );
}

export default SideBar;
