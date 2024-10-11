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
    <section className="">
      <h3 className="">Especificações tecnicas</h3>
      <ul className="">
        {
productData?.attributes.slice(1).map((attribute) => (
  <li
    className=""
    key={ attribute.id }
  >
    {`${attribute.name}: ${attribute.value_name}`}
  </li>
))
}
      </ul>
      <div className="">
        <p className="">R$</p>
        <p
          className=""
          data-testid=""
        >
          {`${productData?.price}`}
        </p>
        <FaMinus
          className="cursor-pointer"
          style={ { color: '#B0B3BB' } }
          onClick={ () => manipulateQuantity(false) }
        />
        <span className="">
          {toCart?.quantity}
        </span>
        <FaPlus
          className="cursor-pointer"
          style={ { color: '#B0B3BB' } }
          onClick={ () => manipulateQuantity(true) }
        />
        <button
          id={ productData?.id }
          className=""
          onClick={ () => addCart(toCart!) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
}

export default DetailsDesktop;
