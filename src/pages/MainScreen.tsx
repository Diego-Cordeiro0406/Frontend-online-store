import { useState } from 'react';
import { Link } from 'react-router-dom';

import CategoriesBar from '../components/CategoriesBar';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { Product } from '../types/typesApi';
import ProductCard from '../components/ProductCard';
import logo from '../images/logo.png';

interface MainScreenProps { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MainScreen(_props: MainScreenProps) {
  const [search, setSearch] = useState('');
  const [isTrue, setTrue] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [categoryInput, setCategoryInput] = useState<string | null>(null);

  const getValorRadio = (dataCategory: string) => {
    setCategoryInput(dataCategory);
  };

  async function sendProductsRequest() {
    if (categoryInput) {
      const returned = await getProductsFromCategoryAndQuery(search, categoryInput);
      setData(returned.results);
    } else {
      const returned = await getProductsFromCategoryAndQuery(search);
      setData(returned.results);
    }
    if (data.length === 0) setTrue(true);
  }

  return (
    <>
      <header
        className="
        bg-cyan-700
        flex
        h-32
        justify-between items-center
        shadow-xl
        "
      >
        <img className="w-40 h-12" src={ logo } alt="logo" />
        <div className="h-32 flex items-center justify-center">
          <input
            className="rounded h-8 w-32"
            data-testid="query-input"
            onChange={ ({ target }) => setSearch(target.value) }
          />
          <button
            data-testid="query-button"
            onClick={ sendProductsRequest }
          >
            pesquisar
          </button>
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <button>Carrinho</button>
        </Link>
      </header>
      <main
        className="
        flex
        flex-row
        overflow-auto
        overscroll-contain
        "
      >
        <CategoriesBar
          sendRadioValue={ getValorRadio }
          // eslint-disable-next-line react/jsx-no-bind
          sendProductsRequest={ sendProductsRequest }
        />
        <section
          className="
          bg-slate-200
          flex
          w-full
          justify-evenly
          items-center
          flex-wrap
          overflow-y-scroll
          section-container
          "
        >
          {
            data.length === 0 && !isTrue && (
              <p
                className="flex items-center"
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
          }
          {
            data.length === 0 && isTrue ? (
              <p data-testid="not-found-product">
                Nenhum produto foi encontrado
              </p>
            ) : data.map((product) => (
              <Link
                key={ product.id }
                data-testid="product-detail-link"
                to={ `/product/${product.id}` }
              >
                <ProductCard
                  key={ product.id }
                  title={ product.title }
                  img={ product.thumbnail }
                  price={ product.price }
                />
              </Link>
            ))
          }
        </section>

      </main>
    </>

  );
}

export default MainScreen;
