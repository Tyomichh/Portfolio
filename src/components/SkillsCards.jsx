// 1. Бібліотеки
// 2. Контекст і хуки
// 3. Компоненти
// 4. Іконки та зображення
import "./SkillsCards.scss"
// 6. Дані

function SkillsCards({ title, skills }) {

  return (
    <div className="skill_card">
      <h3 className="skill_card-title">{title}</h3>

      <p className="skill_card-text">
        {skills.join(", ")}
      </p>
    </div>
  )
}

export default SkillsCards