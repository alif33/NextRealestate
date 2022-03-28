import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Layout from '../src/components/client/layout';
import { showErr } from '../__lib__/helpers/ErrHandler';
import { postData } from '../__lib__/helpers/HttpService';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

export default function SignUp(){
    const [ disable, setDisable ] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onError = err => showErr(err);
    const router = useRouter();

    const onSubmit = data => {
        setDisable(true)
        postData('/users/register', data, setDisable)
        .then(res=>{
            if(res?.success)
            {  
                toast.success(`${res.message}`);
                reset();
                router.push({
                    pathname: '/signin'
                })
            }
        })
    }

    return (
        <Layout>
            <div className="container mt-5 mb-md-4 py-5">
                <nav className="mb-4 pt-md-3" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="city-guide-home-v1.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sign up</li>
                    </ol>
                </nav>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="signin" role="tabpanel">
                        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                        </div>
                        <div className="row mx-0 align-items-center">
                        <div className="col-md-5 border-end-md p-4 p-sm-5" style={{marginLeft: '120px'}}>
                            <h2 className="h3 mb-4 mb-sm-5">Welcome to<br />No Brokerage property site!</h2>
                            <ul className="list-unstyled mb-4 mb-sm-5">
                            <li className="d-flex mb-2"><i className="fi-check-circle text-primary mt-1 me-2" /><span>No Brokerage</span></li>
                            <li className="d-flex mb-2"><i className="fi-check-circle text-primary mt-1 me-2" /><span>No Advance Payment</span></li>
                            <li className="d-flex mb-0"><i className="fi-check-circle text-primary mt-1 me-2" /><span>All listings physically verified</span></li>
                            </ul><img className="d-block mx-auto" src="img/signin-modal/signup.svg" width={344} alt="Illustartion" />
                            <div className="mt-4 mt-sm-5">Already have an account? <Link href="/signup"><a>Sign in</a></Link></div>
                        </div>
                        <div className="col-md-5 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                            <h3 className="h3 mb-4 text-primary">Sign up</h3>
                            <form 
                                className="needs-validation"
                                onSubmit={handleSubmit(onSubmit, onError)}  
                            >
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="pr-study-field">I am<span className="text-danger" /></label>
                                    <select className="form-select form-select-lg" id="pr-education-level" required>
                                    <option value disabled selected>Choose</option>
                                    <option value="Associate Degree">Owner</option>
                                    <option value="Associate Degree">Tenant </option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="signup-name">Full name</label>
                                    <input
                                        {...register("name",
                                            {
                                                required: 'Name is required.'
                                            }
                                        )} 
                                        className="form-control" 
                                        type="text" 
                                        id="signup-name" 
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="signup-name">Phone number</label>
                                    <input
                                        {...register("phone",
                                            {
                                                required: 'Phone number is required.'
                                            }
                                        )}  
                                        className="form-control" 
                                        type="tel" 
                                        id="signup-email" 
                                        placeholder="Enter phone"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="signup-name">Email</label>
                                    <input
                                        {...register("email",
                                            {
                                                required: 'Email is required.'
                                            }
                                        )}   
                                        className="form-control" 
                                        type="email" 
                                        id="signup-email" 
                                        placeholder="Enter email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="signup-name">Password</label>
                                    <div className="password-toggle">
                                    <input
                                        {...register("password",
                                            {
                                                required: 'Password is required.'
                                            }
                                        )}  
                                        className="form-control" 
                                        type="password" 
                                        id="signup-password" 
                                        placeholder="Enter password"
                                    />
                                    <label className="password-toggle-btn" aria-label="Show/hide password">
                                        <input 
                                            className="password-toggle-check" 
                                            type="checkbox" 
                                        /><span className="password-toggle-indicator" />
                                    </label>
                                    </div>
                                </div>
                                <div className="form-check mb-4">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id="agree-to-terms"
                                    />
                                    <label className="form-check-label" htmlFor="agree-to-terms">I agree to the <a href="#">Terms of use</a> and <a href="#">Privacy policy</a></label>
                                </div>
                                <button
                                    disabled={disable} 
                                    className="btn btn-primary btn-lg w-100" 
                                    type="submit">Sign up</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
