import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import Select from '../../../EazyUI/Select';

const SelectsArray = [
  <ComponentDataGrid
    component={
      <Select
        placeholder="Выбирите"
        options={['один', 'два', 'три']}
        width={200}
        height={40}
        bgColor="#fff"
        border="1px solid #BBBBBB"
        radius="5px"
        bgColorHover="#9EB4E1"
      />
    }
    API="<Select/>"
    name="Select"
    props={[
      {
        prop: 'placeholder',
        description: '- placeholder списка.',
      },
      {
        prop: 'options',
        description: '- элементы списка.',
      },
      {
        prop: 'width',
        description: '- ширина списка.',
      },
      {
        prop: 'heigth',
        description: '- высота списка.',
      },
      {
        prop: 'bgColor',
        description: '- фон списка.',
      },
      {
        prop: 'border',
        description: '- бордюр списка.',
      },
      {
        prop: 'radius',
        description: '- border-radius списка.',
      },
      {
        prop: 'bgColorHover',
        description: '- фон элемента списка при наведении.',
      },
    ]}
  />,
];

function Selects() {
  return (
    <div>
      {SelectsArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Selects;
