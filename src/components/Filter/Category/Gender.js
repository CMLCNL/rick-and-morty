import React from "react";
import { genders } from "../../../constants/data";
import FilterButton from "../FilterButton";

const Gender = ({ updateGender, updatePageNumber }) => {
  return (
    <div>
      <h4 className="text-light">Genders</h4>
      <hr />
      {genders?.map((items, index) => {
        return (
          <FilterButton
            name="gender"
            index={index}
            key={index}
            updatePageNumber={updatePageNumber}
            task={updateGender}
            input={items}
          />
        );
      })}
    </div>
  );
};

export default Gender;
