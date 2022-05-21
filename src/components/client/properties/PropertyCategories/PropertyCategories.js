import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../../../../store/propertyCategory/actions";
import { setSearch } from "../../../../../store/propertySearch/actions";
import { setSortProperty } from "../../../../../store/propertySort/actions";
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

  useEffect(() => {
    dispatch(setSelectedCategory(category));
    dispatch(setSortProperty(null));
    dispatch(setSearch(null));
  }, [category]);

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
