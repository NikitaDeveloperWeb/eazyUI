import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import Menu from '../../../EazyUI/Menu';

const MenusArray = [
  <ComponentDataGrid
    component={
      <Menu
        links={[
          { title: 'one', path: '#' },
          { title: 'two', path: '#' },
          { title: 'three', path: '#' },
        ]}
      />
    }
    API="<Menu/>"
    name="Menu"
    props={[
      {
        prop: 'links',
        description: '- список ссылок для навигации.',
      },
    ]}
  />,
];

function Menus() {
  return (
    <div>
      {MenusArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Menus;
