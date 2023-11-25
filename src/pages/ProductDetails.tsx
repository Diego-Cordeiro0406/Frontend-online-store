import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Product } from '../types/typesApi';
import { getProductById } from '../services/api';

// interface MatchParams {
//   id: string
// }

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
    <main>
      <Link data-testid="shopping-cart-button" to="/cart">
        <button>Carrinho</button>
      </Link>
      <section data-testid="product">
        <h3 data-testid="product-detail-name">{product?.title}</h3>
        <img
          data-testid="product-detail-image"
          src={ product?.thumbnail }
          alt={ product?.title }
        />
        <p data-testid="product-detail-price">{product?.price}</p>
        <span>
          {
            product?.attributes.slice(1).map((attribute) => (
              <p key={ attribute.id }>{`${attribute.name}: ${attribute.value_name}`}</p>
            ))
          }
        </span>
      </section>
    </main>
  );
}

export default ProductDetails;
