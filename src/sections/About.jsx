// 1. Бібліотеки
//import { useState } from 'react';
// 2. Контекст і хуки
// 3. Компоненти
import SkillsCards from "../components/SkillsCards.jsx";
import AboutRow from "../components/AboutRow.jsx";
// 4. Іконки та зображення
// 5. Стилі
import "./About.scss"
// 6. Дані
import { about } from "../data/content";

function About() {

  return (
    <section className="about">
      <h2>About</h2> {/*className="about_title"*/}

      <div className="about_content">
        <div className="about_info">
          <p> {/*className="about_text"*/}
            {about.paragraph}
          </p>

          <ul class="about_details">
            {about.personalDetails.map((item, index) => (
              <AboutRow key={index} label={item.label} value={item.value} />
            ))}
          </ul>
        </div>

        <div className="about_skills">
          <SkillsCards
            title={about.techSkillsCard.title}
            skills={about.techSkillsCard.skills}
          />

          <SkillsCards
            title={about.softSkillsCard.title}
            skills={about.softSkillsCard.skills}
          />
        </div>
      </div>

    </section>
  )
}

export default About