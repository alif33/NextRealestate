import React from "react";
import Facing from "./Facing";
import Floor from "./Floor";
import NonVeg from "./NonVeg";
import Pets from "./Pets";
import PropertyAmemities from "./PropertyAmemities";

const PremiumFilters = () => {
  return (
    <>
      <div className="tab-pane fade" id="filters" role="tabpanel">
        <div className="pb-4 mb-2">
          <Floor />
          <Facing />
          <NonVeg />
          <Pets />
        </div>
        <PropertyAmemities />
        <div className="border-top py-2">
          <button className="btn btn-outline-primary" type="button">
            <i className="fi-rotate-right me-2" />
            Reset filters
          </button>
        </div>
      </div>
    </>
  );
};

export default PremiumFilters;
