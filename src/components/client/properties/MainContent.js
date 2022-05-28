import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropertiesPagination from "./Pagination/PropertiesPagination";
import Property from "./SingleProperty/Property";
import PropertySorting from "./PropertySorting";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setProperties } from "../../../../store/properties/actions";
import {
  getData,
  getDataWithReq,
} from "../../../../__lib__/helpers/HttpService";
import queryString from "query-string";
import { setFilterData } from "../../../../store/propertyFilterData/actions";

const MainContent = ({ properties }) => {
  const {
    selectedCategory,
    search,
    filterData,
    propertySort,
    premiumSelected,
  } = useSelector((state) => state);

  const [searchProperty, setSearchProperty] = useState({
    founded: false,
    data: null,
  });

  const [categoryData, setCategoryData] = useState([]);
  const dispatch = useDispatch();
  const { query } = useRouter();

  const queryUrl = queryString.stringify(query, { sort: false });
  const searchTrue = !!query.location || !!query.bedrooms || !!query.budgets
  console.log(searchTrue)
  useEffect(() => {
    if (
      Boolean(query.location) ||
      Boolean(query.bedrooms) ||
      Boolean(query.budgets)
    ) {
      getData(`/properties/s?${queryUrl}`).then((res) => {
        if (res?.length > 0) {
          setSearchProperty({ founded: true, data: res });
        } else {
          setSearchProperty({ founded: false, data: [] });
        }
      });
    }
  }, [query.location, query.bedrooms, query.budgets, queryUrl]);


  // const filtered = properties?.filter((val) => {
  //   if (!selected) {
  //     return [];
  //   } else if (
  //     val.bedrooms === parseInt(selected?.bedroom) ||
  //     val.propertyType?.toLowerCase() ===
  //       selected?.propertytype?.toLowerCase() ||
  //     val.bathrooms === parseInt(selected?.bathroom) ||
  //     val.monthlyRent <= parseInt(selected?.budget) ||
  //     val.furnishedStatus.toLowerCase() ===
  //       selected?.furnishing?.toLowerCase() ||
  //     val.tenantsPreferred.toLowerCase() ===
  //       selected?.tenantpreferred?.toLowerCase() ||
  //     val.availability.toLowerCase() ===
  //       selected?.availability?.toLowerCase() ||
  //     val.ageConstruction.toLowerCase() ===
  //       selected?.ageofconstruction?.toLowerCase()
  //   ) {
  //     return val;
  //   }
  // });

  // const searchFilter = properties?.filter((val) => {
  //   if (!search.search?.keywords) {
  //     return [];
  //   } else if (
  //     val.city.toLowerCase().includes(search.search?.keywords?.toLowerCase()) ||
  //     val.areaName
  //       .toLowerCase()
  //       .includes(search.search?.keywords?.toLowerCase()) ||
  //     val.state.toLowerCase().includes(search.search?.keywords?.toLowerCase())
  //   ) {

  //     return val;
  //   } else if (
  //     val.city.toLowerCase().includes(search.search?.keywords?.toLowerCase()) ||
  //     val.areaName
  //       .toLowerCase()
  //       .includes(search.search?.keywords?.toLowerCase()) ||
  //     (val.state
  //       .toLowerCase()
  //       .includes(search.search?.keywords?.toLowerCase()) &&
  //       val.bedrooms === parseInt(search.search?.bedroom?.toLowerCase()))
  //   ) {
  //     return val;
  //   } else if (
  //     val.city.toLowerCase().includes(search.search?.keywords?.toLowerCase()) ||
  //     val.areaName
  //       .toLowerCase()
  //       .includes(search.search?.keywords?.toLowerCase()) ||
  //     (val.state
  //       .toLowerCase()
  //       .includes(search.search?.keywords?.toLowerCase()) &&
  //       val.bedrooms >= parseInt(search.search?.bedroom?.toLowerCase()))
  //   ) {
  //     return val;
  //   }
  // });

  const [pageNumber, setPageNumber] = useState(0);
  const propertyPerPage = 5;
  const pagesVisited = pageNumber * propertyPerPage;

  const propertiesPageNumber = Math.ceil(properties.length / propertyPerPage);
  const searchData = Math.ceil(searchProperty.data?.length / propertyPerPage);
  const filterPageNumber = Math.ceil(
    filterData.dataList?.length / propertyPerPage
  );
  // const sort = Math.ceil(propertySort.sortData?.length / propertyPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
        {/* <PropertySorting
          filtered={filtered}
          searchFilter={searchFilter}
          properties={properties}
        /> */}
        
        { !filterData.dataList && !searchProperty?.data && properties.length > 0 && (
          properties
            .slice(pagesVisited, pagesVisited + propertyPerPage)
            ?.map((item, index) => <Property key={index} property={item} />)
        ) }

        {!filterData.dataList && searchProperty?.data &&
          (searchProperty.data?.length > 0 ? (
            searchProperty?.data
              ?.slice(pagesVisited, pagesVisited + propertyPerPage)
              ?.map((item, i) => <Property key={item._id} property={item} />)
          ) : (
            <div>Property not found</div>
          ))}

        {!searchTrue && filterData.dataList &&
          (filterData.dataList.length > 0 ? (
            filterData.dataList
              ?.slice(pagesVisited, pagesVisited + propertyPerPage)
              ?.map((item, i) => <Property key={i} property={item} />)
          ) : (
            <div>Property not found</div>
          ))}
        {/* {search.search &&
          !propertySort.sortData &&
          (searchFilter.length > 0 ? (
            searchFilter
              .slice(pagesVisited, pagesVisited + propertyPerPage)
              ?.map((item, index) => <Property key={index} property={item} />)
          ) : (
            <div>Property Not found</div>
          ))} */}

        {/* pagination here */}
        {searchTrue && !filterData.dataList && (
          <PropertiesPagination
            pageCount={searchData}
            changePage={changePage}
          />
        )}
        {!searchTrue && filterData.dataList && (
          <PropertiesPagination
            pageCount={filterPageNumber}
            changePage={changePage}
          />
        )}
        {!searchTrue && !filterData.dataList && !searchProperty?.data  && (
          <PropertiesPagination
            pageCount={propertiesPageNumber}
            changePage={changePage}
          />
        )}
       
      </div>
    </>
  );
};

export default MainContent;
