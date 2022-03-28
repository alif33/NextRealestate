import Layout from "../src/components/client/layout";

function Blogs(){
    return(
      <Layout>
        <div className="container mt-5 mb-md-4 py-5">
        {/* Breadcrumb + Page title*/}
        <nav className="mb-3 mb-md-4 pt-md-3" aria-label="Breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="job-board-home-v1.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Blog</li>
          </ol>
        </nav>
        <h1 className="pb-3" style={{color: 'grey'}}>Real estate journey</h1>
        <div className="row">
          {/* List of articles*/}
          <div className="col-lg-8">
            <div className="border-bottom pb-2">
              <div className="row">
                {/* Item*/}
                <article className="col-sm-6 mb-4">
                  <div className="card card-hover border-0 shadow-sm h-100"><a className="card-img-top overflow-hidden position-relative" href="job-board-blog-single.html"><span className="badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3">New</span><img className="d-block" src="img/rokye-website/blog/01.jpg" alt="Image" /></a>
                    <div className="card-body pb-3"><a className="fs-xs text-uppercase text-decoration-none" href="#">Guides</a>
                      <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">How to Hire World-Class Engineers</a></h3>
                      <p className="fs-sm text-muted m-0">Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi orci, nunc dictum...</p>
                    </div><a className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                      <div className="ps-2">
                        <h6 className="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                        <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />May 23</span><span><i className="fi-chat-circle opacity-70 me-1" />4 comments</span></div>
                      </div></a>
                  </div>
                </article>
                {/* Item*/}
                <article className="col-sm-6 mb-4">
                  <div className="card card-hover border-0 shadow-sm h-100"><a className="card-img-top overflow-hidden position-relative" href="job-board-blog-single.html"><span className="badge bg-faded-info position-absolute top-0 end-0 fs-sm rounded-pill m-3">New</span><img className="d-block" src="img/rokye-website/blog/02.jpg" alt="Image" /></a>
                    <div className="card-body pb-3"><a className="fs-xs text-uppercase text-decoration-none" href="#">Tips &amp; Advice</a>
                      <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">15 Tips for a Better Resume</a></h3>
                      <p className="fs-sm text-muted m-0">Fusce tristique vitae pulvinar potenti fermentum sapien. Vehicula ut faucibus quis neque at blandit...</p>
                    </div><a className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                      <div className="ps-2">
                        <h6 className="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                        <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />May 19</span><span><i className="fi-chat-circle opacity-70 me-1" />1 comment</span></div>
                      </div></a>
                  </div>
                </article>
              </div>
            </div>
            <div className="pt-4 pb-2 mt-2">
              {/* Item*/}
              <article className="card border-0 shadow-sm card-hover card-horizontal mb-4"><a className="card-img-top" href="job-board-blog-single.html" style={{backgroundImage: 'url(img/rokye-website/06.jpg)'}} />
                <div className="card-body"><a className="fs-xs text-uppercase text-decoration-none" href="#">Inspiration</a>
                  <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">10 Ways to Stay Ahead of the Curve</a></h3>
                  <p className="fs-sm text-muted">Ac sit tincidunt lacus dignissim volutpat dui scelerisque porttitor non. Elit at ullamcorper feugiat porta adipiscing...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">Kristin Watson</h6>
                      <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />Apr 30</span><span><i className="fi-chat-circle opacity-70 me-1" />No comments</span></div>
                    </div></a>
                </div>
              </article>
              {/* Item*/}
              <article className="card border-0 shadow-sm card-hover card-horizontal mb-4"><a className="card-img-top" href="job-board-blog-single.html" style={{backgroundImage: 'url(img/rokye-website/blog/07.jpg)'}} />
                <div className="card-body"><a className="fs-xs text-uppercase text-decoration-none" href="#">Tips &amp; Advice</a>
                  <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">The Stalker’s Guide to Highly Effective Guest Posting</a></h3>
                  <p className="fs-sm text-muted">Augue diam malesuada vitae id nisl. Fringilla egestas id proin quis consequat nibh quam sed. Ac vitae lectus placerat adipiscing ac...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                      <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />Apr 27</span><span><i className="fi-chat-circle opacity-70 me-1" />9 comments</span></div>
                    </div></a>
                </div>
              </article>
              {/* Item*/}
              <article className="card border-0 shadow-sm card-hover card-horizontal mb-4"><a className="card-img-top" href="job-board-blog-single.html" style={{backgroundImage: 'url(img/rokye-website/blog/08.jpg)'}} />
                <div className="card-body"><a className="fs-xs text-uppercase text-decoration-none" href="#">Lifestyle</a>
                  <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">You Are Never "Done" Innovating</a></h3>
                  <p className="fs-sm text-muted">Nunc, hac augue ante in facilisi id. Consectetur egestas orci, arcu ac tellus. Morbi orci, nunc dictum ullamcorper id id id arcu ut...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">Ralph Edwards</h6>
                      <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />Apr 14</span><span><i className="fi-chat-circle opacity-70 me-1" />15 comments</span></div>
                    </div></a>
                </div>
              </article>
              {/* Item*/}
              <article className="card border-0 shadow-sm card-hover card-horizontal mb-4"><a className="card-img-top" href="job-board-blog-single.html" style={{backgroundImage: 'url(img/rokye-website/blog/09.jpg)'}} />
                <div className="card-body"><a className="fs-xs text-uppercase text-decoration-none" href="#">Guides</a>
                  <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">A Guide to the Most Inspiring Entrepreneurs</a></h3>
                  <p className="fs-sm text-muted">Aenean tortor sagittis bibendum amet et dui. A, tristique habitasse vestibulum mauris. Morbi elit luctus tincidunt elementum...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">Guy Hawkins</h6>
                      <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />Apr 06</span><span><i className="fi-chat-circle opacity-70 me-1" />8 comments</span></div>
                    </div></a>
                </div>
              </article>
              {/* Item*/}
              <article className="card border-0 shadow-sm card-hover card-horizontal mb-4"><a className="card-img-top" href="job-board-blog-single.html" style={{backgroundImage: 'url(img/rokye-website/blog/10.jpg)'}} />
                <div className="card-body"><a className="fs-xs text-uppercase text-decoration-none" href="#">Entertainment</a>
                  <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">5 Predictions From the Past About the Future</a></h3>
                  <p className="fs-sm text-muted">Venenatis neque ac in fusce. Enim id id in commodo et suscipit ipsum non. Consectetur risus adipiscing viverra ornare parturient...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                      <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />Mar 27</span><span><i className="fi-chat-circle opacity-70 me-1" />5 comments</span></div>
                    </div></a>
                </div>
              </article>
              {/* Item*/}
              <article className="card border-0 shadow-sm card-hover card-horizontal mb-4"><a className="card-img-top" href="job-board-blog-single.html" style={{backgroundImage: 'url(img/rokye-website/blog/11.jpg)'}} />
                <div className="card-body"><a className="fs-xs text-uppercase text-decoration-none" href="#">Tips &amp; Advice</a>
                  <h3 className="fs-base pt-1 mb-2"><a className="nav-link" href="job-board-blog-single.html">How to Walk Around the Office</a></h3>
                  <p className="fs-sm text-muted">Donec nullam eget lectus at varius in nisl. Ut feugiat tincidunt ultrices in sit. Nunc, vitae lorem scelerisque justo, posuere leo ac turpis...</p><a className="d-flex align-items-center text-decoration-none" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                    <div className="ps-2">
                      <h6 className="fs-sm text-nav lh-base mb-1">Bessie Cooper</h6>
                      <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />Mar 16</span><span><i className="fi-chat-circle opacity-70 me-1" />3 comments</span></div>
                    </div></a>
                </div>
              </article>
            </div>
            {/* Pagination*/}
            <nav className="pt-4 pb-2 border-top" aria-label="Blog pagination">
              <ul className="pagination mb-0">
                <li className="page-item d-sm-none"><span className="page-link page-link-static">1 / 8</span></li>
                <li className="page-item active d-none d-sm-block" aria-current="page"><span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">2</a></li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
                <li className="page-item d-none d-sm-block">...</li>
                <li className="page-item d-none d-sm-block"><a className="page-link" href="#">8</a></li>
                <li className="page-item"><a className="page-link" href="#" aria-label="Next"><i className="fi-chevron-right" /></a></li>
              </ul>
            </nav>
          </div>
          {/* Sidebar*/}
          <aside className="col-lg-4">
            <div className="offcanvas offcanvas-end offcanvas-collapse" id="blog-sidebar">
              <div className="offcanvas-header shadow-sm mb-2">
                <h2 className="h5 mb-0">Sidebar</h2>
                <button className="btn-close" type="button" data-bs-dismiss="offcanvas" />
              </div>
              <div className="offcanvas-body">
                {/* Sort*/}
                <div className="d-flex align-items-center mb-4">
                  <label className="me-2 mb-0 text-nowrap" htmlFor="sortby"><i className="fi-arrows-sort mt-n1 me-2 align-middle opacity-70" />Sort by:</label>
                  <select className="form-select" id="sortby">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Popular</option>
                  </select>
                </div>
                {/* Search*/}
                <div className="position-relative pb-2 pb-lg-0 mb-4">
                  <input className="form-control pe-5" type="text" placeholder="Search..." /><i className="fi-search text-muted position-absolute top-50 end-0 translate-middle-y me-3" />
                </div>
                {/* Categories*/}
                <div className="card card-flush pb-2 pb-lg-0 mb-4">
                  <div className="card-body">
                    <h3 className="h5">Categories</h3><a className="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="#">Housing Trends<span className="text-muted ms-2">(2)</span></a><a className="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="#">Relocation Information<span className="text-muted ms-2">(4)</span></a><a className="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="#">Home Maintenance<span className="text-muted ms-2">(5)</span></a><a className="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="#">Home Decor<span className="text-muted ms-2">(1)</span></a><a className="nav-link fw-normal d-flex justify-content-between py-1 px-0" href="#">Rent or Buy<span className="text-muted ms-2">(8)</span></a>
                  </div>
                </div>
                {/* Tags*/}
                <div className="card card-flush pb-2 pb-lg-0 mb-4">
                  <div className="card-body">
                    <h4 className="h5">Popular Tags</h4>
                    <div className="d-flex flex-wrap mb-n1">
                      <button className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">Home</button>
                      <button className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">Forrent</button>
                      <button className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">Dreamhome</button>
                      <button className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">Househunting</button>
                      <button className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">Realestate</button>
                      <button className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">Tips</button>
                      <button className="btn btn-xs btn-outline-secondary rounded-pill fs-sm fw-normal me-2 mb-2">Trends</button>
                    </div>
                  </div>
                </div>
                {/* Fetured posts (carousel)*/}
                <div className="card card-flush pb-3 pb-lg-0 mb-4">
                  <div className="card-body">
                    <h4 className="h5">Editor's Choice</h4>
                    <div className="tns-carousel-wrapper mx-n3">
                      <div className="tns-carousel-inner d-block" data-carousel-options="{&quot;nav&quot;: false, &quot;autoHeight&quot;: true, &quot;controlsContainer&quot;: &quot;#externalControls&quot;}">
                        <article className="px-3 pb-4">
                          <div className="card border-0 shadow-sm"><a className="card-img-top overflow-hidden" href="job-board-blog-single.html"><img className="d-block" src="img/rokye-website/blog/12.jpg" alt="Image" /></a>
                            <div className="card-body pb-3"><a className="fs-xs text-uppercase text-decoration-none" href="#">Guides</a>
                              <h3 className="fs-base pt-1 mb-0"><a className="nav-link" href="job-board-blog-single.html">How to Win Your First Job In Tech</a></h3>
                            </div><a className="card-footer d-flex align-items-center text-decoration-none border-top-0 pt-0 mb-1" href="#"><img className="rounded-circle" src="img/rokye-website/Avtar.png" width={44} alt="Avatar" />
                              <div className="ps-2">
                                <h6 className="fs-sm text-nav lh-base mb-1">Annette Black</h6>
                                <div className="d-flex text-body fs-xs"><span className="me-2 pe-1"><i className="fi-calendar-alt opacity-70 me-1" />May 18</span><span><i className="fi-chat-circle opacity-70 me-1" />3 comments</span></div>
                              </div></a>
                          </div>
                        </article>
                        <article className="px-3 pb-4">
                          <div className="card border-0 shadow-sm"><a className="card-img-top overflow-hidden" href="job-board-blog-single.html"><img className="d-block" src="img/rokye-website/blog/13.jpg" alt="Image" /></a>
                            <div className="card-body pb-3"><a className="fs-xs text-uppercase text-decoration-none" href="#">Tips &amp; Advice</a>
                              <h3 className="fs-base pt-1 mb-0"><a className="nav-link" href="job-board-blog-single.html">How to Walk Around the Office</a></h3>
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
      </Layout>
    )
}
export default Blogs;