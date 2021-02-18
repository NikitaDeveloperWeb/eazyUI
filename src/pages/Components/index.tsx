import React from 'react';
interface ComponetsProps {
  children?: JSX.Element | Element | JSX.Element[] | Element[];
  title: string;
}
function Components({ title, children }: ComponetsProps) {
  return (
    <div className="components">
      <h1>{title}</h1>
      <div className="components__preview">{children}</div>
    </div>
  );
}

export default Components;
