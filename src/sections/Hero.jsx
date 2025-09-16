// 1. Бібліотеки
//import { useState } from 'react';
// 2. Контекст і хуки
// 3. Компоненти
// 4. Іконки та зображення
import MyPhoto from "../assets/MyPhoto.jpg";
// 5. Стилі
import "./Hero.scss"
// 6. Дані
import { hero } from "../data/content";

function Hero() {

  return (
    <section className="hero">
      <div className="hero_role">
        <h1 className="hero_role-title">{hero.role[0]} <br /> {hero.role[1]}</h1>
        <img src={MyPhoto} alt="Artem Lozenko" className="hero_photo" />
      </div>

      <div className="hero_about">
        <h1 className="hero_about-name">{hero.name[0]} <br /> {hero.name[1]}</h1>
        <p className="hero_about-text">
          {hero.description}
        </p>
        <a href="/resume.pdf" download className="hero_resume-btn">
          Download Resume CV
        </a>
      </div>
    </section>
  )
}

export default Hero