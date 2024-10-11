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
      <main className="">
        <section className="">
          <button className="" onClick={ () => navigate(-1) }>
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
          </div>
        </section>
        <CheckoutForm />
      </main>
    </>
  );
}

export default CheckoutScreen;
