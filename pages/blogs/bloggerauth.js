import React, { useState, useEffect } from "react";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { Form as FormAntd, Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import blogs from "../../public/frontend/media/logo_final-svg.png";
import Image from "next/image";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Link from "next/link";
import axiosNext from "../../components/axios";
import axios from "axios";
import { useRouter } from "next/router";

function Signin() {
  const [togglePassword, setTogglePassword] = useState(true);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginUser = async () => {
    try {
      let data = await axiosNext(
        async (ax) => await ax.get("/test"),
        window.localStorage
      );
      let loggedin = data.statusText === "OK";
      console.log(data);
      setLoggedIn(loggedin);
      if (loggedin) {
        router.push("/blogs/editblogs");
      }
    } catch (error) {
      router.push("/blogs/bloggerauth");
    }
  };
  useEffect(() => {
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  console.log(isValidEmail(email));
  const submitData = async () => {
    if (isValidEmail(email)) {
      if (!email || !pass) {
        alert("Email or password is required!");
      } else {
        try {
          const { data } = await axiosNext(
            async () =>
              await axios.post("/login", {
                email,
                password: pass,
              }),
            localStorage
          );
          localStorage.setItem("authToken", data.token);
          axios.defaults.headers.common = {
            Authorization: `bearer ${data.token}`,
          };
          if (data.token) {
            router.push("/blogs/editblogs");
          }
        } catch (error) {
          alert("Invalid email or password!");
        }
      }
    } else {
      alert("Email is invalid");
    }
  };
  return (
    <div
      className="main_signup_page"
      style={{
        background: `url("/frontend/media/bgImg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="div"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              <Link href="/">
                <a
                  style={{
                    margin: "10px",
                    float: "right",
                    padding: "5px 19px",
                    background: "white",
                    outline: "none",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "18px",
                    letterSpacing: "1px",
                    transition: "1s",
                    border: "2px solid #4154f1",
                    marginBottom: "20px",
                    boxShadow: "rgb(65 84 241 / 40%) 0px 5px 30px",
                    fontFamily: "Nunito, sans-serif",
                    textDecoration: "none",
                    background: "#4154f1",
                  }}
                >
                  Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pg__signup">
        <div className="container">
          <div className="row">
            <div
              className="content__wrapper col-md-11 col-lg-7 col-xs-12 col-sm-12"
              style={{ background: "white", margin: "0 auto" }}
            >
              <div className="row">
                <div
                  className="content__wrapper_right col-sm-12 col-md-12 col-lg-12 col-xs-12"
                  style={{ padding: "40px" }}
                >
                  <div
                    className="content__wrapper_right__form__wrapper"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="logo__signup__page"
                      style={{ textAlign: "center" }}
                    >
                      <a
                        className="navbar-brand navigationBrand"
                        href="/home"
                        style={{
                          fontWeight: "700",
                          letterSpacing: "1px",
                          color: "#012970 ",
                          fontFamily: "Nunito, sans-serif",
                          marginTop: "3px",
                          fontSize: "40px",
                          marginBottom: "10px",
                        }}
                      >
                        <Image
                          src={blogs}
                          style={{
                            marginRight: "6px",
                            marginTop: "5px",
                            height: "50px",
                            width: "50px",
                          }}
                          alt=""
                          width={30}
                          height={30}
                          className="d-inline-block align-text-top"
                        />
                        Inventooly
                      </a>
                    </div>
                    <div className="heading__signup">
                      <p
                        style={{
                          marginTop: "0",
                          marginBottom: "10px",
                          fontSize: "26px",
                          fontWeight: "bold",
                          color: "rgb(1, 41, 112)",
                        }}
                      >
                        Sign In
                      </p>
                    </div>
                    <div style={{ width: "100%" }}>
                      <div className="from__wrapper_email">
                        <FormAntd.Item
                          hasFeedback
                          style={{ marginBottom: "0px" }}
                        >
                          <input
                            className="comon_input"
                            type="text"
                            autoComplete="none"
                            name="email"
                            id="email"
                            placeholder="Email*"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <div
                            className="signin__Logo"
                            style={{ cursor: "pointer" }}
                          >
                            <AlternateEmailIcon />
                          </div>
                        </FormAntd.Item>
                      </div>
                      <div className="from__wrapper_pass">
                        <FormAntd.Item
                          hasFeedback
                          style={{ marginBottom: "0px" }}
                        >
                          <input
                            className="comon_input"
                            type={togglePassword ? "password" : "text"}
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={pass}
                            onChange={(e) => {
                              setPass(e.target.value);
                            }}
                            autoComplete="off"
                          />
                          <div
                            className="signin__Logo"
                            style={{ cursor: "pointer" }}
                          >
                            {togglePassword ? (
                              <VisibilityOffIcon
                                onClick={() => setTogglePassword(false)}
                              />
                            ) : (
                              <VisibilityIcon
                                onClick={() => setTogglePassword(true)}
                              />
                            )}
                          </div>
                        </FormAntd.Item>
                      </div>
                      <div
                        className="form__wrapper__sunmitButton"
                        style={{ textAlign: "center" }}
                      >
                        <Button id="submit" onClick={submitData}>
                          Login
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
