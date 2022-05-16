import React from "react";

const PropertyCategory = ({ data, handleCategory }) => {
  const names = data.name.split(" ");
  const name = names.join("").toLowerCase();

  return (
    <>
      <select
        name={name}
        onChange={(e) => handleCategory(e)}
        className="form-select mb-2"
      >
        <option value disabled selected>
          {data.name}
        </option>
        {data.options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.opName}
          </option>
        ))}
      </select>
    </>
  );
};

export default PropertyCategory;
