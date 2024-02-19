import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../images/logo.png';
import cartLogo from '../images/Vector.svg';
import Context from '../context/Context';

function Header() {
  // Função responsável por lidar com a alteração de estado do input de pesquisa.
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setSearch(novoValor);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(Context);

  if (!context) return null;
  const {
    setRoute,
    search,
    setSearch,
    sendProductsRequest,
    cart,
    toggleCategories,
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

  return (
    <header
      className="
        bg-blue-700
        flex
        h-52
        phone:h-44
        flex-col
        justify-between
        items-center
        shadow-xl
        "
    >
      <div className="flex w-full h-2/4 justify-between items-center">
        <GiHamburgerMenu
          onClick={ () => toggleCategories() }
          style={ { color: '#FFFFFF' } }
          className="ml-5 laptop:w-10 laptop:h-10 phone:w-9 phone:h-9 cursor-pointer"
        />
        <img
          className="
          laptop:w-40
          laptop:h-12
          phone:w-36
          phone:h-10
        "
          src={ logo }
          alt="logo"
        />
        <Link
          className="
            h-10
            w-10
            mr-5
            laptop:top-0
            laptop:relative
          "
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <img
            src={ cartLogo }
            alt="cart-logo"
            className="h-10 w-10"
          />
          <div
            className="
              flex
              justify-center
              items-center
              rounded-full
              bg-green-400
              font-mono
              w-6
              h-6
              text-white
              absolute
              laptop:top-0
              laptop:left-5
              phone:right-4
              phone:top-4
              font-bold
            "
          >
            <p
              className="
                flex
                justify-center
                w-6
                h-6
                absolute
                phone:top-px
                laptop:top-px
              "
            >
              {cart.length}
            </p>
          </div>
        </Link>
      </div>
      <div
        className="
          w-full
          h-2/4
          flex
          items-center
          justify-center
        "
      >
        <input
          className="
            rounded-xl
            h-10
            laptop:w-96
            phone:w-80
            p-2
            font-sans
            focus:outline-none
            focus:ring
            focus:ring-emerald-500"
          placeholder="Digite o que você procura"
          data-testid="query-input"
          value={ search }
          onChange={ handleInputChange }
        />
        <button
          data-testid="query-button"
          onClick={ handleClick }
          aria-label="Pesquisar"
          className="absolute p-2 phone:ml-80 laptop:ml-96 mr-8"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}

export default Header;
