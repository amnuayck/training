import React from "react";

const Input = ({ name, label, type = "text", register, required, errors ,placeholder}) => {
  return (
    <div className="from-group">
      <label>{label}</label>
      <div className="input-group">
        <input
           placeholder ={placeholder}
          type={type}
          {...register(name, { required })}
          className="form-control"
        />
      </div>
      {errors && <div className="alert alert-danger">{errors.message}</div>}
    </div>
  );
};

export default Input;
