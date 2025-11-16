import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav__link active-link' : 'nav__link';
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo">Aditya</Link>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About</Link>
            </li>
            <li className="nav__item">
              <Link to="/skills" className={isActive('/skills')} onClick={closeMenu}>Skills</Link>
            </li>
            <li className="nav__item">
              <Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projects</Link>
            </li>
            <li className="nav__item">
              <Link to="/certificates" className={isActive('/certificates')} onClick={closeMenu}>Certificate</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="nav__actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'}`}></i>
          </button>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className='bx bx-menu'></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;