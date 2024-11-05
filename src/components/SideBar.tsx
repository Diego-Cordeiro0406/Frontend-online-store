/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useRef, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Context from '../context/Context';

import cartICon from '../images/Cart.svg';
import favoritesIcon from '../images/Favorites.svg';

function SideBar() {
  const [lastValorInput, setLastValorInput] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const context = useContext(Context);
  const navigate = useNavigate();

  const location = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (context && context.valueInput !== lastValorInput) {
      setLastValorInput(context.valueInput);
      if (context.valueInput) {
        navigate('/');
        context.sendProductsRequest(context.valueInput);
      }
    }
  }, [context, lastValorInput]);

  if (!context) return null;

  const {
    toggleSideBar,
    sendProductsRequest,
    setSearch,
    setRoute,
    search,
    sidebarOpen,
    categories,
    valueInput,
    handleRadioChange,
  } = context;

  const navigateTo = (route: string) => {
    navigate(route);
    toggleSideBar();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setSearch(novoValor);
  };

  const handleClick = async () => {
    try {
      // redireciona para a pagina inicial caso a rota seja diferente de /
      if (location.pathname !== '/') {
        navigate('/');
        setRoute(true);
      } else {
        await sendProductsRequest(search);
        setSearch('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Previne o comportamento padrão do Enter (por exemplo, enviar um formulário)
      handleClick(); // Aciona a função de envio
      toggleSideBar();
      inputRef.current?.blur();
    }
  };

  return (
    <aside
      id="categories"
      className={
        `
          bg-white
          overflow-hidden
          toggle
          ${sidebarOpen ? 'open' : ''}
        `
      }
    >
      <section className="flex h-full flex-col items-center overflow-scroll">
        {/* <div className="flex flex-col justify-between w-[1.188rem] h-[18.75rem]">
          <a className="font-medium text-gray-500" href="zs">Home</a>
          <a className="font-medium text-gray-500" href="ss">Sobre</a>
          <a className="font-medium text-gray-500" href="ss">Contate-nos</a>
        </div> */}
        <div className="w-full">
          <FaArrowLeft
            size="1.5em"
            className="ml-4 mt-6"
            onClick={ () => toggleSideBar() }
          />
        </div>
        {
          isMobile && (
            <div
              className="h-14 w-11/12 mt-6"
            >
              <input
                className="
                  h-14
                  phone:w-full
                  laptop:w-2/5
                  rounded-[8px]
                  bg-[#F5F5F5]
                  pl-4
                  focus:outline-none
                  focus:ring
                  focus:ring-1
                  focus:ring-[#848484]"
                placeholder="Digite o que você procura"
                data-testid="query-input"
                value={ search }
                onChange={ handleInputChange }
                onKeyDown={ handleKeyDown }
              />
              <button
                data-testid="query-button"
                onClick={ handleClick }
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
          )
        }
        <div
          className="
            flex
            justify-evenly
            items-start
            w-11/12
            py-4
            border-b border-px"
        >
          <button
            onClick={ () => navigateTo('/favorites') }
            className="flex justify-center items-center w-4/5"
          >
            <img src={ favoritesIcon } alt="favorites-icon" />
            <p>Favoritos</p>
          </button>
          <button
            onClick={ () => navigateTo('/cart') }
            className="flex justify-center items-center w-4/5"
          >
            <img src={ cartICon } alt="cart-icon" />
            <p>Carrinho</p>
          </button>
        </div>
        <h3 className="w-11/12 font-semibold text-lg py-2 text-center">Categorias</h3>
        <section
          className="
                flex
                flex-col
                w-11/12
                justify-end
                items-center
                mb-"
        >
          {
                categories.map((category) => (
                  <span
                    key={ category.id }
                    id="categories-list"
                    className="
                      flex
                      justify-end
                      w-52
                      h-10
                    "
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
                      className="flex w-52 h-10 items-center
                      justify-end text-sm font-medium cursor-pointer
                      hover:font-bold hover:underline"
                      htmlFor={ category.name }
                    >
                      {category.name}
                    </label>
                  </span>
                ))
              }
        </section>
      </section>
    </aside>
  );
}

export default SideBar;
