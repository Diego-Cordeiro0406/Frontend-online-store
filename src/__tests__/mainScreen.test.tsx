import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import { vi } from 'vitest';

import App from '../App';
import categoriesMock from './__mocks__/categories';
import * as api from '../services/api'

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