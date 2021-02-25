import React from 'react';
import Field from '../Field';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '../Button';
import styled from '@emotion/styled';

function BackForm() {
  let Form = styled.form({
    width: 300,
    height: 200,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'inherit',
  });
  let Title = styled.h2({
    background: 'inherit',
  });
  return (
    <Form>
      <Title>Feedback</Title>
      <Field
        type="outline"
        width={200}
        heigth={30}
        bgColor="#fff"
        border="1px solid #BBBBBB"
        placeholder="E-mail"
        typeField="text"
      />
      <Field
        type="outline"
        icon={<AccountCircleIcon />}
        width={200}
        heigth={30}
        bgColor="#fff"
        border="1px solid #BBBBBB"
        placeholder="Treatment"
        typeField="text"
      />
      <Button
        type="button"
        width={200}
        heigth={30}
        bgColorHover="#4B5ED7"
        fontColor="#fff"
        fontColorHover="#fff"
        border="1px solid #707ED7"
        radius="5px"
        typeButtons="primory"
        value="Submit"
        bgColor="#707ED7"
      />
    </Form>
  );
}

export default BackForm;
