import React from "react";
import { genders, species, status } from "../../constants/data";
import Category from "./Category/Category";

const Filter = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  const clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2 text-light">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="btn-primary text-center mb-3 p-1"
      >
        Clear Filters
      </div>
      <aside className="p-4 d-flex flex-column gap-4 bg-dark">
        <Category
          update={updateStatus}
          updatePageNumber={updatePageNumber}
          data={status}
          title="Status"
        />
        <Category
          title="Species"
          update={updateSpecies}
          updatePageNumber={updatePageNumber}
          data={species}
        />
        <Category
          update={updateGender}
          updatePageNumber={updatePageNumber}
          data={genders}
          title="Genders"
        />
      </aside>
    </div>
  );
};

export default Filter;
