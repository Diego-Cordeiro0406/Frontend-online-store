/* eslint-disable react/jsx-max-depth */
import { useContext, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../context/Context';

import cartICon from '../images/Cart.svg';
import userIcon from '../images/User.svg';
import favoritesIcon from '../images/Favorites.svg';

function SideBar() {
  const context = useContext(Context);
  const navigate = useNavigate();

  const location = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);

  if (!context) return null;

  const {
    toggleSideBar,
    sendProductsRequest,
    setSearch,
    setRoute,
    search,
    sidebarOpen,
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
        ` bg-white
          overflow-hidden
          toggle
        ${sidebarOpen ? 'open' : ''}
      }`
      }
    >
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
            onClick={ () => toggleSideBar() }
          />
        </div>
        <div
          className="h-14 w-11/12 mt-6"
        >
          <input
            className="
              h-full
              w-full
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
        <div className="flex flex-col justify-evenly h-52 items-start w-11/12">
          <button
            onClick={ () => navigateTo('/favorites') }
            className="flex items-center w-4/5"
          >
            <img src={ favoritesIcon } alt="favorites-icon" />
            <p>Favoritos</p>
          </button>
          <button
            onClick={ () => navigateTo('/cart') }
            className="flex items-center w-4/5"
          >
            <img src={ cartICon } alt="cart-icon" />
            <p>Carrinho</p>
          </button>
          <button
            onClick={ () => navigateTo('/profile') }
            className="flex items-center w-4/5"
          >
            <img src={ userIcon } alt="user-icon" />
            <p>Perfil</p>
          </button>
        </div>
      </section>
    </aside>
  );
}

export default SideBar;
