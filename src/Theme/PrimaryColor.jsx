import React from "react";
import { useThemeContext } from "../Context/theme-context";

const PrimaryColor = ({ className }) => {
  const { themeHandler } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default PrimaryColor;
