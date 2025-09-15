// 1. Бібліотеки
//import { useState } from 'react';
// 2. Контекст і хуки
// 3. Компоненти
// 4. Іконки та зображення
import MyPhoto from "../assets/MyPhoto.jpg";
// 5. Стилі
import "./Hero.scss"
// 6. Дані

function Hero() {

  return (
    <section className="hero">
      <div className="hero_role">
        <h1 className="hero_role-title">Developer <br /> Frontend</h1>
        <img src={MyPhoto} alt="Artem Lozenko" className="hero_photo" />
      </div>

      <div className="hero_about">
        <h1 className="hero_name">Artem <br />Lozenko</h1>
        <p className="hero_about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="/resume.pdf" download className="hero_resume-btn">
          Download Resume CV
        </a>
      </div>
    </section>
  )
}

export default Hero