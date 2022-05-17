import { useState } from "react";
import { Image } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setMedia } from "../../../../store/property/actions";

function Media({ isValid }) {
  const dispatch = useDispatch();
  const { property } = useSelector((state) => state);
  const { media } = property;
  const handleImages = (e) => {
    if (e.target.files) {
      dispatch(setMedia(e.target.files[0]))
    }
  }
  return (
    <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
      <h2 className="h4 mb-4">
        <i className="fi-image text-primary fs-4 mt-n1 me-2 pe-1" />
        Photos
      </h2>
      <div className="row">
        <div className="col-sm-12 mb-4">
          <div className="alert alert-info mb-4" role="alert">
            <div className="d-flex">
              <i className="fi-alert-circle me-2 me-sm-3" />
              <p className="fs-sm mb-1">
                The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the
                main picture first
              </p>
            </div>
          </div>
          <label className="btn btn-primary py-3" htmlFor="image">
            <Image size={25}/>{"  "}
            Upload Image
          </label>
          <input
            className="file-uploader file-uploader-grid d-none"
            type="file"
            onChange={(e) => handleImages(e)}
            multiple
            id="image"
            data-max-file-size="10MB"
            accept="image/png, image/gif, image/jpeg"
            data-label-idle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><br>or drag them in'
          />
          <div>
            <span>Image Preview</span>

            <img src="https://media.istockphoto.com/vectors/a-colorful-trendy-card-design-vector-illustration-vector-id1193323373?k=20&m=1193323373&s=612x612&w=0&h=2FmXahDQKYY2zPpdrgzh5QxWqPu3RTCoduKebKNfQRg=" alt="images"/>

          </div>
          {!media.propertyImage ||
            (!media.propertyVideo && isValid && (
              <div className="text-danger"> Image is required</div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Media;
