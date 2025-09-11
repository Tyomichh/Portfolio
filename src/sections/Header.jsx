// 1. Бібліотеки
//import { useState } from 'react';
// 2. Контекст і хуки
import ThemeToggle from "../components/ThemeToggle.jsx";
// 3. Компоненти
// 4. Іконки та зображення
import Logo from "../assets/Logo.svg"
// 5. Стилі
import "./Header.scss"
// 6. Дані

function Header() {

  return (
    <header className="header">
      <div className="header_brand">
        <Logo fill="currentColor" className="header_logo" />
        <a href="#top" className="header_name">Artem <br />Lozenko</a>
      </div>

      <nav className="header_navigation">
        <a href="#about" className="header_link">About</a>
        <a href="#services" className="header_link">Services</a>
        <a href="#projects" className="header_link">Projects</a>
        <a href="#contact" className="header_link">Contact</a>
      </nav>

      <div className="header_toggle">
        <ThemeToggle />
      </div>
    </header>
  )

}

export default Header