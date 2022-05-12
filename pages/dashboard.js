import Layout from "../src/components/client/layout";
import Modal from "../src/components/ui/Modal";
import BlogUPload from "../src/components/client/input-forms/BlogUPload";
import { useState } from "react";
import Backdrop from "../src/components/ui/Backdrop";
import PersonalInfo from "../src/components/client/dashboard/PersonalInfo";
import MyListings from "../src/components/client/dashboard/MyListings";
import Wishlist from "../src/components/client/dashboard/Wishlist";
import AddBlog from "../src/components/client/dashboard/AddBlog";
import AccountHeader from "../src/components/client/dashboard/AccountHeader";

const Dashboard = () => {

  return (
    <Layout>
      {/* Page container*/}
      <div className="container mt-5 mb-md-4 py-5">
        {/* Breadcrumbs*/}
        <nav className="mb-4 pt-md-3" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="city-guide-home-v1.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="city-guide-account-info.html">Account</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Personal info
            </li>
          </ol>
        </nav>
        {/* Account header*/}
        <AccountHeader/>
        {/* Page content*/}
        <div className="card card-body p-4 p-md-5 shadow-sm">
          {/* Account nav*/}
          <div className="mt-md-n3 mb-4">
            <a
              className="btn btn-outline-primary btn-lg rounded-pill w-100 d-md-none"
              href="#account-nav"
              data-bs-toggle="collapse"
            >
              <i className="fi-align-justify me-2" />
              Account Menu
            </a>
            <div className="collapse d-md-block" id="account-nav">
              <ul className="nav nav-pills flex-column flex-md-row pt-3 pt-md-0 pb-md-4 border-bottom-md">
                <li className="nav-item mb-md-0 me-md-2 pe-md-1">
                  <a
                    className="nav-link d-flex align-items-center active"
                    href="#personalinfo"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <i className="fi-user mt-n1 me-2 fs-base" />
                    Personal Info
                  </a>
                </li>
                <li className="nav-item mb-md-0 me-md-2 pe-md-1">
                  <a
                    className="nav-link d-flex align-items-center"
                    href="#mylistings"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <i className="fi-list mt-n1 me-2 fs-base" />
                    My listings
                  </a>
                </li>
                <li className="nav-item mb-md-0 me-md-2 pe-md-1">
                  <a
                    className="nav-link d-flex align-items-center"
                    href="#wishlist"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <i className="fi-heart mt-n1 me-2 fs-base" />
                    Wishlist
                  </a>
                </li>
                <li className="nav-item mb-md-0 me-md-2 pe-md-1">
                  <a
                    className="nav-link d-flex align-items-center"
                    href="#addblog"
                    data-bs-toggle="tab"
                    role="tab"
                  >
                    <i className="fi-plus mt-n1 me-2 fs-base" />
                    Add Blog
                  </a>
                </li>
                <li className="nav-item d-md-none">
                  <a className="nav-link" href="#">
                    <i className="fi-logout mt-n1 me-2 fs-base" />
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            {/* Personal info */}
            <PersonalInfo />

            {/* My listings*/}
            <MyListings />
            {/* My Wishlist*/}
            <Wishlist/>
            {/* ----------------------Add blog section-------------------------------- */}
            <AddBlog/>
           
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
