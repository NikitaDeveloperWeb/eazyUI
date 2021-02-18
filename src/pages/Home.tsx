import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

import Logo from '../components/Logo';
import PanelSetting from '../components/PanelSetting';

function Home() {
  let year = new Date().getFullYear().toString();
  return (
    <div className="home">
      <PanelSetting />
      <div className="home__intro">
        <div className="home__intro__logo">
          <Logo className="logo-pr" />
        </div>
        <div className="home__intro__preview">
          <h1>EAZY-UI</h1>
          <p>
            React компоненты для быстрой и легкой веб-разработки.
            <br /> Создайте свой собственный дизайн или начните с <strong>Eazy-UI</strong>.
          </p>

          <Link to="/documentation">
            <Button value="Начать" className="button__primary" type="button" />
          </Link>
        </div>
      </div>
      <footer>
        <strong>Eazy-UI</strong> - все права защищены {year}г.
      </footer>
    </div>
  );
}

export default Home;
