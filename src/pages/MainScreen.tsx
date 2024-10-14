import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import CategoriesBar from '../components/CategoriesBar';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Context from '../context/Context';

function MainScreen() {
  const context = useContext(Context);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' && context?.route) {
      sendProductsRequest(search);
    }
  }, [location]);

  if (!context) return null;
  const {
    sendProductsRequest,
    search,
    isLoading,
    isTrue,
    data,
    categories,
  } = context;

  return (
    <>
      {/* <CategoriesBar /> */}
      <Header />
      {/* { categories.length === 0 ? <ScaleLoader
        data-testid="loading"
        color="#36d7b7"
      />
        : (
          <main className="">
            <section className="">
              {
          data.length === 0 && !isTrue && !isLoading && (
            <p className="" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
        }
              {
          data.length === 0 && isTrue && (
            <p data-testid="not-found-product">
              Nenhum produto foi encontrado
            </p>
          )
        }
              { isLoading ? (
                <section className="flex justify-center items-center w-full h-full">
                  <ScaleLoader
                    data-testid="loading"
                    color="#36d7b7"
                  />
                </section>
              ) : data
                .map((product) => (
                  <ProductCard
                    key={ product.id }
                    id={ product.id }
                    title={ product.title }
                    img={ product.thumbnail }
                    price={ product.price }
                  />
                ))}
            </section>
          </main>)} */}
    </>
  );
}

export default MainScreen;
