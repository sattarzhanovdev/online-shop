import React from 'react';
import './Goods.scss'
import {BiSearch} from "react-icons/bi";
import {GetProducts} from "../../Helpers/GetProducts";
import {useNavigate} from "react-router-dom";
import './Goods.scss'


const Goods_list = () => {
  const {base} = GetProducts()
  const [ search, setSearch ] = React.useState('')

  const filteredBase = base?.filter(item => item.category === 1 && item.title.toLowerCase().includes(search.toLowerCase()) ? item : null)

  const Navigate = useNavigate()

  console.log(filteredBase)
  return (
    <div className='goods__container'>
      <div className="goods">
        <div className="search">
          <input
            type="text"
            placeholder="Введите название товара"
            onChange={e => setSearch(e.target.value)}
          />
          <button>
            <BiSearch />
          </button>
        </div>
        <div className="goods__cards">
          {
            filteredBase?.length > 0 ?
              filteredBase?.map(item => (
                <div
                  className="goods__card"
                >
                  <div className="goods__image">
                    <img
                      src={item.image}
                      alt={item.title}
                      onClick={() => Navigate(`/products/product/${item.id}`)}
                    />
                  </div>
                  <div className="goods__more">
                    <p>
                      {item.title.length > 25 ? `${item.title.slice(0, 25)}...` : item.title}
                    </p>
                    <h3>
                      {item.price} сом/шт
                    </h3>
                    <button
                      onClick={() => Navigate(`/products/product/${item.id}`)}
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
        </div>
      </div>
    </div>
  );
};

export default Goods_list;