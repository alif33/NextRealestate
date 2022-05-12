import React, { useState } from "react";
import AdminLayout from "../../src/components/admin/AdminLayout/AdminLayout";
import TagTable from "../../src/components/admin/Table/TagTable";
import { postData } from "../../__lib__/helpers/HttpService";
import { getData } from "../../__lib__/helpers/HttpService";
import { useForm } from "react-hook-form";

const Tag = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [disable, setDisable] = useState(false);
  const onError = (err) => showErr(err);

  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const onSubmit = (data) => {
    console.log("data is : ", data);
    // setDisable(true)
    postData("/admin/tag", data, setDisable).then((res) => {
      if (res?.success) {
        console.log(res.message);
        closeModal();
      }
    });
  };

  return (
    <AdminLayout>
      <div className="content-header row">
        {/* path */}
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">Product</h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Product</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="#">Add Product</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* /path */}
      </div>
      <div className="content-body">
        <TagTable
          modal={modal}
          showModal={showModal}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          onError={onError}
          register={register}
        />
      </div>
    </AdminLayout>
  );
};

export default Tag;
