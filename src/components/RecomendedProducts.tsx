import { useContext, useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import Context from '../context/Context';
import { Product } from '../types/typesApi';
import ProductCard from './ProductCard';

function RecomendedProducts() {
  const [recomendedData, setRecomendedData] = useState<Product[]>([]);
  const [localLoading, setLocalLoading] = useState(false);

  const context = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      await fetchRecomendedProducts();
    };
    fetchData();
  }, [context?.categories]);

  if (!context) return null;
  const {
    getProductsFromCategoryAndQuery,
    categories,
  } = context;

  const fetchRecomendedProducts = async () => {
    setLocalLoading(true); // Usar um estado local para controlar o carregamento
    try {
      if (categories.length > 0) {
        const promises = categories.map(async (category) => {
          const categoriesProducts = await getProductsFromCategoryAndQuery(category.name);
          return categoriesProducts[0]; // Pegando o primeiro produto de cada categoria
        });
        const firstProducts = await Promise.all(promises);
        setRecomendedData(firstProducts);
      }
    } catch (error) {
      console.error('Erro ao buscar produtos recomendados:', error);
    } finally {
      setLocalLoading(false); // Finaliza o estado de carregamento local
    }
  };

  return (
    <section
      className={ `
        flex
      ${localLoading ? 'h-4/5' : 'h-full'}
        flex-wrap
        justify-center
        w-full` }
    >
      {
        localLoading ? (
          <section className="flex justify-center items-center w-full h-full">
            <ScaleLoader
              data-testid="loading"
              color="#36d7b7"
            />
          </section>
        ) : (
          recomendedData?.map((product) => (
            <ProductCard
              key={ product.id }
              id={ product.id }
              title={ product.title }
              img={ product.thumbnail }
              price={ product.price }
            />
          ))
        )
}
    </section>
  );
}
export default RecomendedProducts;
