import '@testing-library/jest-dom';
import { act, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import App from '../App';
import Provider from '../context/Provider';

import categoriesMock from './__mocks__/categories';
import searchQueryMOck from './__mocks__/searchQuery';
import MainScreen from '../pages/MainScreen';
import React from 'react';
// import * as api from '../services/api'
// import queryMock from './__mocks__/query';

describe('Testa a página de listagem de produtos vazia', () => {
  afterEach(() => vi.clearAllMocks());
  it(`A tela contém a mensagem pedida: 'Digite algum termo de pesquisa ou escolha uma
      categoria.'`, () => {
        renderWithRouter(
        <Provider>
          <App />
        </Provider>
        );
    expect(screen.getByTestId('home-initial-message')).toHaveTextContent(
      'Digite algum termo de pesquisa ou escolha uma categoria.',
    );
  });
});

describe(`Testa os produtos buscados por termos, com os dados resumidos, associados a esses termos`, () => {  
  afterEach(() => vi.clearAllMocks());
  it('Exibe a mensagem "Nenhum produto foi encontrado" caso a busca não retorne produtos', async () => {
    renderWithRouter(
    <Provider>
      <App />
    </Provider>
    );

    await act(async () => {
    userEvent.click(screen.getByTestId('query-button'));
    })

    await waitFor(() => expect(screen.getByText('Nenhum produto foi encontrado')).toBeInTheDocument());
  })

  it(`Exibe todos os produtos retornados pela API, dado um determinado filtro`, async () => {
    // const originalUseContext = React.useContext;
    // React.useContext = vi.fn().mockResolvedValue({
    //   getCategories: vi.fn(),
    //   getProductById: vi.fn(),
    //   getProductsFromCategoryAndQuery: vi.fn(),
    //   categories: categoriesMock,  // Substitua por seus valores reais de categoria
    //   batata: false,  // Substitua por seus valores reais
    //   setBatata: vi.fn(),
    //   search: 'mocked-search-term',
    //   setSearch: vi.fn(),
    //   valueInput: 'mocked-value-input',
    //   setValueInput: vi.fn(),
    //   handleRadioChange: vi.fn(),
    //   isTrue: true,
    //   isLoading: false,
    //   data: searchQueryMOck.results,  // Substitua por seus valores reais
    //   sendProductsRequest: vi.fn(),
    // })
    // vi.mock('../context/Context.ts', async() => ({
    //   useAuth0: async() => {
    //     const actual = await vi.importActual("../context/Context.ts")
    //     return {
    //       ...actual,
    //   getCategories: vi.fn(),
    //   getProductById: vi.fn(),
    //   getProductsFromCategoryAndQuery: vi.fn(),
    //   categories: categoriesMock,  // Substitua por seus valores reais de categoria
    //   batata: false,  // Substitua por seus valores reais
    //   setBatata: vi.fn(),
    //   search: 'mocked-search-term',
    //   setSearch: vi.fn(),
    //   valueInput: 'mocked-value-input',
    //   setValueInput: vi.fn(),
    //   handleRadioChange: vi.fn(),
    //   isTrue: true,
    //   isLoading: false,
    //   data: searchQueryMOck.results,  // Substitua por seus valores reais
    //   sendProductsRequest: vi.fn(),
    //     }
    //   }
    // }));
    renderWithRouter(
         <Provider>
          <MainScreen />
         </Provider>
          );
 
    await act(async () => {
    userEvent.type(
      screen.getByTestId('query-input'),
      'carro'
    );
    })

    const buttonEl = await screen.findByTestId('query-button')

    await act(async () => {
      userEvent.click(buttonEl);
    })

    
    // await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
//     // expect(mockFetch).toHaveBeenCalledTimes(1);

    const productsElements = await screen.findAllByTestId('product');
    expect(productsElements.length).toEqual(
      searchQueryMOck.results.length
    );
    // React.useContext = originalUseContext;
  });
});

// describe('Testa se ao selecionar uma categoria é mostrado somente os produtos daquela categoria', () => {
//   afterEach(() => vi.clearAllMocks());
//   it(`Filtra corretamente os produtos de uma página para exibir somente os daquela
//       categoria`, async () => {
  // const mockFetch = vi.spyOn(api, 'getProductsFromCategoryAndQuery').mockResolvedValue(queryMock)

    // renderWithRouter(<App />);
    

    // const categoriesEl = await screen.findAllByTestId('category');

    // await act(async () => {
    // userEvent.click(categoriesEl[29]);
    // })

    // await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    // expect(mockFetch).toHaveBeenCalledTimes(1);

//     const productsEl = await screen.findAllByTestId('product');
//     expect(productsEl.length).toEqual(queryMock.results.length);
//   });
// });