import { useContext } from 'react';
import Context from '../context/Context';
import Header from '../components/Header';

function ShoppingCart() {
  const context = useContext(Context);

  if (!context) return null;
  const { cart } = context;

  return (
    <>
      <Header />
      {
        cart.length === 0
          ? (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>
          )
          : (
            <main className="flex justify-center h-screen">
              <section
                className="
                flex
                w-3/6
                justify-center
                items-center
                bg-slate-100
              "
              >
                {
              cart
                .map((product) => (
                  <div key={ product.id }>
                    <img src={ product.img } alt={ product.title } />
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                  </div>
                ))
            }
              </section>
              <section
                className="
                  flex
                  w-3/6
                  flex-col
                  justify-center
                  items-center
                  h-full
                  pl-16"
              >
                <h3>Valor total da compra</h3>
                <button
                  className="
                  bg-green-400
                  text-white
                  font-mono
                  h-10
                  p-2
                  rounded
                  hover:-translate-y-1
                  hover:scale-110
                  hover:bg-green-700
                  duration-300
                  ml-5
                "
                >
                  Finalizar compra
                </button>
              </section>
            </main>
          )
      }
    </>

  );
}

export default ShoppingCart;
