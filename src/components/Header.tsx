import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link data-testid="shopping-cart-button" to="/cart">
        <button>Carrinho</button>
      </Link>
    </header>
  );
}

export default Header;
