import React from 'react'
import { Link } from 'react-router-dom'
import { NavList } from '../../Utils'
import { IoCloseSharp } from 'react-icons/io5'
import './Sidebar.scss'

const Sidebar = ({active, setActive, activePage, setActivePage}) => {
  return (
    <div className={active ? 'sidebar' : 'sidebar__none'}>
      <div className="close">
        <li onClick={() => setActive(false)}>
          <IoCloseSharp />
        </li>
      </div>
      <h5>Добро пожаловать в магазин пекарни</h5>
      <ul className="list">
        {
          NavList.map(({id, title, path}) => (
            <li
              key={id}
              onClick={() => {
                setActivePage(title)
                setActive(false)
              }}
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
    </div>
  )
}

export default Sidebar