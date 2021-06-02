import React from "react";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ categories }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {categories && <li className="breadcrumb-item">{categories}</li>}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
