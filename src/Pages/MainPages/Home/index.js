import React from 'react'
import Banner from '../../../Components/Banner'
import Service__banner from '../../../Components/Service__banner'
import Products from '../../../Components/Products'
import LatestNews from '../../../Components/Latest News'

const Home = () => {
  return (
    <div>
      <Banner />
      <Service__banner />
      <Products />
      <LatestNews />
    </div>
  )
}

export default Home