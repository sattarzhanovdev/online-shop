import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import './Register.scss'

const Register = () => {
  const { 
    register, 
    handleSubmit,
    formState: {errors, isValid},
    reset
  } = useForm({
    mode: 'onChange'
  });

  const handleRegister = (data) => {
    console.log(data)

    // if(data){
    //   API.register(data)
    //     .then(res => {
    //       if(res){
    //         console.log(res.data);
    //       }
    //     })
    //
    //   setTimeout(() => {
    //     API.getToken({username: data.username, password: data.password})
    //     .then(res => {
    //       localStorage.setItem('accessToken', res.data.access)
    //       localStorage.setItem('refreshToken', res.data.refresh)
    //     }, 1000)
    //   })
    // }
    // reset()
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