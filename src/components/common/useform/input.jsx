import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
input {
  height: 36px;
  border-radius: 5px;
   ${(props) => (props.error ? "border: 1px solid red" : "")};
}

  label {
    color: ${(props) => (props.error ? "red" : "")};
  }
`;

const Input = ({ name, label, type = "text", register, required, errors ,placeholder}) => {
  return (
    <div className="from-group">
       <InputWrapper error={errors}>
      <label>{label}</label>
      <div className="input-group">
        <input
           placeholder ={placeholder}
          type={type}
          {...register(name, { required })}
          className="form-control"
        />
      </div>
      </InputWrapper>
      {errors && <div className="alert alert-danger">{errors.message}</div>}
    </div>
  );
};

export default Input;
