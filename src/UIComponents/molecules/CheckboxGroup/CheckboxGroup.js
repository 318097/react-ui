import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";

const CheckBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  .checkbox-item {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      margin: 0 4px 0 0;
    }
    label {
      cursor: pointer;
      text-transform: capitalize;
      font-size: 1.2rem;
    }
  }
`;

const CheckboxGroup = ({
  options,
  value,
  mode,
  onChange,
  skipDefaultClass,
  className,
  ...others
}) => {
  value = [].concat(value);

  const handleChange = (e) => {
    const { value: status, id: newValue } = e.target;
    const selected = !value.includes(newValue);

    if (mode === "single") {
      onChange(newValue);
    } else if (mode === "multiple") {
      const uniq = selected
        ? [...new Set([...value, newValue])]
        : value.filter((v) => v !== newValue);

      onChange(uniq);
    }
  };

  const classes = classNames({
    "checkbox-group": !skipDefaultClass,
    [className]: !!className,
  });

  return (
    <CheckBoxContainer {...others} className={classes}>
      {options.map((option) => (
        <div className="checkbox-item" key={option.value}>
          <input
            checked={value.includes(option.value)}
            onChange={handleChange}
            type={mode === "multiple" ? "checkbox" : "radio"}
            id={option.value}
            name={option.value}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </CheckBoxContainer>
  );
};

CheckboxGroup.defaultProps = {
  options: [],
  value: [],
  mode: "multiple",
};

CheckboxGroup.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(["single", "multiple"]),
  className: PropTypes.string,
  skipDefaultClass: PropTypes.bool,
};

export default CheckboxGroup;
