import React from 'react';
import Logo from '../components/Logo';

function AboutUs() {
  let year = new Date().getFullYear().toString();
  return (
    <div className="aboutUs">
      <h1>О нас</h1>
      <h2>
        Наша миссия - сделать создание пользовательского интерфейса с помощью React увлекательным.
      </h2>
      <p>
        Наше приложение сосредоточено на том, чтобы сделать разработку пользовательских интерфейсов
        на React проще, лучше и доступнее для большего числа людей. Мы создаем инструменты с
        открытым исходным кодом.
      </p>
      <div className="aboutUs__logo">
        <Logo className="logo-pr" />
      </div>
      <footer>
        <strong>Eazy-UI</strong> - все права защищены {year}г.
      </footer>
    </div>
  );
}

export default AboutUs;
