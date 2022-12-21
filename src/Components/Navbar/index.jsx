import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavList } from '../../Utils'
import { BiSearch, BiHeart, BiShoppingBag } from 'react-icons/bi'
import { VscThreeBars } from 'react-icons/vsc' 
import './Navbar.scss'
import Sidebar from '../Sidebar'
import Basket from '../Basket'

const NavBar = () => {
  const [ active, setActive ] = React.useState(false);
  const [ activePage, setActivePage ] = React.useState('Главная');
  const [ activeBasket, setActiveBasket ] = React.useState(false);

  const Navigate = useNavigate( )
  return (
    <div className="nav_container">
      <div className='navBar'>
        <ul className="logo">
          <h3 onClick={() => Navigate('/')}>
            BAKERY
          </h3>
        </ul>
        <ul className="list">
          {
            NavList.map(({id, title, path}) => (
              <li
                key={id}
                onClick={() => setActivePage(title)}
              >
                <Link 
                  to={path}
                  className={activePage === title ? 'active__page' : ''}
                >
                  {title}
                </Link>
              </li>
            ))
          }
        </ul>
        <ul className="icons">
          <li>
            <BiSearch />
          </li>
          <li>
            <Link to="/wishlist">
              <BiHeart />
            </Link>
          </li>
          <li onClick={() => setActiveBasket(true)}>
            <BiShoppingBag />
          </li>
        </ul>
        <ul className='bars'>
          <li onClick={() => setActive(true)}>
            <VscThreeBars />
          </li>
        </ul>
      </div>

      <Sidebar 
        active={active} 
        setActive={setActive} 
        activePage={activePage}
        setActivePage={setActivePage}
      />
      {/* <Basket 
        activeBasket={activeBasket}
        setActiveBasket={setActiveBasket}
      /> */}
    </div>
  )
}

export default NavBar