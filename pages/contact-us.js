import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../src/components/client/layout';
import { showErr } from '../__lib__/helpers/ErrHandler';
import { postData } from '../__lib__/helpers/HttpService';
import toast from 'react-hot-toast';

function Contact(){
  const [ disable, setDisable ] = useState(false);
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const onError = err => showErr(err);
  
  const onSubmit = data => {
      setDisable(true)
      postData('/contact', data, setDisable)
      .then(res=>{
          if(res?.success)
          {  
              toast.success(`${res.message}`);
              reset();
          }
      })
  }
 
  return(
      <Layout>
      <section className="container my-5 pt-lg-5 pt-4 pb-lg-5">
        {/* Breadcrumbs*/}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-3 mb-4">
            <li className="breadcrumb-item"><a href="city-guide-home-v1.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Contact us</li>
          </ol>
        </nav>
        <div className="row gy-4">
          <div className="col-md-6"><img className="rounded-3" src="img/rokye-website/contactus.jpg" alt="Cover" /></div>
          <div className="col-xl-5 offset-xl-1 col-md-6">
            <h1 className="text-primary mb-md-4 mb-3">Contact us</h1>
            <p className="mb-4 pb-md-2 fs-lg">Fill out the form and we will get back to you within 24 hours.</p>
            {/* Contact form*/}
            <form 
              className="needs-validation row row-cols-sm-2 row-cols-1 gy-sm-4 gy-3"
              onSubmit={handleSubmit(onSubmit, onError)} 
            >
              <div className="col">
                <label className="form-label" htmlFor="c-name">Full Name*</label>
                <input 
                  {...register("name",
                    {
                        required: 'Name is required.'
                    }
                  )}
                  className="form-control form-control-lg" 
                  id="c-name" 
                  type="text" 
                />
                <div className="invalid-tooltip mt-1">Please, enter your name</div>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="c-phone">Phone*</label>
                <input
                  {...register("phone",
                    {
                        required: 'Phone number is required.'
                    }
                  )} 
                  className="form-control form-control-lg" 
                  id="c-phone" 
                  type="tel"
                />
                <div className="invalid-tooltip mt-1">Please, enter your phone</div>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="c-email">Email*</label>
                <input
                  {...register("email",
                    {
                        required: 'Email is required.'
                    }
                  )}  
                  className="form-control form-control-lg" 
                  id="c-email" 
                  type="email"
                />
                <div className="invalid-tooltip mt-1">Please, enter your email</div>
              </div>
              <div className="col">
                <label className="form-label" htmlFor="c-subject">I am*</label>
                <select className="form-select form-select-lg" id="c-subject" required>
                  <option value selected disabled>Choose</option>
                  <option value="Subject 1">Owner</option>
                  <option value="Subject 2">Tenant</option>
                </select>
              </div>
              <div className="col-12 w-100">
                <label className="form-label" htmlFor="c-message">Message</label>
                <textarea
                  {...register("message",
                    {
                        required: 'Message is required.'
                    }
                  )} 
                  className="form-control form-control-lg" 
                  id="c-message" rows={4} 
                  placeholder="Leave your message"
                />
                <div className="invalid-tooltip mt-1">Please, leave your message</div>
              </div>
              <div className="form-check w-100" style={{marginLeft: '15px'}}>
                <input 
                  className="form-check-input" 
                  id="form-submit" 
                  type="checkbox" 
                />
                <label className="form-check-label" htmlFor="agree-to-terms">I agree to the <a href="#">Terms of use</a> and <a href="#">Privacy policy</a></label>
              </div>
              <div className="col-12 w-100">
                <button 
                  disabled={disable} 
                  className="btn btn-lg btn-primary w-sm-auto w-100" 
                  type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Contact cards*/}
      <section className="container pb-5 mb-lg-5">
        <div className="row g-4">
          <div className="col-md-4"><a className="icon-box card card-body border-0 shadow-sm card-hover h-100 text-center" href="mailto:example@email.com">
              <div className="icon-box-media bg-faded-warning text-warning rounded-circle mx-auto mb-3"><i className="fi-mail" /></div><span className="d-block mb-1 text-body">Drop us an email</span>
              <h3 className="h4 icon-box-title mb-0 opacity-90">sales@rokye.com</h3></a></div>
          <div className="col-md-4"><a className="icon-box card card-body border-0 shadow-sm card-hover h-100 text-center" href="https://twitter.com/rokyerealty">
              <div className="icon-box-media bg-faded-warning text-warning rounded-circle mx-auto mb-3"><i className="fi-twitter" /></div><span className="d-block mb-1 text-body">Follow us</span>
              <h3 className="h4 icon-box-title mb-0 opacity-90">@rokyerealty</h3></a></div>
          <div className="col-md-4"><a className="icon-box card card-body border-0 shadow-sm card-hover h-100 text-center" href="https://www.instagram.com/rokyerealty/">
              <div className="icon-box-media bg-faded-warning text-warning rounded-circle mx-auto mb-3"><i className="fi-instagram" /></div><span className="d-block mb-1 text-body">Follow us</span>
              <h3 className="h4 icon-box-title mb-0 opacity-90">@rokyerealty</h3></a></div>
        </div>
      </section>
    </Layout>
  )
}
export default Contact;
