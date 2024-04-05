import { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import { Attribute } from '../types/typesApi';
import Context from '../context/Context';

function ProductAttributes() {
  const context = useContext(Context);

  const navigate = useNavigate();

  if (!context) return null;

  const { productData } = context;

  return (
    <section
      className="w-screen h-dvh overflow-y-scroll"
    >
      <span
        className="
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
        <section className="w-full h-4/5">
          {
          productData?.attributes.slice(1).map((attribute: Attribute) => (
            <p
              className="ml-5 font-sans"
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
