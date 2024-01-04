import { useContext } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import Context from '../context/Context';
import Header from '../components/Header';

function ShoppingCart() {
  const context = useContext(Context);

  if (!context) return null;
  const { cart, getQuantity, addQuantity, sutractQuantity, removeProduct } = context;

  return (
    <>
      <Header />
      {
        cart.length === 0
          ? (
            <span
              className="flex justify-center items-center w-screen h-screen"
              data-testid="shopping-cart-empty-message"
            >
              <h3
                className="text-3xl font-semibold uppercase text-green-500"
              >
                Seu carrinho está vazio
              </h3>
            </span>
          )
          : (
            <main className="flex justify-center h-screen">
              <section
                className="
                flex
                w-4/6
                justify-center
                items-center
                bg-slate-100
              "
              >
                <section
                  className="
                    flex flex-col
                    items-center
                    bg-white
                    product-container
                    shadow-2xl
                    w-[48rem]
                    h-[40rem]
                    overflow-auto
                    overscroll-contain
                    "
                >
                  <h2
                    className="
                      text-center
                      font-mono
                      text-base
                      font-bold
                      w-80
                      max-h-12
                      overflow-hidden
                      my-8
                      "
                  >
                    Carrinho de compras
                  </h2>
                  {
              cart
                .map((product) => (
                  <div
                    className="flex flex-col items-center justify-evenly w-[36rem] h-28"
                    key={ product.id }
                  >
                    <span className="w-[36rem] width" />
                    <div className="flex items-center justify-evenly w-[36rem]">
                      <button
                        aria-label="delete"
                        onClick={ () => removeProduct(product.id) }
                      >
                        <AiOutlineDelete size="1.5rem" />
                      </button>
                      <img src={ product.img } alt={ product.title } />
                      <h3
                        className="
                          text-center
                          font-mono
                          text-base
                          font-bold
                          w-48
                          max-h-12
                          overflow-hidden
                        "
                      >
                        {product.title}
                      </h3>
                      <FaMinus
                        className="cursor-pointer ml-6"
                        style={ { color: '#B0B3BB' } }
                        onClick={ () => sutractQuantity(product.id) }
                      />
                      <span
                        className="
                          rounded-full
                          bg-gray-400
                          w-5
                          h-5
                          text-white
                          flex
                          justify-center
                          items-center
                          mx-2.5
                          "
                      >
                        {product.quantity}
                      </span>
                      <FaPlus
                        className="cursor-pointer"
                        style={ { color: '#B0B3BB' } }
                        onClick={ () => addQuantity(product.id) }
                      />
                      <p className="pl-6 pr-2">R$</p>
                      <p
                        className="w-12"
                      >
                        {Number((product.price * product.quantity).toFixed(2))}
                      </p>
                    </div>
                  </div>
                ))
            }
                </section>
              </section>
              <section
                className="
                  flex
                  w-2/6
                  flex-col
                  justify-center
                  items-center
                  h-full
                "
              >
                <h3
                  className="
                    w-80
                    h-12
                    font-bold
                    text-center
                    text-2xl
                    "
                >
                  Valor total da compra:
                </h3>
                <p className="font-bold text-2xl">{`R$ ${getQuantity()}`}</p>
                <button
                  className="
                  bg-green-400
                  text-white
                  font-mono
                  h-10
                  p-2
                  mt-4
                  rounded
                  hover:-translate-y-1
                  hover:scale-110
                  hover:bg-green-700
                  duration-300
                "
                >
                  Finalizar compra
                </button>
              </section>
            </main>
          )
      }
    </>

  );
}

export default ShoppingCart;
