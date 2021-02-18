import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Aside() {
  const [open, setOpen] = React.useState(false);

  const handlerOpen = (state: boolean) => {
    setOpen(!state);
  };

  return (
    <div className="aside">
      <div className="aside__logo">
        <Logo className="logo-min" />
        <p>v1.0</p>
      </div>
      <div className="aside__nav">
        <nav>
          <h3
            onClick={() => {
              handlerOpen(open);
            }}>
            Компоненты
          </h3>
          <ul className={open ? 'open' : 'close'}>
            <Link to="/components/conteiners">Контейнеры</Link>
            <Link to="/components/field">Поля</Link>
            <Link to="/components/buttons">Кнопки</Link>
            <Link to="/components/forms">Формы</Link>
            <Link to="/components/selects">Список</Link>
            <Link to="/components/modals">Модальные окна</Link>
            <Link to="/components/sliders">Слайдер</Link>
            <Link to="/components/menu">Меню</Link>
          </ul>
          <Link to="/documentation">Документация</Link>
          <Link to="/aboutus">О нас</Link>
        </nav>
      </div>
    </div>
  );
}

export default Aside;
