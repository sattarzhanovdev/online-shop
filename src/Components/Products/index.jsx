import React from 'react'
import { ProductsList } from '../../Utils'
import './Products.scss'

const Products = () => {
  return (
    <div className='products__container'>
      <div className="products">
        {
          ProductsList.map(({id, title, img}) => (
            <div 
              className="product"
              key={id}
            >
              <div className="photo">
                <img 
                  src={img}
                  alt={title}
                />
              </div>
              <div className="desc">
                <h2>
                  {title}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, aliquam?
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products