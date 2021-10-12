
import React from "react";
const Button = ({ label, color,onClick }) => {
  console.log('youClick')
  return (
    <>
      {color === "red" ? (
        <button className="btn btn-red"  onClick={onClick}  > {label}</button>
      ) : color ==="yellow" ? <button className="btn btn-warning"> {label}</button>:  (
        <button className="btn btn-primary"  onClick={onClick} > {label}</button>
      )}
    </>
  );
};

export default Button;
