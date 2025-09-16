// 1. Бібліотеки
// 2. Контекст і хуки
// 3. Компоненти
// 4. Іконки та зображення
// 5. Стилі
import "./AboutRow.scss"
// 6. Дані

const AboutRow = ({ label, value }) => {
  return (
    <li className="about_row">
      <span className="about_label">{label}</span>
      <span className="about_value">: {value}</span>
    </li>
  );
};

export default AboutRow;