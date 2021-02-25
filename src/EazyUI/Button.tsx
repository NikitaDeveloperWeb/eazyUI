import React from 'react';
import styled from '@emotion/styled';

interface ButtonsProps {
  typeButtons: 'primory' | 'outline';
  value: string;
  type: 'submit' | 'button' | 'reset';
  bgColor?: string;

  radius?: number | string;
  fontColor?: string;
  bgColorHover?: string;
  borderColorHover?: string;
  fontColorHover?: string;
  width?: string | number;
  heigth?: string | number;
  border?: string;
  onClick?: any;
}

function Button({
  typeButtons,
  value,
  type,
  bgColor,
  bgColorHover,
  fontColor,
  fontColorHover,
  width,
  heigth,
  onClick,
  radius,
  border,
}: ButtonsProps) {
  let Button;
  if ((typeButtons = 'primory')) {
    let ButtonPrimory = styled.button({
      width: width,
      height: heigth,
      background: bgColor,
      color: fontColor,
      borderRadius: radius,
      border: border,
      cursor: 'pointer',
      ':hover': {
        transition: '0.7s',
        background: bgColorHover,
        boxShadow: '0 10px 22px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22)',
        color: fontColorHover,
      },
      ':active': {
        outline: 0,
        outlineOffset: 0,
      },
      ':focus': {
        outline: 0,
        outlineOffset: 0,
      },
    });
    Button = (
      <ButtonPrimory type={type} onClick={onClick}>
        {value}
      </ButtonPrimory>
    );
  } else {
    let ButtonOutline = styled.button({
      width: width,
      height: heigth,
      background: 'hsla(120,0%,0%,0)',
      color: fontColor,
      borderRadius: radius,
      border: border,
      cursor: 'pointer',
      ':hover': {
        transition: '0.7s',
        background: bgColorHover,
        boxShadow: '0 10px 22px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22)',
        color: fontColorHover,
      },
      ':active': {
        outline: 0,
        outlineOffset: 0,
      },
      ':focus': {
        outline: 0,
        outlineOffset: 0,
      },
    });
    Button = (
      <ButtonOutline type={type} onClick={onClick}>
        {value}
      </ButtonOutline>
    );
  }
  return <>{Button}</>;
}

export default Button;
