import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../../../../store/propertyCategory/actions";
import { filterData } from "./filterData";
import PropertyCategory from "./PropertyCategory";
const PropertyCategories = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const handleCategory = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCategory((values) => ({ [name]: value }));
  };
  dispatch(setSelectedCategory(category));

  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="categories"
        role="tabpanel"
      >
        <div className="pb-4 mb-2">
          {filterData?.map((data, i) => (
            <PropertyCategory
              handleCategory={handleCategory}
              data={data}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCategories;
