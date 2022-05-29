import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
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
      <aside className="border border-3 p-4 d-flex flex-column gap-4 bg-dark">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </aside>
    </div>
  );
};

export default Filter;
