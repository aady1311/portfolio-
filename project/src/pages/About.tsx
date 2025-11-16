import React from 'react';
import profileImg from '../assets/img/Profile1.png';

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={profileImg} alt="Aditya Profile" />
        </div>
        <div>
          <h2 className="about__subtitle">I'm Aditya</h2>
          <p className="about__text">
            A software developer based in India, focused on full-stack web development.
            Experienced with HTML, CSS, JavaScript, and GitHub, and currently learning React and backend
            development.
            Always exploring new technologies to build impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;