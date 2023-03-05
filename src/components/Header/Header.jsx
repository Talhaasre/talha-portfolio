import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./header.scss";
import "animate.css";
import { ReactComponent as Fbgrey } from "../../sources/images/general/fb-grey.svg";
import { ReactComponent as Linkgrey } from "../../sources/images/general/linkedin-grey.svg";
import { ReactComponent as Instagrey } from "../../sources/images/general/insta-grey.svg";
import { ReactComponent as Ytgrey } from "../../sources/images/general/yt-grey.svg";
import HeaderNavItem from "./HeaderNavItem";
import { images, logocolor, logoblack, whitearrow } from "../../sources";
import { homeURL } from "../../helpers/paths";
const body = document.querySelector("body");

const navLinksArr = [
  {
    id: 1,
    type: "img",
    img: images.logo.image,
    mainLink: "/",
    class: "logo_img",
  },
];
const mobNavLinksArr = [];
const Header = () => {
  const [navlinkIndex, setNavlinkIndex] = useState(null);
  const { width } = useWindowDimensions();
  const { pathname: locationPathname } = useLocation();
  const [navActiveIndex, setNavActiveIndex] = useState(null);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isBg, setIsbg] = useState(false);

  useEffect(() => {
    body.style.overflow = "auto";
    if (locationPathname === "/") {
      setIsbg(false);
    } else {
      setIsbg(true);
    }
    setIsMenuActive(false);
  }, [locationPathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.location.pathname === "/")
      if (window.pageYOffset > 60) {
        setIsbg(true);
      } else {
        setIsbg(false);
      }
  };

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHamburgerClick = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  };

  const handleNavIndex = (i) => {
    if (navActiveIndex === i) {
      setNavActiveIndex(null);
    } else {
      setNavActiveIndex(i);
    }
  };

  const navlinkList = navLinksArr.map((nav, i) => (
    <>
      <li key={navLinksArr[i].id}>
        {nav.type === "text" ? (
          <div
            onClick={() => setNavlinkIndex(i)}
            className={`nav_tab ${navlinkIndex === i ? "active" : ""} `}
          >
            <NavLink className={nav.class} to={nav.mainLink}>
              {nav.mainTitle}
            </NavLink>
          </div>
        ) : (
          <div
            onClick={() => setNavlinkIndex(i)}
            className={`logo_wrapper ${navlinkIndex === i ? "" : ""} `}
          >
            <a href={homeURL}>
              <img
                className={nav.class}
                src={`${isBg ? logoblack : logocolor}`}
                alt="talha logo"
                onClick={scrollHandler}
              />
            </a>
          </div>
        )}
      </li>
    </>
  ));

  return (
    <>
      <header className={`header_sec ${isBg ? "active" : null}`}>
        {width > 1080 ? (
          <>
            <div className="my_container">
              <div className="navlinks">
                <ul>
                  {navlinkList}
                  <li className="book_your_space animate__animated animate__flash animate__infinite	infinite animate__slower">
                    <a
                      href="mailto:talhaasre.dev@gmail.com?Subject=Let's%20have%20a%20meet"
                      className="flex_for_ticker"
                      // target="_blank"
                      // rel="noreferrer"
                    >
                      Get in Touch
                      <img
                        className="arrow_icon arrow_icon_1"
                        src={whitearrow}
                        alt="arrow icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="heading_strip">SPECIAL HOLI OFFER</div>
          </>
        ) : (
          <>
            <header className="header">
              <div className="my_container">
                <div className="logo_wrapper">
                  <Link className="logo_link" to="/">
                    <img
                      src={`${isBg ? logoblack : logocolor}`}
                      alt="talha logo"
                      className="talha_logo"
                    />
                  </Link>
                </div>
              </div>
              <nav className="nav_links_wrapper">
                <div
                  className={`nav_line2_wrapper_flex_wrapper ${
                    isMenuActive ? "active" : ""
                  }`}
                >
                  <div className="logo_wrapper">
                    <Link className="logo_link" to="/">
                      <img
                        src={`${isMenuActive ? logoblack : logocolor}`}
                        alt="talha logo"
                        className="talha_logo"
                      />
                    </Link>
                  </div>
                  <ul className="nav_line2_wrapper_flex">
                    {mobNavLinksArr.map((navData, i) => (
                      <HeaderNavItem
                        navData={navData}
                        key={parseInt(navData.id)}
                        arrIndex={i}
                        handleNavIndex={handleNavIndex}
                        navActiveIndex={navActiveIndex}
                      />
                    ))}
                  </ul>
                  {width <= 1023 && (
                    <div className="nav_social_media_icons">
                      <a href={() => false} target="_blank" rel="noreferrer">
                        <Fbgrey className="nav_social_icons" />
                      </a>
                      <a href={() => false} target="_blank" rel="noreferrer">
                        <Instagrey className="nav_social_icons" />
                      </a>
                      <a href={() => false} target="_blank" rel="noreferrer">
                        <Ytgrey className="nav_social_icons" />
                      </a>
                      <a href={() => false} target="_blank" rel="noreferrer">
                        <Linkgrey className="nav_social_icons" />
                      </a>
                      <div className="follow_us_text">
                        <a href="mailto: talhaasre.dev@gmail.com">
                          talhaasre.dev@gmail.com
                        </a>
                        <a href="tel:+91 7506377907">
                          Talha Asre: +91 7506377907
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </nav>

              {/* mobile UI start */}
              <div
                className={`hamburger_lines ${
                  isMenuActive ? "active" : "" || isBg ? "black" : ""
                }`}
                onClick={handleHamburgerClick}
              >
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
              </div>
            </header>
            {isMenuActive ? (
              ""
            ) : (
              <div className="heading_strip">SPECIAL HOLI OFFER</div>
            )}
          </>
        )}
      </header>
    </>
  );
};

export default Header;
