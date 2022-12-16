import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  const [ showSide, setShowSide ] = React.useState(false)
  
  return (
    <div className="container">
      <div className='header'>
        <h4>Доставка по всему городу бесплатно</h4>
        <ul className="list">
          <li>
            <a
              href={'tel:+996123456789'}
            >
              +996 123 456 789
            </a>
          </li>
          <span></span>
          <li>
            <a 
              href="mailto:demo@example.com"
            >
              demo@example.com
            </a>
          </li>
          <span></span>
          <li
            onClick={() => setShowSide(!showSide)}
          >
            Account
          </li>
          {
            showSide ? <ul className="account_side">
              <li
                onClick={() => setShowSide(false)}
              >
                <Link to={'/my_account'}>
                  My account
                </Link>
              </li>
              <li
                onClick={() => setShowSide(false)}
              >
                <Link to={'/auth/login'}>
                  Login
                </Link>
              </li>
              <li
                onClick={() => setShowSide(false)}
              >
                <Link to={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul> :
            ''
          }
        </ul>
      </div>

    </div>
  )
}

export default Header