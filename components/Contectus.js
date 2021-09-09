import React, { useState } from "react";
import {
  ArrowRight,
  Clock,
  Telephone,
  GeoAlt,
  Envelope,
} from "react-bootstrap-icons";
import { Button } from "antd";
function Contectus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

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
  return (
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
                    +1 (888) 928-4079
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
                    type="button"
                    // onClick={submitData}
                    style={{
                      background: "#4154f1",
                      border: "0",
                      padding: "6px 30px",
                      color: "#fff",
                      transition: "0.4s",
                      borderRadius: "4px",
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contectus;
