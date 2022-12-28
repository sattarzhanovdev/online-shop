import React from 'react'
import './Myaccount.scss'
import {API, BASE_URL} from "../../../API";
import {AiFillEdit, AiOutlineCheck} from "react-icons/ai";
import register from "../Register";
import {useForm} from "react-hook-form";

const MyAccount = () => {
  const [ user, setUser ] = React.useState(null)
  const [ refresh, setRefresh ] = React.useState('')
  const [ editActive, setEditActive ] = React.useState(false)

  const accessToken = localStorage.getItem('accessToken')

  React.useEffect(() => {
    API.getUser(accessToken)
      .then(res => {
        setUser(res.data);
        localStorage.setItem('user', JSON.stringify(res.data))
      })

    setTimeout(() => {
      setRefresh('ref')
    }, 1000)
  }, [refresh])

  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  const change = (file) => {
    const formData = new FormData();
    formData.append('avatarka', file);
    formData.append('username', user?.username);
    formData.append('email', user?.email);
    formData.append('phone_number', user?.phone_number);
    formData.append('birth_date', user?.birth_date);
    formData.append('password', user?.password);
    formData.append('about', user?.about);
    if(formData){
      setTimeout(() => {
        API.edit(user?.id, formData)
        setRefresh('Hello')
      }, 1000)

    }else{
      alert('Выберите фото!')
    }
  };

  return (
    <div className="myaccount__container">
      <div className="myaccount">
        <label htmlFor="choose">
          <div className="left__acc">
            <input
              type="file"
              id={'choose'}
              onChange={e => {
                change(e.target.files[0])
              }}
            />
              <img
                src={`${BASE_URL}${user?.avatarka} `}
                alt={user?.username}
              />
          </div>
        </label>
        <div className="right__acc">
          <div>
            <h3>
              Имя пользователя:
            </h3>
            <h3 className="answer">{user?.username}</h3>
          </div>
          <div>
            <h3>
              Email:
            </h3>
            <h3 className="answer">{user?.email}</h3>
          </div>
          <div>
            <h3>
              Номер телефона:
            </h3>
            <h3 className="answer">{user?.phone_number}</h3>
          </div>
          <div>
            <h3>
              О себе:
            </h3>
            <h3 className="answer">{user?.about}</h3>
      </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount