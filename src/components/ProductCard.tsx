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

  return (
    <section
      data-testid="product"
      className="
      w-64
      h-96
      my-8
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
      <div className="flex flex-col justify-center items-center w-52 h-72">
        <Link
          key={ id }
          data-testid="product-detail-link"
          to={ `/product/${id}` }
          className="flex flex-col justify-center items-center w-52 h-72"
        >
          <img
            className="w-32 h-40"
            src={ img }
            alt={ title }
          />
          <h3
            className="text-center font-mono text-base font-bold max-h-12 overflow-hidden"
          >
            {title}
          </h3>
          <div className="flex items-end h-7 justify-center">
            <p className="text-end font-normal mr-1">R$</p>
            <p className="font-medium text-2xl h-7">{`${price}`}</p>
          </div>
        </Link>
      </div>
      <div className="mt-10">
        <button
          onClick={ () => addCart({ id, title, img, price }) }
          className="
          bg-green-400
          text-white
          font-sans
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
