import styles from "./Modal.module.css";
const Modal2 = (props) => {
  const { show, title, close, save } = props;
  return (
    <>
      {show && (
        <div
          className={`modal fade ${show && "show"}`}
          id="editUser"
          tabIndex={-1}
          style={{ display: "block" }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
            <div className="modal-content">
              <div className="modal-header bg-transparent">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                />
              </div>
              <div className="modal-body pb-5 px-sm-5 pt-50">
                <div className="text-center mb-2">
                  <h1 className="mb-1">Create a new category</h1>
                  {/* <p>Updating user details will receive a privacy audit.</p> */}
                </div>
                <form
                  id="editUserForm"
                  className="row gy-1 pt-75"
                  onsubmit="return false"
                  noValidate="novalidate"
                >
                  <div className="col-12 col-md-6">
                    <label
                      className="form-label"
                      htmlFor="modalEditUserFirstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="modalEditUserFirstName"
                      name="modalEditUserFirstName"
                      className="form-control"
                      placeholder="John"
                      defaultValue="Gertrude"
                      data-msg="Please enter your first name"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label
                      className="form-label"
                      htmlFor="modalEditUserLastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="modalEditUserLastName"
                      name="modalEditUserLastName"
                      className="form-control"
                      placeholder="Doe"
                      defaultValue="Barton"
                      data-msg="Please enter your last name"
                    />
                  </div>
                
                  <div className="col-12 col-md-6">
                    <label
                      className="form-label"
                      htmlFor="modalEditUserCountry"
                    >
                      Country
                    </label>
                    <div className="position-relative">
                      <select
                        id="modalEditUserCountry"
                        name="modalEditUserCountry"
                        className="select2 form-select select2-hidden-accessible"
                        data-select2-id="modalEditUserCountry"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value data-select2-id={3}>
                          Select Value
                        </option>
                        <option value="Australia">Australia</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Japan">Japan</option>
                        <option value="Korea">Korea, Republic of</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Russia">Russian Federation</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id={2}
                        style={{ width: "auto" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-modalEditUserCountry-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-modalEditUserCountry-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Select Value"
                            >
                              Select Value
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex align-items-center mt-1">
                      <div className="form-check form-switch form-check-primary">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customSwitch10"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customSwitch10"
                        >
                          <span className="switch-icon-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-check"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="switch-icon-right">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-x"
                            >
                              <line x1={18} y1={6} x2={6} y2={18} />
                              <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                          </span>
                        </label>
                      </div>
                      <label
                        className="form-check-label fw-bolder"
                        htmlFor="customSwitch10"
                      >
                        Use as a billing address?
                      </label>
                    </div>
                  </div>
                  <div className="col-12 text-center mt-2 pt-50">
                    <button
                      type="submit"
                      className="btn btn-primary me-1 waves-effect waves-float waves-light"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-outline-secondary waves-effect"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={()=>close()}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal2;
