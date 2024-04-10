import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';

import Context from '../context/Context';
import Header from '../components/Header';
import CheckoutForm from '../components/CheckoutForm';

function CheckoutScreen() {
  const context = useContext(Context);
  const navigate = useNavigate();

  if (!context) return null;
  const { cart, getQuantity, removeProduct } = context;
  return (
    <>
      <Header />
      <main
        className="
          flex
          justify-center
          h-4/5
          laptop:flex-row
          phone:flex-col
          phone:overflow-y-scroll
        "
      >
        <section
          className="
            flex
            flex-col
            laptop:w-3/6
            laptop:h-full
            phone:h-3/6
            items-center
            bg-slate-100
          "
        >
          <button
            className="
              flex
              phone:w-full
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
              flex flex-col
              items-center
              bg-white
              shadow-2xl
              w-11/12
              laptop:h-[32rem]
              phone:h-5/6
              phone:max-height-96
              overflow-auto
              overscroll-y-scroll
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
                    className="flex flex-col items-center justify-evenly w-full h-28"
                    key={ product.id }
                  >
                    <span className="w-11/12 width" />
                    <div className="flex items-center justify-evenly w-full">
                      <button
                        aria-label="delete"
                        onClick={ () => removeProduct(product.id) }
                      >
                        <AiOutlineDelete size="1.5rem" />
                      </button>
                      <img
                        className="phone:w-20 phone:h-20"
                        src={ product.img }
                        alt={ product.title }
                      />
                      <h3
                        className="
                          text-center
                          font-mono
                          text-base
                          font-bold
                          phone:w-24
                          laptop:h-32
                          desktop:h-32
                          max-h-16
                          overflow-hidden
                        "
                      >
                        {product.title}
                      </h3>
                      <span className="flex">
                        <p className="laptop:pl-6 pr-1">R$</p>
                        <p
                          className="w-12"
                        >
                          {Number((product.price * product.quantity).toFixed(2))}
                        </p>
                      </span>
                    </div>
                  </div>
                ))
            }
          </section>
          <div
            className="
              flex
              justify-center
              items-center
              w-11/12
              h-[4rem]
              bg-white
              phone:mb-4
            "
          >
            <h3 className="text-xl font-bold">{`Total: R$ ${getQuantity()}`}</h3>
          </div>
        </section>
        <CheckoutForm />
      </main>
    </>
  );
}

export default CheckoutScreen;
