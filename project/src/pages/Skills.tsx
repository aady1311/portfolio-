import React from 'react';
import skillsImg from '../assets/img/work4.jpg';

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text"></p>
                          
          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-javascript skills__icon'></i>
              <span className="skills__name">JAVASCRIPT</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div>
              <span className="skills__percentage">65%</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-react skills__icon'></i>
              <span className="skills__name">ReactJS</span>
            </div>
            <div className="skills__bar skills__reactjs"></div>
            <div>
              <span className="skills__percentage">70%</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <span className='skills__icon' style={{fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--first-color)'}}>TS</span>
              <span className="skills__name">TypeScript</span>
            </div>
            <div className="skills__bar skills__ts"></div>
            <div>
              <span className="skills__percentage">75%</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-css3 skills__icon'></i>
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div>
              <span className="skills__percentage">70-80%</span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-html5 skills__icon'></i>
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div>
              <span className="skills__percentage">85%</span>
            </div>
          </div>
        </div>

        <div>
          <img src={skillsImg} alt="Skills" className="skills__img" />
        </div>
      </div>
    </section>
  );
};

export default Skills;