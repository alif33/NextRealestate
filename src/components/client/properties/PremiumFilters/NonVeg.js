import React from "react";

const NonVeg = () => {
  return (
    <>
      <select className="form-select mb-2">
        <option value disabled selected>
          Non-veg
        </option>
        <option value="Associate Degree">Allowed</option>
        <option value="Associate Degree">Not allowed</option>
      </select>
    </>
  );
};

export default NonVeg;
