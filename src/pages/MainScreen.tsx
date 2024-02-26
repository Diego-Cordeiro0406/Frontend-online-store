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
      <CategoriesBar />
      <Header />
      { categories.length === 0 ? <ScaleLoader
        data-testid="loading"
        color="#36d7b7"
      />
        : (
          <main
            className="
              flex
              flex-row
              overflow-auto
              overscroll-contain
              phone:h-screen
              tablet:h-screen
              laptop:h-full
              desktop:h-full
            "
          >
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
          data.length === 0 && !isTrue && !isLoading && (
            <p
              className="
                flex
                items-center
                text-xl
                font-semibold
                uppercase
                text-green-500
                w-96
                text-center
                "
              data-testid="home-initial-message"
            >
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
              { isLoading ? <ScaleLoader
                data-testid="loading"
                color="#36d7b7"
              /> : data
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
          </main>)}
    </>
  );
}

export default MainScreen;
