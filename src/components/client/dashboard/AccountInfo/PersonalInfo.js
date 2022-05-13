import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  authPost,
  updateData,
} from "../../../../../__lib__/helpers/HttpService";
import InfoInput from "./InfoInput";
import Cookies from "universal-cookie";

const PersonalInfo = () => {
  const cookies = new Cookies();
  const [disable, setDisable] = useState(true);
  const { users } = useSelector((state) => state);
  const { user } = users;
  const [handleData, setHandleData] = useState(null);

  const handleForm = (e) => {
    setDisable(false);
    const name = e.target.name;
    const value = e.target.value;
    setHandleData((values) => ({ ...values, [name]: value }));
  };
  console.log(handleData);
  const handleSave = () => {
    const userInfo = cookies.get("_info");
    if (!handleData) {
      console.log(handleData);
      toast.error("something wrong");
    } else {
      const newData = {
        name: handleData?.name || user.name,
        email: handleData?.email || user.email,
        phoneNumber: handleData?.phoneNumber || user?.phone || "",
        updatePassword: handleData?.password || user.password,
        image: "",
        wishlists: user.wishlists,
      };

      updateData("/user/profile", newData, userInfo.token).then((res) => {
        if (res.success) {
          toast.success(res.message);
        } else {
          toast.error("something wrong");
        }
      });
    }
  };

  return (
    <>
      <div
        className="tab-pane fade show active"
        id="personalinfo"
        role="tabpanel"
      >
        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
          <h1 className="h3 mb-0" style={{ color: "grey" }}>
            Personal Info
          </h1>
        </div>
        <div className="border rounded-3 p-3 mb-2" id="personal-info">
          {/* Name*/}
          <InfoInput
            handleForm={handleForm}
            label="Full name"
            propertyValue={user.name}
            fieldName="name"
            fieldtype="text"
            collapse="#name-collapse"
          />
          {/* Phone number*/}
          <InfoInput
            handleForm={handleForm}
            label="Phone number"
            propertyValue={user?.phone}
            fieldName="phoneNumber"
            fieldtype="text"
            collapse="#phone-collapse"
          />

          {/* Email*/}
          <InfoInput
            handleForm={handleForm}
            label="Email"
            propertyValue={user.email}
            fieldName="email"
            fieldtype="text"
            collapse="#email-collapse"
          />
          <InfoInput
            handleForm={handleForm}
            label="Password"
            propertyValue="********"
            fieldName="password"
            fieldtype="password"
            collapse="#passwrod-collapse"
          />
        </div>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <button
            disabled={disable}
            onClick={() => handleSave()}
            className="btn btn-primary px-3 px-sm-4"
            type="button"
          >
            Save changes
          </button>
          <button className="btn btn-link btn-sm px-0" type="button">
            <i className="fi-trash me-2" />
            Delete account
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
