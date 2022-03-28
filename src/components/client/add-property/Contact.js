function Contact() {
    return (
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
        <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Contact details</h2>
        <div className="row">
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="ap-fn">First name <span className="text-danger">*</span></label>
                <input className="form-control" type="text" id="ap-fn" defaultValue placeholder="Enter your first name" required />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="ap-sn">Last name <span className="text-danger">*</span></label>
                <input className="form-control" type="text" id="ap-sn" defaultValue placeholder="Enter your last name" required />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="ap-phone">Phone number <span className="text-danger">*</span></label>
                <input className="form-control" type="tel" id="ap-phone" data-format="custom" data-delimiter="-" data-blocks="3 3 4" defaultValue placeholder="Enter your phone number" />
            </div>
            <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="ap-email">Email<span className="text-danger">*</span></label>
                <input className="form-control" type="text" id="ap-email" defaultValue placeholder="Enter your email" />
            </div>
        </div>
        <div className="form-check mb-6">
        </div>
    </div>
    )
}
export default Contact;