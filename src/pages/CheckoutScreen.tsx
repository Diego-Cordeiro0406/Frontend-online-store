/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { TiArrowBack } from 'react-icons/ti';
import { GiPositionMarker } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';
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
              <p className="text-sm">Passo 1</p>
              <p className="text-sm">Endereço</p>
            </span>
          </div>
          <span className="w-56 border border-px border-[#E6E6E6] border-dashed" />
          <div className="flex items-center">
            <FaShippingFast size="1.5em" style={ { color: '#C1C1C3' } } />
            <span className="flex flex-col">
              <p className="text-sm text-black/25">Passo 2</p>
              <p className="text-sm text-black/25">Envio</p>
            </span>
          </div>
          <span className="w-56 border border-px border-[#E6E6E6] border-dashed" />
          <div className="flex items-center">
            <MdOutlinePayment style={ { color: '#C1C1C3' } } size="1.5em" />
            <span className="flex flex-col">
              <p className="text-sm text-black/25">Passo 3</p>
              <p className="text-sm text-black/25">Pagamento</p>
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
        <section className="w-full flex flex-col items-center h-4/5">
          <section className="w-4/5">
            <h3>Selecione o endereço</h3>
            <div className="flex items-center justify-around w-full h-36 bg-[#F6F6F6]">
              <input type="radio" name="" id="" />
              <span>
                <p>2118 Thornridge</p>
                <p>2118 Thornridge Cir.Syracuse, Connecticut 35624</p>
                <p>(209) 555-0104</p>
              </span>
              <span className="flex w-[4.5rem] justify-between">
                <img src={ editIcon } alt="edit-icon" />
                <img src={ removeIcon } alt="remove-icon" />
              </span>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default CheckoutScreen;
