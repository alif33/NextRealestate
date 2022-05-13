import Link from "next/link";
import Layout from "../../src/components/client/layout";

function Blog(){
    return(
        <Layout>
            <div className="container mt-5 pt-5">
            <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                   <Link href='/'>
                   <a >Home</a>
                   </Link>
                    </li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
            </nav>
            <h1 className="h2 pb-3" style={{color: 'grey'}}>15 Tips for a Better Resume</h1><img className="rounded-3" src="img/rokye-website/blog/14.jpg" alt="Image" />
            <div className="row mt-4 pt-3">
                {/* Post content*/}
                <div className="col-lg-8">
                {/* Post meta*/}
                <div className="d-flex flex-wrap border-bottom pb-3 mb-4"><a className="text-uppercase text-decoration-none border-end pe-3 me-3 mb-2" href="#">Tips &amp; Advice</a>
                    <div className="d-flex align-items-center border-end pe-3 me-3 mb-2"><i className="fi-calendar-alt opacity-70 me-2" /><span>May 19</span></div>
                    <div className="d-flex align-items-center border-end pe-3 me-3 mb-2"><i className="fi-clock opacity-70 me-2" /><span>10 min read</span></div><a className="nav-link-muted d-flex align-items-center mb-2" href="#comments" data-scroll><i className="fi-chat-circle opacity-70 me-2" /><span>3 comments</span></a>
                </div>
                <p className="fs-lg fw-bold text-dark mb-4">Feugiat eget gravida urna placerat posuere pulvinar. Id&nbsp;nibh hendrerit semper urna consequat. Mauris elit tellus risus ultricies ut&nbsp;consequat. Tempor tellus imperdiet nec velit fames pellentesque sed sed arcu. Neque quam id&nbsp;pellentesque in&nbsp;diam&nbsp;in.</p>
                <p>Purus ornare nisl est&nbsp;nec. Nunc, enim tellus pretium viverra quisque id&nbsp;in&nbsp;metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at&nbsp;ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet&nbsp;nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida&nbsp;et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et&nbsp;vivamus.</p>
                <p>Convallis massa nunc, tempus eget egestas sollicitudin mauris. Purus donec sed neque arcu, dictumst tortor nisi, odio. A&nbsp;sit lectus sem velit orci, rhoncus pharetra facilisis. Cras sodales a, dui pellentesque enim odio rutrum&nbsp;leo. Auctor viverra sit sit&nbsp;ut. Massa, elit venenatis, ultrices viverra at&nbsp;sagittis, velit. Cursus tempus phasellus consectetur suspendisse a&nbsp;blandit pellentesque diam neque. Massa est nibh congue elit amet, diam faucibus. Morbi non est semper ullamcorper quam iaculis&nbsp;at.</p>
                {/* Video*/}
                <div className="py-4 mb-2">
                    <div className="position-relative"><a className="btn btn-icon btn-light-primary text-primary rounded-circle position-absolute start-50 top-50 translate-middle zindex-5" href="https://www.youtube.com/watch?v=3iwCzT2P7vw" data-bs-toggle="lightbox" style={{width: '4.5rem', height: '4.5rem'}}><i className="fi-play-filled fs-sm" /></a><span className="position-absolute top-0 start-0 w-100 h-100 bg-dark rounded-3 opacity-40 zindex-1" /><img className="rounded-3" src="img/rokye-website/blog/15.jpg" alt="Video cover" /></div>
                </div>
                <p>Velit dignissim pharetra ut&nbsp;augue. Nunc felis neque non sagittis. Sodales eros suspendisse scelerisque varius neque elit elementum quis. Ut&nbsp;euismod id&nbsp;auctor donec consectetur massa. Sed vitae accumsan lorem pharetra dictum eget vestibulum. Non blandit viverra laoreet amet, maecenas auctor leo justo, sit. Vitae vulputate gravida est feugiat. Adipiscing tristique mauris, eu&nbsp;sit tortor. Velit in&nbsp;scelerisque sit tincidunt habitant urna&nbsp;nec. Justo, non massa metus convallis cursus lorem volutpat eu&nbsp;duis. Ipsum dolor feugiat est tristique.</p>
                <blockquote className="blockquote mb-4">
                    <p>Consequat posuere egestas elit nunc eget elementum sed proin eget. Eget at&nbsp;elementum vestibulum ut&nbsp;eget. Etiam cursus magnis diam id&nbsp;dignissim sit nulla&nbsp;sit. Arcu eu&nbsp;enim nunc rutrum. Auctor venenatis aliquam quam&nbsp;sit.</p>
                    <footer className="blockquote-footer"> Annette Black</footer>
                </blockquote>
                <p>Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut&nbsp;senectus quisque diam quis. At&nbsp;augue accumsan, in&nbsp;bibendum. A&nbsp;eget et, eget quisque egestas netus&nbsp;vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in&nbsp;vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.</p>
                <p>Velit parturient tellus tellus, congue pulvinar tellus viverra. In&nbsp;cum massa mattis&nbsp;ac. Amet vitae massa ut&nbsp;mi&nbsp;etiam. Auctor aliquam tristique felis donec eu&nbsp;sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.</p>
                {/* Tags + Sharing*/}
                <div className="pt-4 pb-5 mb-md-3">
                    <div className="d-md-flex align-items-center justify-content-between border-top pt-4">
                    <div className="d-flex align-items-center me-3 mb-3 mb-md-0">
                        <div className="d-none d-sm-block fw-bold text-nowrap mb-2 me-2 pe-1">Tags:</div>
                        <div className="d-flex flex-wrap"><a className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2" href="#">Rental homes</a><a className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2" href="#">Latest trends</a><a className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal mb-2" href="#">Tips</a></div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="fw-bold text-nowrap pe-1 mb-2">Share:</div>
                        <div className="d-flex"><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="#" data-bs-toggle="tooltip" title="Share with Facebook"><i className="fi-facebook" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="#" data-bs-toggle="tooltip" title="Share with Twitter"><i className="fi-twitter" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="#" data-bs-toggle="tooltip" title="Share with LinkedIn"><i className="fi-instagram" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm mb-2 ms-2" href="#" data-bs-toggle="tooltip" title="Share with LinkedIn"><i className="fi-youtube" /></a></div>
                    </div>
                    </div>
                </div>
                {/* Comments*/}
                <div className="mb-4 mb-md-5" id="comments">
                    <h3 className="mb-4 pb-2">3 comments</h3>
                    {/* Comment*/}
                    <div className="border-bottom pb-4 mb-4">
                    <p>Elementum ut quam tincidunt egestas vitae elit, hendrerit. Ullamcorper nulla amet lobortis elit, nibh condimentum enim. Aliquam felis nisl tellus sodales lectus dictum tristique proin vitae. Odio fermentum viverra tortor quis reprehenderit in voluptate velit.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                        <div className="ps-2">
                            <h6 className="fs-base mb-0">Daniel Adams</h6><span className="text-muted fs-sm">3 days ago</span>
                        </div>
                        </div>
                        <button className="btn btn-link btn-sm" type="button"><i className="fi-reply fs-lg me-2" /><span className="fw-normal">Reply</span></button>
                    </div>
                    {/* Reply to comment*/}
                    <div className="border-start border-4 ps-4 ms-4 mt-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                        <div className="ps-2">
                            <h6 className="fs-base mb-0">Kristin Watsons<span className="badge bg-info rounded-pill fs-xs ms-2">Author</span></h6><span className="text-muted fs-sm">2 days ago</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Comment*/}
                    <div className="pb-4">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center pe-2"><img className="rounded-circle me-1" src="img/rokye-website/Avtar.png" width={48} alt="Avatar" />
                        <div className="ps-2">
                            <h6 className="fs-base mb-0">Darrel Steward</h6><span className="text-muted fs-sm">1 week ago</span>
                        </div>
                        </div>
                        <button className="btn btn-link btn-sm" type="button"><i className="fi-reply fs-lg me-2" /><span className="fw-normal">Reply</span></button>
                    </div>
                    </div>
                </div>
                </div>
                {/* Sidebar*/}
                <aside className="col-lg-4">
                <div className="offcanvas offcanvas-end offcanvas-collapse" id="blog-sidebar">
                    <div className="offcanvas-header shadow-sm mb-2">
                    <h2 className="h5 mb-0">Sidebar</h2>
                    <button className="btn-close" type="button" data-bs-dismiss="offcanvas" />
                    </div>
                    <div className="offcanvas-body">
                    {/* Search*/}
                    <div className="position-relative pb-3 pb-lg-0 mb-4">
                        <input className="form-control" type="text" placeholder="Search..." /><i className="fi-search position-absolute top-50 end-0 translate-middle-y text-muted me-3" />
                    </div>
                    {/* Author widget*/}
                    <div className="card card-flush pb-3 pb-lg-0 mb-4">
                        <div className="card-body">
                        <div className="d-flex align-items-start"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={80} alt="Kristin Watson" />
                            <div className="ps-3">
                            <h3 className="h5 mb-2">Kristin Watson</h3>
                            <p className="fs-sm text-muted">Chief Editor at Finder</p>
                            <div className="d-flex"><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="#"><i className="fi-facebook" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="#"><i className="fi-twitter" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="#"><i className="fi-instagram" /></a><a className="btn btn-icon btn-light-primary btn-xs rounded-circle shadow-sm me-2" href="#"><i className="fi-youtube" /></a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Recent posts widget*/}
                    <div className="card card-flush pb-3 pb-lg-0 mb-4">
                        <div className="card-body">
                        <h3 className="h5">Recent Posts</h3>
                        <div className="d-flex align-items-start border-bottom border-light pb-3 mb-3"><a className="flex-shrink-0" href="#"><img className="rounded-3" src="img/rokye-website/blog/thumbs/01.jpg" width={80} alt="Image" /></a>
                            <div className="ps-3"><a className="fs-xs text-uppercase text-primary text-decoration-none" href="#">Guide</a>
                            <h4 className="fs-base pt-1 mb-2"><a className="nav-link" href="#">How to Post Resume from Your Smartphone</a></h4>
                            <div className="d-flex fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle" />May 08</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle" />4 comments</span></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-start border-bottom border-light pb-3 mb-3"><a className="flex-shrink-0" href="#"><img className="rounded-3" src="img/rokye-website/blog/thumbs/02.jpg" width={80} alt="Image" /></a>
                            <div className="ps-3"><a className="fs-xs text-uppercase text-primary text-decoration-none" href="#">Tips &amp; Advice</a>
                            <h4 className="fs-base pt-1 mb-2"><a className="nav-link" href="#">Win Your Ideal Job. Hot Tips </a></h4>
                            <div className="d-flex fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle" />Apr 27</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle" />9 comments</span></div>
                            </div>
                        </div>
                        <div className="d-flex align-items-start"><a className="flex-shrink-0" href="#"><img className="rounded-3" src="img/rokye-website/blog/thumbs/03.jpg" width={80} alt="Image" /></a>
                            <div className="ps-3"><a className="fs-xs text-uppercase text-primary text-decoration-none" href="#">Lfestyle</a>
                            <h4 className="fs-base pt-1 mb-2"><a className="nav-link" href="#">You Are Never "Done" Innovating</a></h4>
                            <div className="d-flex fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 mt-n1 me-1 align-middle" />Mar 19</span><span><i className="fi-chat-circle opacity-70 mt-n1 me-1 align-middle" />15 comments</span></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Fetured posts carousel widget*/}
                    <div className="card card-flush pb-3 pb-lg-0 mb-4">
                        <div className="card-body">
                        <h4 className="h5">Editor's Choice</h4>
                        <div className="tns-carousel-wrapper mx-n3">
                            <div className="tns-carousel-inner d-block" data-carousel-options="{&quot;nav&quot;: false, &quot;autoHeight&quot;: true, &quot;controlsContainer&quot;: &quot;#externalControls&quot;}">
                            <article className="px-3 pb-4">
                                <div className="card border-0 shadow-sm"><a className="card-img-top overflow-hidden" href="#"><img className="d-block" src="img/rokye-website/blog/12.jpg" alt="Image" /></a>
                                <div className="card-body pb-3"><a className="fs-xs text-uppercase text-decoration-none" href="#">Guides</a>
                                    <h3 className="fs-base pt-1 mb-0"><a className="nav-link" href="#">How to Win Your First Job In Tech</a></h3>
                                </div><a className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                                    <div className="ps-2">
                                    <h6 className="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                    <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />May 18</span><span><i className="fi-chat-circle opacity-70 me-1" />3 comments</span></div>
                                    </div></a>
                                </div>
                            </article>
                            <article className="px-3 pb-4">
                                <div className="card border-0 shadow-sm"><a className="card-img-top overflow-hidden" href="#"><img className="d-block" src="img/rokye-website/blog/13.jpg" alt="Image" /></a>
                                <div className="card-body pb-3"><a className="fs-xs text-uppercase text-decoration-none" href="#">Tips &amp; Advice</a>
                                    <h3 className="fs-base pt-1 mb-0"><a className="nav-link" href="#">How to Walk Around the Office</a></h3>
                                </div><a className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                                    <div className="ps-2">
                                    <h6 className="fs-sm text-nav lh-base mb-1">Kristin Watson</h6>
                                    <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />Apr 25</span><span><i className="fi-chat-circle opacity-70 me-1" />No comments</span></div>
                                    </div></a>
                                </div>
                            </article>
                            </div>
                        </div>
                        <div className="tns-carousel-controls justify-content-center mt-n2" id="externalControls">
                            <button className="me-3" type="button"><i className="fi-chevron-left fs-xs" /></button>
                            <button type="button"><i className="fi-chevron-right fs-xs" /></button>
                        </div>
                        </div>
                    </div>
                    {/* Subscription form*/}
                    <div className="card card-flush mb-4">
                        <div className="card-body">
                        <h4 className="h5 mb-3">Stay Informed</h4>
                        <p className="fs-sm mb-3">Subscribe to our newsletter and be the first to see the latest posts and tips.</p>
                        <form className="form-group">
                            <div className="input-group input-group-sm"><span className="input-group-text text-muted"><i className="fi-mail" /></span>
                            <input className="form-control" type="email" placeholder="Your email" />
                            </div>
                            <button className="btn btn-primary btn-sm" type="button">Sign up</button>
                        </form>
                        <div className="form-check pt-3">
                            <input className="form-check-input" id="form-submit" type="checkbox" />
                            <label className="form-check-label" htmlFor="agree-to-terms">I agree to the <a href="#">Terms of use</a> and <a href="#">Privacy policy</a></label>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </aside>
            </div>
            </div>
            <div className="bg-secondary py-5">
            <div className="container py-md-2 py-lg-4">
                <div className="row justify-content-center">
                <div className="col-md-10 col-xl-8">
                    <h3 className="text-center mb-4 pb-sm-2">Leave your comment</h3>
                    <form className="needs-validation row gy-md-4 gy-3 pb-sm-2" noValidate>
                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="comment-name">Name</label>
                        <input className="form-control form-control-lg" type="text" id="comment-name" placeholder="Enter your name" required />
                        <div className="invalid-feedback">Please enter your name.</div>
                    </div>
                    <div className="col-sm-6">
                        <label className="form-label" htmlFor="comment-email">Email</label>
                        <input className="form-control form-control-lg" type="email" id="comment-email" placeholder="Enter your email" required />
                        <div className="invalid-feedback">Please provide a valid email address.</div>
                    </div>
                    <div className="col-12">
                        <label className="form-label" htmlFor="comment-text">Comment</label>
                        <textarea className="form-control form-control-lg" id="comment-text" rows={4} placeholder="Type comment here" required defaultValue={""} />
                        <div className="invalid-feedback">Please type your comment.</div>
                    </div>
                    <div className="col-12 text-center pt-2">
                        <button className="btn btn-lg btn-primary" type="submit">Post comment</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </Layout>
    )
}
export default Blog;