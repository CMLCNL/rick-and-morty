import React from "react";
import FilterButton from "../FilterButton";

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div>
      <h4 className="text-light">Species</h4>
      <hr />
      {species.map((item, index) => {
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
