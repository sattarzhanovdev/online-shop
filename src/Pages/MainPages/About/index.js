import React from 'react';
import Banner_about from "../../../Components/Banner_about";
import './About.scss'

const About = () => {
  return (
    <div className='about__container'>
      <div className="about">
        <Banner_about />
        <h1>
          О нас
        </h1>
      </div>
    </div>
  );
};

export default About;
