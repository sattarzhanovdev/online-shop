import axios from "axios"

export const API = {
  getProducts: () => axios.get('/products/product'),
  getCategories: () => axios.get('/categories/category'),
}