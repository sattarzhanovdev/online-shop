import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './Register.scss'
import {API} from "../../../API";

const Register = () => {
  const { 
    register, 
    handleSubmit,
    formState: {errors, isValid},
    reset
  } = useForm({
    mode: 'onChange'
  });

  const [ file, setFile ] = React.useState(null)

  const handleRegister = (data) => {
    const formData = new FormData();
    formData.append('avatarka', file);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone_number);
    formData.append('birth_date', data.birth_date);
    formData.append('about', data.about);

    if(formData){
      API.register(formData)
        .then(res => {
          if(res){
            localStorage.setItem('user', JSON.stringify(res.data));
          }
        })

      setTimeout(() => {
        API.getToken({username: data.username, password: data.password})
        .then(res => {
          localStorage.setItem('accessToken', res.data.access)
          localStorage.setItem('refreshToken', res.data.refresh)
        }, 2000)
      })
    }
    reset()
  }

  return (
    <div className="register__container">
      <form 
        className='register'
        onSubmit={handleSubmit(data => handleRegister(data))}
      >
        <div className="up__register">
          <h2>Регистрация</h2>
        </div>
        <div className="down__register">
          <div>
            <p>Имя пользователя</p>
            <input 
              type="text"
              placeholder='Имя пользователя'
              {...register("username")}
            />
          </div>
          <div>
            <p>Фото профиля</p>
            <input
              type="file"
              onChange={e => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <p>Email</p>
            <input 
              type="email"
              placeholder='Email'
              {...register("email")}
            />
          </div>
          <div>
            <p>Номер телефона</p>
            <input 
              type="text"
              placeholder='Номер телефона'
              {...register("phone_number")}
            />
          </div>
          <div>
            <p>Дата рождения</p>
            <input 
              type="date"
              {...register("birth_date")}
            />
          </div>
          <div>
            <p>Обо мне</p>
            <textarea
              type="text"
              placeholder='Обо мне'
              {...register("about")}
            />
          </div>
          <div>
            <p>Пароль</p>
            <input 
              type="password"
              placeholder='Пароль'
              {...register("password")}
            />
          </div>

          <div>
            <button>
              Регистрация
            </button>
          </div>

          <p className='have__account'>
            <Link to={'/auth/login'}>
              Есть аккаунт?
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register