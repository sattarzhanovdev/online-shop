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
        <div className="texts">
          <div className="text">
            <h2>
              Lorem
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dolore earum enim facere modi optio quia sed sequi. Animi dolorum eaque earum exercitationem facilis harum, id illo in incidunt ipsum nam nobis optio perspiciatis quidem, quisquam ratione repudiandae sequi tenetur vel voluptate. Ab accusamus aliquam dicta exercitationem in ipsa, laudantium maxime minus natus necessitatibus nisi nobis optio porro quia quis. Alias amet aut autem beatae deleniti ea eius eos, excepturi incidunt laudantium libero nam nihil officiis optio quisquam recusandae reiciendis repellendus sint soluta tempore temporibus, ullam veniam vitae voluptate voluptatem! Dicta fugiat magni nisi quos reprehenderit suscipit temporibus unde vitae.
            </p>
          </div>

          <div className="text">
            <h2>
              Lorem
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dolore earum enim facere modi optio quia sed sequi. Animi dolorum eaque earum exercitationem facilis harum, id illo in incidunt ipsum nam nobis optio perspiciatis quidem, quisquam ratione repudiandae sequi tenetur vel voluptate. Ab accusamus aliquam dicta exercitationem in ipsa, laudantium maxime minus natus necessitatibus nisi nobis optio porro quia quis. Alias amet aut autem beatae deleniti ea eius eos, excepturi incidunt laudantium libero nam nihil officiis optio quisquam recusandae reiciendis repellendus sint soluta tempore temporibus, ullam veniam vitae voluptate voluptatem! Dicta fugiat magni nisi quos reprehenderit suscipit temporibus unde vitae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
