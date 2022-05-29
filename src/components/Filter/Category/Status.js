import React from "react";
import { status } from "../../../constants/data";
import FilterButton from "../FilterButton";

const Status = ({ updateStatus, updatePageNumber }) => {
  return (
    <div>
      <h4 className="text-light">Status</h4>
      <hr />
      {status?.map((item, index) => (
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
