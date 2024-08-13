import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import Container from './Container';
import NavMenu from './NavMenu';
import MobileMenu from './MobileMenu';
import { useTheme } from '../context/themeContext'; // Ajuste o caminho se necessário

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Salva o tema no localStorage
  };

  useEffect(() => {
    // Carrega o tema do localStorage e aplica ao document
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, [setTheme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <header className={`p-4 fixed w-full top-0 left-0 z-50 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link to="/">Mathias Fuhr</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 flex-grow justify-end">
            <NavMenu />
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <FaBars size={24} />
            </button>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </Container>
    </header>
  );
};

export default Header;
