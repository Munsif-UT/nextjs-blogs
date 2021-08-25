import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Telephone,
  Twitter,
  EmojiAngryFill,
  GeoAlt,
  Envelope,
  List,
} from "react-bootstrap-icons";
import { role } from "../../enumerations";
import { Form as FormAntd, Button } from "antd";
import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
import { onContactForm } from "../../features/authSlice";
import "./Sohome.css";
// import “bootstrap/dist/css/bootstrap.min.css”;
import blogs from "../../assets/frontend/media/logo_final-svg.png";
import mainImage5 from "../../assets/frontend/media/mainImage5.png";
// import team from "../../assets/frontend/media/media/team.svg";
import Team from "./team.jsx";
import cardsSec2 from "../../assets/frontend/media/cardsSec2.svg";
import cardsSec1 from "../../assets/frontend/media/cardsSec1.svg";
import cardsSec3 from "../../assets/frontend/media/cardsSec3.svg";
import process from "../../assets/frontend/media/process.svg";
import report_analytics from "../../assets/frontend/media/report_analytics.svg";
import purchase from "../../assets/frontend/media/purchase.svg";
import images from "./dask.png";
import karma from "./karma.png";
import img1 from "./web-banner-urtasker-1.jpg";
import img2 from "./web-banner-urtasker-2.jpg";
import img3 from "./web-banner-urtasker-3.jpg";
import urtasker from "./urtasker.svg";
import blogs1 from "../../assets/frontend/media/blogs1.jpg";
import blogs2 from "../../assets/frontend/media/blogs1.jpg";
import blogs3 from "../../assets/frontend/media/blogs1.jpg";
import logo_final_svg from "../../assets/frontend/media/logo_final-svg.png";
import channels from "../../assets/frontend/media/sales_channel.svg";
import light_bg2 from "../../assets/frontend/media/light-bg2.png";
import footer_bg3 from "../../assets/frontend/media/footer-bg3.png";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../../features/authSlice";
import chatbot from "../../component/chatbot/chatbot";

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const SoHome = () => {
  //navbar scroll when active state
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isLogged,
    errContactForm,
    doneContactForm,
    loadingContactForm,
    userRole,
  } = useSelector((state) => state.auth);
  const [navbar, setNavbar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [navbarcollapse, setNavbarcollapse] = useState(false);

  const validate = () => {
    let err = {};
    if (!name) {
      err.error = "Please enter your name";
    }
    if (!email) {
      err.error = "Please enter your email";
    } else if (email) {
      if (!isValidEmail(email)) {
        err.email = "Please enter a valid email";
      }
    }
    if (!subject) {
      err.error = "Please enter subject";
    }
    if (!message) {
      err.error = "Please enter your message";
    }
    if (!isEmpty(err)) {
      setErrors(err);
      return false;
    } else {
      return true;
    }
  };
  const submitData = () => {
    if (validate()) {
      let data = { name, email, subject, message };
      dispatch(onContactForm(data));
    }
  };

  useEffect(() => {
    if (doneContactForm) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
    if (errContactForm) {
      setErrors(errContactForm);
    }
  }, [doneContactForm, errContactForm]);

  //navbar scroll changeBackground function
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
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);
  chatbot("https://embed.tawk.to/60e71436d6e7610a49aa494e/1fa3adtm9");
  return (
    <div
      className="fhomepage"
      style={{
        fontFamily: "Nunito, sans-serif",
        backgroundColor: "#fff",
        scrollBehavior: "smooth",
      }}
      id="top"
    >
      <nav
        className={`navbar fixed-top navbar-fixed-top navbar-expand-lg bg-transparent  ${
          navbar ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <a
            className="navbar-brand navigationBrand"
            href="/home"
            style={{
              fontSize: "30px ",
              fontWeight: "700",
              letterSpacing: "1px",
              color: "#012970 ",
              fontFamily: "Nunito, sans-serif",
              marginTop: "3px",
            }}
          >
            <img
              src={blogs}
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
                  style={{ padding: "0 15px 0 15px", display: "none" }}
                >
                  <a
                    className="nav-link"
                    href="/Blogs"
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
                    href={
                      isLogged
                        ? userRole !== role.sAdmin
                          ? "/dashboard"
                          : "/onboard-data"
                        : "/signin"
                    }
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
                    href={
                      isLogged
                        ? userRole !== role.sAdmin
                          ? "/dashboard"
                          : "/onboard-data"
                        : "/signin?demo=true"
                    }
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

      <section
        className="d-flex banner-m align-items-center justify-content-centre"
        style={{
          height: "100vh",
          background: `url(${light_bg2}) top center no-repeat`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "60px 0px",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div
            className="row"
            style={{
              marginTop: "20px",
              background: "transparent",
              boxShadow: "0 0 0 0",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="col-lg-6 col-md-7 flex-column "
              style={{ padding: "30px" }}
            >
              <h1
                className="h1Main"
                style={{
                  margin: "0",
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#012970",
                }}
              >
                SMARTER INVENTORY MANAGEMENT{" "}
              </h1>
              <h2
                className="h2Main"
                style={{
                  color: "#57646b",
                  margin: "15px 0 0 0",
                  fontSize: "24px",
                }}
              >
                Inventory forecasting at your fingertips. Inventooly optimizes
                your stock levels and provides out-of-the-box supply chain
                management that creates a smooth, consistent cash flow.
              </h2>
              <a
                onClick={() => {
                  history.push("/onboard");
                }}
                className="btn  btnMain"
                style={{
                  marginTop: "20px",
                  lineHeight: "0",
                  padding: "30px 50px",
                  borderRadius: "4px",
                  transition: "0.5s",
                  color: "#fff ",
                  background: "#4154f1",
                  boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                }}
              >
                Get Started For Free
              </a>
            </div>
            <div className="col-lg-6 col-md-5">
              <img
                src={mainImage5}
                className="img-fluid"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="About"
        style={{ background: "#fff", padding: "60px 0px", overflow: "hidden" }}
      >
        <div className="container">
          <div className="row gx-0">
            <div
              className="col-md-6 mt-3 mb-3 textColumn"
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <div
                className="mainHeadingSmall"
                style={{
                  marginBottom: "10px",
                  textAlign: "start",
                  fontSize: "15px",
                  letterSpacing: "2px",
                  fontWeight: "700",
                  margin: "0",
                  color: "#4154f1",
                  textTransform: "uppercase",
                }}
              >
                WHO WE ARE
              </div>
              <h2
                className="h1Column"
                style={{
                  margin: "0",
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#071486",
                  lineHeight: "1.5",
                }}
              >
                What is Inventooly?
              </h2>
              <h2
                className="h2Column"
                style={{
                  color: "#57646b",
                  margin: "15px 0 0 0",
                  fontSize: "18px",
                  lineHeight: "1.5",
                }}
              >
                Inventooly makes inventory forecasting a breeze. Through
                powerful automated analysis, it optimizes your inventory and
                provides you with all the insights of your business, so that you
                never miss out on an opportunity. <p />
                {/* <button class="btn  btn-lg btnMain">Why Inventooly?</button> */}
                <a
                  onClick={() => {
                    history.push("/onboard");
                  }}
                  className="btn  btnMain"
                  style={{
                    marginTop: "20px",
                    lineHeight: "0",
                    padding: "30px 50px",
                    borderRadius: "4px",
                    transition: "0.5s",
                    color: "#fff",
                    background: "#4154f1",
                    boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                  }}
                >
                  Get Started For Free
                </a>
              </h2>
            </div>
            <div className="col-md-6 text-center">
              <div className="teamSvg" style={{ height: "100%", width: "90%" }}>
                <Team />
              </div>
            </div>
          </div>
        </div>
      </section>
      <main>
        <section
          id="section-header"
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="col-md-6 offset-md-3 text-align: center">
            <div
              className="mainHeadingSmall"
              style={{
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "15px",
                letterSpacing: "2px",
                fontWeight: "700",
                margin: "0",
                color: "#4154f1",
                textTransform: "uppercase",
              }}
            >
              MAJOR ISSUES
            </div>
            <p
              style={{
                marginBottom: "40px",
                textAlign: "center",
                margin: "10px 0 0 0",
                padding: "0",
                fontSize: "38px",
                lineHeight: "42px",
                fontWeight: "700",
                color: "#012970",
              }}
            >
              Don’t Let Your Inventory Issues Hold You Back{" "}
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt-3">
                <div
                  className="card h-100"
                  style={{
                    padding: "4px",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                    border: "none ",
                  }}
                >
                  <div className="inner" style={{ marginTop: "20px" }}>
                    <img
                      style={{ width: "100%", height: "100%", padding: "20px" }}
                      className="card-img-top"
                      src={cardsSec1}
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title cardTitle"
                      style={{
                        fontSize: "24px",
                        color: "#012970",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      Struggling to understand inventory insights?
                    </h5>
                    <p
                      className="card-text h2Column"
                      style={{
                        color: "#57646b",
                        margin: "15px 0 0 0",
                        fontSize: "18px",
                        lineHeight: "1.5",
                      }}
                    >
                      Understanding every part of your inventory is key in
                      optimizing supply chain management. You need deep
                      insights, and you need them now.
                    </p>
                    {/* <a href="#" class="btn  btnMain btn-lg">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3">
                <div
                  className="card h-100"
                  style={{
                    padding: "4px",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                    border: "none ",
                  }}
                >
                  <div className="inner" style={{ marginTop: "20px" }}>
                    <img
                      style={{ width: "100%", height: "100%", padding: "20px" }}
                      className="card-img-top"
                      src={cardsSec2}
                      alt="Card_image_cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title cardTitle"
                      style={{
                        fontSize: "24px",
                        color: "#012970",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      Keep running out of stock?
                    </h5>
                    <p
                      className="card-text h2Column"
                      style={{
                        color: "#57646b",
                        margin: "15px 0 0 0",
                        fontSize: "18px",
                        lineHeight: "1.5",
                      }}
                    >
                      Avoid the dreaded “out-of-stock” sticker by keeping your
                      stock levels at optimum levels. Know exactly what needs
                      restocking and when.
                    </p>
                    {/* <a href="#" class="btn  btnMain btn-lg">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-3">
                <div
                  className="card h-100 "
                  style={{
                    padding: "4px",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                    border: "none ",
                  }}
                >
                  <div className="inner" style={{ marginTop: "20px" }}>
                    <img
                      style={{ width: "100%", height: "100%", padding: "20px" }}
                      className="card-img-top"
                      src={cardsSec3}
                      alt="Card_image_cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title  cardTitle"
                      style={{
                        fontSize: "24px",
                        color: "#012970",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      Bad supply chain management?{" "}
                    </h5>
                    <p
                      className="card-text h2Column"
                      style={{
                        color: "#57646b",
                        margin: "15px 0 0 0",
                        fontSize: "18px",
                        lineHeight: "1.5",
                      }}
                    >
                      Poor management can lead to missed opportunities and loss
                      of profit. Jump on trends and pivot to changing market
                      dynamics in real time.
                    </p>
                    {/* <a href="#" class="btn  btn-lg btnMain">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Pricing">
          <div className="container">
            <div className="col-md-12">
              <div className="banner-container">
                <div className="banner">
                  <div className="content-b">
                    <h3 style={{ marginBottom: "0px;" }}>GET EARLY ACCESS </h3>
                    <p style={{ marginBottom: "0px;" }}>First 800 Users only</p>
                    <a
                      onClick={() => {
                        history.push("/onboard");
                      }}
                      className="btn "
                      style={{ width: "300px" }}
                    >
                      Get Started For Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="col-md-6 offset-md-3 text-align: center">
            <div
              className="mainHeadingSmall"
              style={{
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "15px",
                letterSpacing: "2px",
                fontWeight: "700",
                margin: "0",
                color: "#4154f1",
                textTransform: "uppercase",
              }}
            >
              Solution
            </div>
            <p
              style={{
                color: "#072371",
                fontSize: "35px",
                fontWeight: 700,
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Successfully Solving All Your Inventory Issues
            </p>
          </div>
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Simple and Intuitive Process
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  Managing inventory can be a real drag. Inventooly was designed
                  to help you keep track of your inventory, even with your eyes
                  shut. Automated analysis and powerful insights make it a more
                  effective way to stay on top of your inventory. <p />
                  <button
                    onClick={() => {
                      history.push("/onboard");
                    }}
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Get Started For Free
                  </button>
                </h2>
              </div>
              <div className="col-md-6 text-center content-vertical">
                <img src={process} style={{ width: "70%" }} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 text-center content-vertical">
                <img src={report_analytics} style={{ width: "80%" }} alt="" />
              </div>
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Powerful Inventory Forecasting{" "}
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  Not enough hours in the day? Save a huge amount of time each
                  month with Inventooly’s automated re-ordering process.
                  Advanced algorithms analyze the sales forecast for thousands
                  of products in minutes. <p />
                  <button
                    onClick={() => {
                      history.push("/onboard");
                    }}
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1 ",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Get Started For Free
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  One-Click Purchase Orders
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  Say goodbye to generating time-consuming purchase orders.
                  Inventooly’s one-click system sends purchase orders directly
                  to your suppliers and helps you keep track of outstanding and
                  completed POs. <p />
                  <button
                    onClick={() => {
                      history.push("/onboard");
                    }}
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1 ",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Get Started For Free
                  </button>
                </h2>
              </div>
              <div className="col-md-6 text-center content-vertical">
                <img src={purchase} style={{ width: "80%" }} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-6 text-center content-vertical">
                <img src={channels} style={{ width: "80%" }} alt="" />
              </div>
              <div className="col-md-6 mt-3 mb-3 textColumn">
                <h2
                  className="h1Column"
                  style={{
                    margin: "0",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: "#071486",
                    lineHeight: "1.5",
                  }}
                >
                  Centralize Sales Channels{" "}
                </h2>
                <h2
                  className="h2Column"
                  style={{
                    color: "#57646b",
                    margin: "15px 0 0 0",
                    fontSize: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  Keeping track of all your different sales channels can be a
                  headache. Inventooly lets you combine insights from each
                  channel in one central dashboard so you can reorder products
                  based on their overall performance. <p />
                  <button
                    onClick={() => {
                      history.push("/onboard");
                    }}
                    className="btn btnMain"
                    style={{
                      marginTop: "20px",
                      lineHeight: "0",
                      padding: "30px 50px ",
                      borderRadius: "4px",
                      transition: "0.5s",
                      color: "#fff ",
                      background: "#4154f1",
                      boxShadow: "0px 5px 30px rgb(65 84 241 / 40%)",
                    }}
                  >
                    Get Started For Free
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section id="Pricing">
          <div className="container">
            <div className="col-md-12">
              <div className="banner-container">
                <div className="banner">
                  <div className="content-b">
                    <h3 style={{ marginBottom: "0px;" }}>GET EARLY ACCESS </h3>
                    <p style={{ marginBottom: "0px;" }}>First 800 Users only</p>
                    <a
                      onClick={() => {
                        history.push("/onboard");
                      }}
                      className="btn "
                      style={{ width: "300px" }}
                    >
                      Get Started For Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="section-header"
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
          }}
        >
          <div className="col-md-6 offset-md-3 text-align: center">
            <div
              className="mainHeadingSmall"
              style={{
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "15px",
                letterSpacing: "2px",
                fontWeight: "700",
                margin: "0",
                color: "#4154f1",
                textTransform: "uppercase",
              }}
            >
              TESTIMONIALS
            </div>
            <p
              style={{
                color: "#072371",
                fontSize: "35px",
                fontWeight: 700,
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              What Our Clients Say About Us
            </p>
          </div>
          <div className="container">
            <div className="row testimonials">
              <div className="col-lg-4">
                <div
                  className="card h-100 "
                  style={{
                    padding: "4px",
                    alignItems: "center",
                    borderBottom: "#4154f1 3px solid",
                    borderRadius: "10px",
                    textAlign: "center",
                    width: "100%",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                  }}
                >
                  <div
                    className="inner"
                    style={{ height: "200px", marginTop: "20px" }}
                  >
                    <img
                      style={{ borderRadius: "50%", height: "100%" }}
                      className="card-img-top cardTestimonialsImage"
                      src={img1}
                      alt="Card_image_cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title cardTitle"
                      style={{
                        fontSize: "24px",
                        color: "#012970",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      Lax
                    </h5>
                    <p
                      className="card-text h2Column"
                      style={{
                        color: "#57646b",
                        margin: "15px 0 0 0",
                        fontSize: "18px",
                        lineHeight: "1.5",
                      }}
                    >
                      Inventooly has been of great help in managing my inventory
                      and I plan to continue to use their services in the
                      future, for my business needs.
                    </p>
                    {/* <a href="#" class="btn  btnMain btnlg">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card h-100"
                  style={{
                    padding: "4px",
                    alignItems: "center",
                    borderBottom: "#4154f1 3px solid",
                    borderRadius: "10px",
                    textAlign: "center",
                    width: "100%",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                  }}
                >
                  <div
                    className="inner"
                    style={{ height: "200px", marginTop: "20px" }}
                  >
                    <img
                      style={{ borderRadius: "50%", height: "100%" }}
                      className="card-img-top cardTestimonialsImage"
                      src={img2}
                      alt="Card_image_cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title cardTitle"
                      style={{
                        fontSize: "24px",
                        color: "#012970",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      Dress America
                    </h5>
                    <p
                      className="card-text h2Column"
                      style={{
                        color: "#57646b",
                        margin: "15px 0 0 0",
                        fontSize: "18px",
                        lineHeight: "1.5",
                      }}
                    >
                      Easy to understand dashboards & creating purchase orders
                      in minutes. Managing my sales channels is much less
                      stressful since I started using Inventooly's services.
                    </p>
                    {/* <a href="#" class="btn  btnMain btn-lg">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card h-100"
                  style={{
                    padding: "4px",
                    alignItems: "center",
                    borderBottom: "#4154f1 3px solid",
                    borderRadius: "10px",
                    textAlign: "center",
                    width: "100%",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                  }}
                >
                  <div
                    className="inner"
                    style={{ height: "200px", marginTop: "20px" }}
                  >
                    <img
                      style={{ borderRadius: "50%", height: "100%" }}
                      className="card-img-top cardTestimonialsImage"
                      src={img3}
                      alt="Card_image_cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5
                      className="card-title  cardTitle"
                      style={{
                        fontSize: "24px",
                        color: "#012970",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      Karma Organic
                    </h5>
                    <p
                      className="card-text h2Column"
                      style={{
                        color: "#57646b",
                        margin: "15px 0 0 0",
                        fontSize: "18px",
                        lineHeight: "1.5",
                      }}
                    >
                      Inventooly is at the center of my eCommerce business. I am
                      now in complete control of all my inventory and orders.
                      Deep insights on forecasting helps me making informed
                      decision.
                    </p>
                    {/* <a href="#" class="btn  btn-lg btnMain">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Blogs"
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div className="col-md-6 offset-md-3 text-align: center">
            <div
              className="mainHeadingSmall"
              style={{
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "15px",
                letterSpacing: "2px",
                fontWeight: "700",
                margin: "0",
                color: "#4154f1",
                textTransform: "uppercase",
              }}
            >
              Blogs
            </div>
            <p
              style={{
                color: "#072371",
                fontSize: "35px",
                fontWeight: 700,
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Recent Posts Form Our Blog
            </p>
          </div>
          <div className="container">
            <div className="row rowHeight">
              <div className="col-md-4 ">
                <div
                  className="card cardHeight"
                  style={{
                    padding: "4px",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                    border: "none ",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <img src={blogs1} alt="" />
                  <div
                    className="img-overlay blogOverlay"
                    style={{
                      textAlign: "left",
                      marginBottom: "40px",
                      padding: "20px 20px 0px 20px",
                    }}
                  >
                    <span
                      className="blogDate"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "rgba(1, 41, 112, 0.6)",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Mon, Jan 15
                    </span>
                    <p
                      className="blogPara"
                      style={{
                        bottom: "0",
                        marginBottom: "10px",
                      }}
                    >
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis
                    </p>
                    <a
                      style={{
                        position: "absolute",
                        bottom: "0",
                        marginBottom: "10px",
                      }}
                      href="##"
                      className="blogReadmore readMorePositionFixed stretched-link "
                    >
                      Read More
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="card  cardHeight"
                  style={{
                    padding: "4px",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                    border: "none ",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <img src={blogs2} alt="" />
                  <div
                    className="img-overlay blogOverlay"
                    style={{
                      textAlign: "left",
                      marginBottom: "40px",
                      padding: "20px 20px 0px 20px",
                    }}
                  >
                    <span
                      className="blogDate"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "rgba(1, 41, 112, 0.6)",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Mon, Jan 15
                    </span>
                    <p className="blogPara">
                      Quo esse repellendus quia id. Est eum et accusantium
                      pariatur fugit nihil minima suscipit corporis.
                    </p>
                    <a
                      style={{
                        position: "absolute",
                        bottom: "0",
                        marginBottom: "10px",
                      }}
                      href="###"
                      className="blogReadmore readMorePositionFixed stretched-link mt-auto"
                    >
                      Read More
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div
                  className="card cardHeight"
                  style={{
                    padding: "4px",
                    textAlign: "center",
                    width: "100%",
                    borderRadius: "5px",
                    boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
                    border: "none ",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <img src={blogs3} alt="" />
                  <div
                    className="img-overlay blogOverlay"
                    style={{
                      textAlign: "left",
                      marginBottom: "40px",
                      padding: "20px 20px 0px 20px",
                    }}
                  >
                    <span
                      className="blogDate"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "rgba(1, 41, 112, 0.6)",
                        display: "block",
                        marginBottom: "10px",
                      }}
                    >
                      Mon, Jan 15
                    </span>
                    <p className="blogPara">
                      Quo esse repellendus quia id. A suscipit corporis
                    </p>
                    <a
                      style={{
                        position: "absolute",
                        bottom: "0",
                        marginBottom: "10px",
                      }}
                      href="##"
                      className="blogReadmore readMorePositionFixed stretched-link mt-auto"
                    >
                      Read More
                      <ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Contact"
          style={{
            background: "#fff",
            padding: "60px 0px",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <div className="container">
            <p
              style={{
                color: "#072371",
                fontSize: "48px",
                fontWeight: 700,
              }}
            >
              Contact Us
            </p>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div
                      className="info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <GeoAlt
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Address
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        490 Wheeler Road Suite#220, <br />
                        Hauppauge New York, NY 535022 US.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className=" info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Telephone
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Call Us
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        {" "}
                        +1 631-993-8899
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "20px" }}>
                    <div
                      className=" info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Envelope
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Email
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        support@inventooly.com
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ marginTop: "20px" }}>
                    <div
                      className=" info-box"
                      style={{
                        color: "#444444",
                        background: "#fafbff",
                        padding: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Clock
                        className="bi bi-envelope"
                        style={{
                          color: "#4154f1",
                          lineHeight: "0px",
                          fontSize: "38px",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "20px",
                          color: "#012970",
                          fontWeight: "700",
                          margin: "20px 0 10px 0",
                        }}
                      >
                        Open Hours
                      </h3>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "#57646b",
                        }}
                      >
                        Monday - Friday <br />
                        9:00AM - 05:00PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 contact"
                style={{
                  background: "rgb(250, 251, 255)",
                  color: "#444444",
                  padding: "30px",
                }}
              >
                <form>
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                          setErrors({});
                        }}
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        value={email}
                        onChange={(event) => {
                          setEmail(event.target.value);
                          setErrors({});
                        }}
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "20px" }}>
                      <input
                        value={subject}
                        onChange={(event) => {
                          setSubject(event.target.value);
                          setErrors({});
                        }}
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "20px" }}>
                      <textarea
                        value={message}
                        onChange={(event) => {
                          setMessage(event.target.value);
                          setErrors({});
                        }}
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required
                        style={{
                          marginTop: "0px",
                          marginBottom: "0px",
                          height: "163px",
                        }}
                        defaultValue={""}
                      />
                    </div>
                    <div
                      className="col-md-12 text-center"
                      style={{ marginTop: "20px" }}
                    >
                      <Button
                        loading={loadingContactForm}
                        type="button"
                        onClick={submitData}
                        style={{
                          background: "#4154f1",
                          border: "0",
                          padding: "6px 30px",
                          color: "#fff",
                          transition: "0.4s",
                          borderRadius: "4px",
                        }}
                      >
                        {" "}
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer
          id="footer"
          className="footer"
          style={{
            background: "#f6f9ff",
            padding: "0 0 30px 0",
            fontSize: "14px",
          }}
        >
          <div
            className="footer-newsletter"
            style={{
              padding: "50px 0",
            }}
          >
            <div className="container">
              <div className="row justify-content-centre">
                <div className="col-lg-12 text-center">
                  <h4
                    style={{
                      fontSize: "24px",
                      margin: "0 0 10px 0",
                      padding: "0",
                      lineHeight: "1",
                      fontWeight: "700",
                      color: "#012970",
                    }}
                  >
                    Our Newsletter
                  </h4>
                  <p>Please subscribe to our newsletter for latest updates.</p>
                  <div
                    className="col-lg-6 offset-md-3"
                    style={{ margin: "0 auto" }}
                  >
                    <form
                      style={{
                        marginTop: "20px",
                        background: "#fff",
                        padding: "6px 10px",
                        position: "relative",
                        borderRadius: "4px",
                        border: "1px solid #e1ecff",
                      }}
                    >
                      <input
                        type="email"
                        name="email"
                        style={{
                          border: "0",
                          padding: "8px",
                          width: "calc(100% - 140px)",
                        }}
                      />
                      <input
                        type="submit"
                        defaultValue="Subscribe"
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          border: "0",
                          background: "#4154f1",
                          fontSize: "16px",
                          padding: "0 30px",
                          margin: "3px",
                          color: "#fff",
                          transition: "0.3s",
                          borderRadius: "4px",
                        }}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="footer-top"
            style={{
              background: "white",
              backgroundSize: "contain",
              borderBottom: "1px solid #e1ecff",
              padding: "60px 0 30px 0",
              width: "100%",
            }}
          >
            <div className="container">
              <div className="row gy-4 justify-content-between">
                <div className="col-lg-5 col-md-5 footer-info">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-centre"
                    style={{
                      textDecoration: "none",
                      marginBottom: "15px",
                      lineHeight: "1",
                    }}
                  >
                    <img
                      src={logo_final_svg}
                      alt=""
                      style={{ height: "40px", marginRight: "6px" }}
                    />
                    <span
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        color: "#012970",
                        fontFamily: '"Nunito", sans-serif',
                        marginTop: "3px",
                      }}
                    >
                      Inventooly
                    </span>
                  </a>
                  <p>
                    Inventooly makes inventory forecasting a breeze. Through
                    powerful automated analysis, it optimizes your inventory and
                    provides you with all the insights of your business, so that
                    you never miss out on an opportunity.
                  </p>
                  <div className="social-links mt-3">
                    <a
                      href="https://www.twitter.com"
                      className="twitter"
                      style={{
                        fontSize: "20px",
                        display: "inline-block",
                        color: "rgba(1, 41, 112, 0.5)",
                        lineHeight: "0",
                        marginRight: "10px",
                        transition: "0.3s",
                      }}
                    >
                      <Twitter />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="facebook"
                      style={{
                        fontSize: "20px",
                        display: "inline-block",
                        color: "rgba(1, 41, 112, 0.5)",
                        lineHeight: "0",
                        marginRight: "10px",
                        transition: "0.3s",
                      }}
                    >
                      <Facebook />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      className="instagram"
                      style={{
                        fontSize: "20px",
                        display: "inline-block",
                        color: "rgba(1, 41, 112, 0.5)",
                        lineHeight: "0",
                        marginRight: "10px",
                        transition: "0.3s",
                      }}
                    >
                      <Instagram />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      style={{
                        fontSize: "20px",
                        display: "inline-block",
                        color: "rgba(1, 41, 112, 0.5)",
                        lineHeight: "0",
                        marginRight: "10px",
                        transition: "0.3s",
                      }}
                    >
                      <Linkedin />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-6 footer-links mt-3">
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#012970",
                          textTransform: "uppercase",
                          position: "relative",
                          paddingBottom: "12px",
                        }}
                      >
                        Useful Links
                      </h4>
                      <ul
                        style={{
                          padding: "0",
                          margin: "0",
                          listStyle: "none",
                          lineHeight: "1.5",
                        }}
                      >
                        <li
                          style={{
                            padding: "10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ArrowRight />
                          <a href="#top" style={{ color: "#013298" }}>
                            Home
                          </a>
                        </li>
                        <li
                          style={{
                            padding: "10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ArrowRight />
                          <a href="#About" style={{ color: "#013298" }}>
                            About Us
                          </a>
                        </li>
                        <li
                          style={{
                            padding: "10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <ArrowRight />
                          <a
                            href="/terms-of-service"
                            style={{ color: "#013298" }}
                          >
                            Terms of service
                          </a>
                        </li>
                        <li
                          style={{
                            padding: "10px 0",
                            // display: "flex",
                            alignItems: "center",
                            display: "none",
                          }}
                        >
                          <ArrowRight />
                          <a href="##" style={{ color: "#013298" }}>
                            Privacy policy
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 footer-contact  text-md-start mt-3">
                      <h4
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#012970",
                          textTransform: "uppercase",
                          position: "relative",
                          paddingBottom: "12px",
                        }}
                      >
                        Contact Us
                      </h4>
                      <p>
                        490 Wheeler Road Suite#220, Hauppauge New York 11788{" "}
                        <br />
                        <br />
                        <strong>Phone:</strong> +1 631-993-8899
                        <br />
                        <strong>Email:</strong> support@inventooly.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div
              className="copyright"
              style={{
                textAlign: "center",
                paddingTop: "30px",
                color: "#012970",
              }}
            >
              © Copyright{" "}
              <strong>
                <span>Inventooly</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SoHome;
