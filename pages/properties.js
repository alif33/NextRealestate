import Layout from "../src/components/client/layout";
import FilterSidebar from "../src/components/client/properties/FilterSidebar";
import MainContent from "../src/components/client/properties/MainContent";
import PropertiesPagination from "../src/components/client/properties/Pagination/PropertiesPagination";
import PremiumFilters from "../src/components/client/properties/PremiumFilters/PremiumFilters";
import PropertiesNavTab from "../src/components/client/properties/PropertiesNavTab";
import Property from "../src/components/client/properties/SingleProperty/Property";
import PropertyCategories from "../src/components/client/properties/PropertyCategories/PropertyCategories";
import PropertyCategory from "../src/components/client/properties/PropertyCategory";
import PropertySearch from "../src/components/client/properties/PropertySearch";
import PropertySorting from "../src/components/client/properties/PropertySorting";
import { getData } from "../__lib__/helpers/HttpService";

export default function Properties({ properties }) {
  return (
    <Layout>
      <div className="container-fluid mt-5 pt-5 p-0">
        <div className="row g-0 mt-n3">
          {/* Filters sidebar (Offcanvas on mobile)*/}
          <FilterSidebar />
          {/* Page content*/}
          <MainContent  properties={properties}/>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const properties = await getData("/properties");
  return {
    props: {
      properties,
    },
  };
}
