import { FaPlus, FaMinus } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { ProductCart } from '../types/typesApi';

function DetailsMobile() {
  const [toCart, setCart] = useState<ProductCart>();

  const setToCart = () => {
    if (productData) {
      const toAdd = {
        id: productData.id,
        title: productData.title,
        img: productData.thumbnail,
        price: productData.price,
        quantity: 1,
      };
      setCart(toAdd);
    }
  };

  const context = useContext(Context);

  useEffect(() => {
    if (context!.productDataLoaded) {
      setToCart();
    }
  }, [context!.productDataLoaded]);

  const manipulateQuantity = (manipulate: boolean) => {
    if (toCart && manipulate) {
      const updatedQuantity = { ...toCart, quantity: toCart.quantity + 1 };
      setCart(updatedQuantity);
    } else if (toCart && manipulate === false && toCart.quantity > 1) {
      const updatedQuantity = { ...toCart, quantity: toCart.quantity - 1 };
      setCart(updatedQuantity);
    }
  };

  if (!context) return null;
  const {
    productData,
    addCart,
  } = context;
  return (
    <section
      className="
      flex
      flex-col
      justify-start
      h-96
      items-start
    "
    >
      <div
        className="
          flex
          h-20
          justify-start
          mt-6
          items-center
          flex-col
          w-full
        "
      >
        <section className="flex justify-center items-center w-full">
          <p className="text-end font-normal mr-1">R$</p>
          <p
            className="font-medium text-2xl h-7 mr-5"
            data-testid="product-detail-price"
          >
            {`${productData?.price}`}
          </p>
          <FaMinus
            className="cursor-pointer"
            size="1.5em"
            style={ { color: '#B0B3BB' } }
            onClick={ () => manipulateQuantity(false) }
          />
          <span
            className="
            rounded-full
            bg-gray-400
            w-6
            h-6
            text-white
            flex
            justify-center
            items-center
            mx-2.5
          "
          >
            {toCart?.quantity}
          </span>
          <FaPlus
            className="cursor-pointer"
            size="1.5em"
            style={ { color: '#B0B3BB' } }
            onClick={ () => manipulateQuantity(true) }
          />
        </section>

        <button
          id={ productData?.id }
          className="
            bg-green-400
            text-white
            font-mono
            h-10
            p-2
            mt-2
            rounded
            hover:-translate-y-1
            hover:scale-110
            hover:bg-green-700
            duration-3005
          "
          onClick={ () => addCart(toCart!) }
        >
          Adicionar ao carrinho
        </button>
      </div>
      <div className="flex w-full justify-start mt-6">
        <h3
          className="
            font-bold
            phone:text-lg
            font-mono
          "
        >
          Especificações tecnicas
        </h3>
      </div>

      <ul
        className="
          text-slate-700
          bg-slate-100
          max-w-lg
          mt-6
        "
      >
        {
productData?.attributes.slice(1).map((attribute) => (
  <li
    className="ml-5 font-sans"
    key={ attribute.id }
  >
    {`${attribute.name}: ${attribute.value_name}`}
  </li>
))
}
      </ul>
    </section>
  );
}

export default DetailsMobile;
