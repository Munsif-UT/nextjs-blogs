import styles from "../styles/Home.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { role } from "../../enumerations";
// import { isEmpty } from "lodash";
import { useHistory } from "react-router-dom";
// import { onContactForm } from "../../features/authSlice";
// import "./Sohome.css";
// import “bootstrap/dist/css/bootstrap.min.css”;
import blogs from "../public/frontend/media/logo_final-svg.png";
import mainImage5 from "../public/frontend/media/mainImage5.png";
// import team from "../public/frontend/media/media/team.svg";
import Team from "../public/team.jsx";
import cardsSec2 from "../public/frontend/media/cardsSec2.svg";
import cardsSec1 from "../public/frontend/media/cardsSec1.svg";
import cardsSec3 from "../public/frontend/media/cardsSec3.svg";
import process from "../public/frontend/media/process.svg";
import report_analytics from "../public/frontend/media/report_analytics.svg";
import purchase from "../public/frontend/media/purchase.svg";
import images from "../public/dask.png";
import karma from "../public/karma.png";
import img1 from "../public/web-banner-urtasker-1.jpg";
import img2 from "../public/web-banner-urtasker-2.jpg";
import img3 from "../public/web-banner-urtasker-3.jpg";
import urtasker from "../public/urtasker.svg";

import blogs2 from "../public/frontend/media/blogs1.jpg";
import blogs3 from "../public/frontend/media/blogs1.jpg";
// import logo_final_svg from "../assets/frontend/media/logo_final-svg.png";
import channels from "../public/frontend/media/sales_channel.svg";
import light_bg2 from "../public/frontend/media/light-bg2.png";
import footer_bg3 from "../public/frontend/media/footer-bg3.png";
// import { useDispatch, useSelector } from "react-redux";
// import { checkToken } from "../../features/authSlice";
// import chatbot from "../../component/chatbot/chatbot";
import NavigationPreloadManager from "../components/NavbarInventoolyWebsite";
import Footer from "../components/Footer";
import BlogsForHome from "../components/BlogsForHome";
import blogsData from "./../data/blogsData";
import Contectus from "../components/Contectus";
import axiosNext from "../components/axios";
import Link from "next/link";
import checkStatus from "../config/checkStatus";

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const Home = (props) => {
  const [homeBlogs, setHomeBlogs] = useState([]);
  // const [HomeBlogsState, setHomeBlogsState] = useState(HomeBlogs);
  // const homeBlogsCopy = HomeBlogsState.slice(0, 3);
  // const blogsDataCopy = blogsData.map((blog) => blog);
  // blogsDataCopy.length = 3; //to get only first 3 values of array
  //navbar scroll when active state
  const URL = checkStatus();
  const history = useHistory();
  // const dispatch = useDispatch();
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
      // dispatch(onContactForm(data));
    }
  };

  const fetchBlogs = async () => {
    try {
      let data = await axiosNext(
        async (ax) => await ax.get("/getblogs"),
        window.localStorage
      );
      setHomeBlogs(data?.data?.allblogs?.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (doneContactForm) {
  //     setName("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //   }
  //   if (errContactForm) {
  //     setErrors(errContactForm);
  //   }
  // }, []);

  //navbar scroll changeBackground function
  const changeBackground = () => {
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
    <div
      className="fhomepage"
      style={{
        fontFamily: "Nunito, sans-serif",
        backgroundColor: "#fff",
        scrollBehavior: "smooth",
      }}
      id="top"
    >
      <NavigationPreloadManager />
      <section
        className="d-flex banner-m align-items-center justify-content-centre"
        style={{
          height: "100vh",
          background: `url("/frontend/media/light-bg2.png") top center no-repeat`,
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
              <Link href={`${URL}onboard`}>
                <a
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
              </Link>
            </div>
            <div className="col-lg-6 col-md-5">
              <Image
                src={mainImage5}
                className="Image-fluid"
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
                <Link href={`${URL}onboard`}>
                  <a
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
                </Link>
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
                    <Image
                      style={{ width: "100%", height: "100%", padding: "20px" }}
                      className="card-Image-top"
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
                    <Image
                      style={{ width: "100%", height: "100%", padding: "20px" }}
                      className="card-Image-top"
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
                    <Image
                      style={{ width: "100%", height: "100%", padding: "20px" }}
                      className="card-Image-top"
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
                    <Link href={`${URL}onboard`}>
                      <a className="btn " style={{ width: "300px" }}>
                        Get Started For Free
                      </a>
                    </Link>
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
                  <Link href={`${URL}onboard`}>
                    <a>
                      <button
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
                    </a>
                  </Link>
                </h2>
              </div>
              <div className="col-md-6 text-center content-vertical">
                <Image style={{ width: "70%" }} src={process} alt="" />
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
                <Image src={report_analytics} style={{ width: "80%" }} alt="" />
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
                  <Link href={`${URL}onboard`}>
                    <a>
                      <button
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
                    </a>
                  </Link>
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
                  <Link href={`${URL}onboard`}>
                    <a>
                      <button
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
                    </a>
                  </Link>
                </h2>
              </div>
              <div className="col-md-6 text-center content-vertical">
                <Image src={purchase} style={{ width: "80%" }} alt="" />
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
                <Image src={channels} style={{ width: "80%" }} alt="" />
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
                  <Link href={`${URL}onboard`}>
                    <a>
                      <button
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
                    </a>
                  </Link>
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
                    <Link href={`${URL}onboard`}>
                      <a className="btn " style={{ width: "300px" }}>
                        Get Started For Free
                      </a>
                    </Link>
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
                    <Image
                      style={{ borderRadius: "50%", height: "100%" }}
                      className="card-Image-top cardTestimonialsImage"
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
                    <Image
                      style={{ borderRadius: "50%", height: "100%" }}
                      className="card-Image-top cardTestimonialsImage"
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
                      stressful since I started using Inventooly&apos;s
                      services.
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
                    <Image
                      style={{ borderRadius: "50%", height: "100%" }}
                      className="card-Image-top cardTestimonialsImage"
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
              {homeBlogs.map((blog) => (
                <BlogsForHome
                  key={blog._id}
                  date={blog.createdAt}
                  title={blog.blogTitle}
                  blogNo={blog.permalink}
                  image={blog.blogImage}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Contect us */}
        <Contectus />
        <Footer />
      </main>
    </div>
  );
};
export default Home;
// export async function getServerSideProps() {
//   console.log("getServerSideProps", process.env);

//   return {
//     props: {
//       process: process,
//     },
//   };
// }
