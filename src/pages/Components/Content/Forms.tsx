import React from 'react';
import ComponentDataGrid from '../../../components/ComponentDataGrid';
import BackForm from '../../../EazyUI/Form/BackForm';
import LoginForm from '../../../EazyUI/Form/LoginForm';

const FormArray = [
  <ComponentDataGrid component={<LoginForm />} API="<LoginForm/>" name="Form for login" />,
  <ComponentDataGrid component={<BackForm />} API="<BackForm/>" name="Form for feedback" />,
];

function Form() {
  return (
    <div>
      {FormArray.map((cont, index) => (
        <div>{cont}</div>
      ))}
    </div>
  );
}

export default Form;
