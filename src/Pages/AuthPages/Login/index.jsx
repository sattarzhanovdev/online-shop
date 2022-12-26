import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { API } from '../../../API'
import cls from './Login.module.scss'

const Login = () => {
  const Navigate = useNavigate()

  const handleLogin = (data) => {
    API.login(data)
      .then(res => {
        if(res){
          localStorage.setItem('accessToken', res.data.access)
          localStorage.setItem('refreshToken', res.data.refresh)
          Navigate('/')
        }
      })
      .catch(err => console.log(err))
      reset()
  }

  const {
    handleSubmit,
    register,
    reset
  } = useForm()

  return (
    <div className={cls.register__container}>
      <form 
        className={cls.register}
        onSubmit={handleSubmit(data => handleLogin(data))}
      >
        <div className={cls.up__register}>
          <h2>Логин</h2>
        </div>
        <div className={cls.down__register}>
          <div>
            <p>Имя пользователя</p>
            <input 
              type="text"
              placeholder='Имя пользователя'
              {...register('username')}
            />
          </div>
          <div>
            <p>Пароль</p>
            <input 
              type="password"
              placeholder='Пароль'
              {...register('password')}
            />
            <button type='submit'>
              Войти
            </button>

          </div>
          <p className={cls.no__account}>
            <Link to={'/auth/register'}>
              Нету аккаунта?
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login