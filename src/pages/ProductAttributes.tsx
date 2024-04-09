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
        <section className="w-full h-4/5 py-4 pl-2">
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
            <section className="flex flex-col" key={ attribute.id }>
              <div className="flex">
                <h3
                  className="
                    flex
                    items-center
                    w-3/6
                    pl-1
                    bg-gray-100
                    text-sm"
                >
                  {`${attribute.name}`}
                </h3>
                <p
                  className="ml-5 my-2 font-sans w-3/5 text-sm"
                >
                  {`${attribute.value_name}`}
                </p>
              </div>
              <div className="width border-gray-300 w-11/12" />
            </section>

          ))
        }
        </section>
      </span>
    </section>
  );
}

export default ProductAttributes;
