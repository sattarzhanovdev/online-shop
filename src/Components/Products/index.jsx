import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GetProducts } from '../../Helpers/GetProducts'
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md'
import './Products.scss'

const Products = () => {
  const { base, PAGE_SIZE, TOTAL_PAGE, page, setPage } = GetProducts()

  const filteredBase = base?.filter(item => item.category === 1 ? item : null)

  const Navigate = useNavigate()


  const nextPage = () => setPage(prev => prev + 1)
  const prevPage = () => setPage(prev => prev - 1)
  
  return (
    <div className='products__container'>
      <div className="products">
        <h2>Новые Продукты</h2>
        <div className="products__cards">
          {
            filteredBase?.length > 0 ?
              filteredBase?.slice(0, 10).reverse()
            .map((item, i) => (
              <div 
                key={i}
                className="products__card"
              >
                <div className="products__image">
                  <img 
                    src={item.image}
                    alt={item.title}
                    onClick={() => Navigate(`products/product/${item.id}`)}
                  />
                </div>
                <div className="products__more">
                  <p>
                    {item.title.length > 25 ? `${item.title.slice(0, 25)}...` : item.title}
                  </p>
                  <h3>
                    {item.price} сом/шт
                  </h3>
                  <button
                    onClick={() => Navigate(`products/product/${item.id}`)}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))
            :
            <div className='nothing'>
              <img src="/img/no.png" alt="" />
              <h2>Продуктов нет!</h2>
            </div>
          }

        {
          filteredBase?.length > 10 ?
          <div className='pagination'>
            <button 
              onClick={prevPage}
              disabled={page === 1}
            >
              <MdOutlineArrowLeft />
            </button>
            {
              Array.from({length: TOTAL_PAGE}).map((item, i) => (
                <span
                  key={i}
                  className={page === i + 1 ? 'active' : ''}
                  onClick={() => setPage(i + 1)}
                >
                  {i+1}
                </span>
              ))
            }
            <button 
              onClick={nextPage}
              disabled={page === TOTAL_PAGE}
            >
              <MdOutlineArrowRight />
            </button>
          </div>
          :
          null
        }

        </div>
      </div>
    </div>
  )
}

export default Products