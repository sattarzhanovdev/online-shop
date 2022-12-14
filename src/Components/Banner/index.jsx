import React from 'react'
import './Banner.scss'

const Banner = () => {
  return (
    <div className="banner__container">
      <div className='banner'>
        <div className="left__banner">
          <h3>
            <span>70%</span> Скидки
          </h3>
          <h2>
            Качественные продукты Хлебобулочные изделия
          </h2>
          <button>
            Купить сейчас
          </button>
        </div>
        <div className="right__banner">
          <img 
            src="/img/hero-banner-shape.webp" 
            alt="banner__photo" 
          />
        </div>
      </div>
    </div>
  )
}

export default Banner