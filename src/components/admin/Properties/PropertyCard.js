import React from "react";
import dateFormat from "dateformat";
const ContactsCard = ({ data }) => {
  const {
    _id,
    bedrooms,
    city,
    state,
    areaName,
    propertyType,
    maintenanceCharges,
    bathrooms,
    balconies,
    furnishedStatus,
    carParking,
    availability,
    ageConstruction,
    description,
    facing,
    floorNo,
    houseNumber,
    basis,
    bikeParking,
    carpetArea,
    pinCode,
    propertyCategory,
    societyName,
    superArea,
    tenantsPreferred,
    totalFloors,
    vegPermission,
    monthlyRent,
    securityAmount,
    petPermission,
  } = data;
  return (
    <div className="col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-1">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="text-success py-1 mb-0">#{_id}</h5>
                <h5 className="text-primary py-1 mb-0">
                  {bedrooms} Bed {propertyType} | {superArea} sq.ft
                </h5>
                <span className="text-capitalize">
                  {areaName} {city} <span className="text-lowercase">in</span>{" "}
                  {state}
                </span>
              </div>
              <div>
                <h6 className="text-warning py-1">
                  {dateFormat(data.createdAt, "mmm d, yyyy")}
                </h6>
                <button
                  onClick={() => confirm("You agree")}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="my-4">
              <h4>Images</h4>
              <ul className="tns-thumbnails" id="thumbnails">
                <li className="tns-thumbnail">
                  <img
                    style={{ height: "120px" }}
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="Thumbnail"
                  />
                </li>
                <li className="tns-thumbnail">
                  <img
                    style={{ height: "120px" }}
                    src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Thumbnail"
                  />
                </li>
                <li className="tns-thumbnail">
                  <img
                    style={{ height: "120px" }}
                    src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Thumbnail"
                  />
                </li>
                <li className="tns-thumbnail">
                  <img
                    style={{ height: "120px" }}
                    src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Thumbnail"
                  />
                </li>
                <li className="tns-thumbnail">
                  <img
                    style={{ height: "120px" }}
                    src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt="Thumbnail"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="my-4">
            <h4>Description</h4>
            <div>
              <p className="card-text">{description}</p>
            </div>
          </div>
          <div className="row my-4">
            <h4 className="mb-0">Property Details</h4>
            <div className="col-12 col-sm-6 col-md-3">
              <ul className="list-unstyled mt-4">
                <li>Rent: ₹ {monthlyRent}</li>
                <li>Deposit: ₹ {securityAmount}</li>
                <li>Maintennance: ₹ {maintenanceCharges}</li>
                <li>Property Type: {propertyType}</li>
                <li>Bathrooms: {bathrooms} bath</li>
                <li>Balconies: {balconies} bath</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <ul className="list-unstyled mt-4">
                <li>Furnished Status: {furnishedStatus}</li>
                <li>
                  Parking places: {carParking} cars, {bikeParking} bikes
                </li>
                <li>Availability: {availability}</li>
                <li>Property Age: {ageConstruction}</li>
                <li>Carpet area: {carpetArea} sq.ft</li>
                <li>Super area: {superArea} sq.ft</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <ul className="list-unstyled mt-4">
                <li>Floor No: {floorNo} floor</li>
                <li>Total Floors: {totalFloors} floors</li>
                <li>Tenant preferred: {tenantsPreferred}</li>
                <li>Facing: {facing}</li>
                <li>
                  Non-veg: {vegPermission === "1" ? "Allowed" : "Not allowed"}{" "}
                </li>
                <li>
                  Pets: {petPermission === "1" ? "Allowed" : "Not allowed"}{" "}
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <ul className="list-unstyled mt-4">
                <li>houseNumber: {houseNumber} </li>
                <li>Basis: {basis}</li>
                <li>Pin code: {pinCode}</li>
                <li>Society name: {societyName}</li>
                <li>Property Category: {propertyCategory}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
