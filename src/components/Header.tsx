import { useContext, useRef } from 'react';
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Previne o comportamento padrão do Enter (por exemplo, enviar um formulário)
      handleClick(); // Aciona a função de envio
      inputRef.current?.blur();
    }
  };

  return (
    <header className="">
      <div className="">
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
      </div>
      <div
        className=""
      >
        <input
          className=""
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
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}

export default Header;
