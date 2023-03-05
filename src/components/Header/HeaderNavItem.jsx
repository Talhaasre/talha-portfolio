import React from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { activearrow, downarrow, wctaarrow } from "../../sources";
import SubNavItem from "./SubNavItem";

const HeaderNavItem = ({
  navData,
  navActiveIndex,
  handleNavIndex,
  arrIndex,
}) => {
  const { width } = useWindowDimensions();

  if (navData.dropDownLevel === 2) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          <span className="nav_link">{navData.mainTitle}</span>
          {width >= 1024 ? (
            <img
              src={wctaarrow}
              alt="Down arrow"
              loading="lazy"
              className="headerdownarrow down_arrow"
            />
          ) : (
            <span className="headerdownarrow">
              {navActiveIndex === arrIndex ? (
                <img src={downarrow} alt="down arrow img" loading="lazy" />
              ) : (
                <img
                  src={wctaarrow}
                  className="down_arrow"
                  alt="down arrow img"
                  loading="lazy"
                />
              )}
            </span>
          )}
        </div>
        <div
          className={`dropdown_box ${
            navActiveIndex === arrIndex ? "active" : ""
          }`}
        >
          {/*  */}
          {width >= 1024 && (
            <img
              src={wctaarrow}
              alt="dropdown box up arrow"
              loading="lazy"
              className="dropdownboxuparrow down_arrow"
            />
          )}
          <>
            {navData.dropDownList.map((dropDownData, i) => (
              <SubNavItem
                dropDownData={dropDownData}
                key={dropDownData.id}
                dropDownIndex={i}
              />
            ))}
          </>
        </div>
      </li>
    );
  }

  if (navData.dropDownLevel === 1) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          <span className="nav_link">{navData.mainTitle}</span>
          {width >= 1024 ? (
            <img
              src={wctaarrow}
              alt="Down arrow"
              className="headerdownarrow"
              loading="lazy"
            />
          ) : (
            <span className="headerdownarrow">
              {navActiveIndex === arrIndex ? (
                <img src={downarrow} alt="down arrow img" loading="lazy" />
              ) : (
                <img
                  src={wctaarrow}
                  className="down_arrow"
                  alt="down arrow img"
                  loading="lazy"
                />
              )}
            </span>
          )}
        </div>
        <div
          className={`dropdown_box ${
            navActiveIndex === arrIndex ? "active" : ""
          }`}
        >
          {width >= 1024 && (
            <img
              src={wctaarrow}
              alt="dropdown box up arrow"
              loading="lazy"
              className="dropdownboxuparrow"
            />
          )}
          {navData.dropDownList.map((data, i) => (
            <div className="dropdown_list_item" key={data.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "dropdown_list_item_link active"
                    : "dropdown_list_item_link"
                }
                to={data.navLink}
              >
                {data.navTitle}
              </NavLink>
            </div>
          ))}
        </div>
      </li>
    );
  }

  return (
    <li className="nav_item">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav_link active" : "nav_link"
        }
        to={navData.mainLink}
      >
        {navData.mainTitle}
        <img
          src={activearrow}
          alt="arrow"
          loading="lazy"
          className="active_arrow"
        />
      </NavLink>
    </li>
  );
};

export default HeaderNavItem;
