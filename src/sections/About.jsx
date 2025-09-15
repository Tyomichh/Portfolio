// 1. Бібліотеки
//import { useState } from 'react';
// 2. Контекст і хуки
// 3. Компоненти
// 4. Іконки та зображення
// 5. Стилі
import "./About.scss"
// 6. Дані

function About() {

  return (
    <section>
      <h2 className="about_title">About</h2>
      <div className="about_content">
        <div className="about_info">

          <p className="about_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul class="about_details">
            <li class="about_row">
              <span class="about_label">Name</span>
              <span class="about_value">: Artem Lozenko Igorovich</span>
            </li>

            <li class="about_row">
              <span class="about_label">Homeland</span>
              <span class="about_value">: Ukraine</span>
            </li>

            <li class="about_row">
              <span class="about_label">Experience</span>
              <span class="about_value">: One year</span>
            </li>

            <li class="about_row">
              <span class="about_label">Languages</span>
              <span class="about_value">: Ukrainian, English, Russian</span>
            </li>
          </ul>

        </div>

        <div className="about_skills">
          <div className="skill_card skill_card--primary">
            <h3 className="skill_card_title">TECH SKILLS</h3>

            <p className="skill_card_text">
              HTML, HTML5, CSS3, SCSS, JavaScript (ES6+), GitHub, Responsive Web Design, REST API, Figma, Npm, Vite
            </p>
          </div>

          <div className="skill_card skill_card--secondary">
            <h3 className="skill_card_title">SOFT SKILLS</h3>

            <p className="skill_card_text">
              Teamwork, Time Management, Effective Communication, Critical Thinking, Flexibility, Self-Learning, Adaptability, Responsibility
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}

export default About