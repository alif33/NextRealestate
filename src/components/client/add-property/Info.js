function Info(){
    return(
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
        <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Basic info</h2>
        <div className="row">
            <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="pr-education-level">Category<span className="text-danger">*</span></label>
            <select className="form-select form-select-lg" id="pr-education-level" required>
                <option value disabled selected>Choose</option>
                <option value="Associate Degree">For rent</option>
            </select>
            </div>
            <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="pr-study-field">Property type<span className="text-danger">*</span></label>
            <select className="form-select form-select-lg" id="pr-education-level" required>
                <option value disabled selected>Choose</option>
                <option value="Associate Degree">Apartment</option>
                <option value="Associate Degree">Villa</option>
            </select>
            </div>
            <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="pr-study-field">Bedrooms<span className="text-danger">*</span></label>
            <select className="form-select form-select-lg" id="pr-education-level" required>
                <option value disabled selected>Choose</option>
                <option value="Associate Degree">1 BHK</option>
                <option value="Associate Degree">2 BHK</option>
                <option value="Associate Degree">3 BHK</option>
                <option value="Associate Degree">3+ BHK</option>
            </select>
            </div>
            <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="pr-study-field">Bathrooms<span className="text-danger">*</span></label>
            <select className="form-select form-select-lg" id="pr-education-level" required>
                <option value disabled selected>Choose</option>
                <option value="Associate Degree">1</option>
                <option value="Associate Degree">2</option>
                <option value="Associate Degree">3</option>
                <option value="Associate Degree">3+</option>
            </select>
            </div>
            <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="pr-study-field">Bike parking<span className="text-danger">*</span></label>
            <select className="form-select form-select-lg" id="pr-education-level" required>
                <option value disabled selected>Choose</option>
                <option value="Associate Degree">1</option>
                <option value="Associate Degree">2</option>
                <option value="Associate Degree">3</option>
                <option value="Associate Degree">3+</option>
            </select>
            </div>
            <div className="col-sm-6 mb-4">
            <label className="form-label" htmlFor="pr-study-field">Car parking<span className="text-danger">*</span></label>
            <select className="form-select form-select-lg" id="pr-education-level" required>
                <option value disabled selected>Choose</option>
                <option value="Associate Degree">1</option>
                <option value="Associate Degree">2</option>
                <option value="Associate Degree">3</option>
                <option value="Associate Degree">3+</option>
            </select>
            </div>
            <div className="col-lg-6 mb-4">
            <label className="form-label" htmlFor="pr-period-to">Carpet area (sq-ft only)<span className="text-danger">*</span></label>
            <input className="form-control form-control-lg" type="number" id="pr-fn" defaultValue placeholder="Enter carpet are in sq-ft only" required />
            </div>
            <div className="col-lg-6 mb-4">
            <label className="form-label" htmlFor="pr-period-to">super area (sq-ft only)<span className="text-danger">*</span></label>
            <input className="form-control form-control-lg" type="number" id="pr-fn" defaultValue placeholder="Enter super are in sq-ft only" required />
            </div>
        </div>
        <div className="form-check mb-6">
        </div>
        </div>
    )
}
export default Info;