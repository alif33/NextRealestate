import React from "react";
import { filterData } from "./filterData";
import PropertyCategory from "./PropertyCategory";
const PropertyCategories = () => {
    
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="categories"
        role="tabpanel"
      >
        <div className="pb-4 mb-2">
          {filterData?.map(((data, i) => <PropertyCategory data={data} key={i}/>))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCategories;
