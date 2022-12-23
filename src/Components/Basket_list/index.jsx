import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { API, BASE_URL } from '../../API'
import { GetProducts } from '../../Helpers/GetProducts'
import './Basket.scss'

const Basket_list = () => {
  const [ basketBase, setBasketBase ] = React.useState('')
  const [ refresh, setRefresh ] = React.useState('')
  const [ count, setCount ] = React.useState(1)
  const { base } = GetProducts()
  
  const accessToken = localStorage.getItem('accessToken')

  const Navigate = useNavigate()

  React.useEffect(() => {
    if(accessToken){
      API.getBaskets(accessToken)
        .then(res => {
          setBasketBase(res.data)
          res.data?.map(item => {
            return base?.map(val => val.id === item.product ? basketBase.unshift(val) : '')
          })
        })  
    }else{
      alert('Вы не авторизованы!')
      Navigate('/auth/register')
    }
    setTimeout(() => {
      setRefresh('hello')
    }, 1000)
  }, [refresh])

  const delete__basket = (id) => {
    if(accessToken){  
      API.deleteBaskets(accessToken, id)
      setRefresh('refreshing!')
    }else{
      alert('Вы не авторизованы!')
      Navigate('/auth/register')
    }
  } 

  return (
    <div className='basket__container'>
      <div className="basket">
        <h2>
          Продукты в корзине
        </h2>
        <div className="basket__table">
          {
            basketBase?.length > 0 ? 
            basketBase.map((item, i) => (
              <div key={i}>
                <img 
                  src={`${BASE_URL}${item.products_data[0].image}`} 
                  alt={item.products_data[0].title} 
                />
                <h3>{item.products_data[0].title}</h3>
                <div className="count">
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
                <h2>{item.products_data[0].price} сом/шт</h2>
                <div className="delete">
                  <li 
                    onClick={() => delete__basket(JSON.stringify(item.id))}
                  >
                    <AiOutlineClose />
                  </li>
                </div>
              </div>
            )) :
            !accessToken ?
            <div className='nothing'>
              <img src="/img/no.png" alt="" />
              <h2>Вы не авторизованы!</h2>
              <button
                onClick={() => Navigate('/auth/register')}
              >
                Авторизоваться
              </button>
            </div>
             :
            <div className='nothing'>
              <img src="/img/not_auth.png" alt="" />
              <h2>Корзина пустая!</h2>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Basket_list;