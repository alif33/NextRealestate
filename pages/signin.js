import Layout from "../src/components/client/layout";

export default function Loginpage() {
    return (
        <Layout>
             <div className="container mt-5 mb-md-4 py-5">
                <nav className="mb-4 pt-md-3" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="city-guide-home-v1.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Sign in</li>
                    </ol>
                </nav>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="signin" role="tabpanel">
                        <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-4 pt-2">
                        </div>
                        <div className="row mx-0 align-items-center">
                            <div className="col-md-5 border-end-md p-4 p-sm-5" style={{marginLeft: '120px'}}>
                                <h2 className="h3 mb-4 mb-sm-5">Hey there!<br />Welcome back.</h2><img className="d-block mx-auto" src="img/rokye-website/signin.svg" width={344} alt="Illustartion" />
                                <div className="mt-4 mt-sm-5">Don't have an account? <a href="#signup" data-bs-toggle="tab" data-bs-dismiss="tab">Sign up</a></div>
                            </div>
                            <div className="col-md-5 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5">
                                <h3 className="h3 mb-4 text-primary">Sign in</h3>
                                <form className="needs-validation" noValidate>
                                <div className="mb-4">
                                    <label className="form-label mb-2" htmlFor="signin-email">Email address</label>
                                    <input className="form-control" type="email" id="signin-email" placeholder="Enter email" required />
                                </div>
                                <div className="mb-4">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                    <label className="form-label mb-0" htmlFor="signin-password">Password</label><a className="fs-sm" href="#">Forgot password?</a>
                                    </div>
                                    <div className="password-toggle">
                                    <input className="form-control" type="password" id="signin-password" placeholder="Enter password" required />
                                    <label className="password-toggle-btn" aria-label="Show/hide password">
                                        <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator" />
                                    </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-lg w-100" type="submit">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
