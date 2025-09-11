// 1. Бібліотеки
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 2. Контекст і хуки
import { ThemeProvider } from "./context/ThemeContext.jsx";
// 3. Компоненти
import App from './App.jsx'
// 4. Іконки та зображення
// 5. Стилі
import './styles/index.scss'
// 6. Дані

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
