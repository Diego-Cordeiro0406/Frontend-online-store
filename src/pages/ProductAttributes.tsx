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
      className=""
    >
      <span className="">
        <div className="">
          <FaArrowLeft
            size="1.5em"
            className="ml-2 cursor-pointer"
            onClick={ () => navigate(`/product/${productData?.id}`) }
          />
          <h3 className="">Características do produto</h3>
        </div>
        <section className="">
          {
            isLoading && (
              <section className="">
                <ScaleLoader
                  data-testid="loading"
                  color="#36d7b7"
                />
              </section>
            )
          }
          {
          !isLoading && productData?.attributes.map((attribute: Attribute) => (
            <section className="" key={ attribute.id }>
              <div className="flex">
                <h3 className="">
                  {`${attribute.name}`}
                </h3>
                <p className="">
                  {`${attribute.value_name}`}
                </p>
              </div>
              <div className="" />
            </section>

          ))
        }
        </section>
      </span>
    </section>
  );
}

export default ProductAttributes;
