import React, { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";
import Image from "next/image";
import inventooly from "../public/frontend/media/logo_final-svg.png";
import axios from "axios";
import Link from "next/link";
// import twitter from "../../assets/icons/5296516_tweet_twitter_twitter logo_icon.svg";
// import facebook from "../../assets/icons/5365678_fb_facebook_facebook logo_icon.svg";
// import linkedin from "../../assets/icons/5296501_linkedin_network_linkedin logo_icon.svg";
// import instagram from "../../assets/icons/5296765_camera_instagram_instagram logo_icon.svg";
function Footer() {
  const [email, setemail] = useState("");
  async function sendEmail(e) {
    // e.preventDefault();
    // const { data } = await axios.post("/newsletter", {
    //   email,
    // });
    // console.log(data);
  }
  return (
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
                    placeholder="Your Email"
                    style={{
                      border: "0",
                      padding: "8px",
                      width: "100%",
                      outline: "none",
                    }}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <input
                    type="button"
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
                    // onClick={sendEmail()}
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
                <Image
                  style={{ height: "40px", marginRight: "6px" }}
                  src={inventooly}
                  height="40px"
                  width="40px"
                  alt=""
                />
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                    color: "#012970",
                    fontFamily: '"Nunito", sans-serif',
                    marginTop: "3px",
                    marginLeft: "6px",
                  }}
                >
                  Inventooly
                </span>
              </a>
              <p>
                Inventooly makes inventory forecasting a breeze. Through
                powerful automated analysis, it optimizes your inventory and
                provides you with all the insights of your business, so that you
                never miss out on an opportunity.
              </p>
              <div className="social-links mt-3">
                <a
                  href="https://www.twitter.com"
                  className="twitter"
                  style={{
                    fontSize: "20px",
                    // display: "inline-block",
                    color: "rgba(1, 41, 112, 0.5)",
                    lineHeight: "0",
                    marginRight: "10px",
                    transition: "0.3s",
                    display: "none",
                  }}
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.facebook.com/Inventooly/"
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
                  href="https://www.instagram.com/inventoolytool/"
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
                  href="https://www.linkedin.com/company/inventooly/"
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
                      <Link href="/#top">
                        <a style={{ color: "#013298", textDecoration: "none" }}>
                          Home
                        </a>
                      </Link>
                    </li>
                    <li
                      style={{
                        padding: "10px 0",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ArrowRight />
                      <Link href="/#About">
                        <a style={{ color: "#013298", textDecoration: "none" }}>
                          About Us
                        </a>
                      </Link>
                    </li>

                    <li
                      style={{
                        padding: "10px 0",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ArrowRight />
                      <Link href="/terms-of-service">
                        <a style={{ color: "#013298", textDecoration: "none" }}>
                          Terms of service
                        </a>
                      </Link>
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
                    490 Wheeler Road Suite#220, Hauppauge New York 11788 <br />
                    <br />
                    <strong>Phone:</strong> +1 (888) 928-4079
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
  );
}

export default Footer;
