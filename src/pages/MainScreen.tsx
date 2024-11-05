import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Context from '../context/Context';
import { Product } from '../types/typesApi';
import RecomendedProducts from '../components/RecomendedProducts';

function MainScreen() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [products, setProducts] = useState<Product[]>();
  const context = useContext(Context);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' && context?.route) {
      sendProductsRequest(search);
    }
  }, [location]);

  // Função para ordenar os produtos
  const sortProducts = (order: 'asc' | 'desc') => {
    const sortedProducts = [...data].sort((a, b) => {
      return order === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  };

  useEffect(() => {
    sortProducts(sortOrder);
  }, [context, sortOrder]);

  if (!context) return null;
  const {
    sendProductsRequest,
    search,
    isLoading,
    isTrue,
    data,
  } = context;

  return (
    <>
      <Header />
      <main className="w-full h-[90%] flex flex-col items-center">
        <section
          className="
                flex
                h-full
                flex-wrap
                justify-center
                w-full
                pt-5
                overflow-scroll"
        >
          {
            data.length > 0 && (
              <section
                className="
                  w-4/5
                  flex
                  phone:flex-col
                  laptop:flex-row
                  items-center
                  justify-between
                  py-4"
              >
                <div className="flex w-64">
                  <p>Produtos encontrados:</p>
                  <p className="font-bold">{data.length}</p>
                </div>
                <div>
                  <select
                    onChange={ (e) => setSortOrder(e.target.value as 'asc' | 'desc') }
                    className="
                      w-64
                      h-10
                      px-4
                      bg-white
                      border
                      border-px
                      border-[#D4D4D4]
                      rounded-[8px]
                      appearance-none
                      "
                  >
                    <option value="asc">Menor preço</option>
                    <option value="desc">Maior preço</option>
                  </select>
                </div>
              </section>
            )
              }
          <section
            className="
              flex
              h-full
              flex-wrap
              justify-center
              w-4/5"
          >
            {
              data.length === 0 && !isTrue && !isLoading && (
                <>
                  <h3
                    className="w-full text-xl font-semibold py-4"
                  >
                    Produtos recomendados
                  </h3>
                  <RecomendedProducts />
                </>
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
            ) : products?.map((product) => (
              <ProductCard
                key={ product.id }
                id={ product.id }
                title={ product.title }
                img={ product.thumbnail }
                price={ product.price }
              />
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

export default MainScreen;
