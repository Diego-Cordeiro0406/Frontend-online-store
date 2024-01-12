import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import logo from '../images/logo.png';
import cartLogo from '../images/Vector.svg';
import Context from '../context/Context';

function Header() {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setSearch(novoValor);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(Context);

  if (!context) return null;
  const { setRoute, search, setSearch, sendProductsRequest, cart } = context;

  const handleClick = async () => {
    try {
      if (location.pathname !== '/') {
        navigate('/');
        setRoute(true);
      } else {
        await sendProductsRequest(search);
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
        h-32
        justify-between items-center
        shadow-xl
        "
    >
      <img className="w-40 h-12 ml-5" src={ logo } alt="logo" />
      <div className="h-10 flex items-center justify-center relative">
        <input
          className="
            rounded-xl
            h-full
            w-96
            p-2
            font-sans
            focus:outline-none
            focus:ring
            focus:ring-emerald-500"
          placeholder="Digite o que você procura"
          data-testid="query-input"
          onChange={ handleInputChange }
        />
        <button
          data-testid="query-button"
          onClick={ handleClick }
          aria-label="Pesquisar"
          className="absolute p-2 ml-96 mr-8"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
      <Link data-testid="shopping-cart-button" to="/cart">
        <button
          aria-label="Carrinho"
          className="h-10 w-10 mr-5 relative"
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
              bottom-4
              left-5
              font-bold
            "
          >
            <p className="w-6 h-6 absolute top-px">{cart.length}</p>
          </div>
        </button>
      </Link>
    </header>
  );
}

export default Header;
