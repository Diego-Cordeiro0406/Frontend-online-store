import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

import { useMediaQuery } from 'react-responsive';
import Context from '../context/Context';
import Header from '../components/Header';
import CartDesktop from '../components/CartDesktop';
import CartMobile from '../components/CartMobile';
import CategoriesBar from '../components/CategoriesBar';

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
              className="
                flex
                flex-col
                justify-evenly
                items-center
                laptop:w-screen
                laptop:h-screen
                phone:h-96
                phone:overflow-hidden
              "
              data-testid="shopping-cart-empty-message"
            >

              <button
                className="
                  flex
                  items-center
                  w-full
                  font-semibold
                  text-lg
                  text-[#2FC18C]
                "
                onClick={ () => navigate(-1) }
              >
                <TiArrowBack size="1.5em" style={ { color: '#2FC18C' } } />
                Voltar
              </button>
              <h3
                className="
                  flex
                  justify-center
                  items-center
                  laptop:text-3xl
                  font-semibold
                  uppercase
                  text-green-500
                  w-full
                  h-full
                "
              >
                Seu carrinho está vazio
              </h3>
            </div>
          )
          : (
            <main className="flex justify-center h-full phone:flex-col laptop:flex-row">
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
