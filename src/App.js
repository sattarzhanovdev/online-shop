import React from 'react'
import axios from 'axios'
import { API, BASE_URL } from './API'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { MainPages } from './Pages/MainPages'
import Header from './Components/Header'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import { AuthPages } from './Pages/AuthPages'

axios.defaults.baseURL = BASE_URL
const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route 
          path='*'
          element={<MainPages.Pages.Home />}
        />
        <Route 
          path='/'
          element={<MainPages.Pages.Home />}
        />
        <Route 
          path='/products/product/:id'
          element={<MainPages.Pages.ProductsMore />}
        />
        <Route 
          path='/wishlist'
          element={<MainPages.Pages.Wishlist />}
        />
        <Route 
          path='/basket'
          element={<MainPages.Pages.Basket />}
        />
        <Route
          path='/goods'
          element={<MainPages.Pages.Goods />}
        />
        <Route 
          path='/auth/login'
          element={<AuthPages.Pages.Login />}
        />
        <Route 
          path='/auth/register'
          element={<AuthPages.Pages.Register />}
        />
        <Route
          path='/my_account'
          element={<AuthPages.Pages.MyAccount />}
        />
        <Route
          path='/about'
          element={<MainPages.Pages.About />}
        />
      </Routes>
      {/*<Footer />*/}
    </div>
  )
}

export default App