/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

// import { useMediaQuery } from 'react-responsive';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import Context from '../context/Context';
import Header from '../components/Header';
// import CartDesktop from '../components/CartDesktop';
// import CartMobile from '../components/CartMobile';
// import CategoriesBar from '../components/SideBar';

function ShoppingCart() {
  const context = useContext(Context);
  const navigate = useNavigate();

  // const isMobile = useMediaQuery({ maxWidth: 1023 });

  if (!context) return null;
  const { cart, getQuantity, addQuantity, sutractQuantity, removeProduct } = context;

  return (
    <>
      {/* <CategoriesBar /> */}
      <Header />
      {
        cart.length === 0
          ? (
            <div
              className=""
              data-testid="shopping-cart-empty-message"
            >

              <button
                className=""
                onClick={ () => navigate(-1) }
              >
                <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                Voltar
              </button>
              <h3
                className=""
              >
                Seu carrinho está vazio
              </h3>
            </div>
          )
          : (
            <main className="flex flex-col justify-around items-center w-full h-4/5">
              <div className="w-full pl-5">
                <button className="flex" onClick={ () => navigate(-1) }>
                  <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                  Voltar
                </button>
              </div>
              <section className="flex w-4/5 h-5/6">
                <section className="w-3/6 h-full overflow-scroll">
                  <section className="">
                    <h2 className="font-semibold text-2xl">
                      Carrinho de compras
                    </h2>
                    {
                      cart
                        .map((product) => (
                          <div
                            className="flex w-full border-b border-[#A3A3A3]/25 py-10"
                            key={ product.id }
                          >
                            <div className="flex w-full justify-between items-center">
                              <img src={ product.img } alt={ product.title } />
                              <h3 className="max-w-[12.063rem] font-medium">
                                {product.title}
                              </h3>
                              <div className="flex h-8">
                                <button
                                  aria-label="button-minus"
                                  className="
                                    flex
                                    items-center
                                    justify-center
                                    w-10
                                    h-8
                                    cursor-pointer
                                    "
                                  onClick={ () => sutractQuantity(product.id) }
                                >
                                  <FaMinus
                                    style={ { color: '#000000' } }
                                  />
                                </button>
                                <span
                                  className="
                                    w-10
                                    h-8
                                    flex
                                    justify-center
                                    items-center
                                    select-none
                                    border border-px
                                    border-[#D9D9D9]
                                    rounded-[4px]
                                    "
                                >
                                  {product.quantity}
                                </span>
                                <button
                                  aria-label="button-plus"
                                  className="
                                    flex
                                    items-center
                                    justify-center
                                    w-10
                                    h-8
                                    cursor-pointer
                                  "
                                  onClick={ () => addQuantity(product.id) }
                                >
                                  <FaPlus
                                    style={ { color: '#000000' } }
                                  />
                                </button>
                              </div>
                              <p className="">R$</p>
                              <p className="font-medium">
                                {Number((product.price * product.quantity).toFixed(2))}
                              </p>
                              <button
                                aria-label="delete"
                                onClick={ () => removeProduct(product.id) }
                              >
                                <AiOutlineDelete size="1.5rem" />
                              </button>
                            </div>
                            {/* <span className="w-4/5 width" /> */}
                          </div>
                        ))
                    }
                  </section>
                </section>
                <section
                  className="
                    w-3/6
                    h-full
                    border
                    border-px
                    border-[#EBEBEB]
                    rounded-[10px]
                    ml-12"
                >
                  <div>
                    <h3>Resumo do pedido</h3>
                    <span>
                      {/* <label htmlFor="code-input">
                        <input id="code-input" type="text" />
                      </label> */}
                    </span>
                    <h3 className="">
                      Valor total da compra:
                    </h3>
                    <p className="">{`R$ ${getQuantity()}`}</p>
                    <button
                      className="w-4/5 h-14 bg-black text-white rounded-[6px]"
                      onClick={ () => navigate('/checkout') }
                    >
                      Finalizar compra
                    </button>
                  </div>
                </section>
              </section>
            </main>
          )
      }
    </>

  );
}

export default ShoppingCart;
