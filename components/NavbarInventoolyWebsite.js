import React, { useState, useEffect } from "react";
// import { role } from "../../enumerations";
import { List } from "react-bootstrap-icons";
// import blogs from "../public/frontend/media/logo_final-svg.png";
import { useHistory } from "react-router-dom";
import Image from "next/image";
import Link from "next/link";
import checkStatus from "../config/checkStatus";
function NavbarInventoolyWebsite() {
  const URL = checkStatus();
  const history = useHistory();
  const [navbarcollapse, setNavbarcollapse] = useState(false);
  const [navbar, setNavbar] = useState(false);
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
        <Link href="/">
          <a
            className="navbar-brand navigationBrand"
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
            <Image
              style={{ marginRight: "6px", marginTop: "15px", padding: "10px" }}
              src="/frontend/media/logo_final-svg.png"
              alt=""
              width={30}
              height={30}
              className="d-inline-block align-text-top"
            />
            <span style={{ marginLeft: "6px" }}>Inventooly</span>
          </a>
        </Link>
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
                <Link href="/features">
                  <a
                    className="nav-link"
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
                </Link>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <Link href="/#Pricing">
                  <a
                    className="nav-link"
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
                </Link>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <Link href="/#Contact">
                  <a
                    className="nav-link"
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
                </Link>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <Link href="/blogs">
                  <a
                    className="nav-link"
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
                    Blogs
                  </a>
                </Link>
              </li>
            </div>

            <div className="middleMenuItems" style={{ display: "flex" }}>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <Link href={`${URL}signin`}>
                  <a
                    className="nav-link"
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
                </Link>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ alignItems: "right", paddingLeft: "15px" }}
              >
                <Link href={`${URL}onboard`}>
                  <a
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
                </Link>
              </li>
              <li
                className="nav-item li-Nav"
                style={{ padding: "0 15px 0 15px" }}
              >
                <Link href={`${URL}signin?demo=true`}>
                  <a
                    className="nav-link"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontFamily: "Nunito, sans-serif",
                      whiteSpace: "nowrap",
                      transition: "0.3s",
                      color: "#4154f1",
                      backgroundColor: "#fff",
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
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarInventoolyWebsite;
