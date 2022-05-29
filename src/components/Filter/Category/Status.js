import React from "react";
import FilterButton from "../FilterButton";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div>
      <h4 className="text-light">Status</h4>
      <hr />
      {status.map((item, index) => (
        <FilterButton
          key={index}
          index={index}
          name="status"
          task={updateStatus}
          updatePageNumber={updatePageNumber}
          input={item}
        />
      ))}
    </div>
  );
};

export default Status;
