import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import Button from '../../../EazyUI/Button';
const ButtonsArray = [
  <ComponentDataGrid
    component={
      <Button
        type="button"
        width={200}
        heigth={30}
        bgColor="#707ED7"
        bgColorHover="#4B5ED7"
        fontColor="#fff"
        radius="5px"
        typeButtons="primory"
        value="Кнопка"
        border="none"
      />
    }
    API="<Button type='primory'/>"
    name="Button"
    props={[
      {
        prop: 'type',
        description: '- выбор типа кнопки(button,submit...).',
      },
      {
        prop: 'width',
        description: '- ширина кнопки.',
      },
      {
        prop: 'heigth',
        description: '- высота кнопки.',
      },
      {
        prop: 'border',
        description: '- бордюр элемента.',
      },
      {
        prop: 'bgColor',
        description: '- цвет фона.',
      },
      {
        prop: 'bgColorHover',
        description: '- цвет фона при наведении.',
      },
      {
        prop: 'radius',
        description: '- border-radius кнопки.',
      },
      {
        prop: 'typeButtons',
        description: '- тип стиля кнопки.',
      },
      {
        prop: 'fontColor',
        description: '- цвет текста кнопки.',
      },
      {
        prop: 'value',
        description: '- значение кнопки.',
      },
      {
        prop: 'onClick',
        description: '- фукция при нажатии на кнопку кнопки.',
      },
    ]}
  />,
  <ComponentDataGrid
    component={
      <Button
        type="button"
        width={200}
        heigth={30}
        bgColorHover="#4B5ED7"
        fontColor="#4B5ED7"
        fontColorHover="#fff"
        border="1px solid #4B5ED7"
        radius="5px"
        typeButtons="outline"
        value="Кнопка"
      />
    }
    API="<Button type='outline'/>"
    name="Button"
    props={[
      {
        prop: 'type',
        description: '- выбор типа кнопки(button,submit...).',
      },
      {
        prop: 'width',
        description: '- ширина кнопки.',
      },
      {
        prop: 'heigth',
        description: '- высота кнопки.',
      },
      {
        prop: 'border',
        description: '- бордюр элемента.',
      },
      {
        prop: 'bgColor',
        description: '- цвет фона.',
      },
      {
        prop: 'bgColorHover',
        description: '- цвет фона при наведении.',
      },
      {
        prop: 'radius',
        description: '- border-radius кнопки.',
      },
      {
        prop: 'typeButtons',
        description: '- тип стиля кнопки.',
      },
      {
        prop: 'fontColor',
        description: '- цвет текста кнопки.',
      },
      {
        prop: 'fontColorHover',
        description: '- цвет текста кнопки при наведении.',
      },
      {
        prop: 'value',
        description: '- значение кнопки.',
      },
      {
        prop: 'onClick',
        description: '- фукция при нажатии на кнопку кнопки.',
      },
    ]}
  />,
];

function Buttons() {
  return (
    <div>
      {ButtonsArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Buttons;
