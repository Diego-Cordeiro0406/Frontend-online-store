/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import CategoriesBar from '../components/SideBar';
import arrowLeft from '../images/Arrow-left.svg';
import arrowRight from '../images/Arrow.svg';
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
          <main className="w-full mt-6 h-5/6 flex flex-col items-center">
            <div className="w-4/5 flex items-center justify-between">
              <h3
                className="
                  font-semibold
                  laptop:text-xl
                  w-4/5
                "
              >
                Procure por categoria
              </h3>
              <span className="flex">
                <img className="cursor-pointer" src={ arrowLeft } alt="arrow-left-icon" />
                <img
                  className="cursor-pointer"
                  src={ arrowRight }
                  alt="arrow-right-icon"
                />
              </span>
            </div>
            <section
              className="
                flex
                w-4/5
                h-[6.75rem]
                justify-evenly
                items-center
                overflow-scroll
                mb-"
            >
              {
                categories.map((category) => (
                  <span
                    key={ category.id }
                    id="categories-list"
                    className="
                      flex
                      w-52
                      h-10
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
                      className="flex w-52 h-10 items-center
                      justify-center text-sm font-medium"
                      htmlFor={ category.name }
                    >
                      {category.name}
                    </label>
                  </span>
                ))
              }
            </section>
            <section
              className="flex
                h-5/6
                flex-wrap
                justify-center
                w-full
                pt-5
                overflow-scroll"
            >
              <section
                className="
                w-4/5
                flex
                phone:flex-col
                laptop:flex-row
                items-center
                justify-between
                mb-1"
              >
                <div className="flex w-64">
                  <p>Produtos encontrados:</p>
                  <p className="font-bold">85</p>
                </div>
                <div>
                  <select
                    className="
                    w-64
                    h-10
                    px-4
                    bg-white
                    border
                    border-px
                    border-[#D4D4D4]
                    rounded-[8px]
                    appearance-none"
                    name=""
                    id=""
                  >
                    <option selected value="Maior preço">Maior preço</option>
                    <option value="Menor preço">Menor preço</option>
                  </select>
                </div>
              </section>
              <section
                className="
                flex
                h-5/6
                flex-wrap
                justify-center
                w-4/5
                pt-5"
              >
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
            </section>
          </main>)}
    </>
  );
}

export default MainScreen;
