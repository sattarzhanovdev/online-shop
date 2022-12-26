import axios from "axios"

export const BASE_URL = 'https://cryxxen.pythonanywhere.com'

export const API = {
  getProducts: () => axios.get('/products/product/'),
  getProductsMore: (id) => axios.get(`/products/product/${id}/`),
  getBaskets: (accessToken) => axios.get('/baskets/', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }),
  postBaskets: (accessToken, data) => axios.post('/baskets/', data, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  },),
  postBasketDetails: (accessToken, data) => axios.post('/basket_detail/', data, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  },),
  deleteBaskets: (accessToken, id) => axios.delete(`/baskets/${id}/`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  },),
  postFavorite: (accessToken, data) => axios.post('/favorites/' , data, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
  }, ),
  deleteFavorite: (accessToken, id) => axios.delete(`/favorites/${id}/`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
  }, ),
  getFavorites: (accessToken) => axios.get('/favorites/', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }),
  register: (data) => axios.post('/users/user/', data),
  login: (data) => axios.post('/token/', data),
  edit: (id, data) => axios.put(`/users/current-user/${id}/`, data),
  getToken: (data) => axios.post('/token/', data),
  getUser: (accessToken) => axios.get('/users/get_user/', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }),
  
}