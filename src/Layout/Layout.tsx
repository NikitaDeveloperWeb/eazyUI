import React from 'react';
import Aside from '../components/Aside';

interface LayoutProps {
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  navigation: boolean;
}

function Layout({ navigation, children }: LayoutProps) {
  return (
    <div className="layout">
      {navigation && <Aside />}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
