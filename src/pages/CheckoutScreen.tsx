/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { TiArrowBack } from 'react-icons/ti';
import { GiPositionMarker } from 'react-icons/gi';
import { FaShippingFast, FaPlusCircle } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';

import editIcon from '../images/edit.svg';
import removeIcon from '../images/close.svg';
import Context from '../context/Context';
import Header from '../components/Header';
// import CheckoutForm from '../components/CheckoutForm';

function CheckoutScreen() {
  const context = useContext(Context);
  // const navigate = useNavigate();

  if (!context) return null;
  // const { cart, getQuantity, removeProduct } = context;
  return (
    <>
      <Header />
      <main className="flex flex-col w-full phone:h-full laptop:h-screen overflow-scroll">
        <section className="w-full flex items-center justify-evenly h-1/5">
          <div className="flex items-center">
            <GiPositionMarker size="1.5em" />
            <span className="flex flex-col">
              <p className="text-xs">Passo 1</p>
              <p className="text-xs">Endereço</p>
            </span>
          </div>
          <span
            className="
              phone:w-10
              laptop:w-56
              border
              border-px
              border-[#E6E6E6]
              border-dashed"
          />
          <div className="flex items-center">
            <FaShippingFast size="1.5em" style={ { color: '#C1C1C3' } } />
            <span className="flex flex-col">
              <p className="text-xs text-black/25">Passo 2</p>
              <p className="text-xs text-black/25">Envio</p>
            </span>
          </div>
          <span
            className="
              phone:w-10
              laptop:w-56
              border
              border-px
              border-[#E6E6E6]
              border-dashed"
          />
          <div className="flex items-center">
            <MdOutlinePayment style={ { color: '#C1C1C3' } } size="1.5em" />
            <span className="flex flex-col">
              <p className="text-xs text-black/25">Passo 3</p>
              <p className="text-xs text-black/25">Pagamento</p>
            </span>
          </div>
          {/* <button className="" onClick={ () => navigate(-1) }>
            <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
            Voltar
          </button>
          <section className="">
            <h2 className="">
              Revise seus Produtos
            </h2>
            {
              cart
                .map((product) => (
                  <div
                    className=""
                    key={ product.id }
                  >
                    <span className="" />
                    <div className="">
                      <button
                        aria-label="delete"
                        onClick={ () => removeProduct(product.id) }
                      >
                        <AiOutlineDelete size="1.5rem" />
                      </button>
                      <img
                        className=""
                        src={ product.img }
                        alt={ product.title }
                      />
                      <h3 className="">
                        {product.title}
                      </h3>
                      <span className="flex">
                        <p className="">R$</p>
                        <p
                          className=""
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
            className=""
          >
            <h3 className="">{`Total: R$ ${getQuantity()}`}</h3>
          </div> */}
        </section>
        <section className="w-full flex flex-col items-center h-2/4">
          <section className="w-4/5">
            <h3 className="font-semibold mb-8">Selecione o endereço</h3>
            <div
              className="flex items-center justify-between px-6 w-full h-36 bg-[#F6F6F6]"
            >
              <div className="flex items-start">
                <input className="w-5 h-5" type="radio" name="" id="" />
                <span className="ml-2">
                  <p
                    className="laptop:text-base phone:text-xs"
                  >
                    2118 Thornridge
                  </p>
                  <p
                    className="laptop:text-base phone:text-xs"
                  >
                    2118 Thornridge Cir.Syracuse, Connecticut 35624
                  </p>
                  <p
                    className="laptop:text-base phone:text-xs"
                  >
                    (209) 555-0104
                  </p>
                </span>
              </div>
              <span className="flex w-[4.5rem] justify-between">
                <img src={ editIcon } alt="edit-icon" />
                <img src={ removeIcon } alt="remove-icon" />
              </span>
            </div>
          </section>
        </section>
        <section className="w-full h-1/4 flex flex-col items-center">
          <div className="w-full flex justify-center items-center h-12">
            <section className="w-4/5 flex items-center justify-center h-full">
              <button className="flex flex-col items-center" aria-label="add-address">
                <FaPlusCircle size="1.5em" />
                <p>Adicionar novo endereço</p>
              </button>
            </section>
          </div>
          <div className="mt-16 w-4/5 flex justify-end">
            <button
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
        </section>
      </main>
    </>
  );
}

export default CheckoutScreen;
