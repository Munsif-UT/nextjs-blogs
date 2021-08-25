import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { role } from "../../enumerations";
import { List } from "react-bootstrap-icons";
// import blogs from "../public/frontend/media/logo_final-svg.png";
import { useHistory } from "react-router-dom";
import Image from "next/image";
import { Link } from "next/link";
function NavbarInventoolyWebsite() {
  const history = useHistory();
  const [navbarcollapse, setNavbarcollapse] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // const { isLogged, userRole } = useSelector((state) => state.auth);
  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const mobilenavbar = () => {
    if (navbarcollapse) {
      setNavbarcollapse(false);
    } else {
      setNavbarcollapse(true);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <nav
      className={`navbar fixed-top navbar-fixed-top navbar-expand-lg bg-transparent  ${
        navbar ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <a
          className="navbar-brand navigationBrand"
          href="/"
          style={{
            fontSize: "30px ",
            fontWeight: "700",
            letterSpacing: "1px",
            color: "#012970 ",
            fontFamily: "Nunito, sans-serif",
            marginTop: "0px",
            padding: "0px",
          }}
        >
          <img
            src="/frontend/media/logo_final-svg.png"
            style={{ marginRight: "6px", marginTop: "5px" }}
            alt=""
            width={30}
            height={30}
            className="d-inline-block align-text-top"
          />
          Inventooly
        </a>
        <button
          className="navbar-toggler"
          style={{ border: "2px solid #012970" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => mobilenavbar()}
        >
          <List style={{ color: "#012970" }} />
        </button>

        <div
          className={`navigationItems navbar-collapse ${
            navbarcollapse ? "" : "collapse"
          }`}
          style={{ fontSize: " 18px", color: "#4154f1" }}
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav ms-auto mb-2 mb-lg-0"
            style={{
              justifyContent: "space-between",
              marginLeft: "auto",
              width: "100%",
            }}
          >
            <div
              className="leftMenuItems"
              style={{ display: "flex", paddingLeft: " 30px " }}
            >
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <a
                  className="nav-link"
                  href="/features"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0 10px 0px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#013298",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                  }}
                >
                  Features
                </a>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <a
                  className="nav-link"
                  href="#Pricing"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0 10px 0px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#013298",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                  }}
                >
                  Pricing
                </a>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <a
                  className="nav-link"
                  href="#Contact"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0 10px 0px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#013298",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                  }}
                >
                  Contact
                </a>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <a
                  className="nav-link"
                  href="/blogs"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0 10px 0px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#013298",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                  }}
                >
                  Blog
                </a>
              </li>
            </div>

            <div className="middleMenuItems" style={{ display: "flex" }}>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <a
                  className="nav-link"
                  href={"/signin"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 0 10px 0px",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#013298",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                  }}
                >
                  Login
                </a>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ alignItems: "right", paddingLeft: "15px" }}
              >
                <a
                  href="-"
                  className="nav-link"
                  onClick={() => {
                    history.push("/onboard");
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: "400",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                    color: "#fff",
                    backgroundColor: "#4154f1",
                    // padding: "10px 0 10px 0px",
                    fontSize: "1rem",
                    borderRadius: ".25rem",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  Get Started For Free
                </a>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <a
                  className="nav-link"
                  href={"/signin?demo=true"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontFamily: "Nunito, sans-serif",
                    whiteSpace: "nowrap",
                    transition: "0.3s",
                    color: "#4154f1",
                    backgroundColor: "#fff",
                    // padding: "10px 0 10px 0px",
                    fontSize: "1rem",
                    borderRadius: ".25rem",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    border: "2px solid #4154f1",
                    fontWeight: "bold",
                  }}
                >
                  Demo
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarInventoolyWebsite;
