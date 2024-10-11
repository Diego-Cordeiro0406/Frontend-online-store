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
      className=""
    >
      <div
        className=""
      >
        <Link
          key={ id }
          data-testid="product-detail-link"
          to={ `/product/${id}` }
          className=""
        >
          <img
            className=""
            src={ img }
            alt={ title }
          />
          <h3
            className=""
          >
            {title}
          </h3>
          <div
            className=""
          >
            <p className="">R$</p>
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
          className=""
        >
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  );
}

export default ProductCard;
