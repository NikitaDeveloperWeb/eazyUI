import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import Modal from '../../../EazyUI/Modal';

const ModalsArray = [
  <ComponentDataGrid
    component={<Modal title="Modal window" content={<div>Content</div>} />}
    API="<Modal/>"
    name="Modal window"
    props={[
      {
        prop: 'title',
        description: '- заголовок модального окна.',
      },
      {
        prop: 'content',
        description: '- содержимое модального окна.',
      },
    ]}
  />,
];

function Modals() {
  return (
    <div>
      {ModalsArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Modals;
