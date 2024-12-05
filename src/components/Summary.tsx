import { useContext, useEffect } from 'react';

import Context from '../context/Context';

function Summary() {
  const context = useContext(Context);
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  if (!context) return null;
  const { cart, setCart, getQuantity } = context;

  return (
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
      <h3 className="font-semibold w-11/12 py-6 text-xl">Resumo</h3>
      {
        cart.map((product) => (
          <span
            key={ product.id }
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
              <img className="w-10 h-10" src={ product.img } alt="product-img" />
              <p
                className="ml-2 text-sm font-medium w-52 overflow-hidden"
              >
                {product.title}
              </p>
            </div>
            <p className="font-semibold">{`R$ ${product.price}`}</p>
          </span>
        ))
      }

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
            <p className="font-bold">{getQuantity()}</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[#545454]">Envio</h3>
            <p className="font-bold">R$ 0</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <h3 className="font-medium">Total</h3>
            <p className="font-bold">{getQuantity()}</p>
          </div>
        </span>
      </section>
    </div>
  );
}
export default Summary;
