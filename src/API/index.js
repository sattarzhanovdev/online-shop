import axios from "axios"

export const API = {
  getProducts: () => axios.get('/products/product'),
  getProductsMore: (id) => axios.get(`/products/product/${id}`),
  getCategories: () => axios.get('/categories/category'),
  getBaskets: (accessToken) => axios.get('/baskets', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }),
  postBaskets: (accessToken, data) => axios.post('/baskets', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }, data),
  postFavorite: (accessToken, data) => axios.post('/favorites', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }, data),
  getSavedProducts: (accessToken) => axios.get('/favorites', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
}