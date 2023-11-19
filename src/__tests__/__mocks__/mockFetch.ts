import categoriesMock from "./categories";
import queryMock from "./query";
import deatilsMock from "./details";
import searchQueryMOck from "./searchQuery";


const mockFetch = (url: any) => {
  if (url === 'https://api.mercadolibre.com/sites/MLB/categories') {
    return Promise.resolve({
      json: () => Promise.resolve(categoriesMock)
    })
  }

  if (url.includes('https://api.mercadolibre.com/sites/MLB/search?category=') && url.includes('&q=')) {
    return Promise.resolve({
      json: () => Promise.resolve(queryMock)
    })
  }

  if (url.includes('https://api.mercadolibre.com/sites/MLB/search?q=')) {
    return Promise.resolve({
      json: () => Promise.resolve(searchQueryMOck)
    })
  }

  if (url.includes('https://api.mercadolibre.com/sites/MLB/search?category=')) {
    return Promise.resolve({
      json: () => Promise.resolve(queryMock)
    })
  }

  if (url.includes('https://api.mercadolibre.com/items/')) {
    return Promise.resolve({
      json: () => Promise.resolve(deatilsMock)
    })
  }

  return Promise.reject('Houve algo de errado com o endpoint, verifique se ele está correto')
};

export default mockFetch;