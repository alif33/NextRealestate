import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { LogOut } from "react-feather";
import toast from "react-hot-toast";
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from "universal-cookie";
import { userLogout } from "../../../store/users/actions";

const Header = () => {
  const cookies = new Cookies();
  // const [start, setStart] = useState(false)
  // const [status, setStatus] = useState(false)
  // const [smallDevice, setSmallDevice] = useState(false)
  const router = useRouter();
  // const { users } = useSelector(state => state)
  const dispatch = useDispatch()

  // const handleDashboard = () => {
  //   if (!users?.token)
  //     router.push('/login')
  // }

  const handleLogOut = () => {
    cookies.remove('_info', { path: '/' });
    if (!cookies.get('_info')) {
      toast.success('Logout success')
      router.push(router.pathname)
    }
    dispatch(userLogout())
  }

  const userInfo = cookies.get("_info");
  return (
    <header
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      data-scroll-header
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand me-3 me-xl-4">
            <img
              className="d-block"
              src="/img/rokye-website/logotransparent.png"
              width={116}
              alt="Finder"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {userInfo?.token ? (
          <a
          onClick={() => handleLogOut()}
            className="nav-link text-primary ms-2 order-lg-3"
            role="button"
            aria-expanded="false"
          ><LogOut size={18}/> Sign out</a>
        ) : (
          <Link href="/signin">
            <a
              className="nav-link text-primary ms-2 order-lg-3"
              role="button"
              aria-expanded="false"
            >
              <i className="fi-user me-2" />
              Sign in
            </a>
          </Link>
        )}
        <Link href="/refer-earn">
          <a className="btn btn-primary btn-sm ms-2 order-lg-3">
            ₹ Refer &amp; Earn
          </a>
        </Link>
        <Link href="/add-property">
          <a
            className="btn btn-primary btn-sm ms-2 order-lg-3"
            href="job-board-post-resume-1.html"
          >
            <i className="fi-plus me-2" />
            Add Property
          </a>
        </Link>
        <div className="collapse navbar-collapse order-lg-2" id="navbarNav">
          <ul
            className="navbar-nav navbar-nav-scroll"
            style={{ maxHeight: "35rem" }}
          >
            {/* Menu items*/}
            <li className="nav-item dropdown active">
              <Link href="/">
                <a className="nav-link" role="button" aria-expanded="false">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Our Plans
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </a>
              <ul className="dropdown-menu dropdown-menu-light">
                <li>
                  <Link href="/contact-us">
                    <a className="dropdown-item">Contact us</a>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="job-board-single.html">
                    About us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="job-board-single.html">
                    Reviews
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul className="dropdown-menu dropdown-menu-light">
                <li>
                  <Link href="/dashboard">
                    <a className="dropdown-item">My account</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard">
                    <a className="dropdown-item">My listings</a>
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard">
                    <a className="dropdown-item">Wishlist</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                FAQs
              </a>
              <ul className="dropdown-menu dropdown-menu-light">
                <li>
                  <a className="dropdown-item" >
                    FAQs
                  </a>
                </li>
                <li>
                  <Link href='/blogs'>
                  <a className="dropdown-item" >
                    Blogs
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
