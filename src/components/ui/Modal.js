import styles from "./Modal.module.css";
const Modal = (props) => {
  const { show, title, close, save } = props;
  return (
    <>
      {show && (
        <div
        className={styles.modal}
        //   class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
        //   aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  {title}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">{props.children}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={close}
                >
                  Close
                </button>
                {save && (
                  <button type="button" class="btn btn-primary" onClick={save}>
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
