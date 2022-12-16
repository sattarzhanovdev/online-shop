import React from 'react'
import './Register.scss'

const Register = () => {
  const [ file, setFile ] = React.useState('')

  console.log(file);
  return (
    <div className="register__container">
      <img src={file.name} alt="" />
      <form className='register'>
        <div className="up__register">
          <h2>Регистрация</h2>
        </div>
        <div className="down__register">
          <div>
            <p>Имя пользователя</p>
            <input 
              type="text"
              placeholder='Имя пользователя'
            />
          </div>
          <div>
            <p>Email</p>
            <input 
              type="email"
              placeholder='Email'
            />
          </div>
          <div>
            <p>Фото профиля</p>
            <input 
              type="file"
              className='file'
              onChange={e => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <p>Дата рождения</p>
            <input 
              type="date"
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
            <p>Подтвердите пароль</p>
            <input 
              type="password"
              placeholder='Подтвердите пароль'
            />
          </div>

          <div>
            <button>
              Регистрация
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register