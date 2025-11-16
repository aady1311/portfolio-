import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__title">Aditya</p>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/aditya1311/" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a href="https://www.instagram.com/iamadditya/" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://github.com/aady1311" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <i className='bx bxl-github'></i>
        </a>
      </div>
      <p className="footer__copy">&#169; 2024 Aditya. All rights reserved</p>
    </footer>
  );
};

export default Footer;