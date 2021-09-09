import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Clock,
  Telephone,
  GeoAlt,
  Envelope,
  List,
} from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import Link from "next/link";
// import “bootstrap/dist/css/bootstrap.min.css”;
// import blogs from "../../assets/frontend/media/logo_final-svg.png";
import { useSelector } from "react-redux";
// import mainImage5 from "../../assets/frontend/media/mainImage5.png";
// import team from "../../assets/frontend/media/media/team.svg";
// import chatbot from "../../component/chatbot/chatbot";
import blogs1 from "../public/frontend/media/blogs1.jpg";
import blogs2 from "../public/frontend/media/blogs1.jpg";
import blogs3 from "../public/frontend/media/blogs1.jpg";
import banner_img from "../public/frontend/media/3497643.jpg";
import feature1 from "../public/frontend/media/features1.svg";
import feature2 from "../public/frontend/media/features2.svg";
import feature3 from "../public/frontend/media/features3.svg";
import feature4 from "../public/frontend/media/features4.svg";
import feature5 from "../public/frontend/media/features5.svg";
import feature6 from "../public/frontend/media/features6.svg";
import NavbarInventoolyWebsite from "../components/NavbarInventoolyWebsite";
import img1 from "../public/web-banner-urtasker-1.jpg";
import img2 from "../public/web-banner-urtasker-2.jpg";
import img3 from "../public/web-banner-urtasker-3.jpg";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import checkStatus from "../config/checkStatus";
import Image from "next/image";
const FrontFeatures = () => {
  const URL = checkStatus();
  //   chatbot("https://embed.tawk.to/60e71436d6e7610a49aa494e/1fa3adtm9");
  //navbar scroll when active state

  return (
    <div
      classNmae="fhomepage"
      style={{ fontFamily: "Nunito, sans-serif", backgroundColor: "#fff" }}
      id="top"
    >
      <NavbarInventoolyWebsite />
      <section
        className=""
        style={{
          padding: "60px 0",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <div
            className="row gx-0"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div className="col-md-6 mt-3 mb-3 textColumn">
              <h2 className="h1Column">
                Make Smarter Supply Chain Decisions With Inventooly’s Inventory
                Management Software
              </h2>
              <h2 className="h2Column">
                Reinvent supply chain management, seize market-ready
                opportunities, and optimize your entire inventory system with
                simple, clever, and intuitive software. <p />
                <Link href={`${URL}onboard`}>
                  <a>
                    <button className="btn btn-lg btnMainFeatures">
                      Get Started for Free
                    </button>
                  </a>
                </Link>
              </h2>
            </div>
            <div className="col-md-6">
              <Image src={banner_img} style={{ width: "100%" }} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div
        id="Features"
        className="container mt-3 mb-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="col-md-7 offset-md-3 text-align: center">
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
            Features
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
            What Inventooly Can Do For You{" "}
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100" style={{ borderRadius: "10px" }}>
              <div className="inner" style={{}}>
                <Image
                  style={{ height: "100%", width: "100%", padding: "20px" }}
                  src={feature1}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card-body"
                style={{
                  borderBottom: "#4154f1 3px solid",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title cardTitle">
                  Strategic Procurement Management
                </h5>
                <p className="card-text h2Column">
                  Optimize your spending and source products from the best
                  suppliers. Avoid getting stuck in a spiral of bad decisions
                  and discover which vendors are best for your budget so you can
                  scale quickly and efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100" style={{ borderRadius: "10px" }}>
              <div className="inner" style={{}}>
                <Image
                  style={{ height: "100%", width: "100%", padding: "20px" }}
                  src={feature2}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card-body"
                style={{
                  borderBottom: "#4154f1 3px solid",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title cardTitle">
                  Powerful Inventory Forecasting{" "}
                </h5>
                <p className="card-text h2Column">
                  Automated forecasts identify market opportunities and trends
                  so you can jump on their success. Inventooly eliminates the
                  repetitive work of manual forecasting and provides razor-sharp
                  insights.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100" style={{ borderRadius: "10px" }}>
              <div className="inner" style={{}}>
                <Image
                  style={{ height: "100%", width: "100%", padding: "20px" }}
                  src={feature3}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card-body"
                style={{
                  borderBottom: "#4154f1 3px solid",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title cardTitle">
                  Effortless Order Management
                </h5>
                <p className="card-text h2Column">
                  The process of receiving, tracking, and fulfilling customer
                  orders can be time-consuming. Inventooly ensures seamless
                  transitions between each step, providing real-time information
                  so you can stay on top of orders.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "40px" }}>
            <div className="card h-100" style={{ borderRadius: "10px" }}>
              <div className="inner">
                <Image
                  style={{ height: "100%", width: "100%", padding: "20px" }}
                  src={feature4}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card-body"
                style={{
                  borderBottom: "#4154f1 3px solid",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title cardTitle">
                  Superior Business Insights
                </h5>
                <p className="card-text h2Column">
                  Get granular data insights about your stock levels. Inventooly
                  drills down into demand patterns and order quantity
                  fluctuations so you can make confident decisions and
                  successful predictions moving forward.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "40px" }}>
            <div className="card h-100" style={{ borderRadius: "10px" }}>
              <div className="inner" style={{}}>
                <Image
                  style={{ height: "100%", width: "100%", padding: "20px" }}
                  src={feature5}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card-body"
                style={{
                  borderBottom: "#4154f1 3px solid",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title cardTitle">
                  Centralized Sales Channels
                </h5>
                <p className="card-text h2Column">
                  Keep on top of your inventory performance across all sales
                  channels. No more toggling between platforms to see your
                  results. Instead, Inventooly brings insights from all your
                  sales channels together for rapid growth.
                </p>
              </div>
            </div>
          </div>
          <div className="col" style={{ marginTop: "40px" }}>
            <div className="card h-100" style={{ borderRadius: "10px" }}>
              <div className="inner" style={{}}>
                <Image
                  style={{ height: "100%", width: "100%", padding: "20px" }}
                  src={feature6}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div
                className="card-body"
                style={{
                  borderBottom: "#4154f1 3px solid",
                  borderRadius: "10px",
                }}
              >
                <h5 className="card-title cardTitle">
                  Real-Time Notifications
                </h5>
                <p className="card-text h2Column">
                  To Get instant updates on your stock levels and get notified
                  when you’re running low. Inventooly tightens up your supply
                  chain so you never have to display the dreaded “out-of-stock”
                  sticker again
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
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
            display: "none",
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
                  <Image src={blogs1} alt="" />
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
                      Mon,Jan 15
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
                  <Image src={blogs2} alt="" />
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
                  <Image src={blogs3} alt="" />
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
                        Hauppauge New York, NY 11788 US.
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
                <form action method="POST" className="php-email-form">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "20px" }}>
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-md-12" style={{ marginTop: "20px" }}>
                      <textarea
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
                      <button
                        type="submit"
                        style={{
                          background: "#4154f1",
                          border: "0",
                          padding: "10px 30px",
                          color: "#fff",
                          transition: "0.4s",
                          borderRadius: "4px",
                        }}
                      >
                        {" "}
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default FrontFeatures;
