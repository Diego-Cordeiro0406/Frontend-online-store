import { useState } from 'react';
import { Link } from 'react-router-dom';

import CategoriesBar from '../components/CategoriesBar';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { Product } from '../types/typesApi';

function MainScreen() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Product[]>([]);

  async function handleClick() {
    const returned = await getProductsFromCategoryAndQuery(search);
    setData(returned.results);
  }

  return (
    <>
      <header>
        <input
          data-testid="query-input"
          onChange={ ({ target }) => setSearch(target.value) }
        />
        <button
          data-testid="query-button"
          onClick={ handleClick }
        >
          pesquisar
        </button>
        <Link data-testid="shopping-cart-button" to="/cart">
          <button onClick={ handleClick }>Carrinho</button>
        </Link>
      </header>
      <main>
        <CategoriesBar />
        {
          data.length === 0 ? (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : data.map((product) => (
            <div data-testid="product" key={ product.id }>
              <h3>{product.title}</h3>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{`R$ ${product.price}`}</p>
            </div>
          ))
        }
      </main>
    </>

  );
}

export default MainScreen;
