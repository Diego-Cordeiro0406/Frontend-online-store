/* eslint-disable import/no-unresolved */
/* eslint-disable max-lines */
/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ScaleLoader } from 'react-spinners';
import { TiArrowBack } from 'react-icons/ti';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Header from '../components/Header';
import Context from '../context/Context';

import truckIcon from '../images/delivery-truck.svg';
import shopIcon from '../images/shop.svg';
import verifyIcon from '../images/verify.svg';
import { ProductCart } from '../types/typesApi';
import ProductAttributes from '../components/ProductAttributes';

function ProductDetails() {
  const { id } = useParams();

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
  }, []);

  useEffect(() => {
    if (context!.productDataLoaded) {
      setToCart();
    }
  }, [context!.productDataLoaded]);

  useEffect(() => {
    return () => {
      // Limpa o estado de productData no contexto ao desmontar o componente
      context!.setProduct(null);
      context!.setProductDataLoaded(false);
    };
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
    addCart,
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
            <main className="w-full phone:h-full laptop:h-screen overflow-scroll">
              <section
                className="
                  flex
                  phone:flex-col
                  laptop:flex-row
                  w-full
                  laptop:h-full
                  items-center"
              >
                <section
                  className="
                    flex
                    flex-col
                    justify-evenly
                    phone:w-full
                    laptop:w-3/6
                    h-full
                    "
                  data-testid="product"
                >
                  <button
                    className="w-full flex items-center"
                    onClick={ () => navigate(-1) }
                  >
                    <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                    Voltar
                  </button>
                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      laptop:flex-row
                      phone:flex-col
                      h-[33.5rem]
                      "
                  >
                    <Swiper className="swiper" navigation modules={ [Navigation] }>
                      {
                        productData?.pictures
                          .map((picture, index) => (
                            <SwiperSlide className="swiper-slide" key={ picture.id }>
                              <img
                                className=""
                                key={ picture.id }
                                src={ picture.url }
                                alt={ `pic-${index}` }
                              />
                            </SwiperSlide>

                          ))
                      }
                    </Swiper>
                  </span>
                </section>
                <section
                  className="
                    flex
                    items-center
                    justify-center
                    phone:w-full
                    laptop:w-3/6
                    h-[35rem]
                  "
                >
                  <div
                    className="
                      flex
                      flex-col
                      justify-evenly
                      phone:w-4/5
                      laptop:w-[33.5rem]
                      h-[33.5rem]
                    "
                  >
                    <h3
                      className="phone:text-2xl laptop:text-4xl text-left font-bold"
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
                    <div
                      className="
                        flex
                        laptop:flex-row
                        phone:flex-col
                        justify-between
                        phone:items-center
                        "
                    >
                      <button
                        // id={ productData?.id }
                        className="
                        w-[16.25rem]
                        h-14
                        font-medium
                        bg-white
                        border
                        border-px
                        rounded-[6px]
                        phone:mb-5
                        laptop:mb-0
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
                        onClick={ () => addCart(toCart!) }
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                    <section className="flex w-full justify-between mt-8">
                      <span className="flex phone:flex-col items-center">
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
                        <p
                          className="
                            phone:text-center
                            ml-1
                            font-medium
                            text-[#717171]"
                        >
                          Entrega grátis
                        </p>
                      </span>
                      <span className="flex phone:flex-col items-center">
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
                        <p
                          className="
                            ml-1
                            phone:text-center
                            font-medium
                            text-[#717171]
                          "
                        >
                          Em Estoque
                        </p>
                      </span>
                      <span className="flex phone:flex-col items-center">
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
                          className="ml-1 phone:text-center font-medium text-[#717171]"
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
