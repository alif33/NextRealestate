import React from "react";

const Content = () => {
  return (
    <>
      <section className="container mb-md-5 mb-4 pb-lg-5">
        <div className="row">
          {/* Sidebar offcanvas*/}
          <aside className="col-xl-2 col-lg-3">
            <div
              className="offcanvas offcanvas-start offcanvas-collapse"
              id="help-sidebar"
            >
              <div className="offcanvas-header shadow-sm mb-2">
                <h2 className="h5 mb-0">FAQ</h2>
                <button
                  className="btn-close"
                  type="button"
                  data-bs-dismiss="offcanvas"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="nav nav-tabs navbar-nav flex-column m-0 text-lg-center">
                  <li className="nav-item px-0">
                    <a className="nav-link active px-3" href="#">
                      For Owners
                    </a>
                  </li>
                  <li className="nav-item px-0">
                    <a className="nav-link px-3" href="#">
                      For Tenants
                    </a>
                  </li>
                  <li className="nav-item px-0">
                    <a className="nav-link px-3" href="#">
                      For Referrals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          {/* Content*/}
          <div className="col-lg-9 offset-xl-1 col-lg-8">
            <div className="pb-md-2">
              <h3 className="h5">
                How soon you will find tenant after I list the property?
              </h3>
              <p>
                After you post your property, we will do verification of your
                property and find suitable tenant for your property that won’t
                take more than couple of hours or maximum 2-3 days.
              </p>
            </div>
            <div className="pb-md-2">
              <h3 className="h5">
                Do I need to pay anything in advance to use your services?
              </h3>
              <p>
                No, in order to rent a residential property, you no need to pay
                any brokerage and you can avail our services without any advance
                payment too, We believe in service first and pay later policy.
              </p>
            </div>
            <div className="pb-md-2">
              <h3 className="h5">
                What's the rent that I can get for my property?
              </h3>
              <p>
                Your Relationship Manager has city level knowledge of rents in
                various localities, they will guide you about the correct rent
                to be quoted for your property.
              </p>
            </div>
            <div className="pb-md-2">
              <h3 className="h5">
                Will I get good tenants as per my expectation for my property?
              </h3>
              <p>
                Yes, your Relationship Manager will meet tenants personally and
                choose them according to your requirements only. We will get you
                tenants of your choice for your property.
              </p>
            </div>
            <div className="pb-md-2">
              <h3 className="h5">
                Will you assist in making rental agreement?
              </h3>
              <p>
                Yes, we will either help you in making of hard copy of rental
                agreement or send you a soft copy of the agreement over an
                e-mail. You must have Pan Card, Aadhar Card and passport size
                Photos for the agreement to be prepared.
              </p>
            </div>
            <div className="pb-md-2">
              <h3 className="h5">
                When do I need to pay your service charges?
              </h3>
              <p>
                Once we find suitable tenant for your property, you need to pay
                our service charges before we make a rent agreement and handover
                your house to tenant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
