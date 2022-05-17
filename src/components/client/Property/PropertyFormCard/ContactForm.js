import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { postData } from "../../../../../__lib__/helpers/HttpService";
const ContactForm = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    if (data.role === "true") {
      setDisable(false);
    }
    if (data.isAgree && data.role === "OWNER" || "TENANT") {
      setDisable(true);
      const newData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        message: data.message
      };
      postData("/contact", newData, setDisable).then((res) => {
        if (res?.success) {
          toast.success(`${res.message}`);
          setDisable(false);
          reset();
        }else{
            
        }
      });
    }
  };

  console.log(watch())
  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="pr-study-field">
            I am
            <span className="text-danger" />
          </label>
          <select
          {...register('role',{required: true})}
            className={`form-select form-select-lg ${watch().role === "true" && 'border-danger'}`}
            id="pr-education-level"
          >
            <option value disabled selected>
              Choose
            </option>
            <option value="Associate Degree">Owner</option>
            <option value="Associate Degree">Tenant </option>
          </select>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name*"
       
          />
          <div className="invalid-feedback">Please enter your name!</div>
        </div>
        <div className="mb-3">
          <input
            className="form-control mb-3"
            type="tel"
            placeholder="Phone*"
          />
          <div className="invalid-feedback">Invalid email address!</div>
        </div>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email*"
         
        />
        <div className="invalid-feedback">Invalid phone number!</div>
        <textarea
          className="form-control mb-3"
          rows={3}
          placeholder="Message"
          style={{ resize: "none" }}
          defaultValue={""}
        />
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            id="form-submit"
            type="checkbox"
          />
          <label className="form-check-label" htmlFor="agree-to-terms">
            I agree to the <a href="#">Terms of use</a> and{" "}
            <a href="#">Privacy policy</a>
          </label>
        </div>
        <button className="btn btn-lg btn-primary d-block w-100" type="submit">
          Send request
        </button>
      </form>
    </>
  );
};

export default ContactForm;
