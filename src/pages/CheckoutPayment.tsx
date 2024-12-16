/* eslint-disable react/jsx-max-depth */
import { MdOutlinePayment } from 'react-icons/md';
import { FaShippingFast } from 'react-icons/fa';
import { GiPositionMarker } from 'react-icons/gi';

import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import Summary from '../components/Summary';
import PaymentSection from '../components/PaymentSection';

function CheckoutPayment() {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
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
            laptop:w-4/5
            phone:w-full
            flex
            laptop:items-start
            laptop:justify-between
            phone:justify-center
            laptop:h-4/5
            phone:h-full
            "
        >
          {
            !isMobile && <Summary />
          }
          <PaymentSection />
        </section>
      </main>
    </>
  );
}

export default CheckoutPayment;
