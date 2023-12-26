// import { act, screen, waitForElementToBeRemoved } from '@testing-library/react';
// import renderWithRouter from './helpers/renderWithRouter';
// import userEvent from '@testing-library/user-event';

// import App from '../App';
// import Provider from '../context/Provider';


// describe(`Testa se Redireciona para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto`, () => {
//   it('Clicar no card de um produto leva à página com seus detalhes', async () => {
//     renderWithRouter(
//       <Provider>
//         <App />
//       </Provider>
//     );
  
//     const categoriesEl = await screen.findAllByTestId('category');

//     await act(async () => {
//       userEvent.click(categoriesEl[0]);
//     })

//     const loadingElement = screen.queryByTestId("loading");
//     if (loadingElement) {
//       await waitForElementToBeRemoved(() => screen.getByTestId("loading"), { timeout: 5000 });
//     }

//     const productLinksEl = await screen.findAllByTestId('product-detail-link');

//     await act(async () => {
//       userEvent.click(productLinksEl[0]);
//     })

//     if (loadingElement) {
//       await waitForElementToBeRemoved(() => screen.getByTestId("loading"), { timeout: 5000 });
//     }

//     const productNameEl = await screen.findByTestId('product-detail-name');
//     const productImageEl = await screen.findByTestId('product-detail-image');
//     const productPriceEl = await screen.findByTestId('product-detail-price');

//     expect(productNameEl).toBeInTheDocument();
//     expect(productImageEl).toBeInTheDocument();
//     expect(productPriceEl).toBeInTheDocument();
//   });
//   it('Na página de detalhes de um produto, o elemento que redireciona para o carrinho de compras é exibido', async () => {
//     renderWithRouter(
//       <Provider>
//         <App />
//       </Provider>
//   );
//   const categoriesEl = await screen.findAllByTestId('category');

//   await act(async () => {
//     userEvent.click(categoriesEl[0]);
//   })

//   const loadingElement = screen.queryByTestId("loading");
//   if (loadingElement) {
//     await waitForElementToBeRemoved(() => screen.getByTestId("loading"), { timeout: 5000 });
//   }

//   const productLinksEl = await screen.findAllByTestId('product-detail-link');

  // await act(async () => {
  //   userEvent.click(productLinksEl[0]);
  // })

  // if (loadingElement) {
  //   await waitForElementToBeRemoved(() => screen.getByTestId("loading"), { timeout: 5000 });
  // }
  // const cartEl = screen.getByTestId('shopping-cart-button')
  // expect(cartEl).toBeInTheDocument()
    
  // await act(async () => {
  //   userEvent.click(cartEl)
  // })

  // await waitFor(() =>
  //   expect(screen.getByTestId('shopping-cart-empty-message')).toBeInTheDocument()
  // );
//   });
// });
