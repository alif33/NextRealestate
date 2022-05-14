import { useEffect, useState } from "react";
import Layout from "../src/components/client/layout";
import Cookies from "universal-cookie";
import ContactUsModal from "../src/components/client/Reviews/ContactUsModal";
import AddReviewModal from "../src/components/client/Reviews/AddReviewModal/AddReviewModal";
import ReviewHeader from "../src/components/client/Reviews/ReviewHeader";
import CompanyProfile from "../src/components/client/Reviews/CompanyProfile";
import ReviewTitle from "../src/components/client/Reviews/ReviewTitle";
import ReviewStatics from "../src/components/client/Reviews/ReviewStatics/ReviewStatics";
import ShortAndReviewButton from "../src/components/client/Reviews/ShortAndReviewButton";
import ReviewPagination from "../src/components/client/Reviews/ReviewPagination/ReviewPagination";
import ReviewCard from "../src/components/client/Reviews/ReviewCard";
import { getData } from "../__lib__/helpers/HttpService";
const Reviews = ({reviews}) => {

  return (
    <Layout>
      <div>
        {/* contact use modal  */}
        <ContactUsModal />
        {/* add review modal */}
        <AddReviewModal />
        <div className="container mt-5 mb-md-4 py-5">
          {/* navbar  */}
          <ReviewHeader />
          <div className="row">
            {/* Company profile */}
            <CompanyProfile />

            {/* Content*/}
            <div className="col-lg-9 col-md-8">
              <ReviewTitle />
              {/* Reviews statistics*/}
              <ReviewStatics />

              {/* Sorting + add review button*/}
              <ShortAndReviewButton />
              {/* Review*/}
              <ReviewCard />

              {/* Pagination*/}
              <ReviewPagination />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;


export async function getServerSideProps() {
  const reviews = await getData("/reviews");
  console.log(reviews)
  return {
    props: {
      reviews: reviews || [],
  
    
    },
  };
}
