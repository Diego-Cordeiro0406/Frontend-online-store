/* eslint-disable react/jsx-max-depth */
import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ScaleLoader } from 'react-spinners';
import { TiArrowBack } from 'react-icons/ti';

import { FaPlus, FaMinus } from 'react-icons/fa';
import Header from '../components/Header';
import Context from '../context/Context';
import DetailsDesktop from '../components/DetailsDesktop';
import DetailsMobile from '../components/DetailsMobile';
import truckIcon from '../images/delivery-truck.svg';
import shopIcon from '../images/shop.svg';
import verifyIcon from '../images/verify.svg';

function ProductDetails() {
  const { id } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 1023 });

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

  const navigate = useNavigate();

  if (!context) return null;
  const {
    getProductById,
    isLoading,
    productData,
    setProductDataLoaded,
  } = context;

  return (
    <>
      {/* <CategoriesBar /> */}
      <Header />
      {
        isLoading
          ? <ScaleLoader
              className="flex justify-center items-center w-screen h-screen"
              data-testid="loading"
              color="#36d7b7"
          /> : (
            <main className="w-full h-5/6">
              <section className="flex w-full h-full">
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
                <section className="flex items-center justify-center w-3/6 h-full">
                  <div className="w-[33.5rem]">
                    <h3
                      className="phone:text-base laptop:text-xl text-center font-bold"
                    >
                      {productData?.title}
                    </h3>
                    <div className="flex items-center">
                      <p className="font-bold">R$</p>
                      <p className="font-bold">{`${productData?.price}`}</p>
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

                  {/* <ul className="">
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
                  </ul> */}

                </section>
              </section>
              {/* {isMobile ? <DetailsMobile /> : <DetailsDesktop /> } */}
            </main>)
      }
    </>
  );
}

export default ProductDetails;
