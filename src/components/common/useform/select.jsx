import React from "react";
const Select = React.forwardRef(
  (
    { onChange, name, textProperty, valueProperty, label, list, errors },
    ref
  ) => (
 
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <div className="input-group">
          <select
            className="form-select"
            name={name}
            ref={ref}
            onChange={onChange}
          >
            {list &&
              list.map((item) => (
                <option key={item[valueProperty]} value={item[valueProperty]}>
                  {item[textProperty]}
                </option>
              ))}
          </select>
          </div>
          {errors && <div className="alert alert-danger">{errors.message}</div>}
       
      </div>
    
  )
);
Select.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default Select;
