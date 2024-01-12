import { ReactNode, useState } from 'react';
import { Categories, Product, ProductCart } from '../types/typesApi';
import Context, { MyContextProps } from './Context';

interface MyProviderProps {
  children: ReactNode;
}

function Provider({ children }: MyProviderProps) {
  const [categories, setCategories] = useState([]);
  const [route, setRoute] = useState(false);
  const [search, setSearch] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [isTrue, setTrue] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [productData, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<ProductCart[]>([]);

  const URL_DATABASE = 'https://api.mercadolibre.com/';

  async function getCategories(): Promise<Categories[]> {
    const response = await fetch(`${URL_DATABASE}sites/MLB/categories`);
    const dataCategory = await response.json();
    setCategories(dataCategory);
    return dataCategory;
  }

  async function getProductById(id: string | undefined) {
    try {
      setLoading(true);
      const response = await fetch(`${URL_DATABASE}items/${id}`);
      const jsonData = await response.json();
      setProduct(jsonData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getProductsFromCategoryAndQuery(
    query: string,
    categoryId?: string,
  ) {
    if (!categoryId) {
      const response = await
      fetch(`${URL_DATABASE}sites/MLB/search?q=${query}`);

      const dataQuery = await response.json();

      return dataQuery.results;
    }

    const response = await
    fetch(`${URL_DATABASE}sites/MLB/search?category=${categoryId}`);

    const dataQuery = await response.json();

    return dataQuery.results;
  }

  async function sendProductsRequest(query: string) {
    try {
      setLoading(true);
      if (valueInput) {
        const returned = await getProductsFromCategoryAndQuery(query, valueInput);
        setData(returned);
      } else {
        const returned = await getProductsFromCategoryAndQuery(query);
        setData(returned);
      }
      if (data.length === 0) setTrue(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValueInput(newValue);
    setSearch('');
  };

  const addCart = (obj: ProductCart) => {
    const updatedCart = [...cart, obj];
    setCart(updatedCart);
  };

  const getQuantity = (): number => {
    const total = cart.reduce((acc, curr) => {
      return acc + (curr.price * curr.quantity);
    }, 0);
    return Number(total.toFixed(2));
  };

  // const addQuantityInTheProductDetails = () => {

  // };

  const addQuantity = (id: string): void => {
    const updateQuantity = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updateQuantity);
  };

  const sutractQuantity = (id: string): void => {
    const updateQuantity = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updateQuantity);
  };

  const removeProduct = (id: string): void => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const value:MyContextProps = {
    getCategories,
    getProductById,
    getProductsFromCategoryAndQuery,
    categories,
    route,
    setRoute,
    search,
    setSearch,
    valueInput,
    setValueInput,
    handleRadioChange,
    isTrue,
    isLoading,
    data,
    productData,
    setProduct,
    sendProductsRequest,
    cart,
    addCart,
    getQuantity,
    removeProduct,
    addQuantity,
    sutractQuantity,
  };
  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
