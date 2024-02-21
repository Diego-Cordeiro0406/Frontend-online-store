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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [productDataLoaded, setProductDataLoaded] = useState(false);

  const URL_DATABASE = 'https://api.mercadolibre.com/';

  // função responsável por fazer uma requisição a api e retornar as categorias existentes.
  async function getCategories(): Promise<Categories[]> {
    const response = await fetch(`${URL_DATABASE}sites/MLB/categories`);
    const dataCategory = await response.json();
    setCategories(dataCategory);
    return dataCategory;
  }

  // função responsável por fazer uma requisição a api com base em um id especifico.
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

  // função responsável por fazer uma requisição a api com base em uma query ou categoria.
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

  // função responsável por popular o estado dos produtos com base na função getProductsFromCategoryAndQuery.
  async function sendProductsRequest(query: string) {
    try {
      setLoading(true);
      if (valueInput) {
        const returned = await getProductsFromCategoryAndQuery(query, valueInput);
        setData(returned);
        setValueInput('');
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

  // Função responsável por lidar com a alteração de estado dos inputs de categoria.
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValueInput(newValue);
    setSearch('');
  };

  // Função responsável por adicionar um produto ao carrinho.
  const addCart = (obj: ProductCart) => {
    const updatedCart = [...cart, obj];
    const toSet = document.getElementById(obj.id);
    setCart(updatedCart);
    toSet!.classList.add('bg-green-700');
    toSet!.innerHTML = 'Adicionado ao carrinho';
    setTimeout(() => toSet!.classList.remove('bg-green-700'), 3000);
    setTimeout(() => { toSet!.innerHTML = 'Adicionar ao carrinho'; }, 3000);
  };

  // Função responsável por retornar a quantidade de itens no carrinho.
  const getQuantity = (): number => {
    const total = cart.reduce((acc, curr) => {
      return acc + (curr.price * curr.quantity);
    }, 0);
    return Number(total.toFixed(2));
  };

  // Função responsável por aumentar em 1 a quantidade de um produto antes de adiciona-lo ao carrinho.
  const addQuantity = (id: string): void => {
    const updateQuantity = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updateQuantity);
  };

  // Função responsável por diminuir em 1 a quantidade de um produto antes de adiciona-lo ao carrinho.
  const sutractQuantity = (id: string): void => {
    const updateQuantity = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updateQuantity);
  };

  // Função responsável por remover um produto do carrinho.
  const removeProduct = (id: string): void => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const toggleCategories = async () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Estados e funções a serem compartilhados entre os componentes.
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
    toggleCategories,
    sidebarOpen,
    productDataLoaded,
    setProductDataLoaded,
  };
  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
