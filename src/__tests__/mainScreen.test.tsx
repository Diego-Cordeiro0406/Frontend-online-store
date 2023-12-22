// import '@testing-library/jest-dom';
// import { act, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
// import renderWithRouter from './helpers/renderWithRouter';
// import userEvent from '@testing-library/user-event';
// import { vi } from 'vitest';

// import App from '../App';
// import Provider from '../context/Provider';

// describe('Testa a página de listagem de produtos vazia', () => {
//   afterEach(() => vi.clearAllMocks());
//   it(`A tela contém a mensagem pedida: 'Digite algum termo de pesquisa ou escolha uma
//       categoria.'`, () => {
//         renderWithRouter(
//         <Provider>
//           <App />
//         </Provider>
//         );
//     expect(screen.getByTestId('home-initial-message')).toHaveTextContent(
//       'Digite algum termo de pesquisa ou escolha uma categoria.',
//     );
//   });
// });

// describe(`Testa os produtos buscados por termos, com os dados resumidos, associados a esses termos`, () => {  
//   afterEach(() => vi.clearAllMocks());
//   it('Exibe a mensagem "Nenhum produto foi encontrado" caso a busca não retorne produtos', async () => {
//       renderWithRouter(
//       <Provider>
//         <App />
//       </Provider>
//       );

//     await act(async () => {
//     userEvent.click(screen.getByTestId('query-button'));
//     })

//     await waitFor(() => expect(screen.getByText('Nenhum produto foi encontrado')).toBeInTheDocument());
//   })

//   it(`Renderiza todos os produtos retornados pela API, dado um determinado filtro`, async () => {
//     renderWithRouter(
//       <Provider>
//         <App />
//       </Provider>
//       );
 
//     await act(async () => {
//     userEvent.type(
//       screen.getByTestId('query-input'),
//       'carro'
//     );
//     })

//     const buttonEl = await screen.findByTestId('query-button')

//     await act(async () => {
//       userEvent.click(buttonEl);
//     })

//     const loadingElement = screen.queryByTestId("loading");
//     if (loadingElement) {
//       await waitForElementToBeRemoved(() => screen.getByTestId("loading"), { timeout: 5000 });
//     }

//     const productsElements = await screen.findAllByTestId('product');
//     productsElements.forEach(elemento => {
//       expect(elemento).toBeInTheDocument();
//     });
//   });
// });

// describe('Testa se ao selecionar uma categoria é mostrado somente os produtos daquela categoria', () => {
//   it(`Filtra corretamente os produtos de uma página para exibir somente os daquela
//       categoria`, async () => {
//     renderWithRouter(
//       <Provider>
//         <App />
//       </Provider>
//     );
    

//     const categoriesEl = await screen.findAllByTestId('category');

//     await act(async () => {
//       userEvent.click(categoriesEl[29]);
//     })

//     const loadingElement = screen.queryByTestId("loading");
//     if (loadingElement) {
//       await waitForElementToBeRemoved(() => screen.getByTestId("loading"), { timeout: 5000 });
//     }

//     const productsElements = await screen.findAllByTestId('product');
//     productsElements.forEach(elemento => {
//       expect(elemento).toBeInTheDocument();
//     });
//   });
// });