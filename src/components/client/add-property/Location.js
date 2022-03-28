function Location(){
    return(
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Location</h2>
            <div className="row">
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-fn">House or Flat number<span className="text-danger">*</span></label>
                <input className="form-control form-control-lg" type="text" id="pr-fn" defaultValue placeholder="Enter your House/Flat number" required />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-fn">Society or Project name<span className="text-danger">*</span></label>
                <input className="form-control form-control-lg" type="text" id="pr-fn" defaultValue placeholder="Enter Society or Project name" required />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-fn">Area name<span className="text-danger">*</span></label>
                <input className="form-control form-control-lg" type="text" id="pr-fn" defaultValue placeholder="Enter area name" required />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-fn">City<span className="text-danger">*</span></label>
                <input className="form-control form-control-lg" type="text" id="pr-fn" defaultValue placeholder="Enter city name" required />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-fn">State<span className="text-danger">*</span></label>
                <input className="form-control form-control-lg" type="text" id="pr-fn" defaultValue placeholder="Enter state name" required />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="pr-period-to">PIN code<span className="text-danger">*</span></label>
                <input className="form-control form-control-lg" type="number" id="pr-fn" defaultValue placeholder="Enter pin code number" required />
            </div>
            </div>
      </div>
    )
}
export default Location;