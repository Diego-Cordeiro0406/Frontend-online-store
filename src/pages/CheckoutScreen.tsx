import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';

import Context from '../context/Context';
import Header from '../components/Header';

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
                    w-[40rem]
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
                  w-3/6
                  flex-col
                  justify-center
                  items-center
                  h-full
                "
        >
          <h3>Informações do comprador</h3>
          <div className="flex flex-wrap justify-center items-center h-24 max-w-[40rem]">
            <input
              placeholder="Nome Completo"
              className="w-72 h-8 border border-[#94979D] pl-1"
              type="text"
            />
            <input
              placeholder="CPF"
              className="w-72 h-8 border border-[#94979D] pl-1 ml-2"
              type="text"
            />
            <input
              placeholder="Email"
              className="w-72 h-8 border border-[#94979D] pl-1"
              type="text"
            />
            <input
              placeholder="Telefone"
              className="w-72 h-8 border border-[#94979D] pl-1 ml-2"
              type="text"
            />
          </div>
          <div className="flex justify-evenly items-center h-8 w-[36.438rem]">
            <input
              placeholder="CEP"
              className="w-2/6 h-8 border border-[#94979D] pl-1"
              type="text"
            />
            <input
              placeholder="Endereço"
              className="w-4/6 h-8 border border-[#94979D] pl-1 ml-2"
              type="text"
            />
          </div>
          <div className="flex justify-evenly items-center h-8 w-[36.438rem] mt-2">
            <input
              placeholder="Complemento"
              className="w-4/6 h-8 border border-[#94979D] pl-1"
              type="text"
            />
            <input
              placeholder="Número"
              className="w-2/6 h-8 border border-[#94979D] pl-1  ml-2"
              type="text"
            />
          </div>
          {/* <div>
            <input placeholder="Cidade" className="border-solid" type="text" />
          <select>
            <option value="batata">teste</option>
          </select>
          </div> */}
        </section>
      </main>
    </>
  );
}

export default CheckoutScreen;
