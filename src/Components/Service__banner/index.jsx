import React from 'react'
import './Service.scss'

const Service__banner = () => {
  return (
    <div className="service__container">
      <div className='service__banner'>
        <div className="service__card">
          <h5>
            <span>70%</span> Скидки
          </h5>
          <h3>
            Лучшое Качество <br />
            Продуктов
          </h3>
          <button>
            Купить сейчас
          </button>
        </div>
        <div className="service__card">
          <h5>
            <span>25%</span> Скидки
          </h5>
          <h3>
            Горячая & Пряное <br />
            Пастрии
          </h3>
          <button>
            Купить сейчас
          </button>
        </div>
      </div>
    </div>
  )
}

export default Service__banner