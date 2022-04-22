import styles from "./Modal.module.css";
const Modal2 = (props) => {
  const { show, title, close, save, handleSubmit, onSubmit, onError, register} = props;
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
                  // className="needs-validation"
                  onSubmit={handleSubmit(onSubmit, onError)}
                >
                  <div className="col-12 col-md-6">
                    <label className="form-label mb-1" htmlFor="category-name">
                      Category Name
                    </label>
                    <input
                      {...register("categoryName", {
                        required: "Name is required.",
                      })}
                      className="form-control"
                      type="name"
                      id="category-name"
                      placeholder="Enter category name"
                    />
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
                      onClick={() => close()}
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
