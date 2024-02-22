import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';

import Context from '../context/Context';

function CartMobile() {
  const context = useContext(Context);
  const navigate = useNavigate();

  if (!context) return null;
  const { cart, getQuantity, addQuantity, sutractQuantity, removeProduct } = context;

  return (
    <>
      <section
        className="
                flex
                flex-col
                justify-evenly
                items-center
                bg-slate-100
              "
      >
        <button
          className="
                  flex
                  w-full
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
        <h2
          className="
            bg-white
            flex
            justify-center
            items-center
            text-center
            font-mono
            text-base
            font-bold
            h-20
            max-h-12
            mt-4
            cart-width
          "
        >
          Carrinho de compras
        </h2>
        <section
          className="
            flex flex-col
            items-center
            bg-white
            h-80
            shadow-2xl
            overflow-auto
            overscroll-contain
            cart-width
            mb-2
          "
        >
          {
              cart
                .map((product) => (
                  <div
                    className="flex flex-col items-center justify-evenly cart-width"
                    key={ product.id }
                  >
                    <span className="w-[16rem] width" />
                    <div className="flex items-center justify-center cart-width">
                      <button
                        aria-label="delete"
                        onClick={ () => removeProduct(product.id) }
                      >
                        <AiOutlineDelete size="1.5rem" />
                      </button>
                      <section>
                        <div className="flex items-center">
                          <img src={ product.img } alt={ product.title } />
                          <h3
                            className="
                          text-center
                          font-mono
                          text-base
                          font-bold
                          w-40
                          max-h-12
                          overflow-hidden
                        "
                          >
                            {product.title}
                          </h3>
                        </div>
                        <div className="flex p-2">
                          <FaMinus
                            className="cursor-pointer"
                            size="1.5em"
                            style={ { color: '#B0B3BB' } }
                            onClick={ () => sutractQuantity(product.id) }
                          />
                          <span
                            className="
                          rounded-full
                          bg-gray-400
                          w-6
                          h-6
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
                            size="1.5em"
                            style={ { color: '#B0B3BB' } }
                            onClick={ () => addQuantity(product.id) }
                          />
                          <p className="ml-6 pl-2 pr-2">R$</p>
                          <p
                            className="w-12"
                          >
                            {Number((product.price * product.quantity).toFixed(2))}
                          </p>
                        </div>
                      </section>

                    </div>
                  </div>
                ))
            }
        </section>
      </section>
      <section
        className="
          flex
          w-full
          flex-col
          justify-center
          items-center
          h-full
          p-4
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
          onClick={ () => navigate('/checkout') }
        >
          Finalizar compra
        </button>
      </section>
    </>
  );
}

export default CartMobile;
