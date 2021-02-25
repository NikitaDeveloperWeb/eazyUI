import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import Container from '../../../EazyUI/Container';

const ContainersArray = [
  <ComponentDataGrid
    component={
      <Container
        width={200}
        backgroundColor="#fff"
        border="1px solid rgba(0,0,0,0.5)"
        radius="5px"
      />
    }
    API="<Container/>"
    name="Container"
    props={[
      {
        prop: 'width',
        description: '- ширина контейнера.',
      },
      {
        prop: 'children',
        description: '- внутренний элемент контейнера.',
      },
      {
        prop: 'border',
        description: '- бордюр элемента.',
      },
      {
        prop: 'backgroundColor',
        description: '- цвет фона.',
      },
      {
        prop: 'radius',
        description: '- border-radius контейнера.',
      },
    ]}
  />,
];

function Containers() {
  return (
    <div>
      {ContainersArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Containers;
