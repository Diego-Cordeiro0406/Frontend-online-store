/* eslint-disable max-lines */
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
            <main
              className="
                flex
                flex-col
                justify-around
                items-center
                w-full
                laptop:h-4/5
                cart-container
                phone:overflow-scroll"
            >
              <div className="w-full laptop:pl-5 phone:pl-2">
                <button className="flex" onClick={ () => navigate(-1) }>
                  <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                  Voltar
                </button>
              </div>
              <section
                className="
                  flex
                  phone:flex-col
                  laptop:flex-row
                  laptop:w-4/5
                  laptop:h-5/6
                  phone:h-full
                  phone:items-center
                  phone:mt-2
                  laptop:mt-0"
              >
                <section
                  className="phone:w-full laptop:w-3/6 h-full laptop:overflow-scroll"
                >
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
                            <div
                              className="flex w-full laptop:justify-between items-center"
                            >
                              <img src={ product.img } alt={ product.title } />
                              <section
                                className="
                                  flex
                                  items-center
                                  phone:flex-col
                                  laptop:flex-row"
                              >
                                <h3 className="max-w-[12.063rem] font-medium">
                                  {product.title}
                                </h3>
                                <section className="flex items-center">
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
                                  <div className="flex items-center">
                                    <p className="">R$</p>
                                    <p className="font-medium">
                                      {
                                    Number((product.price * product.quantity).toFixed(2))
                                    }
                                    </p>
                                    <button
                                      className="ml-1"
                                      aria-label="delete"
                                      onClick={ () => removeProduct(product.id) }
                                    >
                                      <AiOutlineDelete size="1.5rem" />
                                    </button>
                                  </div>
                                </section>
                              </section>
                            </div>
                          </div>
                        ))
                    }
                  </section>
                </section>
                <section
                  className="
                    laptop:w-3/6
                    phone:w-11/12
                    h-full
                    border
                    border-px
                    border-[#EBEBEB]
                    rounded-[10px]
                    laptop:ml-12
                    flex
                    items-center
                    justify-center
                    phone:mt-10
                    laptop:mt-0"
                >
                  <div
                    className="
                      flex
                      laptop:w-4/5
                      phone:w-11/12
                      laptop:h-4/5
                      phone:h-[31.25rem]
                      flex-col
                      justify-evenly
                      items-center"
                  >
                    <h3
                      className="phone:w-full laptop:w-4/5 text-xl font-bold"
                    >
                      Resumo do pedido
                    </h3>
                    <span className="phone:w-full laptop:w-4/5">
                      <label className="text-[#545454]" htmlFor="code-input">
                        Código de desconto
                        <input
                          placeholder="Código"
                          className="
                            w-full
                            h-14
                            border
                            border-px
                            border-[#9F9F9F]
                            rounded-[7px]
                            pl-1
                            mt-1
                          "
                          id="code-input"
                          type="text"
                        />
                      </label>
                    </span>
                    <span className="flex phone:w-full laptop:w-4/5 justify-between">
                      <h3 className="font-medium">
                        Subtotal:
                      </h3>
                      <p className="font-semibold">{`R$ ${getQuantity()}`}</p>
                    </span>
                    <span className="flex phone:w-full laptop:w-4/5 justify-between">
                      <h3 className="font-medium">
                        Frete:
                      </h3>
                      <p className="font-semibold">{`R$ ${0}`}</p>
                    </span>
                    <span className="flex phone:w-full laptop:w-4/5 justify-between">
                      <h3 className="font-medium">
                        Valor total da compra:
                      </h3>
                      <p className="font-semibold">{`R$ ${getQuantity()}`}</p>
                    </span>
                    <button
                      className="
                        phone:w-full
                        laptop:w-4/5
                        h-14
                        bg-black
                        text-white
                        rounded-[6px]
                    "
                      onClick={ () => navigate('/checkout/address') }
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
