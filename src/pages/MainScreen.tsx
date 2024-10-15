import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import CategoriesBar from '../components/SideBar';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Context from '../context/Context';

function MainScreen() {
  const [lastValorInput, setLastValorInput] = useState('');
  const context = useContext(Context);
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' && context?.route) {
      sendProductsRequest(search);
    }
  }, [location]);

  useEffect(() => {
    if (context && context.valueInput !== lastValorInput) {
      setLastValorInput(context.valueInput);
      if (context.valueInput) {
        navigate('/');
        // context.setSidebarOpen(false);
        context.sendProductsRequest(context.valueInput);
      }
    }
  }, [context, lastValorInput]);

  if (!context) return null;
  const {
    sendProductsRequest,
    search,
    isLoading,
    isTrue,
    data,
    categories,
    valueInput,
    handleRadioChange,
  } = context;

  return (
    <>
      {/* <CategoriesBar /> */}
      <Header />
      { categories.length === 0 ? <ScaleLoader
        data-testid="loading"
        color="#36d7b7"
      />
        : (
          <main className="w-full h-5/6">
            <h3 className="font-semibold text-xl">Procure por categoria</h3>
            <section className="flex justify-evenly items-end overflow-scroll">
              {
                categories.map((category) => (
                  <span
                    key={ category.id }
                    id="categories-list"
                    className="
                      flex
                      laptop:w-52
                      laptop:h-10
                      bg-[#EDEDED]
                      rounded-[10px]
                      mr-1
                    "
                  >
                    <input
                      className="appearance-none"
                      name="categories"
                      data-testid="category"
                      value={ category.id }
                      type="radio"
                      id={ category.name }
                      checked={ valueInput === category.id }
                      onChange={ handleRadioChange }
                    />
                    <label
                      className="flex laptop:w-52 laptop:h-10 items-center
                      justify-center text-sm font-medium"
                      htmlFor={ category.name }
                    >
                      {category.name}
                    </label>
                  </span>
                ))
              }
            </section>
            <section className="flex flex-wrap justify-center">
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
          </main>)}
    </>
  );
}

export default MainScreen;
