import React from "react";

const Pets = () => {
  return (
    <>
      <select className="form-select mb-0">
        <option value disabled selected>
          Pets
        </option>
        <option value="Associate Degree">Allowed</option>
        <option value="Associate Degree">Not allowed</option>
      </select>
    </>
  );
};

export default Pets;
