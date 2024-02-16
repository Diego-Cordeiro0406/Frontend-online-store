import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

interface ProdcutCardProps {
  id: string
  title: string
  img: string
  price: number
}

function ProductCard({ id, title, img, price }: ProdcutCardProps) {
  const context = useContext(Context);

  if (!context) return null;
  const { addCart } = context;
  const quantity = 1;
  return (
    <section
      data-testid="product"
      className="
      laptop:w-60
      laptop:h-80
      phone:w-44
      phone:h-64
      my-6
      mx-2
      bg-white
      rounded-md
      shadow-lg
      flex
      flex-col
      items-center
      justify-center
      py-0.5
      px-7
      transition
      ease-in-out
      delay-150
      hover:-translate-y-1
      hover:scale-110
      duration-300
      "
    >
      <div
        className="
          flex
          flex-col
          justify-center
          items-center
          phone:w-32
          phone:h-40
          laptop:w-52
          laptop:h-56
        "
      >
        <Link
          key={ id }
          data-testid="product-detail-link"
          to={ `/product/${id}` }
          className="
            flex
            flex-col
            justify-center
            items-center
            phone:w-32
            phone:h-40
            laptop:w-52
            laptop:h-72
            "
        >
          <img
            className="laptop:w-24 laptop:h-32 phone:w-20 phone:h-24"
            src={ img }
            alt={ title }
          />
          <h3
            className="
              text-center
              font-mono
              phone:text-xs
              laptop:text-base
              font-bold
              phone:max-h-12
              laptop:max-h-12
              overflow-hidden
            "
          >
            {title}
          </h3>
          <div
            className="
              flex
              items-end
              phone:h-5
              laptop:h-7
              phone:pt-1
              justify-center
              items-center
              "
          >
            <p className="text-end font-normal mr-1">R$</p>
            <p
              className="
                font-medium
                laptop:text-2xl
                laptop:h-7"
            >
              {`${price}`}
            </p>
          </div>
        </Link>
      </div>
      <div className="phone:mt-5 mt-10">
        <button
          id={ id }
          onClick={ () => addCart({ id, title, img, price, quantity }) }
          className="
          bg-green-400
          phone:text-xs
          laptop:text-base
          text-white
          font-sans
          phone: w-36
          h-10
          p-2
          rounded
          mb-4
          hover:-translate-y-1
          hover:scale-110
          hover:bg-green-700
          duration-300
          "
        >
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
}

export default ProductCard;
