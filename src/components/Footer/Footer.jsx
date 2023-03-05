import React from "react";
import { homeURL } from "../../helpers/paths";
import { footercall, footermail, scrollup, logowhite } from "../../sources";
import "./footer.scss";

const Footer = () => {
  const today = new Date();

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="footer_sec1">
        <div className="scroll_wrap" onClick={scrollHandler}>
          <img
            className="scrollup_img"
            src={scrollup}
            alt="arrow"
            loading="lazy"
            width="74"
            height="74"
          />
          {/* <p className="scroll_text">Go To Top</p> */}
        </div>
        <div className="my_container">
          <div className="row footer_main">
            <div className="col-md-9 col-lg-9">
              <div className="logo_wrapper">
                <a href={homeURL}>
                  <img
                    src={logowhite}
                    alt="logo"
                    className="footer_logo"
                    onClick={scrollHandler}
                  />
                </a>
                {/* <p className="description">
                  Book your hassle-free stay with us, based on what suits you
                  best
                </p> */}

                {/* <div className="social_wrapper">
                  <a href="">
                    <img src={fbwhite} alt="" className="social_icon fb_icon" />
                  </a>
                  <a href="">
                    <img
                      src={instawhite}
                      alt=""
                      className="social_icon fb_icon"
                    />
                  </a>
                  <a href="">
                    <img src={ytwhite} alt="" className="social_icon fb_icon" />
                  </a>
                  <a href="">
                    <img
                      src={linkedinwhite}
                      alt=""
                      className="social_icon fb_icon"
                    />
                  </a>
                </div> */}
              </div>
            </div>
            {/* <div className="col-md-3 col-lg-3">
              <div className="links_wrapper">
                <h4 className="link_heading">Quick Links</h4>
                <ul className="link_list">
                  <Link className="link" to={aboutusURL}>
                    <li>ABOUT US</li>
                  </Link>
                </ul>
              </div>
            </div> */}
            {/* <div className="col-md-3 col-lg-3">
              <div className="links_wrapper">
                <h4 className="link_heading">Information</h4>
                <ul className="link_list">
                  <Link className="link" to={contactURL}>
                    <li>CONTACT US</li>
                  </Link>
                </ul>
              </div>
            </div> */}
            <div className="col-md-3 col-lg-3">
              <div className="links_wrapper">
                <h4 className="link_heading">Get in Touch</h4>
                {/* <p className="description">
                  <a href="#">
                    <img
                      src={footerlocation}
                      alt="location"
                      className="location_icon"
                    />
                    Address
                  </a>
                </p> */}
                <ul className="link_list">
                  <a
                    className="link"
                    href="mailto:talhaasre.dev@gmail.com?Subject=Let's%20have%20a%20talk"
                  >
                    <li>
                      <img
                        src={footermail}
                        alt="location"
                        className="location_icon"
                      />
                      talhaasre.dev@gmail.com
                    </li>
                  </a>
                  <a className="link" href="tel:+91 7506377907">
                    <li>
                      <img
                        src={footercall}
                        alt="location"
                        className="location_icon"
                      />
                      {/* Talha Asre:
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                      +91 7506377907
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer_sec2">
        <div className="my_container">
          <div className="copyright_flex">
            <p className="copyright">
              Copyright © {today.getFullYear()} | All Rights Reserved by Talha
              Asre
            </p>
            {/* <p className="copyright">
              Crafted by{" "}
              <a
                className="togglehead_link"
                href="https://www.togglehead.in/"
                target="_blank"
                rel="noreferrer"
              >
                Togglehead
              </a>
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
