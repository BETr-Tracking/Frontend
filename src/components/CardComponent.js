import React from "react";
import "./styles/cardContainerStyles.css";

const CardComponent = ({ children, title }) => {
  return (
    <div className="card-component">
      {title && <div className="card-title">{title}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardComponent;
