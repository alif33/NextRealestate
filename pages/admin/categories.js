import React, { useState, useEffect } from "react";
import CategoryTable from "../../src/components/admin/Table/CategoryTable";
import AdminLayout from "./../../src/components/admin/AdminLayout/AdminLayout";
import { postData } from "../../__lib__/helpers/HttpService";
import { getData } from "../../__lib__/helpers/HttpService";
import { useForm } from "react-hook-form";

const Categories = (props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [disable, setDisable] = useState(false);
  const onError = (err) => showErr(err);

  const [categories, setCategories] = useState();
  const [modal, setModal] = useState(false);
 
  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("/categories");
      setCategories(data);
    };

    fetchData();
  }, []);

  const onSubmit = (data) => {
     postData("/admin/category", data, setDisable).then((res) => {
      if (res?.success) {
        closeModal();
      }
    });
  };

  return (
    <AdminLayout>
      <CategoryTable
        categories={categories}
        modal={modal}
        showModal={showModal}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        onError={onError}
        register={register}
      />
    </AdminLayout>
  );
};

export default Categories;
