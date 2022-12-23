import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { API } from '../../API'
import { GetProducts } from '../../Helpers/GetProducts'
import './Wishlist.scss'

const Wishlist_List = () => {
  const [ saveBase, setSaveBase ] = React.useState('')
  const [ refresh, setRefresh ] = React.useState('')
  const { base } = GetProducts()
  
  const accessToken = localStorage.getItem('accessToken')

  let savedBase = []
  
  React.useEffect(() => {
    API.getFavorites(accessToken)
    .then(res => {
      setSaveBase(res.data)
      res.data?.map(item => {
        return base?.map(val => val.id === item.product ? savedBase.unshift(val) : '')
      })
      localStorage.setItem('savedBase' , JSON.stringify(savedBase));
    })  

    setTimeout(() => {
      setRefresh('hello')
    }, 1000)
  }, [refresh])

  const baseFavorites = JSON.parse(localStorage.getItem('savedBase'))

  const delete__favorite = (id) => {
    const newId = saveBase?.find(val => val.product === id ? val.id : '')
    if(accessToken){  
      API.deleteFavorite(accessToken, newId.id)
      setRefresh('refreshing!')
    }else{
      alert('Вы не авторизованы!')
      Navigate('/auth/register')
    }
  } 
  const Navigate = useNavigate()

  return (
    <div className='wishlist__container'>
      <div className="wishlist">
        <h2>
          Желаемые Продукты
        </h2>
        <div className="wishlist__cards">
          {
            baseFavorites?.length > 0 ?
            baseFavorites.map(item => (
              <div 
                key={item.id}
                className="products__card"
              >
                <div className="delete">
                  <button 
                    onClick={() => {
                      delete__favorite(item.id)
                    }}
                  >
                    <AiFillHeart />
                  </button>
                </div>
                <div className="products__image">
                  <img 
                    src={item.image}
                    alt={item.title}
                    onClick={() => Navigate(`/products/product/${item.id}`)}
                  />
                </div>
                <div className="products__more">
                  <p>
                    {item.title}
                  </p>
                  <h3>
                    {item.price} сом/шт
                  </h3>
                  <button
                    onClick={() => delete__favorite(item.id)}
                  >
                    Подробнее
                  </button>
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
              <h2>Вы ничего не желаете</h2>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Wishlist_List