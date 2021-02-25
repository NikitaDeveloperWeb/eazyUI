import React from 'react';
import styled from '@emotion/styled';
interface FieldProps {
  type: 'primory' | 'outline' | 'icon';
  width?: string | number;
  heigth: string | number;
  icon?: JSX.Element | Element | JSX.Element[] | Element[];
  placeholder?: string;
  typeField?: string;
  form?: string;
  name?: string;
  bgColor?: string;
  fieldRef?: any;
  border?: string;
  radius?: string;
}

function Field({
  type,
  width,
  heigth,
  icon,
  placeholder,
  typeField,
  form,
  name,
  fieldRef,
  bgColor,
  border,
  radius,
}: FieldProps) {
  let JSXField;
  if (type === 'primory') {
    let FieldPrymory = styled.input({
      width: width,
      height: heigth,
      border: border,
      background: bgColor,
      borderRadius: radius,
      padding: 10,
      ':placeholder': {
        color: '#ADB4BF',
      },
      ':focus': {
        outline: 0,
        outlineOffset: 0,
        border: '1px solid #7CADEF',
      },
    });
    JSXField = (
      <FieldPrymory
        placeholder={placeholder}
        type={typeField}
        name={name}
        form={form}
        ref={fieldRef}
      />
    );
  } else if (type === 'outline') {
    let FieldOutline = styled.input({
      width: width,
      height: heigth,
      border: 'none',
      borderBottom: border,
      background: bgColor,
      borderRadius: radius,
      padding: 10,
      ':placeholder': {
        color: '#ADB4BF',
      },
      ':focus': {
        outline: 0,
        outlineOffset: 0,
        borderBottom: '1px solid #7CADEF',
      },
    });
    JSXField = (
      <FieldOutline
        placeholder={placeholder}
        type={typeField}
        name={name}
        form={form}
        ref={fieldRef}
      />
    );
  } else {
    let FieldIcon = styled.div({
      height: '0 auto',
      width: width,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: bgColor,
      border: border,
      borderRadius: radius,
      padding: 10,
    });
    let Icon = styled.div({
      height: 'inherit',
      width: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    });
    let Field = styled.input({
      width: '80%',
      border: 'none',
      background: 'inherit',
      ':focus': {
        outline: 0,
        outlineOffset: 0,
      },
    });

    JSXField = (
      <FieldIcon>
        <Icon>{icon}</Icon>
        <Field placeholder={placeholder} type={typeField} name={name} form={form} ref={fieldRef} />
      </FieldIcon>
    );
  }
  return <>{JSXField}</>;
}

export default Field;
