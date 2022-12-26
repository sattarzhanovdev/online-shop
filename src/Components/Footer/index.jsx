import React from 'react';
import './Footer.scss'
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  return (
    <div className="footer">
      <div className="left">
        <h3>BAKERY</h3>
        <p>
          Кыргызстан. Г.Ош. <br/>
          Ул.Ленина 316 <br/>
          "Bakery" +996 123 456 789
        </p>
      </div>
      <form
        className="center"
        onSubmit={handleSubmit(data => data)}
      >
        Расскажите про проблемы <br/>
        со стороны магазина
        <input
          type="email"
          placeholder="Email address"
          {...register('email')}
        />
        <textarea
          placeholder="Напишите проблему"
          {...register('issue')}
        />
        <button>
          Отправить
        </button>
      </form>
      <div className="right">
        <h3>Следите за нами</h3>
        <li>
          <Link to='/'>
            <AiFillInstagram />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <AiFillFacebook />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <AiFillTwitterSquare />
          </Link>
        </li>

      </div>
    </div>
  );
};

export default Footer;
