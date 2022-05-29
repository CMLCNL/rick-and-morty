import React from "react";
import { species } from "../../../constants/data";
import FilterButton from "../FilterButton";

const Species = ({ updateSpecies, updatePageNumber }) => {
  return (
    <div>
      <h4 className="text-light">Species</h4>
      <hr />
      {species?.map((item, index) => {
        return (
          <FilterButton
            name="species"
            index={index}
            key={index}
            updatePageNumber={updatePageNumber}
            task={updateSpecies}
            input={item}
          />
        );
      })}
    </div>
  );
};

export default Species;
