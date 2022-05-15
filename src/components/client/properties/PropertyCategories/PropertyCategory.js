import React from "react";

const PropertyCategory = ({ data }) => {
  return (
    <>
      <select className="form-select mb-2">
        <option value disabled selected>
          {data.name}
        </option>
        {data.options?.map((option, i) => (
          <option key={i}>{option.opName}</option>
        ))}
      </select>
    </>
  );
};

export default PropertyCategory;
