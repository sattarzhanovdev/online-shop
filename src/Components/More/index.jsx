import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { API } from '../../API'
import ReactImageMagnify from 'react-image-magnify'
import './More.scss'

const More = ({item}) => {
  const [ count, setCount ] = React.useState(1)
  const [ have, setHave ] = React.useState(false)
  const [ refresh, setRefresh ] = React.useState('')

  const accessToken = localStorage.getItem('accessToken')

  React.useEffect(() => {
    API.getFavorites(accessToken)
    .then(res => {
      res.data?.find(val => val.product === item?.id ? setHave(val) : '')
    })
    setTimeout(() => {
      setRefresh('Helloo')
    }, 1000)
  }, [refresh])

  const Navigate = useNavigate()

  const to__basket = () => {
    if(accessToken){
      API.postBaskets(accessToken, {products: [JSON.stringify(item.id)], is_active: item.is_active})

      // setTimeout(() => {
      //   API.putCount(accessToken, {"product": JSON.stringify(item.id), "amount": JSON.stringify(count)})
      // }, 3000)
    }else{
      alert('Вы не авторизованы')
      Navigate('/auth/register')
    }
  }

  const to__favorite = () => {
    if(accessToken){
      API.postFavorite(accessToken, {product: item.id, is_active: item.is_active})
      setRefresh('post')
    }else{
      alert('Вы не авторизованы!')
      Navigate('/auth/register')
    }
  }
  
  const delete__favorite = (id) => {
    if(accessToken){
      API.deleteFavorite(accessToken, id)
      setRefresh('delete')
      setTimeout(() => {
        setRefresh('delete')
      }, 1000)
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
            <ReactImageMagnify
              style={{
                zIndex: 1,
              }}
              {...{
              smallImage: {
                alt: item?.title,
                src: item?.image,
                isFluidWidth: 300,
                width: 400,
                height: 400
              },
              largeImage: {
                src: item?.image,
                width: 800,
                height: 700
              }
            }

            }/>
          </div>
        </div>
        <div className="right__side">
          <div className="like">
            <button 
              onClick={() => have.product === item?.id ? delete__favorite(have.id) : to__favorite()}
            >
              {
                have.product === item?.id ? <AiFillHeart /> : <AiOutlineHeart />
              }
            </button>
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