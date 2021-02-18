import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import AboutUs from './pages/AboutUs';
import Components from './pages/Components';
import Buttons from './pages/Components/Content/Buttons';
import Containers from './pages/Components/Content/Containers';
import Fields from './pages/Components/Content/Fields';
import Forms from './pages/Components/Content/Forms';
import Menus from './pages/Components/Content/Menus';
import Modals from './pages/Components/Content/Modals';
import Selects from './pages/Components/Content/Selects';
import Sliders from './pages/Components/Content/Sliders';
import Documentation from './pages/Documentation';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Layout navigation={false} children={<Home />} panel={false} />
        </Route>
        <Route exact path="/documentation">
          <Layout navigation={true} children={<Documentation />} panel={true} />
        </Route>
        <Route exact path="/aboutus">
          <Layout navigation={true} children={<AboutUs />} panel={true} />
        </Route>
        <Route exact path="/components/conteiners">
          <Layout
            navigation={true}
            children={<Components title="Контейнеры" children={<Containers />} />}
            panel={true}
          />
        </Route>
        <Route exact path="/components/field">
          <Layout
            navigation={true}
            children={<Components title="Поля" children={<Fields />} />}
            panel={true}
          />
        </Route>
        <Route exact path="/components/buttons">
          <Layout
            navigation={true}
            children={<Components title="Кнопки" children={<Buttons />} />}
            panel={true}
          />
        </Route>
        <Route exact path="/components/forms">
          <Layout
            navigation={true}
            children={<Components title="Формы" children={<Forms />} />}
            panel={true}
          />
        </Route>
        <Route exact path="/components/selects">
          <Layout
            navigation={true}
            children={<Components title="Списки" children={<Selects />} />}
            panel={true}
          />
        </Route>
        <Route exact path="/components/modals">
          <Layout
            navigation={true}
            children={<Components title="Модальные окна" children={<Modals />} />}
            panel={true}
          />
        </Route>
        <Route exact path="/components/sliders">
          <Layout
            navigation={true}
            children={<Components title="Слайдеры" children={<Sliders />} />}
            panel={true}
          />
        </Route>
        <Route exact path="/components/menu">
          <Layout
            navigation={true}
            children={<Components title="Меню" children={<Menus />} />}
            panel={true}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
