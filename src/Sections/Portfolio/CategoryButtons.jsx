import React from "react";

const CategoryButtons = ({ category, className, onChangeCategory }) => {
  return (
    <button className={className} onClick={() => onChangeCategory(category)}>
      {category}
    </button>
  );
};

export default CategoryButtons;
