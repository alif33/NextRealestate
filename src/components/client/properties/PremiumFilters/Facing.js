import React from "react";

const Facing = () => {
  return (
    <>
      <select className="form-select mb-2">
        <option value disabled selected>
          Facing
        </option>
        <option value="Associate Degree">East</option>
        <option value="Associate Degree">North</option>
        <option value="Associate Degree">West</option>
        <option value="Associate Degree">South</option>
        <option value="Associate Degree">North-East</option>
        <option value="Associate Degree">North-West</option>
        <option value="Associate Degree">South-East</option>
        <option value="Associate Degree">South-West</option>
      </select>
    </>
  );
};

export default Facing;
