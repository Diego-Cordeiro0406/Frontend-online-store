import '@testing-library/jest-dom';
import { act, screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import App from '../App';
import categoriesMock from './__mocks__/categories';
import searchQueryMOck from './__mocks__/searchQuery';
import * as api from '../services/api'
import queryMock from './__mocks__/query';

describe('Testa a página de listagem de produtos vazia', () => {
  afterEach(() => vi.clearAllMocks());
  it(`A tela contém a mensagem pedida: 'Digite algum termo de pesquisa ou escolha uma
      categoria.'`, () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('home-initial-message')).toHaveTextContent(
      'Digite algum termo de pesquisa ou escolha uma categoria.',
    );
  });
});


describe(`Testa as categorias de produtos disponíveis via API na página principal`, () => {
  afterEach(() => vi.clearAllMocks());
  it(`Exibe as categorias retornadas pela API na página de listagem de
      produtos`, async () => {
      const mockFetch = vi.spyOn(api, 'getCategories').mockResolvedValue(categoriesMock)
    renderWithRouter(<App />);

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    expect(mockFetch).toHaveBeenCalledTimes(1)
    const categoriesElements = await screen.findAllByTestId('category')
    
    expect(categoriesElements.length).toEqual(categoriesMock.length)
    
  });
});

describe(`Testa os produtos buscados por termos, com os dados resumidos, associados a esses termos`, () => {  
  afterEach(() => vi.clearAllMocks());
  it('Exibe a mensagem "Nenhum produto foi encontrado" caso a busca não retorne produtos', async () => {
    renderWithRouter(<App />);

    await act(async () => {
    userEvent.click(screen.getByTestId('query-button'));
    })

    await waitFor(() => expect(screen.getByText('Nenhum produto foi encontrado')).toBeInTheDocument());
  })
  
  it(`Exibe todos os produtos retornados pela API, dado um determinado filtro`, async () => {
    const mockFetch = vi.spyOn(api, 'getProductsFromCategoryAndQuery').mockResolvedValue(searchQueryMOck)
    renderWithRouter(<App />);
 
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

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    expect(mockFetch).toHaveBeenCalledTimes(1);

    const productsElements = await screen.findAllByTestId('product');
    expect(productsElements.length).toEqual(
      searchQueryMOck.results.length,
    );
  });
});

describe('Testa se ao selecionar uma categoria é mostrado somente os produtos daquela categoria', () => {
  afterEach(() => vi.clearAllMocks());
  it(`Filtra corretamente os produtos de uma página para exibir somente os daquela
      categoria`, async () => {
  const mockFetch = vi.spyOn(api, 'getProductsFromCategoryAndQuery').mockResolvedValue(queryMock)

    renderWithRouter(<App />);
    

    const categoriesEl = await screen.findAllByTestId('category');

    await act(async () => {
    userEvent.click(categoriesEl[29]);
    })

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    expect(mockFetch).toHaveBeenCalledTimes(1);

    const productsEl = await screen.findAllByTestId('product');
    expect(productsEl.length).toEqual(queryMock.results.length);
  });
});