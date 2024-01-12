import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';

import Context from '../context/Context';
import Header from '../components/Header';
import CheckoutForm from '../components/CheckoutForm';

function CheckoutScreen() {
  const context = useContext(Context);
  const navigate = useNavigate();

  if (!context) return null;
  const { cart, getQuantity, addQuantity, sutractQuantity, removeProduct } = context;
  return (
    <>
      <Header />
      <main className="flex justify-center h-screen">
        <button
          className="
                  absolute
                  top-32
                  left-10
                  flex
                  items-center
                  font-semibold
                  text-lg
                  text-[#2FC18C]
                "
          onClick={ () => navigate(-1) }
        >
          <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
          Voltar
        </button>
        <section
          className="
                flex
                flex-col
                w-3/6
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
                    w-[36rem]
                    h-[32rem]
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
                      mt-8
                      mb-6
                      "
            >
              Revise seus Produtos
            </h2>
            {
              cart
                .map((product) => (
                  <div
                    className="flex flex-col items-center justify-evenly w-[32rem] h-28"
                    key={ product.id }
                  >
                    <span className="w-[32rem] width" />
                    <div className="flex items-center justify-evenly w-[32rem]">
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
          <div className="flex justify-center items-center w-[36rem] h-[4rem] bg-white">
            <h3 className="text-xl font-bold">{`Total: R$ ${getQuantity()}`}</h3>
          </div>
        </section>
        <CheckoutForm />
      </main>
    </>
  );
}

export default CheckoutScreen;
