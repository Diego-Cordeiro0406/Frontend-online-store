import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { ScaleLoader } from 'react-spinners';
import { TiArrowBack } from 'react-icons/ti';

import Header from '../components/Header';
import Context from '../context/Context';
import DetailsDesktop from '../components/DetailsDesktop';
import DetailsMobile from '../components/DetailsMobile';
import CategoriesBar from '../components/CategoriesBar';

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
      <CategoriesBar />
      <Header />
      {
        isLoading
          ? <ScaleLoader
              className="flex justify-center items-center w-screen h-screen"
              data-testid="loading"
              color="#36d7b7"
          /> : (
            <main
              className=""
            >
              <section
                className=""
                data-testid="product"
              >
                <button
                  className=""
                  onClick={ () => navigate(-1) }
                >
                  <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                  Voltar
                </button>
                <span className="">
                  <h3
                    className="phone:text-base laptop:text-xl text-center"
                    data-testid="product-detail-name"
                  >
                    {productData?.title}
                  </h3>
                  <img
                    className=""
                    data-testid="product-detail-image"
                    src={ productData?.pictures[0].url }
                    alt={ productData?.title }
                  />
                </span>
              </section>
              {isMobile ? <DetailsMobile /> : <DetailsDesktop /> }
            </main>)
      }
    </>
  );
}

export default ProductDetails;
