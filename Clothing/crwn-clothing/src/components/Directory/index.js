import "./DirectoryElements.scss";
import React from "react";

import CategoryItem from "../CateogoryItem";

export default function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category, id) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
}
