import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../../../store/property/actions";

function Details({ isValid }) {
  const [amenities, setAmenities] = useState([]);
  const dispatch = useDispatch();
  const { property } = useSelector((state) => state);
  const { details } = property;

  const {
    ageConstruction,
    availability,
    balconies,
    basis,
    description,
    facing,
    floorNo,
    furnishedStatus,
    maintenanceCharges,
    monthlyRent,
    petsPermission,
    securityAmount,
    tenantsPreferred,
    totalFloors,
    vegPermission,
  } = details;

  const checkAvailability = (arr, val) => {
    return arr.some((arrValue) => val === arrValue);
  };

  const handleCheckBox = (e) => {
    if (!checkAvailability(amenities, e.target.value)) {
      setAmenities([...amenities, e.target.value]);
    }
  };


  return (
    <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
      <h2 className="h4 mb-4">
        <i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />
        Property details
      </h2>
      <div className="row">
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="floorNo">
            Floor no<span className="text-danger">*</span>
          </label>
          <select
            name="floorNo"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.floorNo ? details.floorNo : ""}
            className="form-select form-select-lg"
            id="floorNo"
          >
            <option selected>Choose</option>
            <option value="-1">Basement</option>
            <option value="0">Ground</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">5+</option>
          </select>
          {!floorNo &&  isValid && <div className='text-danger'>Floor number is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="totalFloors">
            Total floors<span className="text-danger">*</span>
          </label>
          <select
            name="totalFloors"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.totalFloors ? details.totalFloors : ""}
            className="form-select form-select-lg"
            id="totalFloors"
          >
            <option selected>Choose</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">10+</option>
          </select>
          {!totalFloors &&  isValid && <div className='text-danger'>Total Floor is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="facing">
            Facing<span className="text-danger">*</span>
          </label>
          <select
            name="facing"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.facing ? details.facing : ""}
            className="form-select form-select-lg"
            id="facing"
          >
            <option selected>Choose</option>
            <option value="East">East</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="West">West</option>
            <option value="North-East">North-East</option>
            <option value="North-West">North-West</option>
            <option value="South-East">South-East</option>
            <option value="South-West">South-West</option>
          </select>
          {!facing &&  isValid && <div className='text-danger'>Facing is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="balconies">
            Balconies<span className="text-danger">*</span>
          </label>
          <select
            name="balconies"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.balconies ? details.balconies : ""}
            className="form-select form-select-lg"
            id="balconies"
          >
            <option selected>Choose</option>
            <option value="Associate Degree">1</option>
            <option value="Associate Degree">2</option>
            <option value="Associate Degree">3</option>
            <option value="Associate Degree">3+</option>
          </select>
          {!balconies &&  isValid && <div className='text-danger'>Balconies is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="furnishedStatus">
            Furnished Status<span className="text-danger">*</span>
          </label>
          <select
            name="furnishedStatus"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.furnishedStatus ? details.furnishedStatus : ""}
            className="form-select form-select-lg"
            id="furnishedStatus"
          >
            <option selected>Choose</option>
            <option value="Furnished">Furnished</option>
            <option value="Semi-furnished">Semi-furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
          {!furnishedStatus &&  isValid && <div className='text-danger'>Furnished is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="ageConstruction">
            Age of construction<span className="text-danger">*</span>
          </label>
          <select
            name="ageConstruction"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.ageConstruction ? details.ageConstruction : ""}
            className="form-select form-select-lg"
            id="ageConstruction"
          >
            <option selected>Choose</option>
            <option value="New construction">New construction</option>
            <option value="Less than 5 years old">Less than 5 years old</option>
            <option value="5 to 10 years old">5 to 10 years old</option>
            <option value="10 to 15 years old">10 to 15 years old</option>
            <option value="15 to 20 years old">15 to 20 years old</option>
            <option value="20+ years old">20+ years old</option>
          </select>
          {!ageConstruction &&  isValid && <div className='text-danger'>Age construction is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="availability">
            Availability<span className="text-danger">*</span>
          </label>
          <select
            name="availability"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.availability ? details.availability : ""}
            className="form-select form-select-lg"
            id="availability"
          >
            <option selected>Choose</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 15 days">Within 15 days</option>
            <option value="Within 30 days">Within 30 days</option>
          </select>
          {!availability &&  isValid && <div className='text-danger'>Availability required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="tenantsPreferred">
            Tenants preferred<span className="text-danger">*</span>
          </label>
          <select
            name="tenantsPreferred"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.tenantsPreferred ? details.tenantsPreferred : ""}
            className="form-select form-select-lg"
            id="tenantsPreferred"
          >
            <option selected>Choose</option>
            <option value="Family">Family</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Bachelors/Family">Bachelors/Family</option>
          </select>
          {!tenantsPreferred &&  isValid && <div className='text-danger'>Tenants is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="vegPermission">
            Non-veg<span className="text-danger">*</span>
          </label>
          <select
            name="vegPermission"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.vegPermission ? details.vegPermission : ""}
            className="form-select form-select-lg"
            id="vegPermission"
          >
            <option selected>Choose</option>
            <option value="1">Allowed</option>
            <option value="0">Not allowed</option>
          </select>
          {!vegPermission &&  isValid && <div className='text-danger'>Veg is required</div>}
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label" htmlFor="petsPermission">
            Pets<span className="text-danger">*</span>
          </label>
          <select
            name="petsPermission"
            onChange={(e) => dispatch(setDetails(e))}
            value={details.petsPermission ? details.petsPermission : ""}
            className="form-select form-select-lg"
            id="petsPermission"
          >
            <option selected>Choose</option>
            <option value="1">Allowed</option>
            <option value="0">Not allowed</option>
          </select>
          {!petsPermission &&  isValid && <div className='text-danger'>Pets is required</div>}
        </div>
      </div>
      {/* Amenities */}
      <div className="border-top pt-4">
        <label className="form-label fw-bold pb-1 mb-2">Amenities</label>
        <div className="row row-cols-sm-2 row-cols-md-4 gx-3 gx-lg-4 mb-4">
          <div className="col">
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                className="form-check-input"
                type="checkbox"
                id="accounting"
                value="Lift"
              />
              <label className="form-check-label" htmlFor="accounting">
                Lift
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Gas pipeline"
                className="form-check-input"
                type="checkbox"
                id="marketing"
              />
              <label className="form-check-label" htmlFor="marketing">
                Gas pipeline
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="24X7 Water supply"
                className="form-check-input"
                type="checkbox"
                id="medicine"
              />
              <label className="form-check-label" htmlFor="medicine">
                24X7 Water supply
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="24X7 Security"
                className="form-check-input"
                type="checkbox"
                id="agriculture"
              />
              <label className="form-check-label" htmlFor="agriculture">
                24X7 Security
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="24X7 Security"
                className="form-check-input"
                type="checkbox"
                id="it"
              />
              <label className="form-check-label" htmlFor="it">
                Car parking
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Visitor parking"
                className="form-check-input"
                type="checkbox"
                id="security"
              />
              <label className="form-check-label" htmlFor="security">
                Visitor parking
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Children's play area"
                className="form-check-input"
                type="checkbox"
                id="management"
              />
              <label className="form-check-label" htmlFor="management">
                Children's play area
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Landscape garden"
                className="form-check-input"
                type="checkbox"
                id="horeca"
              />
              <label className="form-check-label" htmlFor="horeca">
                Landscape garden
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Tree planting"
                className="form-check-input"
                type="checkbox"
                id="design"
              />
              <label className="form-check-label" htmlFor="design">
                Tree planting
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Air conditioning"
                className="form-check-input"
                type="checkbox"
                id="sport"
              />
              <label className="form-check-label" htmlFor="sport">
                Air conditioning
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="CCTV"
                className="form-check-input"
                type="checkbox"
                id="beauty"
              />
              <label className="form-check-label" htmlFor="beauty">
                CCTV
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Fire safety"
                className="form-check-input"
                type="checkbox"
                id="culture"
              />
              <label className="form-check-label" htmlFor="culture">
                Fire safety
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Internet services"
                className="form-check-input"
                type="checkbox"
                id="music"
              />
              <label className="form-check-label" htmlFor="music">
                Internet services
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Gym"
                className="form-check-input"
                type="checkbox"
                id="logistics"
              />
              <label className="form-check-label" htmlFor="logistics">
                Gym
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Club house"
                className="form-check-input"
                type="checkbox"
                id="education"
              />
              <label className="form-check-label" htmlFor="education">
                Club house
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Swimming pool"
                className="form-check-input"
                type="checkbox"
                id="industry"
              />
              <label className="form-check-label" htmlFor="industry">
                Swimming pool
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="House keeping"
                className="form-check-input"
                type="checkbox"
                id="transportation"
              />
              <label className="form-check-label" htmlFor="transportation">
                House keeping
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Power backup"
                className="form-check-input"
                type="checkbox"
                id="sales"
              />
              <label className="form-check-label" htmlFor="sales">
                Power backup
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Sewage treatment plant"
                className="form-check-input"
                type="checkbox"
                id="insurance"
              />
              <label className="form-check-label" htmlFor="insurance">
                Sewage treatment plant
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Rain water harvesting"
                className="form-check-input"
                type="checkbox"
                id="construction"
              />
              <label className="form-check-label" htmlFor="construction">
                Rain water harvesting
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Shopping center"
                className="form-check-input"
                type="checkbox"
                id="architecture"
              />
              <label className="form-check-label" htmlFor="architecture">
                Shopping center
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleCheckBox(e)}
                name="amenities"
                value="Park"
                className="form-check-input"
                type="checkbox"
                id="hr"
              />
              <label className="form-check-label" htmlFor="hr">
                Park
              </label>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="border-top pt-4">
          <label className="form-label fw-bold pb-1 mb-2" htmlFor="description">Description</label>
          <div className="row">
            <div className="col-lg-12 mb-4">
              <textarea
                name="description"
                onChange={(e) => dispatch(setDetails(e))}
                value={details.description ? details.description : ""}
                className="form-control"
                id="description"
                rows={5}
                placeholder="Describe your property"
                defaultValue={""}
              />
              {!description &&  isValid && <div className='text-danger'>Description minumum 500 char</div>}
              <span className="form-text">1500 characters left</span>
            </div>
          </div>
          {/* Rent details*/}
          <div className="border-top pt-4">
            <label className="form-label fw-bold pb-1 mb-2">Rent details</label>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="monthlyRent">
                  Monthly rent<span className="text-danger">*</span>
                </label>
                <input
                  name="monthlyRent"
                  onChange={(e) => dispatch(setDetails(e))}
                  value={details.monthlyRent ? details.monthlyRent : ""}
                  className="form-control form-control-lg"
                  type="number"
                  id="monthlyRent"
                  placeholder="Enter monthly rent"
                />
                {!monthlyRent &&  isValid && <div className='text-danger'>Rent is required</div>}
              </div>
              <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="securityAmount">
                  Security amount<span className="text-danger">*</span>
                </label>
                <input
                  name="securityAmount"
                  onChange={(e) => dispatch(setDetails(e))}
                  value={details.securityAmount ? details.securityAmount : ""}
                  className="form-control form-control-lg"
                  type="number"
                  id="securityAmount"
                  placeholder="Enter security amount"
                />
                {!securityAmount &&  isValid && <div className='text-danger'>Security amount is required</div>}
              </div>
              <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="maintenanceCharges">
                  Maintenance charges<span className="text-danger">*</span>
                </label>
                <input
                  name="maintenanceCharges"
                  onChange={(e) => dispatch(setDetails(e))}
                  value={
                    details.maintenanceCharges ? details.maintenanceCharges : ""
                  }
                  className="form-control form-control-lg"
                  type="number"
                  id="maintenanceCharges"
                  placeholder="Enter maintenance charges"
                />
                {!maintenanceCharges &&  isValid && <div className='text-danger'>Maintenance is required</div>}
              </div>
              <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="basis">
                  Per<span className="text-danger">*</span>
                </label>
                <select
                  name="basis"
                  onChange={(e) => dispatch(setDetails(e))}
                  value={details.basis ? details.basis : ""}
                  className="form-select form-select-lg"
                  id="basis"
                >
                  <option selected>Choose</option>
                  <option value="Associate Degree">Monthly</option>
                  <option value="Associate Degree">Quarterly</option>
                  <option value="Associate Degree">Yearly</option>
                  <option value="Associate Degree">One-time</option>
                </select>
                {!basis &&  isValid && <div className='text-danger'>Basis is required</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;

// "description": null,
//     "monthlyRent": null,
//     "maintenanceCharges": null,
//     "securityAmount": null,
//     "basis": null
