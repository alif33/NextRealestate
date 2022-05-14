import React from "react";

const ContactUsModal = () => {
  return (
    <>
      <div className="modal fade" id="message-modal" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="fs-base modal-title">Message to Floyd Miles</h3>
              <button
                className="btn-close ms-0"
                type="button"
                data-bs-dismiss="modal"
              />
            </div>
            <form className="modal-body needs-validation" noValidate>
              <div className="mb-4">
                <textarea
                  className="form-control"
                  rows={6}
                  placeholder="Type your message here"
                  required
                  defaultValue={""}
                />
                <div className="invalid-feedback">
                  Please type your message before sending.
                </div>
              </div>
              <button className="btn btn-primary mb-2" type="submit">
                <i className="fi-send me-2" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsModal;
