import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../src/components/client/layout";
import { showErr } from "../__lib__/helpers/ErrHandler";
import { postData } from "../__lib__/helpers/HttpService";
import toast from "react-hot-toast";

const Refers = () => {
  const [disable, setDisable] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setDisable(true);
    postData("/refer", data, setDisable).then((res) => {
      if (res?.success) {
        setDisable(false);
        toast.success(`${res.message}`);
        reset();
      }
    });
  };
  console.log(errors);
  return (
    <Layout>
      <div>
        <section className="container my-5 pt-lg-5 pt-4 pb-lg-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb pt-3 mb-4">
              <li className="breadcrumb-item">
                <a href="city-guide-home-v1.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Refer &amp; Earn
              </li>
            </ol>
          </nav>
          <div className="row gy-4 overflow-hidden">
            <div className="col-md-6">
              <img
                className="rounded-3"
                src="img/rokye-website/refer.png"
                alt="Cover"
              />
            </div>
            <div className="col-xl-5 offset-xl-1 col-md-6">
              <h1 className="text-primary mb-md-4 mb-3">
                Refer &amp; Earn ₹250
              </h1>
              <p className="mb-4 pb-md-2 fs-lg">
                Earn in your UPI once your referral use our services.
              </p>
              <form
                className="needs-validation row row-cols-sm-2 row-cols-1 gy-sm-4 gy-3"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col">
                  <label className="form-label" htmlFor="c-name">
                    Your name<span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("_name", {
                      required: "Your name is required.",
                    })}
                    className="form-control form-control-lg"
                    id="c-name"
                    type="text"
                    placeholder="Enter name"
                  />
                  {errors._name && (
                    <span className="text-danger">{errors._name.message}</span>
                  )}
                  <div className="invalid-tooltip mt-1">
                    Please, enter your name
                  </div>
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="c-phone">
                    Your phone<span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("_phone", {
                      required: "Phone is required.",
                    })}
                    className="form-control form-control-lg"
                    id="c-phone"
                    type="number"
                    placeholder="XXXXXX"
                  />
                  {errors._phone && (
                    <span className="text-danger">{errors._phone.message}</span>
                  )}
                  <div className="invalid-tooltip mt-1">
                    Please, enter your phone
                  </div>
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="r-name">
                    Referral name<span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("name_", {
                      required: "Referral name is required.",
                    })}
                    className="form-control form-control-lg"
                    id="r-name"
                    type="text"
                    placeholder="Enter referral name"
                  />
                  {errors.name_ && (
                    <span className="text-danger">{errors.name_.message}</span>
                  )}
                  <div className="invalid-tooltip mt-1">
                    Please, enter your name
                  </div>
                </div>
                <div className="col">
                  <label className="form-label" htmlFor="r-phone">
                    Referral phone
                  </label>
                  <span className="text-danger">*</span>
                  <input
                    {...register("phone_", {
                      required: "Referral phone is required.",
                    })}
                    className="form-control form-control-lg"
                    id="r-phone"
                    type="tel"
                    placeholder="XXXXXX"
                  />
                  {errors.phone_ && (
                    <span className="text-danger">{errors.phone_.message}</span>
                  )}
                  <div className="invalid-tooltip mt-1">
                    Please, enter your phone
                  </div>
                </div>
                <div className="col-12 w-100">
                  <label className="form-label" htmlFor="c-message">
                    Message<span className="text-danger">*</span>
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required.",
                    })}
                    className="form-control form-control-lg"
                    id="c-message"
                    rows={4}
                    placeholder="Leave your message"
                    defaultValue={""}
                  />
                  {errors.message && (
                    <span className="text-danger">
                      {errors.message.message}
                    </span>
                  )}
                  <div className="invalid-tooltip mt-1">
                    Please, leave your message
                  </div>
                </div>
                <div
                  className="form-check w-100"
                  style={{ marginLeft: "15px" }}
                >
                  <input
                    {...register("isAgree", {
                      required: true,
                    })}
                    className={`form-check-input ${
                      errors.isAgree ? "border-danger" : ""
                    }`}
                    id="form-submit"
                    type="checkbox"
                  />
                  <label className="form-check-label" htmlFor="agree-to-terms">
                    I agree to the <a href="#">Terms of use</a> and{" "}
                    <a href="#">Privacy policy</a>
                  </label>
                </div>
                <div className="col-12 w-100">
                  <button
                    className="btn btn-lg btn-primary w-sm-auto w-100"
                    type="submit"
                  >
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="container mb-5 pb-2 pb-lg-5">
          <h2 className="h3 mb-4 pb-sm-2">How it works</h2>
          <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-sm-5 gy-3">
            <div className="col">
              <div className="card border-0 shadow-sm position-relative h-100">
                <div className="card-body">
                  <div className="h2 mb-2 text-primary">01</div>
                  <h3 className="h5 card-title mb-2">Refer Owners/Tenants</h3>
                  <p className="card-text fs-sm">
                    Refer anyone who are owners or Tenants for residential
                    property to us.
                  </p>
                </div>
                <svg
                  className="position-absolute top-0 end-0 mt-n2 d-sm-block d-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={78}
                  height={30}
                  fill="none"
                  style={{ transform: "translateY(-100%) translateX(70%)" }}
                >
                  <path
                    d="M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062"
                    fill="#fd5631"
                  />
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm position-relative h-100">
                <div className="card-body">
                  <div className="h2 mb-2 text-primary">02</div>
                  <h3 className="h5 card-title mb-2">We contact them</h3>
                  <p className="card-text fs-sm">
                    Our relationship manager will contact them and verify their
                    details.
                  </p>
                </div>
                <svg
                  className="position-absolute top-0 end-0 mt-n2 d-lg-block d-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={78}
                  height={30}
                  fill="none"
                  style={{ transform: "translateY(-100%) translateX(70%)" }}
                >
                  <path
                    d="M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062"
                    fill="#fd5631"
                  />
                </svg>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 shadow-sm position-relative h-100">
                <div className="card-body">
                  <div className="h2 mb-2 text-primary">03</div>
                  <h3 className="h5 card-title mb-2">They took subscription</h3>
                  <p className="card-text fs-sm">
                    We will immediately start helping them to rent out
                    residential property.
                  </p>
                </div>
                {/* Arrow*/}
                <svg
                  className="position-absolute top-0 end-0 mt-n2 d-sm-block d-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={78}
                  height={30}
                  fill="none"
                  style={{ transform: "translateY(-100%) translateX(70%)" }}
                >
                  <path
                    d="M77.955 14.396c.128-2.86 0-4.67-.576-4.745s-1.279 1.607-2.11 4.378l-1.279 4.897-.563 2.683c-.612-1.434-1.352-2.81-2.212-4.113-2.718-4.072-6.226-7.569-10.321-10.288C54.205 2.687 46.332.186 38.233.008c-8.823-.165-17.491 2.305-24.874 7.087C6.581 11.549 2.118 17.395.66 22.191.033 24.057-.15 26.04.123 27.987c.243 1.367.627 2.037.755 2.012.396 0-.396-3.025 1.522-7.264s6.394-9.339 12.789-13.123c6.905-4.018 14.838-5.974 22.841-5.631 3.811.182 7.574.924 11.164 2.202 7.323 2.623 13.717 7.296 18.403 13.452 1.061 1.417 1.816 2.531 2.404 3.417l-1.637-.278-5.295-1.012c-3.031-.569-4.988-.848-5.179-.392s1.419 1.544 4.335 2.759a47.66 47.66 0 0 0 5.269 1.772c1.023.278 2.097.544 3.21.772.588.127 1.1.228 1.765.342.541.152 1.109.184 1.663.094a3.86 3.86 0 0 0 1.547-.613 2.76 2.76 0 0 0 .934-1.265c.088-.252.156-.51.205-.772l.09-.595.23-1.544.384-2.949c.217-1.873.371-3.569.435-5.062"
                    fill="#fd5631"
                  />
                </svg>
              </div>
            </div>
            {/* Card item*/}
            <div className="col">
              <div className="card border-0 shadow-sm position-relative h-100">
                <div className="card-body">
                  <div className="h2 mb-2 text-primary">04</div>
                  <h3 className="h5 card-title mb-2">You get paid</h3>
                  <p className="card-text fs-sm">
                    Once they successfully use our services, you will get paid
                    ₹250 by UPI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <img
            className="rounded-3"
            src="img/rokye-website/faq.jpg"
            alt="Cover"
          />
          <div
            className="col-md-10 mx-md-auto mx-3 mt-sm-0 mt-5 py-sm-5 py-4 px-0 rounded-3 bg-light shadow-sm"
            style={{ transform: "translateY(-100px)" }}
          >
            <div className="col-md-10 mx-md-auto mx-3 py-lg-4 px-0">
              <h2 className="h3 mb-4 pb-lg-2 text-center">
                Frequently asked questions
              </h2>
              <div className="accordion" id="accordionFAQ">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      Why my referrel's listing got rejected?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading-1"
                    data-bs-parent="#accordionFAQ"
                    id="collapse-1"
                  >
                    <div className="accordion-body">
                      We deal in residential properties those are for rent only
                      but if you have referred us any commercial property or
                      residential property for sale, it should be rejected.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      Why didn't I recive money for my referral?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordionFAQ"
                    id="collapse-2"
                  >
                    <div className="accordion-body">
                      We offer referral bonus to you once your referral take our
                      services successfully, if they have not used our services,
                      you are not liable to receive referral bonus.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      How will I get referral bonus?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordionFAQ"
                    id="collapse-3"
                  >
                    <div className="accordion-body">
                      By UPI on your phone number provided to us by you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Refers;
