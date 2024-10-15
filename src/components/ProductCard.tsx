import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import Context from '../context/Context';

interface ProdcutCardProps {
  id: string
  title: string
  img: string
  price: number
}

function ProductCard({ id, title, img, price }: ProdcutCardProps) {
  const context = useContext(Context);

  const navigate = useNavigate();

  if (!context) return null;
  const { addCart } = context;
  const quantity = 1;
  return (
    <section
      data-testid="product"
      className="
        laptop:w-[16.75rem]
        laptop:h-[27rem]
        rounded-[9px]
        bg-[#F6F6F6]
        mr-4
        mb-4
      "
    >
      <div className="flex flex-col items-center">
        <span className="flex w-11/12 justify-end">
          <CiHeart size="2em" />
        </span>
        <div
          key={ id }
          data-testid="product-detail-link"
          className="flex flex-col items-center"
        >
          <img className="laptop:w-40 laptop:h-40" src={ img } alt={ title } />
        </div>
      </div>
      <div className="phone:mt-5 mt-10 h-40 flex flex-col items-center justify-evenly">
        <h3
          className="
            max-w-[14.75rem]
            max-h-12
            overflow-hidden
            font-semibold
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
          className="w-[11.438rem] h-12 text-white bg-black rounded-[8px]"
        >
          Compre agora
        </button>
      </div>
    </section>
  );
}

export default ProductCard;
