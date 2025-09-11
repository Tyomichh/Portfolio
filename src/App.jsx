// 1. Бібліотеки
//import { useState } from 'react'
// 2. Контекст і хуки
//import { ModalProvider } from "./context/ModalContext.jsx";
//import { SliderProvider } from "./context/SliderContext.jsx";
// 3. Компоненти
//import ModalRoot from "./components/ModalRoot";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Projects from "./sections/Projects.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./sections/Footer.jsx";
// 4. Іконки та зображення
// 5. Стилі
// 6. Дані

function App() {

  return (
    <>
      {/*<ModalProvider>*/}
      {/*<SliderProvider>*/}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contacts />
      </main>
      <Footer />
      {/*<ModalRoot />   портал для модалок */}
      {/*</SliderProvider>*/}
      {/*</ModalProvider>*/}
    </>
  )
}

export default App