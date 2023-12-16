import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/typesApi';
import { getProductById } from '../services/api';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProductById(id);
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  return (
    <main className="flex justify-center h-screen">
      {/* <Link data-testid="shopping-cart-button" to="/cart">
        <button>Carrinho</button>
      </Link> */}
      <section
        className="
          flex
          w-3/6
          justify-center
          items-center
          bg-slate-100"
        data-testid="product"
      >
        <span
          className="
            flex flex-col
            justify-evenly
            items-center
            bg-white
            product-container
            shadow-2xl
            "
        >
          <h3
            className="text-xl text-center"
            data-testid="product-detail-name"
          >
            {product?.title}
          </h3>
          <img
            className="picture-size"
            data-testid="product-detail-image"
            src={ product?.pictures[0].url }
            alt={ product?.title }
          />
        </span>
      </section>
      <section className="flex w-3/6">
        <span className="flex flex-col justify-center w-full h-full pl-10">
          <h3 className="font-bold text-2xl font-mono pb-10">Especificações tecnicas</h3>
          <ul className="max-h-96 overflow-y-scroll text-slate-700 max-w-md">
            {
            product?.attributes.slice(1).map((attribute) => (
              <li
                className="ml-5 font-sans"
                key={ attribute.id }
              >
                {`${attribute.name}: ${attribute.value_name}`}
              </li>
            ))
          }
          </ul>
          <div className="flex items-end h-7 justify-start pt-7 h-36 items-center">
            <p className="text-end font-normal mr-1">R$</p>
            <p
              className="font-medium text-2xl h-7"
              data-testid="product-detail-price"
            >
              {`${product?.price}`}
            </p>
            <button
              className="
                bg-green-400
                text-white
                font-mono
                h-10
                p-2
                rounded
                hover:-translate-y-1
                hover:scale-110
                hover:bg-green-700
                duration-300
                ml-5
                "
            >
              Adicionar ao carrinho
            </button>
          </div>
        </span>
      </section>
    </main>
  );
}

export default ProductDetails;
