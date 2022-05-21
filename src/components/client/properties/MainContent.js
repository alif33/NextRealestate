import React, { useState } from "react";
import PropertiesPagination from "./Pagination/PropertiesPagination";
import Property from "./SingleProperty/Property";
import PropertySorting from "./PropertySorting";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setSearch } from "../../../../store/propertySearch/actions";

const MainContent = ({ properties }) => {
  const { selectedCategory, search, propertySort } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const { selected } = selectedCategory;

  const filtered = properties?.filter((val) => {
    if (!selected) {
      return [];
    } else if (
      val.bedrooms === parseInt(selected?.bedroom) ||
      val.propertyType?.toLowerCase() ===
        selected?.propertytype?.toLowerCase() ||
      val.bathrooms === parseInt(selected?.bathroom) ||
      val.monthlyRent <= parseInt(selected?.budget) ||
      val.furnishedStatus.toLowerCase() ===
        selected?.furnishing?.toLowerCase() ||
      val.tenantsPreferred.toLowerCase() ===
        selected?.tenantpreferred?.toLowerCase() ||
      val.availability.toLowerCase() ===
        selected?.availability?.toLowerCase() ||
      val.ageConstruction.toLowerCase() ===
        selected?.ageofconstruction?.toLowerCase()
    ) {
      return val;
    }
  });

  const searchFilter = properties?.filter((val) => {
    if (!search.search?.keywords) {
      return [];
    } else if (
      val.city.toLowerCase().includes(search.search?.keywords?.toLowerCase()) ||
      val.areaName
        .toLowerCase()
        .includes(search.search?.keywords?.toLowerCase()) ||
      val.state.toLowerCase().includes(search.search?.keywords?.toLowerCase())
    ) {
      console.log(
        val.city
          .toLowerCase()
          .includes(search.search?.keywords?.toLowerCase()) ||
          val.areaName
            .toLowerCase()
            .includes(search.search?.keywords?.toLowerCase()) ||
          (val.state
            .toLowerCase()
            .includes(search.search?.keywords?.toLowerCase()) &&
            !search?.search?.budget)
      );
      return val;
    } else if (
      val.city.toLowerCase().includes(search.search?.keywords?.toLowerCase()) ||
      val.areaName
        .toLowerCase()
        .includes(search.search?.keywords?.toLowerCase()) ||
      (val.state
        .toLowerCase()
        .includes(search.search?.keywords?.toLowerCase()) &&
        val.bedrooms === parseInt(search.search?.bedroom?.toLowerCase()))
    ) {
      return val;
    } else if (
      val.city.toLowerCase().includes(search.search?.keywords?.toLowerCase()) ||
      val.areaName
        .toLowerCase()
        .includes(search.search?.keywords?.toLowerCase()) ||
      (val.state
        .toLowerCase()
        .includes(search.search?.keywords?.toLowerCase()) &&
        val.bedrooms >= parseInt(search.search?.bedroom?.toLowerCase()))
    ) {
      return val;
    }
  });

  console.log(selected, search);

  return (
    <>
      <div className="col-lg-8 col-xl-7 position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5">
        {/* Breadcrumb*/}
        <nav className="mb-3 pt-md-2" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="/properties">
                <a>Property list</a>
              </Link>
            </li>
          </ol>
        </nav>
        {/* Title*/}
        <div className="d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4">
          <h1 className="h2 mb-sm-0">Property for rent</h1>
          <a
            className="d-inline-block fw-bold text-decoration-none py-1"
            href="#"
            data-bs-toggle-class="invisible"
            data-bs-target="#map"
          />
        </div>
        {/* Sorting*/}
        <PropertySorting
          filtered={filtered}
          searchFilter={searchFilter}
          properties={properties}
        />

        {!search.search &&
          !propertySort.sortData &&
          (filtered.length > 0 ? (
            filtered?.map((item, index) => (
              <Property key={index} property={item} />
            ))
          ) : (
            <div>Property Not found</div>
          ))}

        {!search.search &&
          !selected &&
          propertySort.sortData?.length > 0 &&
          propertySort.sortData?.map((item, i) => (
            <Property key={item._id} property={item} />
          ))}

        {search.search &&
          !propertySort.sortData &&
          (searchFilter.length > 0 ? (
            searchFilter?.map((item, index) => (
              <Property key={index} property={item} />
            ))
          ) : (
            <div>Property Not found</div>
          ))}

        {/* pagination here */}
        {!search.search && filtered.length > 0 && <PropertiesPagination />}
        {search.search && filtered.length > 0 && <PropertiesPagination />}
      </div>
    </>
  );
};

export default MainContent;
