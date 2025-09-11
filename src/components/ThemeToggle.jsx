// 1. Бібліотеки
//import { useState } from 'react';
// 2. Контекст і хуки
import { useTheme } from "../hooks/useTheme.js";
// 3. Компоненти
// 4. Іконки та зображення
import Moon from "../assets/MoonIcon.svg"
import Sun from "../assets/SunIcon.svg"
// 5. Стилі
import "./ThemeToggle.scss";
// 6. Дані

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`header_toggle-btn ${theme}`} onClick={toggleTheme} aria-label="Toggle theme">
      <span className="toggle-btn-circle">
        {theme === "light" ? (<Sun className="toggle-btn-icon" />) : (<Moon className="toggle-btn-icon" />)}
      </span>
    </button>
  );
}

export default ThemeToggle