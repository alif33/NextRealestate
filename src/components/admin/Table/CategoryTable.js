import { useState } from "react";
import Backdrop from "../../ui/Backdrop";
import Modal2 from "../../ui/Modal2";


const CategoryTable = () => {
    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(true);
      };

      const closeModal = () => {
    
        setModal(false);
    
      };
    
      const clickedBackdrop = () => {
        setModal(false);
      };


  return (
    <div className="content-body">
      <div className="row" id="basic-table">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Category Table</h4>
            </div>

            {/* --------Create CategoryButton-------- Start */}
            <div className="card-body">
              <div className="d-flex justify-content-left pt-2">
                <a
                href="#"
                  className="btn btn-primary me-1 waves-effect waves-float waves-light"
                //   data-bs-target="#editUser"
                //   data-bs-toggle="modal"
                  onClick={()=>showModal()}
                >
                  Add a new Category
                </a>
              </div>
            </div>

            {/* ------------------Modal----------Start */}

            <Modal2 show={modal}  close={closeModal}/>
            <Backdrop show={modal}/>

            {/* ------------------Modal----------end */}

            {/* --------Create CategoryButton-------- End */}

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="fw-bold">TIPS & ADVICE</span>
                    </td>
                    <td>#12145215454</td>
                    <td>
                      <div className="avatar-group">
                        <div
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          className="avatar pull-up my-0"
                          title
                          data-bs-original-title="Alberto Glotzbach"
                        >
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                            alt="Avatar"
                            height={26}
                            width={26}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge rounded-pill badge-light-primary me-1">
                        Active
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-sm dropdown-toggle hide-arrow py-0 waves-effect waves-float waves-light"
                          data-bs-toggle="dropdown"
                        >
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
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
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
                              className="feather feather-edit-2 me-50"
                            >
                              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                            </svg>
                            <span>Edit</span>
                          </a>
                          <a className="dropdown-item" href="#">
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
                              className="feather feather-trash me-50"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fw-bold">GUIDE</span>
                    </td>
                    <td>#12145215454</td>
                    <td>
                      <div className="avatar-group">
                        <div
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          className="avatar pull-up my-0"
                          title
                          data-bs-original-title="Alberto Glotzbach"
                        >
                          <img
                            src="../../../app-assets/images/portrait/small/avatar-s-6.jpg"
                            alt="Avatar"
                            height={26}
                            width={26}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge rounded-pill badge-light-primary me-1">
                        Active
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-sm dropdown-toggle hide-arrow py-0 waves-effect waves-float waves-light"
                          data-bs-toggle="dropdown"
                        >
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
                            className="feather feather-more-vertical"
                          >
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={12} cy={5} r={1} />
                            <circle cx={12} cy={19} r={1} />
                          </svg>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item" href="#">
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
                              className="feather feather-edit-2 me-50"
                            >
                              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                            </svg>
                            <span>Edit</span>
                          </a>
                          <a className="dropdown-item" href="#">
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
                              className="feather feather-trash me-50"
                            >
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                            <span>Delete</span>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
