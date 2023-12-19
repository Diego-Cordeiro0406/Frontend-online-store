import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import CategoriesBar from '../components/CategoriesBar';
import { Product } from '../types/typesApi';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Context from '../context/Context';

interface MainScreenProps { }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MainScreen(_props: MainScreenProps) {
  const [search, setSearch] = useState('');
  const [isTrue, setTrue] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const [categoryInput, setCategoryInput] = useState<string | null>(null);

  const getValorRadio = (dataCategory: string) => {
    setCategoryInput(dataCategory);
  };

  const getInputValue = (inputData: string) => {
    setSearch(inputData);
  };

  // useEffect(() => {
  //   sendProductsRequest();
  // }, [location]);

  const context = useContext(Context);

  if (!context) return null;
  const { getProductsFromCategoryAndQuery } = context;

  async function sendProductsRequest() {
    try {
      setLoading(true);
      if (categoryInput) {
        const returned = await getProductsFromCategoryAndQuery(search, categoryInput);
        setData(returned);
      } else {
        const returned = await getProductsFromCategoryAndQuery(search);
        setData(returned);
      }
      if (data.length === 0) setTrue(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header
        sendInputValue={ getInputValue }
        // eslint-disable-next-line react/jsx-no-bind
        sendProductsRequest={ sendProductsRequest }
      />
      <main
        className="
        flex
        flex-row
        overflow-auto
        overscroll-contain
        "
      >
        <CategoriesBar
          sendRadioValue={ getValorRadio }
          // eslint-disable-next-line react/jsx-no-bind
          sendProductsRequest={ sendProductsRequest }
        />
        <section
          className="
          bg-slate-200
          flex
          w-full
          justify-evenly
          items-center
          flex-wrap
          overflow-y-scroll
          section-container
          "
        >
          {
            data.length === 0 && !isTrue && !isLoading && (
              <p
                className="flex items-center"
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
            )
          }
          {
            data.length === 0 && isTrue && (
              <p data-testid="not-found-product">
                Nenhum produto foi encontrado
              </p>
            )
          }
          { isLoading ? <ScaleLoader color="#36d7b7" /> : data.map((product) => (
            <Link
              key={ product.id }
              data-testid="product-detail-link"
              to={ `/product/${product.id}` }
            >
              <ProductCard
                key={ product.id }
                title={ product.title }
                img={ product.thumbnail }
                price={ product.price }
              />
            </Link>
          ))}
        </section>
      </main>
    </>

  );
}

export default MainScreen;
