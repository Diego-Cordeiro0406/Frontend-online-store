import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import { Product } from '../types/typesApi';
import ProductCard from './ProductCard';

function RecomendedProducts() {
  const [recomendedData, setRecomendedData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchRecomendedProducts();
    };
    fetchData();
  }, []);

  const context = useContext(Context);
  if (!context) return null;
  const {
    getProductsFromCategoryAndQuery,
    categories,
  } = context;

  const fetchRecomendedProducts = async () => {
    if (categories.length > 0) {
      const promises = categories.map(async (categorie) => {
        const categoriesProducts = await getProductsFromCategoryAndQuery(categorie.name);
        return categoriesProducts[0];
      });

      const firstProducts = await Promise.all(promises);
      setRecomendedData(firstProducts);
    }
  };

  return (
    <section
      className="
        flex
        h-full
        flex-wrap
        justify-center
        w-full"
    >
      {
      recomendedData?.map((product) => (
        <ProductCard
          key={ product.id }
          id={ product.id }
          title={ product.title }
          img={ product.thumbnail }
          price={ product.price }
        />
      ))
    }
    </section>
  );
}
export default RecomendedProducts;
