/* eslint-disable react/jsx-max-depth */
import { MdOutlinePayment } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import productExample from '../images/product-example.png';
import PaymentForm from '../components/PaymentForm';

function CheckoutPayment() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main
        className="
          flex
          flex-col
          w-full
          phone:h-full
          laptop:h-screen
          overflow-scroll
          items-center"
      >
        <section className="w-full flex items-center justify-evenly h-1/5">
          <div className="flex items-center">
            <GiPositionMarker size="1.5em" style={ { color: '#C1C1C3' } } />
            <span className="flex flex-col ml-1">
              <p className="text-xs text-black/25">Passo 1</p>
              <p className="text-xs text-black/25">Endereço</p>
            </span>
          </div>
          <span
            className="
              phone:w-4
              laptop:w-56
              border
              border-px
              border-[#E6E6E6]
              border-dashed"
          />
          <div className="flex items-center">
            <FaShippingFast size="1.5em" style={ { color: '#C1C1C3' } } />
            <span className="ml-1 flex flex-col">
              <p className="text-xs text-black/25">Passo 2</p>
              <p className="text-xs text-black/25">Envio</p>
            </span>
          </div>
          <span
            className="
              phone:w-4
              laptop:w-56
              border
              border-px
              border-[#E6E6E6]
              border-dashed"
          />
          <div className="flex items-center">
            <MdOutlinePayment size="1.5em" />
            <span className="ml-1 flex flex-col">
              <p className="text-xs">Passo 3</p>
              <p className="text-xs">Pagamento</p>
            </span>
          </div>
        </section>
        <section
          className="
            w-4/5
            flex
            items-start
            justify-between
            h-4/5
            "
        >
          <div
            className="
              summary-container
              border
              border-px
              border-[#EBEBEB]
              rounded-[10px]
              flex
              flex-col
              items-center"
          >
            <h3 className="font-semibold w-11/12 py-6">Resumo</h3>
            <span
              className="
                flex
                justify-between
                w-11/12
                h-[4.5rem]
                bg-[#F6F6F6]
                rounded-[13px]
                items-center
                px-5
                mb-4"
            >
              <div className="flex items-center">
                <img className="w-10 h-10" src={ productExample } alt="product-img" />
                <p className="ml-2 font-medium">Product name</p>
              </div>
              <p className="font-bold">R$ 4999</p>
            </span>
            <span
              className="
                flex
                justify-between
                w-11/12
                h-[4.5rem]
                bg-[#F6F6F6]
                rounded-[13px]
                items-center
                px-5
                mb-4"
            >
              <div className="flex items-center">
                <img className="w-10 h-10" src={ productExample } alt="product-img" />
                <p className="ml-2 font-medium">Product name</p>
              </div>
              <p className="font-bold">R$ 4999</p>
            </span>
            <span
              className="
                flex
                justify-between
                w-11/12
                h-[4.5rem]
                bg-[#F6F6F6]
                rounded-[13px]
                items-center
                px-5
                mb-4"
            >
              <div className="flex items-center">
                <img className="w-10 h-10" src={ productExample } alt="product-img" />
                <p className="ml-2 font-medium">Product name</p>
              </div>
              <p className="font-bold">R$ 4999</p>
            </span>
            <section className="w-11/12 h-3/6 flex flex-col justify-around">
              <span className="flex flex-col justify-evenly w-full h-3/6">
                <div>
                  <h4 className="w-full text-[#545454]">Endereço</h4>
                  <p className="w-full">1131 Dusty Townline, Jacksonville, TX 40322</p>
                </div>
                <div>
                  <h4 className="w-full text-[#545454]">Método de envio</h4>
                  <p className="w-full">Grátis</p>
                </div>
              </span>
              <span className="flex flex-col justify-evenly w-full h-3/6">
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-medium">Subtotal</h3>
                  <p className="font-bold">5400</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-[#545454]">Envio</h3>
                  <p className="font-bold">R$ 0</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <h3 className="font-medium">Total</h3>
                  <p className="font-bold">5400</p>
                </div>
              </span>
            </section>
          </div>
          <div className="summary-container">
            <PaymentForm />
            <div className="mt-16 phone:w-11/12 laptop:w-4/5 flex justify-end">
              <button
                onClick={ () => navigate(-1) }
                className="
                rounded-[6px]
                border
                border-px
                border-black
                w-[12.813rem]
                h-16"
              >
                Voltar
              </button>
              <a href="https://youtu.be/xvFZjo5PgG0?si=Poi0lsPiF-RUk5AL">
                <button
                  onClick={ () => navigate('/checkout/payment') }
                  className="
                rounded-[6px]
                bg-black
                text-white
                w-[12.813rem]
                h-16
                ml-6"
                >
                  Pagar
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default CheckoutPayment;
