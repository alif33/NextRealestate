import React, { useState } from "react";
import Backdrop from "../../ui/Backdrop";
import Modal from "../../ui/Modal";
import BlogUPload from "../input-forms/BlogUPload";
import Cookies from "universal-cookie";
import { authPost, postData } from "../../../../__lib__/helpers/HttpService";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const AddBlog = () => {
  const cookies = new Cookies();
  const [modal, setModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const { users } = useSelector((state) => state);
  // inputs ----------------
  const [handleFormData, setHandleFormData] = useState({
    blogTitle: null,
    description: null,
    image: null,
    category: null,
  });

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setHandleFormData((values) => ({ ...values, [name]: value }));
  };
  const closeModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  const clickedBackdrop = () => {
    setModal(false);
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const userInfo = cookies.get("_info");
  const { user } = users;
  const [body, setBody] = useState(null)
  const { blogTitle, image, category } = handleFormData;
  console.log(category);
  const save = async () => {
    // const formData = await new FormData();
    // formData.append("title", blogTitle);
    // formData.append("body", description);
    // formData.append("image",image[0]);
    // for (let i = 0; i < selectedTag?.length; i++) {
    //   formData.append("tags[]", selectedTag[i].value);
    // }

    const newData = {
      title: blogTitle,
      body: body,
      category: category,
      postedBy: user?._id,
      tags: selectedTag,
    };
    if (!blogTitle || !body || !image || !category || !selectedTag) {
      setIsValid(true);
    } else {
      await submitData(newData);
    }
    setModal(true);
  };
  const submitData = async (data) => {
    // setDisable(true);

    authPost("/blog", data, userInfo.token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        setModal(false);
        // setDisable(false);
      } else {
        toast.error("Unsuccessfully");

        // setDisable(false);
      }
    });
  };

  return (
    <>
      <div className="tab-pane fade" id="addblog" role="tabpanel">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          onClick={() => showModal()}
        >
          Add a new blog
        </button>
        <Backdrop show={modal} clicked={clickedBackdrop} />
        <Modal
          show={modal}
          close={closeModal}
          title="Add a new blog"
          save={save}
        >
          <BlogUPload
            setSelectedTag={setSelectedTag}
            handleFormData={handleFormData}
            handleForm={handleForm}
            selectedTag={selectedTag}
            isValid={isValid}
            setBody={setBody}
            body={body}
          />
        </Modal>
      </div>
    </>
  );
};

export default AddBlog;
