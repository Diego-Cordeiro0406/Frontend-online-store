/* eslint-disable react/jsx-max-depth */
import { MdOutlinePayment } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function CheckoutShipping() {
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
            <FaShippingFast size="1.5em" />
            <span className="ml-1 flex flex-col">
              <p className="text-xs">Passo 2</p>
              <p className="text-xs">Envio</p>
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
            <MdOutlinePayment style={ { color: '#C1C1C3' } } size="1.5em" />
            <span className="ml-1 flex flex-col">
              <p className="text-xs text-black/25">Passo 3</p>
              <p className="text-xs text-black/25">Pagamento</p>
            </span>
          </div>
        </section>
        <section className="w-full flex flex-col items-center h-2/4">
          <section className="laptop:w-4/5 phone:w-11/12">
            <h3 className="font-semibold mb-8">Método de envio</h3>
            <div
              className="
                flex
                items-center
                justify-between
                laptop:px-6
                phone:pl-3
                w-full
                laptop:h-[4.5rem]
                phone:h-[8.5rem]
                border
                border-px
                border-[#D1D1D8]
                rounded-[11px]"
            >
              <div
                className="
                  flex
                  items-start
                  phone:flex-col
                  laptop:flex-row
                  phone:h-4/5
                  laptop:h-auto
                  phone:justify-evenly"
              >
                <input className="w-5 h-5" type="radio" name="" id="" />
                <p className="font-medium laptop:pl-2 laptop:mr-5">Grátis</p>
                <p className="text-[#A2A3B1]">envio padrão</p>
              </div>
            </div>
          </section>
        </section>
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
            Proximo
          </button>
        </div>
      </main>
    </>
  );
}

export default CheckoutShipping;
