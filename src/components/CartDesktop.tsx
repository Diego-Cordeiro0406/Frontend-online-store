import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';

import Context from '../context/Context';

function CartDesktop() {
  const context = useContext(Context);
  const navigate = useNavigate();

  if (!context) return null;
  const { cart, getQuantity, addQuantity, sutractQuantity, removeProduct } = context;

  return (
    <>
      <section className="">
        <button className="" onClick={ () => navigate(-1) }>
          <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
          Voltar
        </button>
        <section className="">
          <h2 className="">
            Carrinho de compras
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
                      <img src={ product.img } alt={ product.title } />
                      <h3 className="">
                        {product.title}
                      </h3>
                      <FaMinus
                        className=""
                        style={ { color: '#B0B3BB' } }
                        onClick={ () => sutractQuantity(product.id) }
                      />
                      <span className="">
                        {product.quantity}
                      </span>
                      <FaPlus
                        className="cursor-pointer"
                        style={ { color: '#B0B3BB' } }
                        onClick={ () => addQuantity(product.id) }
                      />
                      <p className="">R$</p>
                      <p
                        className=""
                      >
                        {Number((product.price * product.quantity).toFixed(2))}
                      </p>
                    </div>
                  </div>
                ))
            }
        </section>
      </section>
      <section className="">
        <h3 className="">
          Valor total da compra:
        </h3>
        <p className="">{`R$ ${getQuantity()}`}</p>
        <button
          className=""
          onClick={ () => navigate('/checkout') }
        >
          Finalizar compra
        </button>
      </section>
    </>
  );
}

export default CartDesktop;
