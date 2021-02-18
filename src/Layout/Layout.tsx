import React from 'react';
import Aside from '../components/Aside';
import PanelSetting from '../components/PanelSetting';
interface LayoutProps {
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  navigation: boolean;
  panel: boolean;
}

function Layout({ navigation, children, panel }: LayoutProps) {
  return (
    <div className="layout">
      {navigation && <Aside />}
      <main>
        {panel && (
          <div className="layout__panel">
            <PanelSetting />
          </div>
        )}
        {children}
      </main>
    </div>
  );
}

export default Layout;
