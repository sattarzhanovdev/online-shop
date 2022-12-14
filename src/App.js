import React from 'react'
import axios from 'axios'
import { API } from './API'
import './App.scss'
import Header from './Components/Header'
import NavBar from './Components/Navbar'
import Banner from './Components/Banner'
import Products from './Components/Products'

axios.defaults.baseURL = 'https://cryxxen.pythonanywhere.com'
const App = () => { 
  React.useEffect(() => {
    API.getProducts()
      .then(res => console.log(res.data))
  }, [])

  return (
    <div>
      <Header />
      <NavBar />
      <Banner />
      <Products />
      
    </div>
  )
}

export default App