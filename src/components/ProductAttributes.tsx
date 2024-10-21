import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

function ProductAttributes() {
  // const [toCart, setCart] = useState<ProductCart>();

  // const setToCart = () => {
  //   if (productData) {
  //     const toAdd = {
  //       id: productData.id,
  //       title: productData.title,
  //       img: productData.thumbnail,
  //       price: productData.price,
  //       quantity: 1,
  //     };
  //     setCart(toAdd);
  //   }
  // };

  const context = useContext(Context);

  // useEffect(() => {
  //   if (context!.productDataLoaded) {
  //     setToCart();
  //   }
  // }, [context!.productDataLoaded]);

  // const manipulateQuantity = (manipulate: boolean) => {
  //   if (toCart && manipulate) {
  //     const updatedQuantity = { ...toCart, quantity: toCart.quantity + 1 };
  //     setCart(updatedQuantity);
  //   } else if (toCart && manipulate === false && toCart.quantity > 1) {
  //     const updatedQuantity = { ...toCart, quantity: toCart.quantity - 1 };
  //     setCart(updatedQuantity);
  //   }
  // };

  if (!context) return null;
  const { productData } = context;
  return (
    <section className="w-full flex flex-col items-center bg-[#FAFAFA] laptop:pt-20">
      <section
        className="
          phone:w-full
          laptop:w-4/5
          flex
          flex-col
          items-center
          bg-white
          rounded-[8px]
          pt-8"
      >
        <h3
          className="w-11/12 font-semibold laptop:text-2xl"
        >
          Especificações tecnicas
        </h3>
        <ul className="w-11/12 bg-white pt-8">
          {
            productData?.attributes.slice(1).map((attribute, index) => (
              <li
                className={
                  `w-full
                  flex
                  justify-between
                  h-8
                  items-center
                  border-b
                  ${
                    index === productData.attributes
                      .slice(1)
                      .length - 1 ? 'border-b-transparent' : ''
                }
                  `
                }
                key={ attribute.id }
              >
                <p className="phone:text-xs laptop:text-base">{attribute.name}</p>
                <p className="phone:text-xs laptop:text-base">{attribute.value_name}</p>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default ProductAttributes;
