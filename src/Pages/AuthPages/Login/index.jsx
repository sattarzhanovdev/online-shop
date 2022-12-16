import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className="register__container">
      <form className='register'>
        <div className="up__register">
          <h2>Логин</h2>
        </div>
        <div className="down__register">
          <div>
            <p>Email</p>
            <input 
              type="email"
              placeholder='Email'
            />
          </div>
          <div>
            <p>Пароль</p>
            <input 
              type="password"
              placeholder='Пароль'
            />
          </div>

          <div>
            <button>
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login