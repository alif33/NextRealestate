import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter()
  return (
    <footer className="footer bg-dark pt-2">
      <div className="border-bottom border-light py-4">
        <div className="container d-sm-flex align-items-center justify-content-between">
          <img
            src="img/rokye-website/logowhitetransparent.png"
            width={140}
            alt="logo"
          />
          <div className="d-flex pt-3 pt-sm-0"></div>
        </div>
      </div>
      <div className="container pt-4 pb-3 pt-lg-5 pb-lg-4">
        <div className="row pt-2 pt-lg-0">
          <div className="col-lg-3 pb-2 mb-4">
            <h3 className="h5 text-light mb-2">New way of renting a home</h3>
            <p className="fs-sm text-light opacity-70">
              Don’t miss any relevant offers!
            </p>
            <button onClick={() => router.push('/contact-us')} className="btn btn-primary w-80" type="submit">
              Contact us
            </button>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 offset-xl-1 mb-2 mb-sm-4">
            <h3 className="fs-base text-light">Rental options</h3>
            <ul className="list-unstyled fs-sm">
              <li>
                <a className="nav-link-light" href="#">
                  Our Plans
                </a>
              </li>
              <li>
                <a className="nav-link-light" href="#">
                  Refer &amp; Earn
                </a>
              </li>
              <li>
                <a className="nav-link-light" href="#">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-2 mb-sm-4">
            <h3 className="fs-base text-light">About</h3>
            <ul className="list-unstyled fs-sm">
              <li>
                <Link href='/contact-us'>
                <a className="nav-link-light" >
                  Contact Us
                </a>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                <a className="nav-link-light" >
                  About Us
                </a>
                </Link>
              </li>
              <li>
              <Link  href="/faqs">
              <a className="nav-link-light">
                  FAQs
                </a>
              </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-2 mb-sm-4">
            <h3 className="fs-base text-light">Profile</h3>
            <ul className="list-unstyled fs-sm">
              <li>
                <a className="nav-link-light" href="#">
                  My account
                </a>
              </li>
              <li>
                <a className="nav-link-light" href="#">
                  My listings
                </a>
              </li>
              <li>
                <a className="nav-link-light" href="#">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="col-xl-2 col-lg-3 col-sm-6 col-md-3 mb-2 mb-sm-4"><a className="d-flex align-items-center text-decoration-none mb-2" < a /><a className="d-flex align-items-center text-decoration-none mb-2" href="mailto:example@email.com"><i className="fi-mail me-2" /><span className="text-light">sales@rokye.com</span></a>
            <div className="d-flex flex-wrap pt-4"><a className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2" href="#"><i className="fi-facebook" /></a><a className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2" href="#"><i className="fi-twitter" /></a><a className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2 me-2" href="#"><i className="fi-instagram" /></a><a className="btn btn-icon btn-translucent-light btn-xs rounded-circle mb-2" href="#"><i className="fi-youtube" /></a></div>
          </div> */}
        </div>
      </div>
      <div className="container d-lg-flex align-items-center justify-content-between fs-sm pb-3">
        <div className="d-flex flex-wrap justify-content-center order-lg-2 mb-3">
          <a className="nav-link nav-link-light fw-normal" href="#">
            Terms of use
          </a>
          <a className="nav-link nav-link-light fw-normal" href="#">
            Privacy policy
          </a>
          <a className="nav-link nav-link-light fw-normal" href="#">
            Blog
          </a>
        </div>
        <p className="text-center text-lg-start order-lg-1 mb-lg-0">
          <span className="text-light opacity-50">
            © All rights reserved @ 2022{" "}
          </span>
          <Link href="http://www.rokye.com">
            <a
              className="nav-link-light fw-bold"
              target="_blank"
              rel="noopener"
            >
              {" "}
              Rokye Realty LLP
            </a>
          </Link>
        </p>
      </div>
    </footer>

    // <footer className={styles.footer__main}>
    //   <div className="container">
    //     <div className="row align-items-center justify-content-center">
    //       <div className="col-12 col-md-7">
    //         <div className={`${styles.footer__info} text-center`}>
    //           <div className={styles.footer__logo}>

    //             <Link href="/">

    //               <a className={styles.header__logo_link}>
    //                 <img className="w-75" src="/images/Scouted.png" alt="scouted" />
    //               </a>
    //             </Link>
    //           </div>

    //           <nav className={styles.footer__menu}>
    //             <ul className='d-flex flex-wrap gap-2'>
    //               <li>
    //                 <Link href="/about-us">
    //                   <a>our team</a>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="/terms">
    //                   <a>terms of use</a>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="/privacy-policy">
    //                   <a>privacy policy</a>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="/for-referrers">
    //                   <a>for referrers</a>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="https://thecareerbuddy.com/employers/" >
    //                   <a target="_blank">for employers</a>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="/pricing">
    //                   <a>pricing</a>
    //                 </Link>
    //               </li>
    //               <li>
    //                 <Link href="/contact-us">
    //                   <a>contact us</a>
    //                 </Link>
    //               </li>
    //             </ul>
    //           </nav>
    //           <div className={styles.footer__social}>

    //             <Link href="https://www.facebook.com/careerbuddyafrica">
    //               <a className={styles.footer__social_item}>
    //                 <i className="fab fa-facebook-f"></i>
    //               </a>
    //             </Link>

    //             <Link href="https://twitter.com/careerbuddyhq">
    //               <a className={styles.footer__social_item}>
    //                 <i className="fab fa-twitter"></i>
    //               </a>
    //             </Link>

    //             <Link href="https://www.instagram.com/careerbuddyhq/">
    //               <a className={styles.footer__social_item}>
    //                 <i className="fab fa-instagram"></i>
    //               </a>
    //             </Link>

    //             <Link href="https://www.linkedin.com/company/thecareerbuddy/?viewAsMember=true">
    //               <a className={styles.footer__social_item}>
    //                 <i className="fab fa-linkedin-in"></i>
    //               </a>
    //             </Link>

    //             {/* <div className={styles.footer__social_item}>
    //               <Link href="/">
    //                 <a>
    //                   <i className="fab fa-google-plus-g"></i>
    //                 </a>
    //               </Link>
    //             </div> */}
    //           </div>
    //           <p className={styles.footer__copyright}>

    //             Copyright &copy; {new Date().getFullYear()} Scouted Ltd. All rights reserved.

    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
