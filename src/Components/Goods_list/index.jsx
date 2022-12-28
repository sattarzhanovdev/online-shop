import React from 'react';
import {BiSearch} from "react-icons/bi";
import {GetProducts} from "../../Helpers/GetProducts";
import {useNavigate} from "react-router-dom";
import {MdOutlineArrowLeft, MdOutlineArrowRight} from "react-icons/md";
import './Goods.scss'
import {sortList} from "../../Utils";

const Goods_list = () => {
  const { base, PAGE_SIZE, TOTAL_PAGE, page, setPage } = GetProducts()
  const [ search, setSearch ] = React.useState('')
  const [ sortType, setSortType ] = React.useState('выберите')
  const [ sortTypeVal, setSortTypeVal ] = React.useState('')
  const [ sortActive, setSortActive ] = React.useState(false)
  const Navigate = useNavigate()

  const filteredBase = base?.filter(item => {
    if(item.category === 1 && item.title.toLowerCase().includes(search.toLowerCase())){
      return item
    }else if(sortTypeVal === 'price'){
      base?.sort((a, b) => {
        return a.price - b.price
      })
    }else if(sortTypeVal === 'alphabet'){
      base?.sort((a, b) => {
        return a.title > b.title
      })
    }
  })

  const nextPage = () => setPage(prev => prev + 1)
  const prevPage = () => setPage(prev => prev - 1)
  return (
    <div className='goods__container'>
      <div className="goods">
        <div className="up">
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
          <div className="sort">
            <h3>
              Сортировка по:
              <span
                onClick={() => setSortActive(!sortActive)}
              >
                {sortType}
              </span>
            </h3>
            {
              sortActive ?
                <div className="drop">
                  {
                    sortList.map(({id, title, val}) => (
                      <li
                        key={id}
                        onClick={() => {
                          setSortType(title.slice(2, title.length))
                          setSortTypeVal(val)
                          setSortActive(false)
                        }}
                      >
                        {title}
                      </li>
                    ))
                  }
                </div>
                :
                null
            }
          </div>
        </div>
        <div className="goods__cards">
          {
            filteredBase?.length > 0 ?
              filteredBase?.slice(
                (page - 1) * PAGE_SIZE,
                (page - 1) * PAGE_SIZE + PAGE_SIZE
              ).map((item, i) => (
                <div
                  key={i}
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
  );
};

export default Goods_list;