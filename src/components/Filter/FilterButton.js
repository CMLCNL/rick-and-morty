import React from "react";

const FilterButton = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      <style jsx="true">
        {`
          .x:checked + label {
            background-color: #14bdac;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary text-light"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterButton;
