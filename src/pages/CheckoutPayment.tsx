/* eslint-disable react/jsx-max-depth */
import { MdOutlinePayment } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';

import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

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
        <section className="w-full flex flex-col items-center h-2/4">
          <h3 className="font-semibold mb-8">Método de envio</h3>
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
            Pagar
          </button>
        </div>
      </main>
    </>
  );
}

export default CheckoutPayment;
