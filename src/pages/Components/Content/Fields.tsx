import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import Field from '../../../EazyUI/Field';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const FieldsArray = [
  <ComponentDataGrid
    component={
      <Field
        type="primory"
        width={200}
        heigth={30}
        bgColor="#fff"
        border="1px solid #ADB4BF"
        radius="5px"
        typeField="text"
        placeholder="Example"
        name="example"
      />
    }
    API="<Field type='primory'/>"
    name="Field"
    props={[
      {
        prop: 'type',
        description: '- выбор типа поля.',
      },
      {
        prop: 'width',
        description: '- ширина поля.',
      },
      {
        prop: 'heigth',
        description: '- высота поля.',
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
        prop: 'radius',
        description: '- border-radius поля.',
      },
      {
        prop: 'typeField',
        description: '- тип поля(text, password...).',
      },
      {
        prop: 'name',
        description: '- name атрибут поля.',
      },
      {
        prop: 'placeholder',
        description: '- placeholder поля.',
      },
    ]}
  />,
  <ComponentDataGrid
    component={
      <Field
        type="outline"
        width={200}
        heigth={30}
        bgColor="#fff"
        border="1px solid #ADB4BF"
        typeField="text"
        placeholder="Example"
        name="example"
      />
    }
    API="<Field type='outline'/>"
    name="Field"
    props={[
      {
        prop: 'type',
        description: '- выбор типа поля.',
      },
      {
        prop: 'width',
        description: '- ширина поля.',
      },
      {
        prop: 'heigth',
        description: '- высота поля.',
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
        prop: 'typeField',
        description: '- тип поля(text, password...).',
      },
      {
        prop: 'name',
        description: '- name атрибут поля.',
      },
      {
        prop: 'placeholder',
        description: '- placeholder поля.',
      },
    ]}
  />,
  <ComponentDataGrid
    component={
      <Field
        type="icon"
        icon={<AccountCircleIcon />}
        width={200}
        heigth={30}
        bgColor="#fff"
        border="1px solid #ADB4BF"
        typeField="text"
        placeholder="Example"
        name="example"
        radius={'10px'}
      />
    }
    API="<Field type='icon'/>"
    name="Field"
    props={[
      {
        prop: 'type',
        description: '- выбор типа поля.',
      },
      {
        prop: 'width',
        description: '- ширина поля.',
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
        prop: 'typeField',
        description: '- тип поля(text, password...).',
      },
      {
        prop: 'name',
        description: '- name атрибут поля.',
      },
      {
        prop: 'placeholder',
        description: '- placeholder поля.',
      },
      {
        prop: 'icon',
        description: '- иконка поля(SVG).',
      },
    ]}
  />,
];

function Fields() {
  return (
    <div>
      {FieldsArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Fields;
