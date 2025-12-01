import React, { useState, useEffect } from 'react';
import profileImg from '../assets/img/Profile1.png';

const Home: React.FC = () => {
  const [displayRole, setDisplayRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ['Software Engineer', 'Full Stack Developer'];

  useEffect(() => {
    let index = 0;
    const currentRole = roles[currentRoleIndex];
    setDisplayRole('');
    
    const typeTimer = setInterval(() => {
      if (index <= currentRole.length) {
        setDisplayRole(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, [currentRoleIndex]);

  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi, I'am <span className="home__title-color">Aditya</span><br />
          I am <span className="role-animation">{displayRole}<span className="cursor">|</span></span>
        </h1>
        <a href="tel:+919152717656" className="button">Contact</a>
      </div>

      <div className="home__social">
        <a href="https://www.linkedin.com/in/aditya1311/" target="_blank" rel="noopener noreferrer" className="home__social-icon">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://www.instagram.com/iamadditya/" target="_blank" rel="noopener noreferrer" className="home__social-icon">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://github.com/aady1311" target="_blank" rel="noopener noreferrer" className="home__social-icon">
          <i className='bx bxl-github'></i>
        </a>
      </div>

      <div className="home__img">
        <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">

          <mask id="mask0">
            <path
              d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              fill="white"
            />
          </mask>

          <g mask="url(#mask0)">
            <rect width="479" height="467" fill="#7455eeff" />

            <image
              href={profileImg}
              x="60"
              y="60"
              width="360"
              height="360"
              preserveAspectRatio="xMidYMid slice"
              style={{ opacity: 1 }}
            />
          </g>
        </svg>
      </div>


    </section>
  );
};

export default Home;