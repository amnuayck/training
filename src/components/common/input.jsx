import React from "react";
const Input = ({placeholder,icon ="bi bi-person-square",type ="text",onChange}) => {
  return (
    <>
      <div className="input-group">
        <input
          type= {type}
          className="form-control"
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className={icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
