import React from 'react';
import styled from '@emotion/styled';
interface ContainerBlockProps {
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  width?: string | number;
  border?: 'none' | '1px solid rgba(0,0,0,0.5)';
  backgroundColor?: string;
  radius?: string | number;
}

function Container({ children, width, border, backgroundColor, radius }: ContainerBlockProps) {
  let ContainerBlock = styled.div({
    width: width,
    border: border,
    padding: 10,
    background: backgroundColor,
    borderRadius: radius,
    height: 'auto',
  });
  return <ContainerBlock>{children}</ContainerBlock>;
}

export default Container;
