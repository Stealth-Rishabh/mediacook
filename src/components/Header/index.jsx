import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import IconBoxStyle11 from "../IconBox/IconBoxStyle11";
import Spacing from "../Spacing";

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Contact Strip */}
      <div className="contact-strip">
        <div className="container" style={{ textAlign: "center" }}>
          <div>
            <img
              style={{ width: "30px", marginRight: "8px" }}
              src="/images/contact/icon_1.svg"
              alt="Call us"
            />
            <a href="tel:+918700181135" style={{ textDecoration: "none" }}>
              +91-8700181135
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${variant} ${isSticky ? "cs_active_sticky" : ""}`}
      >
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" />
                </Link>
                <nav className="cs_nav">
                  <ul
                    className={`cs_nav_list ${mobileToggle ? "cs_active" : ""}`}
                  >
                    <li>
                      <Link to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/" onClick={() => setMobileToggle(false)}>
                        Services
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              to="/search-engine-marketing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Search Engine Marketing
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/search-engine-optimization"
                              onClick={() => setMobileToggle(false)}
                            >
                              Search Engine Optimization
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/social-media-marketing"
                              onClick={() => setMobileToggle(false)}
                            >
                              Social Media Marketing
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={() => setMobileToggle(false)}>
                              Web Development
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setMobileToggle(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" onClick={() => setMobileToggle(false)}>
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact
                      </Link>
                    </li>
                    <li className="navbar-call-us">
                      <img
                        style={{ width: "30px", marginRight: "8px" }}
                        src="/images/contact/icon_1.svg"
                        alt="Call us"
                      />
                      <a
                        href="tel:+918700181135"
                        style={{ textDecoration: "none" }}
                      >
                        +91-8700181135
                      </a>
                    </li>
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      mobileToggle ? "cs_teggle_active" : ""
                    }`}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </nav>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="currentColor"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Navigation */}
      <div className={`cs_sidenav ${sideNav ? "active" : ""}`}>
        <div className="cs_sidenav_overlay" onClick={() => setSideNav(false)} />
        <div className="cs_sidenav_in">
          <button
            className="cs_close"
            type="button"
            onClick={() => setSideNav(false)}
          >
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <div className="cs_logo_box">
            <img src="/images/logo.png" alt="Logo" style={{ width: "350px" }} />
            <div className="cs_height_15" />
            <h3 className="cs_fs_24 cs_semibold mb-0">
              Your Partner in Health and Wellness
            </h3>
          </div>
          <Spacing md="35" lg="35" xl="35" />
          <hr />
          <Spacing md="35" lg="50" xl="35" />
          <IconBoxStyle11
            title="Phone"
            subTitle={
              <a href="tel:+918700181135" style={{ textDecoration: "none" }}>
                +91-8700181135
              </a>
            }
            iconSrc="/images/contact/icon_1.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Email"
            subTitle={
              <a
                href="mailto:rishab@mediacook.in"
                style={{ textDecoration: "none" }}
              >
                rishab@mediacook.in
              </a>
            }
            iconSrc="/images/contact/icon_2.svg"
          />
          <Spacing md="30" lg="30" xl="30" />
          <IconBoxStyle11
            title="Location"
            subTitle={
              <a
                href="https://www.google.com/maps?q=304,+Best+Sky+Tower,+Netaji+Subhash+Place,+Pitampura,+Delhi,+110034"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                304, Best Sky Tower, Netaji Subhash Place, Pitampura, Delhi,
                110034
              </a>
            }
            iconSrc="/images/contact/icon_3.svg"
          />
          <Spacing md="60" lg="60" xl="60" />
          <Newsletter />
          <Spacing md="70" lg="50" xl="50" />
          <hr />
          <Spacing md="70" lg="50" xl="50" />
          <SocialWidget />
        </div>
      </div>
    </>
  );
}
