import { useContext, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import { Attribute } from '../types/typesApi';
import Context from '../context/Context';

function ProductAttributes() {
  const { id } = useParams();
  const context = useContext(Context);

  const navigate = useNavigate();

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

  if (!context) return null;

  const {
    productData,
    getProductById,
    setProductDataLoaded,
    isLoading,
  } = context;

  return (
    <section
      className="w-screen h-screen overflow-y-scroll"
    >
      <span
        className="
          h-full
          toggle-attributes
          text-slate-700
          bg-slate-100
        "
      >
        <div
          className="
            flex
            justify-start
            items-center
            w-full
            h-16
            bg-blue-700
            text-white
          "
        >
          <FaArrowLeft
            size="1.5em"
            className="ml-2 cursor-pointer"
            onClick={ () => navigate(`/product/${productData?.id}`) }
          />
          <h3 className="text-lg ml-10">Características do produto</h3>
        </div>
        <section className="w-full h-4/5 pt-4">
          {
            isLoading && (
              <section className="flex justify-center items-center w-full h-full">
                <ScaleLoader
                  data-testid="loading"
                  color="#36d7b7"
                />
              </section>
            )
          }
          {
          !isLoading && productData?.attributes.map((attribute: Attribute) => (
            <p
              className="ml-5 my-2 font-sans w-11/12 text-base"
              key={ attribute.id }
            >
              {`${attribute.name}: ${attribute.value_name}`}
            </p>
          ))
        }
        </section>
      </span>
    </section>
  );
}

export default ProductAttributes;
