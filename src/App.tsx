import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import Documentation from './pages/Documentation';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Layout navigation={false} children={<Home />} />
        </Route>
        <Route exact path="/documentation">
          <Layout navigation={true} children={<Documentation />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
