import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface MenuProps {
  links: {
    title: string;
    path: string;
  }[];
}

function Menu({ links }: MenuProps) {
  let Menu = styled.nav({
    minWidth: 300,
    maxWidth: 600,
    height: '0 auto',
    padding: 10,
    fontsize: 25,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    border: '1px solid #AFACB2',
    background: 'inherit',
  });

  return (
    <Menu className="menu">
      {links &&
        // eslint-disable-next-line array-callback-return
        links.map((link, index) => (
          <Link to={link.path} key={`${link}+${index}`}>
            {link.title}
          </Link>
        ))}
    </Menu>
  );
}

export default Menu;
