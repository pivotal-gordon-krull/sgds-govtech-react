import React, { useState } from "react";
import PropTypes from "prop-types";

export function MainNav({ children }) {
  return (
    <nav className="sgds-navbar" role="navigation">
      {children}
    </nav>
  );
}

export function MainNavBrand(props) {
  return <div className="sgds-navbar-brand">{props.children}</div>;
}

export function MainNavItem({ as, href = "", ...props }) {
  if (as) {
    const MorphedComponent = as;
    return (
      <MorphedComponent className="sgds-navbar-item" {...props}>
        {props.children}
      </MorphedComponent>
    );
  }
  return (
    <a
      className={`sgds-navbar-item ${props.isUpperCase ? "is-uppercase" : ""} ${
        props.isTab ? "is-tab" : ""
      }`}
      href={href}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
}
MainNavItem.propTypes = {
  as: PropTypes.elementType,
  href: PropTypes.string,
  isUpperCase: PropTypes.bool,
  isTab: PropTypes.bool,
  onClick: PropTypes.func,
};

export function MainNavBurger({ onClick, expand = "" }) {
  return (
    <div
      className={`sgds-navbar-burger ${expand ? "is-active" : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
MainNavBurger.propTypes = {
  onClick: PropTypes.func,
  expand: PropTypes.bool,
};

export function MainNavMenu({ children, expand = "" }) {
  return (
    <div className={`sgds-navbar-menu ${expand ? "is-active" : ""}`}>
      {children}
    </div>
  );
}
MainNavMenuEnd.propTypes = {
  expand: PropTypes.bool,
};

export function MainNavMenuStart({ children }) {
  return <div className="sgds-navbar-start">{children}</div>;
}

export function MainNavMenuEnd({ children }) {
  return <div className="sgds-navbar-end">{children}</div>;
}

export function MainNavDropdown({
  children,
  href = "",
  onClick = () => {},
  ...props
}) {
  const [showChildren, setShowChildren] = useState(true);
  const onDropdownClick = (e) => {
    e.preventDefault();
    setShowChildren(!showChildren);
    onClick();
  };
  return (
    <div
      className={`sgds-navbar-item has-dropdown is-hoverable ${
        props.isMega ? "is-mega" : ""
      }`}
    >
      <a
        className={`sgds-navbar-link ${
          props.isUpperCase ? "is-uppercase" : ""
        } ${props.isActive ? "is-active" : ""}`}
        href={href}
        onClick={onDropdownClick}
      >
        {props.label}
      </a>
      <div
        className={`sgds-navbar-dropdown ${
          !showChildren ? "is-hidden-touch" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
MainNavDropdown.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isUpperCase: PropTypes.bool,
  isMega: PropTypes.bool,
};
