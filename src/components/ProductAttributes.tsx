import { useContext } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

import { Attribute } from '../types/typesApi';
import Context from '../context/Context';

interface AttributesProps {
  data: Attribute[]
}

function ProductAttributes({ data }: AttributesProps) {
  const context = useContext(Context);

  if (!context) return null;

  const {
    toggleAttributes,
    attributesOpen,
  } = context;

  return (
    <section className={ `toggle-attributes ${attributesOpen ? 'open-attr' : ''} z-50` }>
      <span
        className="
          toggle-attributes
          text-slate-700
          bg-slate-100
          max-w-lg
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
            onClick={ () => toggleAttributes() }
          />
          <h3 className="text-lg ml-10">Características do produto</h3>
        </div>
        {
      data.slice(1).map((attribute) => (
        <p
          className="ml-5 font-sans"
          key={ attribute.id }
        >
          {`${attribute.name}: ${attribute.value_name}`}
        </p>
      ))
    }
      </span>
    </section>
  );
}

export default ProductAttributes;
