/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ScaleLoader } from 'react-spinners';
import { TiArrowBack } from 'react-icons/ti';

import { FaPlus, FaMinus } from 'react-icons/fa';
import Header from '../components/Header';
import Context from '../context/Context';
// import DetailsMobile from '../components/DetailsMobile';
import truckIcon from '../images/delivery-truck.svg';
import shopIcon from '../images/shop.svg';
import verifyIcon from '../images/verify.svg';
import { ProductCart } from '../types/typesApi';
import ProductAttributes from '../components/ProductAttributes';

function ProductDetails() {
  const { id } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 1023 });

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
    const fetchData = async () => {
      try {
        await getProductById(id);
        setProductDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    if (context!.productDataLoaded) {
      setToCart();
    }
  }, []);

  const navigate = useNavigate();

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
    getProductById,
    isLoading,
    productData,
    setProductDataLoaded,
  } = context;

  return (
    <>
      <Header />
      {
        isLoading
          ? <ScaleLoader
              className="flex justify-center items-center w-screen h-screen"
              data-testid="loading"
              color="#36d7b7"
          /> : (
            <main className="w-full h-screen overflow-scroll">
              <section className="flex w-full h-full items-center">
                <section
                  className="flex flex-col justify-evenly w-3/6 h-full"
                  data-testid="product"
                >
                  <button
                    className="w-full flex items-center"
                    onClick={ () => navigate(-1) }
                  >
                    <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                    Voltar
                  </button>
                  <span className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-around h-full">
                      {
                        productData?.pictures
                          .slice(2)
                          .map((picture, index) => (
                            <img
                              className="h-20"
                              key={ picture.id }
                              src={ picture.url }
                              alt={ `pic-${index}` }
                            />
                          ))
                      }
                    </div>
                    <img
                      className=""
                      data-testid="product-detail-image"
                      src={ productData?.pictures[0].url }
                      alt={ productData?.title }
                    />
                  </span>
                </section>
                <section
                  className="
                    flex
                    items-center
                    justify-center
                    w-3/6
                    h-[35rem]
                  "
                >
                  <div className="flex flex-col justify-evenly w-[33.5rem] h-[33.5rem]">
                    <h3
                      className="phone:text-base laptop:text-4xl text-left font-bold"
                    >
                      {productData?.title}
                    </h3>
                    <div className="flex items-center">
                      <p className="laptop:text-3xl">R$</p>
                      <p
                        className=" laptop:text-3xl"
                      >
                        {`${productData?.price}`}
                      </p>
                    </div>
                    <div className="flex h-11">
                      <button
                        aria-label="button-minus"
                        className="
                          flex
                          items-center
                          justify-center
                          w-10
                          h-11
                          rounded-l-[4px]
                          border border-px
                          border-black
                          border-r-transparent
                          cursor-pointer
                          "
                        onClick={ () => manipulateQuantity(false) }
                      >
                        <FaMinus
                          style={ { color: '#000000' } }
                        />
                      </button>
                      <span
                        className="
                        w-20
                        h-11
                        flex
                        justify-center
                        items-center
                        select-none
                        border border-px
                        border-black
                        "
                      >
                        {toCart?.quantity}
                      </span>
                      <button
                        aria-label="button-plus"
                        className="
                          flex
                          items-center
                          justify-center
                          w-10
                          h-11
                          rounded-r-[4px]
                          bg-black
                          border border-px
                          border-black
                          border-l-transparent
                          cursor-pointer
                        "
                        onClick={ () => manipulateQuantity(true) }
                      >
                        <FaPlus
                          style={ { color: '#FFFFFF' } }
                        />
                      </button>
                    </div>
                    {/* <img src={ productData?.pictures[1].url } alt="" /> */}
                    <div className="flex justify-between">
                      <button
                        id={ productData?.id }
                        className="
                        w-[16.25rem]
                        h-14
                        font-medium
                        bg-white
                        border
                        border-px
                        rounded-[6px]
                      "
                      >
                        Adicionar a lista de desejos
                      </button>
                      <button
                        id={ productData?.id }
                        className="
                        w-[16.25rem]
                        h-14
                        text-white
                        font-medium
                        bg-black
                        rounded-[6px]
                      "
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                    <section className="flex w-full justify-between mt-8">
                      <span className="flex items-center">
                        <div
                          className="
                            flex
                            items-center
                            justify-center
                            w-14
                            h-14
                            bg-[#F6F6F6]
                            rounded-[11px]
                          "
                        >
                          <img src={ truckIcon } alt="truck-icon" />
                        </div>
                        <p className="ml-1 font-medium text-[#717171]">Entrega grátis</p>
                      </span>
                      <span className="flex items-center">
                        <div
                          className="
                            flex
                            items-center
                            justify-center
                            w-14
                            h-14
                            bg-[#F6F6F6]
                            rounded-[11px]
                          "
                        >
                          <img src={ shopIcon } alt="shop-icon" />
                        </div>
                        <p className="ml-1 font-medium text-[#717171]">Em Estoque</p>
                      </span>
                      <span className="flex items-center">
                        <div
                          className="
                            flex
                            items-center
                            justify-center
                            w-14
                            h-14
                            bg-[#F6F6F6]
                            rounded-[11px]
                          "
                        >
                          <img src={ verifyIcon } alt="verify-icon" />
                        </div>
                        <p
                          className="ml-1 font-medium text-[#717171]"
                        >
                          1 ano de garantia
                        </p>
                      </span>
                    </section>
                  </div>
                </section>
              </section>
              <ProductAttributes />
            </main>)
      }
    </>
  );
}

export default ProductDetails;
