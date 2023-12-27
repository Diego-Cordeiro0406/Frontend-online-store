import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ScaleLoader } from 'react-spinners';

import Header from '../components/Header';
import { Product } from '../types/typesApi';
import Context from '../context/Context';

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

  const context = useContext(Context);

  if (!context) return null;
  const { getProductById, isLoading } = context;

  return (
    <>
      <Header />
      {
        isLoading
          ? <ScaleLoader
              className="flex justify-center items-center w-screen h-screen"
              data-testid="loading"
              color="#36d7b7"
          /> : (
            <main className="flex justify-center h-screen">
              <section
                className="
                  flex
                  w-3/6
                  justify-center
                  items-center
                  bg-slate-100
                "
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
              <section className="flex w-3/6 flex-col justify-center h-full pl-16">
                <h3
                  className="font-bold text-2xl font-mono pb-10"
                >
                  Especificações tecnicas
                </h3>
                <ul className="max-h-96 overflow-y-scroll text-slate-700 max-w-lg">
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
                <div className="flex h-7 justify-start pt-20 items-center">
                  <p className="text-end font-normal mr-1">R$</p>
                  <p
                    className="font-medium text-2xl h-7 mr-5"
                    data-testid="product-detail-price"
                  >
                    {`${product?.price}`}
                  </p>
                  <FaMinus className="cursor-pointer" style={ { color: '#B0B3BB' } } />
                  <span
                    className="
                rounded-full
                bg-gray-400
                w-5
                h-5
                text-white
                flex
                justify-center
                items-center
                mx-2.5
              "
                  >
                    1
                  </span>
                  <FaPlus className="cursor-pointer" style={ { color: '#B0B3BB' } } />
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
              </section>
            </main>)
      }
    </>
  );
}

export default ProductDetails;
