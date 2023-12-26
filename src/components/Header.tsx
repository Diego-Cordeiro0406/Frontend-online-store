import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import logo from '../images/logo.png';
import cart from '../images/Vector.svg';
import Context from '../context/Context';

// interface HeaderProps {
//   sendProductsRequest?: (data: string) => Promise<void>
// }

function Header() {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setSearch(novoValor);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const context = useContext(Context);

  if (!context) return null;
  const { setBatata, search, setSearch, sendProductsRequest } = context;

  const handleClick = async () => {
    try {
      if (location.pathname !== '/') {
        navigate('/');
        setBatata(true);
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
          className="h-10 w-10 mr-5"
        >
          <img
            src={ cart }
            alt="cart-logo"
            className="h-10 w-10"
          />
        </button>
      </Link>
    </header>
  );
}

export default Header;
