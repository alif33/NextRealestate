import React from "react";

const PropertyCategory = () => {
  return (
    <>
      <div
        className="tab-pane fade show active"
        id="categories"
        role="tabpanel"
      >
        <div className="pb-4 mb-2">
          <select className="form-select mb-2">
            <option value disabled selected>
              Property type
            </option>
            <option value="Associate Degree">Apartment</option>
            <option value="Associate Degree">Villa/House</option>
          </select>
          <select className="form-select mb-2">
            <option value disabled selected>
              Bedroom
            </option>
            <option value="Associate Degree">1 BHK</option>
            <option value="Associate Degree">2 BHK </option>
            <option value="Associate Degree">3 BHK</option>
            <option value="Associate Degree">3+ BHK</option>
          </select>
          <select className="form-select mb-2">
            <option value disabled selected>
              Bathroom
            </option>
            <option value="Associate Degree">1 Bath</option>
            <option value="Associate Degree">2 Bath</option>
            <option value="Associate Degree">3 Bath</option>
            <option value="Associate Degree">3+ Bath</option>
          </select>
          <select className="form-select mb-2">
            <option value disabled selected>
              Budget
            </option>
            <option value="Associate Degree">
              ₹5000 &nbsp; &nbsp; - &nbsp; ₹10000
            </option>
            <option value="Associate Degree">
              ₹10000 &nbsp; - &nbsp; ₹15000
            </option>
            <option value="Associate Degree">
              ₹15000 &nbsp; - &nbsp; ₹20000
            </option>
            <option value="Associate Degree">
              ₹20000 &nbsp; - &nbsp; ₹25000
            </option>
            <option value="Associate Degree">
              ₹25000 &nbsp; - &nbsp; ₹30000
            </option>
            <option value="Associate Degree">
              ₹30000 &nbsp; - &nbsp; ₹35000
            </option>
            <option value="Associate Degree">
              ₹35000 &nbsp; - &nbsp; ₹40000
            </option>
            <option value="Associate Degree">
              ₹35000 &nbsp; - &nbsp; ₹40000
            </option>
            <option value="Associate Degree">
              ₹40000 &nbsp; - &nbsp; ₹50000
            </option>
            <option value="Associate Degree">
              ₹50000 &nbsp; - &nbsp; ₹60000
            </option>
            <option value="Associate Degree">
              ₹60000 &nbsp; - &nbsp; ₹70000
            </option>
            <option value="Associate Degree">
              ₹70000 &nbsp; - &nbsp; ₹85000
            </option>
            <option value="Associate Degree">
              ₹70000 &nbsp; - &nbsp; ₹85000
            </option>
            <option value="Associate Degree">
              ₹85000 &nbsp; - &nbsp; ₹ 1 Lac
            </option>
            <option value="Associate Degree">
              ₹1 Lac &nbsp; &nbsp; - &nbsp; ₹2 Lac
            </option>
            <option value="Associate Degree">
              ₹2 Lac &nbsp; &nbsp; - &nbsp; ₹3 Lac
            </option>
            <option value="Associate Degree">
              ₹3 Lac &nbsp; &nbsp; - &nbsp; ₹4+ Lac
            </option>
          </select>
          <select className="form-select mb-2">
            <option value disabled selected>
              Furnishing
            </option>
            <option value="Associate Degree">Furnished</option>
            <option value="Associate Degree">Unfurnished </option>
            <option value="Associate Degree">Semi-furnished</option>
          </select>
          <select className="form-select mb-2">
            <option value disabled selected>
              Tenant preferred
            </option>
            <option value="Associate Degree">Family</option>
            <option value="Associate Degree">Bachelors</option>
            <option value="Associate Degree">Bachelors/Family</option>
          </select>
          <select className="form-select mb-2">
            <option value disabled selected>
              Availability
            </option>
            <option value="Associate Degree">Immediately</option>
            <option value="Associate Degree">Within 15 days</option>
            <option value="Associate Degree">Within 30 days</option>
          </select>
          <select className="form-select mb-2">
            <option value disabled selected>
              Age of construction
            </option>
            <option value="Associate Degree">New construction</option>
            <option value="Associate Degree">Less than 5 years old</option>
            <option value="Associate Degree">5 to 10 years old</option>
            <option value="Associate Degree">10 to 15 years old</option>
            <option value="Associate Degree">15 to 20 years old</option>
            <option value="Associate Degree">20+ years old</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default PropertyCategory;
