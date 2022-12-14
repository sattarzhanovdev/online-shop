import React from 'react'
import { Link } from 'react-router-dom'
import { NavList } from '../../Utils'
import { BiSearch, BiHeart, BiShoppingBag } from 'react-icons/bi'
import { VscThreeBars } from 'react-icons/vsc' 
import './Navbar.scss'

const NavBar = () => {
  return (
    <div className="nav_container">
      <div className='navBar'>
        <ul className="logo">
          <h3>BAKERY</h3>
        </ul>
        <ul className="list">
          {
            NavList.map(({id, title, path}) => (
              <li
                key={id}
              >
                <Link to={path}>
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
          <li>
            <BiShoppingBag />
          </li>
        </ul>
        <ul className='bars'>
          <li>
            <VscThreeBars />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar