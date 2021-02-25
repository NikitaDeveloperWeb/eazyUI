import React from 'react';
import Field from '../Field';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '../Button';
import styled from '@emotion/styled';
function LoginForm() {
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
      <Title>Login</Title>
      <Field
        type="icon"
        icon={<AccountCircleIcon />}
        width={200}
        heigth={30}
        bgColor="#fff"
        border="1px solid #BBBBBB"
        radius="10px"
        placeholder="E-mail"
        typeField="text"
      />
      <Field
        type="icon"
        icon={<AccountCircleIcon />}
        width={200}
        heigth={30}
        bgColor="#fff"
        border="1px solid #BBBBBB"
        radius="10px"
        placeholder="Password"
        typeField="password"
      />
      <Button
        type="button"
        width={200}
        heigth={30}
        bgColorHover="#4B5ED7"
        fontColor="#BBBBBB"
        fontColorHover="#fff"
        border="1px solid #BBBBBB"
        radius="5px"
        typeButtons="outline"
        value="Sign in"
      />
    </Form>
  );
}

export default LoginForm;
