import React from "react";
import Layout from "../../src/components/client/layout";
import Amenities from "../../src/components/client/Property/Amenities/Amenities";
import PropertyBreadcrumb from "../../src/components/client/Property/PropertyBreadcrumb";
import PropertyDescription from "../../src/components/client/Property/PropertyDescription/PropertyDescription";
import PropertyDetails from "../../src/components/client/Property/PropertyDetails/PropertyDetails";
import PropertyFormCard from "../../src/components/client/Property/PropertyFormCard/PropertyFormCard";
import PropertyGalary from "../../src/components/client/Property/PropertyGalary/PropertyGalary";
import PropertyMeta from "../../src/components/client/Property/PropertyMeta";
import SemilarProperties from "../../src/components/client/Property/SemilarProperties/SemilarProperties";
import TitlePlusSharing from "../../src/components/client/Property/TitlePlusSharing";

const Property = () => {
  return (
    <Layout>
      <div className="container mt-5 mb-md-4 py-5">
        {/* <!-- Breadcrumb--> */}
        <PropertyBreadcrumb />
        {/* <!-- Title + Sharing--> */}
        <TitlePlusSharing />

        <div className="row">
          <div className="col-md-7">
            {/* Gallery*/}
            <PropertyGalary />
            {/* Property details*/}
            <PropertyDetails />
            {/* Amenities*/}
            <Amenities />
            {/* Description*/}
            <PropertyDescription />
            {/* Post meta*/}
            <PropertyMeta />
          </div>
          {/* Card*/}
          <PropertyFormCard />
        </div>
      </div>

      {/* similar properties */}

      <SemilarProperties />
    </Layout>
  );
};

export default Property;
