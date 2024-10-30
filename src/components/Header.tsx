import { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import logo from '../images/logo.png';
import burger from '../images/Burger.svg';
import cartICon from '../images/Cart.svg';
import userIcon from '../images/User.svg';
import favoritesIcon from '../images/Favorites.svg';
import searchIcon from '../images/Search.svg';
import Context from '../context/Context';
import SideBar from './SideBar';

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  // Função responsável por lidar com a alteração de estado do input de pesquisa.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setSearch(novoValor);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(Context);

  if (!context) return null;
  const {
    setRoute,
    search,
    setSearch,
    sendProductsRequest,
    // cart,
    toggleSideBar,
  } = context;

  // Função responsável por fazer a requisição a api ao clicar no botão de pesquisa.
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
      inputRef.current?.blur();
    }
  };

  return (
    <header
      className="
        flex
        w-screen
        h-[5.5rem]
        justify-evenly
        items-center
        overflow-x-hidden
        h-1/6
        max-h-[5.5rem]
        px-1
        bg-white"
    >
      {/* <div className="">
        <GiHamburgerMenu
          onClick={ () => toggleCategories() }
          style={ { color: '#FFFFFF' } }
          className=""
        />
        <Link to="/">
          <img
            className=""
            src={ logo }
            alt="logo"
          />
        </Link>
        <Link
          className=""
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <img
            src={ cartLogo }
            alt="cart-logo"
            className=""
          />
          <div
            className=""
          >
            <p className="">
              {cart.length}
            </p>
          </div>
        </Link>
      </div> */}
      <section
        className="
          flex
          items-center
          h-full
          w-full
          phone:justify-between
          laptop:justify-evenly"
      >
        <img
          className="phone:w-32 phone:h-10 laptop:w-40 laptop:h-12 laptop:mr-4"
          src={ logo }
          alt="logo"
        />
        {
          !isMobile && (
            <div
              className="h-14 w-[27.063rem]"
            >
              <input
                className="
                  h-full
                  w-full
                  rounded-[8px]
                  bg-[#F5F5F5]
                  pl-10
                  focus:outline-none
                  focus:ring
                  focus:ring-1
                  focus:ring-[#848484]"
                placeholder="Procurar"
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
                <img
                  className="absolute top-8 left-[282px]"
                  src={ searchIcon }
                  alt="search-icon"
                />
              </button>
            </div>

          )
      }
        {
        !isMobile && (
          <>
            <div className="flex justify-between w-[18.75rem] h-[1.188rem]">
              <a className="font-medium text-gray-500" href="zs">Home</a>
              <a className="font-medium text-gray-500" href="ss">Sobre</a>
              <a className="font-medium text-gray-500" href="ss">Contate-nos</a>
            </div>
            <div className="w-36 flex justify-between h-8">
              <img src={ favoritesIcon } alt="favorites-icon" />
              <Link to="/cart">
                <img src={ cartICon } alt="cart-icon" />
              </Link>
              <img src={ userIcon } alt="user-icon" />
            </div>
          </>
        )
      }
        {
        isMobile && (
          <button
            aria-label="burger-icon"
            className="w-10 h-10"
            onClick={ () => toggleSideBar() }
          >
            <img
              src={ burger }
              alt="burger-icon"
              className="w-10 h-10"
            />
          </button>

        )
      }
        <SideBar />
      </section>
    </header>
  );
}

export default Header;
