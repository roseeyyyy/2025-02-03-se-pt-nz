import React from "react";

const Hello = ({ name, children }) => {
  return (
    <div>
      <h1>Hello {name || 'World'}</h1>
      {children && <p>{children}</p>}
    </div>
  );
};

export default Hello;
