import { FaPlus, FaMinus } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
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
    <section className="">
      <div className="">
        <section className="">
          <p className="">R$</p>
          <p
            className=""
            data-testid=""
          >
            {`${productData?.price}`}
          </p>
          <FaMinus
            className=""
            size="1.5em"
            style={ { color: '#B0B3BB' } }
            onClick={ () => manipulateQuantity(false) }
          />
          <span className="">
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
          className=""
          onClick={ () => addCart(toCart!) }
        >
          Adicionar ao carrinho
        </button>
      </div>
      <Link
        className=""
        to={ `/attributes/${productData?.id}` }
      >
        <h3 className="ml-1">Conferir Especificações</h3>
        <IoIosArrowForward className="mr-1" />
      </Link>
    </section>
  );
}

export default DetailsMobile;
