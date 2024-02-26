import { FaPlus, FaMinus } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { ProductCart } from '../types/typesApi';

function DetailsDesktop() {
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
      laptop:w-3/6
      flex-col
      justify-start
      laptop:h-full
      phone:h-3/6
      laptop:pl-16
      phone:items-center
    "
    >
      <h3
        className="
        font-bold
        phone:text-lg
        laptop:text-2xl
        font-mono
        laptop:pb-10
        phone:pt-4
      "
      >
        Especificações tecnicas
      </h3>
      <ul
        className="
        phone:max-h-52
        laptop:max-h-96
        overflow-y-scroll
        text-slate-700
        bg-slate-100
        max-w-lg"
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
      <div
        className="flex h-7 justify-start phone:pt-6
      laptop:pt-20
      items-center"
      >
        <p className="text-end font-normal mr-1">R$</p>
        <p
          className="font-medium text-2xl h-7 mr-5"
          data-testid="product-detail-price"
        >
          {`${productData?.price}`}
        </p>
        <FaMinus
          className="cursor-pointer"
          style={ { color: '#B0B3BB' } }
          onClick={ () => manipulateQuantity(false) }
        />
        <span
          className="rounded-full bg-gray-400 w-5 h-5 text-white
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
          style={ { color: '#B0B3BB' } }
          onClick={ () => manipulateQuantity(true) }
        />
        <button
          id={ productData?.id }
          className="bg-green-400 text-white font-mono h-10 p-2
          rounded
          hover:-translate-y-1
          hover:scale-100
          hover:bg-green-700
          duration-300
          ml-5"
          onClick={ () => addCart(toCart!) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
}

export default DetailsDesktop;
