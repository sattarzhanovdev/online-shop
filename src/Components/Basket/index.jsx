import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { API } from '../../API'
import './Basket.scss'

const Basket = ({activeBasket, setActiveBasket}) => {
  const accessToken = localStorage.getItem('accessToken')

  React.useEffect(() => {
    API.getBaskets(accessToken)
      .then(res => console.log(res.data))
  }, [])

  return (
    <div className={activeBasket ? 'basket' : 'basket__none'}>
      <div className="close">
        <li onClick={() => setActiveBasket(false)}>
          <IoCloseSharp />
        </li>
      </div>
    </div>
  )
}

export default Basket