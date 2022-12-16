import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { API } from '../../API'
import { GetProducts, GetSavedProducts } from '../../Helpers/GetProducts'
import { useAuth } from '../../Providers/useAuth'
import './More.scss'

const More = ({item}) => {
  const [ count, setCount ] = React.useState(1)
  const { users } = useAuth()

  const { saveBase } = GetSavedProducts()

  const Navigate = useNavigate()

  const to__basket = () => {
    if(users){
      API.postBaskets({
        ...item,
        count
      })
    }else{
      alert('Вы не авторизованы')
      Navigate('/auth/register')
    }
  }

  

  const to__favorite = (data) => {
    if(users){
      API.postFavorite(data)
    }else{
      alert('Вы не авторизованы!')
      Navigate('/auth/register')
    }
  }

  return (
    <div className='more__container'>
      <div className="more">
        <div className="left__side">
          <div className="more__title">
            <h3>{item?.title}</h3>
          </div>
          <div className="more__image">
            <img 
              src={item?.image} 
              alt={item?.title}
            />
          </div>
        </div>
        <div className="right__side">
          <div className="like">
            <li 
              onClick={() => to__favorite(item)}
            >
              {
                saveBase ? 
                saveBase.filter(val => val.id === item.id ? <AiFillHeart /> : <AiOutlineHeart />) :
                <AiOutlineHeart />
              }
            </li>
          </div>
          <div className="more__price">
            <p>
              Цена за шт:
            </p>
            <h3>
              {item?.price} сом
            </h3>
          </div>
          <div className="more__summa">
            <p>
              Сумма:
            </p>
            <h3>
              <span>{item?.price * count}.00</span> сом
            </h3>
          </div>
          <div className="more__count">
            <button
              onClick={() => setCount(count - 1)}
              disabled={count === 1 ? true : false}
            >
              -
            </button>
            <input 
              type="text"
              value={count}
              onChange={e => setCount(Number(e.target.value))}
            />
            <button
              onClick={() => setCount(count + 1)} 
            >
              +
            </button>
          </div>
          <button 
            className='to__basket'
            onClick={() => to__basket()}
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  )
}

export default More