import { Categories } from '../types/typesApi';

const URL_DATABASE = 'https://api.mercadolibre.com/';

export async function getCategories(): Promise<Categories[]> {
  const response = await fetch(`${URL_DATABASE}sites/MLB/categories`);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(
  query: string,
  categoryId?: string,
) {
  if (!categoryId) {
    const response = await
    fetch(`${URL_DATABASE}sites/MLB/search?q=${query}`);

    const data = await response.json();

    return data;
  }

  const response = await
  fetch(`${URL_DATABASE}sites/MLB/search?category=${categoryId}`);

  const data = await response.json();

  return data;
}

export async function getProductById(id: string | undefined) {
  const response = await fetch(`${URL_DATABASE}items/${id}`);
  const jsonData = await response.json();
  return jsonData;
}
