import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

import { useMediaQuery } from 'react-responsive';
import Context from '../context/Context';
import Header from '../components/Header';
import CartDesktop from '../components/CartDesktop';
import CartMobile from '../components/CartMobile';
import CategoriesBar from '../components/SideBar';

function ShoppingCart() {
  const context = useContext(Context);
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 1023 });

  if (!context) return null;
  const { cart } = context;

  return (
    <>
      <CategoriesBar />
      <Header />
      {
        cart.length === 0
          ? (
            <div
              className=""
              data-testid="shopping-cart-empty-message"
            >

              <button
                className=""
                onClick={ () => navigate(-1) }
              >
                <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                Voltar
              </button>
              <h3
                className=""
              >
                Seu carrinho está vazio
              </h3>
            </div>
          )
          : (
            <main className="">
              {
              isMobile ? <CartMobile /> : <CartDesktop />
            }
            </main>
          )
      }
    </>

  );
}

export default ShoppingCart;
