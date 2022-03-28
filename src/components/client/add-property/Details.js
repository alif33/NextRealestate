function Details() {
    return (
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
        <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Property details</h2>
        <div className="row">
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-education-level">Floor no<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">Basement</option>
                    <option value="Associate Degree">Ground</option>
                    <option value="Associate Degree">1</option>
                    <option value="Associate Degree">2</option>
                    <option value="Associate Degree">3</option>
                    <option value="Associate Degree">4</option>
                    <option value="Associate Degree">5</option>
                    <option value="Associate Degree">5+</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-education-level">Total floors<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">1</option>
                    <option value="Associate Degree">2</option>
                    <option value="Associate Degree">3</option>
                    <option value="Associate Degree">4</option>
                    <option value="Associate Degree">5</option>
                    <option value="Associate Degree">6</option>
                    <option value="Associate Degree">7</option>
                    <option value="Associate Degree">8</option>
                    <option value="Associate Degree">9</option>
                    <option value="Associate Degree">10</option>
                    <option value="Associate Degree">10+</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Facing<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">East</option>
                    <option value="Associate Degree">North</option>
                    <option value="Associate Degree">South</option>
                    <option value="Associate Degree">West</option>
                    <option value="Associate Degree">North-East</option>
                    <option value="Associate Degree">North-West</option>
                    <option value="Associate Degree">South-East</option>
                    <option value="Associate Degree">South-West</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Balconies<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">1</option>
                    <option value="Associate Degree">2</option>
                    <option value="Associate Degree">3</option>
                    <option value="Associate Degree">3+</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Furnished Status<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">Furnished</option>
                    <option value="Associate Degree">Semi-furnished</option>
                    <option value="Associate Degree">Unfurnished</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Age of construction<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">New construction</option>
                    <option value="Associate Degree">Less than 5 years old</option>
                    <option value="Associate Degree">5 to 10 years old</option>
                    <option value="Associate Degree">10 to 15 years old</option>
                    <option value="Associate Degree">15 to 20 years old</option>
                    <option value="Associate Degree">20+ years old</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Availability<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">Immediately</option>
                    <option value="Associate Degree">Within 15 days</option>
                    <option value="Associate Degree">Within 30 days</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Tenants preferred<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">Family</option>
                    <option value="Associate Degree">Bachelors</option>
                    <option value="Associate Degree">Bachelors/Family</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Non-veg<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">Allowed</option>
                    <option value="Associate Degree">Not allowed</option>
                </select>
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-study-field">Pets<span className="text-danger">*</span></label>
                <select className="form-select form-select-lg" id="pr-education-level" required>
                    <option value disabled selected>Choose</option>
                    <option value="Associate Degree">Allowed</option>
                    <option value="Associate Degree">Not allowed</option>
                </select>
            </div>
        </div>
        {/* Amenities */}
        <div className="border-top pt-4">
            <label className="form-label fw-bold pb-1 mb-2">Amenities</label>
            <div className="row row-cols-sm-2 row-cols-md-4 gx-3 gx-lg-4 mb-4">
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="accounting" />
                        <label className="form-check-label" htmlFor="accounting">Lift</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="marketing" />
                        <label className="form-check-label" htmlFor="marketing">Gas pipeline</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="medicine" />
                        <label className="form-check-label" htmlFor="medicine">24X7 Water supply</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="agriculture" />
                        <label className="form-check-label" htmlFor="agriculture">24X7 Security</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="it" />
                        <label className="form-check-label" htmlFor="it">Car parking</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="security" />
                        <label className="form-check-label" htmlFor="security">Visitor parking</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="management" />
                        <label className="form-check-label" htmlFor="management">Children's play area</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="horeca" />
                        <label className="form-check-label" htmlFor="horeca">Landscape garden</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="design" />
                        <label className="form-check-label" htmlFor="design">Tree planting</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="sport" />
                        <label className="form-check-label" htmlFor="sport">Air conditioning</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="beauty" />
                        <label className="form-check-label" htmlFor="beauty">CCTV</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="culture" />
                        <label className="form-check-label" htmlFor="culture">Fire safety</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="music" />
                        <label className="form-check-label" htmlFor="music">Internet services</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="logistics" />
                        <label className="form-check-label" htmlFor="logistics">Gym</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="education" />
                        <label className="form-check-label" htmlFor="education">Club house</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="industry" />
                        <label className="form-check-label" htmlFor="industry">Swimming pool</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="transportation" />
                        <label className="form-check-label" htmlFor="transportation">House keeping</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="sales" />
                        <label className="form-check-label" htmlFor="sales">Power backup</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="insurance" />
                        <label className="form-check-label" htmlFor="insurance">Sewage treatment plant</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="construction" />
                        <label className="form-check-label" htmlFor="construction">Rain water harvesting</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="architecture" />
                        <label className="form-check-label" htmlFor="architecture">Shopping center</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="hr" />
                        <label className="form-check-label" htmlFor="hr">Park</label>
                    </div>
                </div>
            </div>
            {/* Description */}
            <div className="border-top pt-4">
                <label className="form-label fw-bold pb-1 mb-2">Description</label>
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <textarea className="form-control" id="ap-description" rows={5} placeholder="Describe your property" defaultValue={""} /><span className="form-text">1500 characters left</span>
                    </div>
                </div>
                {/* Rent details*/}
                <div className="border-top pt-4">
                    <label className="form-label fw-bold pb-1 mb-2">Rent details</label>
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <label className="form-label" htmlFor="pr-period-to">Monthly rent<span className="text-danger">*</span></label>
                            <input className="form-control form-control-lg" type="number" id="pr-fn" defaultValue placeholder="Enter monthly rent" required />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label className="form-label" htmlFor="pr-period-to">Security amount<span className="text-danger">*</span></label>
                            <input className="form-control form-control-lg" type="number" id="pr-fn" defaultValue placeholder="Enter security amount" required />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label className="form-label" htmlFor="pr-period-to">Maintenance charges<span className="text-danger">*</span></label>
                            <input className="form-control form-control-lg" type="number" id="pr-fn" defaultValue placeholder="Enter maintenance charges" required />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <label className="form-label" htmlFor="pr-study-field">Per<span className="text-danger">*</span></label>
                            <select className="form-select form-select-lg" id="pr-education-level" required>
                                <option value disabled selected>Choose</option>
                                <option value="Associate Degree">Monthly</option>
                                <option value="Associate Degree">Quarterly</option>
                                <option value="Associate Degree">Yearly</option>
                                <option value="Associate Degree">One-time</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Details;