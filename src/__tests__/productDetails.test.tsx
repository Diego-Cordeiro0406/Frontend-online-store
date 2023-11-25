import { act, screen, waitFor } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import App from '../App';
import queryMock from './__mocks__/query';
import * as api from '../services/api'
import categoriesMock from './__mocks__/categories';
import productDetailsMock from './__mocks__/productDetailsMock';


describe(`Testa se Redireciona para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto`, () => {
  afterEach(() => vi.clearAllMocks());
  it('Clicar no card de um produto leva à página com seus detalhes', async () => {
    const mockFetchCategories = vi.spyOn(api, 'getCategories').mockResolvedValue(categoriesMock)
    const mockFetchProducts = vi.spyOn(api, 'getProductsFromCategoryAndQuery').mockResolvedValue(queryMock)
    const mockFetch = vi.spyOn(api, 'getProductById').mockResolvedValue(productDetailsMock)
    
    renderWithRouter(<App />);
    await waitFor(() => expect(mockFetchCategories).toHaveBeenCalled());
  
    const categoriesEl = await screen.findAllByTestId('category');

    await act(async () => {
    userEvent.click(categoriesEl[29]);
    })
  
    await waitFor(() => expect(mockFetchProducts).toHaveBeenCalled());

    const productLinksEl = await screen.findAllByTestId('product-detail-link');

    await act(async () => {
    userEvent.click(productLinksEl[0]);
    })
  
    await waitFor(() => expect(mockFetch).toHaveBeenCalled());

    const productNameEl = await screen.findByTestId('product-detail-name');
    const productImageEl = await screen.findByTestId('product-detail-image');
    const productPriceEl = await screen.findByTestId('product-detail-price');

    expect(productNameEl).toHaveTextContent(
      queryMock.results[0].title
    );
    expect(productImageEl).toBeInTheDocument();
    expect(Number(productPriceEl.textContent)).toBe(queryMock.results[0].price);
  });
  it('Na página de detalhes de um produto, o elemento que redireciona para o carrinho de compras é exibido', async () => {
    renderWithRouter(<App />);

    await waitFor(() =>
      expect(screen.getByTestId('shopping-cart-button')).toBeInTheDocument()
    );
    
    await act(async () => {
      userEvent.click(screen.getByTestId('shopping-cart-button'));
    })

    await waitFor(() =>
      expect(
        screen.getByTestId('shopping-cart-empty-message')
      ).toBeInTheDocument()
    );
  });
});
