import React from 'react';

interface ComponentDataGridProps {
  component: JSX.Element | Element | JSX.Element[] | Element[];
  API: string;
  name: string;
  props?: {
    prop: string;
    description: string;
  }[];
}

function ComponentDataGrid({ component, API, name, props }: ComponentDataGridProps) {
  return (
    <div className="componentDataGrid">
      <div className="componentDataGrid__visual">{component}</div>
      <div className="componentDataGrid__data">
        <h2>{name}</h2>
        <h3>API: {API}</h3>
        <ul>
          <h4>Props:</h4>
          {props &&
            props.map((comp, index) => (
              <li key={`${comp}+${index}`}>
                <strong>{comp.prop}</strong>
                <p>{comp.description}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ComponentDataGrid;
