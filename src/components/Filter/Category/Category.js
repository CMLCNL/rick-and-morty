import React from "react";
import FilterButton from "../FilterButton";

const Category = ({ update, updatePageNumber, title, data }) => {
  return (
    <div>
      <h4 className="text-light">{title}</h4>
      <hr />
      {data?.map((items, index) => {
        return (
          <FilterButton
            name={title.toString().toLowerCase()}
            index={index}
            key={index}
            updatePageNumber={updatePageNumber}
            task={update}
            input={items}
          />
        );
      })}
    </div>
  );
};

export default Category;
