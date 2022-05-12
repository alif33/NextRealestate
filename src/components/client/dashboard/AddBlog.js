import React,{useState} from "react";
import Backdrop from "../../ui/Backdrop";
import Modal from "../../ui/Modal";
import BlogUPload from "../input-forms/BlogUPload";

const AddBlog = () => {
    const [modal, setModal] = useState(false);

    // inputs ----------------
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
  
    const closeModal = () => {
      setTitle();
      setDescription();
      setImage();
      setCategory();
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
  
    const save = () => {
      setTitle();
      setDescription();
      setImage();
      setCategory();
      setModal(true);
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
        <Backdrop  show={modal} clicked={clickedBackdrop} />
        <Modal
          show={modal}
          close={closeModal}
          title="Add a new blog"
          save={save}
        >
          <BlogUPload
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            imageHandler={imageHandler}
            category={category}
            setCategory={setCategory}
          />
        </Modal>
      </div>
    </>
  );
};

export default AddBlog;
