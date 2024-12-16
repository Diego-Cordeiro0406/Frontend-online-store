/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import Context from '../context/Context';

interface ProdcutCardProps {
  id: string
  title: string
  img: string
  price: number
}

function ProductCard({ id, title, img, price }: ProdcutCardProps) {
  const [check, setCheck] = useState(false);
  const context = useContext(Context);

  const navigate = useNavigate();

  if (!context) return null;
  return (
    <section
      data-testid="product"
      className="
        w-[16.75rem]
        h-[27rem]
        rounded-[9px]
        bg-white
        laptop:mr-4
        mb-4
        flex
        flex-col
        justify-around
        border
        border-px
        border-[#D4D4D4]
      "
    >
      <label
        aria-label={ `${id}` }
        className="flex w-11/12 justify-end"
        htmlFor={ `${id}` }
      >
        <input
          onChange={ () => setCheck(!check) }
          id={ `${id}` }
          className="appearance-none"
          checked={ check }
          type="checkbox"
        />
        {
          check ? (
            <GoHeartFill style={ { color: '#FF0000' } } size="1.5em" />
          ) : (
            <GoHeart style={ { color: '#909090' } } size="1.5em" />
          )
        }
      </label>
      <div
        key={ id }
        data-testid="product-detail-link"
        className="flex flex-col items-center"
      >
        <img className="w-32 h-32" src={ img } alt={ title } />
      </div>
      <div
        className="
          phone:mt-5
          laptop:mt-0
          h-40
          flex
          flex-col
          items-center
          justify-evenly"
      >
        <h3
          className="
            max-w-[14.75rem]
            max-h-12
            overflow-hidden
            font-medium
            text-center"
        >
          {title}
        </h3>
        <div className="flex items-center">
          <p className="font-semibold">R$</p>
          <p className="font-semibold laptop:text-2xl laptop:h-7">
            {`${price}`}
          </p>
        </div>
        <button
          id={ id }
          onClick={ () => navigate(`/product/${id}`) }
          className="
            w-[11.438rem]
            h-12
            text-white
            bg-black
            rounded-[8px]
            font-semibold
            "
        >
          Compre agora
        </button>
      </div>
    </section>
  );
}

export default ProductCard;
