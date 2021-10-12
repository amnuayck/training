import React, { useState } from "react";
import Select from "react-select";
import { defaultTheme } from 'react-select';

const SelectOption = ({
  name,
  onChange,
  placeholder = "Search...",
  label,
  options,
  error,
  val,
}) => {
  const [selectedOption, setselectedOption] = useState({ label: val, value:val });
  const { colors } = defaultTheme;
  const handleChange = (selectedOption) => {
    
    setselectedOption(selectedOption);
    onChange(selectedOption);
  };


  const Svg = p => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      focusable="false"
      role="presentation"
      {...p}
    />
  );
  const DropdownIndicator = () => (
    <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
      <Svg>
        <path
          d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </Svg>
    </div>
  );
  return (
    <div className="form-group">
      {label && <i htmlFor={name}>{label}</i>}
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        openMenuOnClick={false}
        autoFocus
        backspaceRemovesValue={false}
        // defaultValue={{ label: "เครื่อง", value: "เครื่อง" }}
         components={{ DropdownIndicator, IndicatorSeparator: null }}
         controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}

      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default SelectOption;
