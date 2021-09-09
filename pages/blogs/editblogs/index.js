import React, { useEffect, useState } from "react";
// import { Row, Col } from "react-bootstrap";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axiosNext from "../../../components/axios";
import AllblogsEd from "../../../components/AllblogsEd";
// import Image from "next/image";
// import "./index.css";
// import { Form, Input, InputNumber, Button } from "antd";
// import NavbarInventoolyWebsite from "./../../components/NavbarInventoolyWebsite";
// import { Upload, message } from "antd";
// import { InboxOutlined } from "@ant-design/icons";
// import axiosNext from "../../components/axios";
// import axios from "axios";
import { useRouter } from "next/router";

function Allblogs() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [allblogs, setallblogs] = useState([]);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginUser = async () => {
    try {
      let data = await axiosNext(
        async (ax) => await ax.get("/test"),
        window.localStorage
      );
      let loggedin = data.status === 401;
      console.log(data);
      setLoggedIn(loggedin);
      // if (loggedin) {
      //   router.push("/blogs/editblogs");
      // }
    } catch (error) {
      router.push("/blogs/bloggerauth");
    }
  };
  useEffect(() => {
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function deleteblog(id) {
    setloading(true);
    const { data } = await axiosNext(
      async (ax) => await ax.delete(`/fetchblogs/${id}`),
      window.localStorage
    );
    fetchAllBlogs();
  }

  const fetchAllBlogs = async () => {
    const { data } = await axiosNext(
      async (ax) => await ax.get("/fetchblogs"),
      window.localStorage
    );
    setallblogs(data.allblogs);
    setloading(false);
  };
  useEffect(() => {
    fetchAllBlogs();
  }, [loading]);

  return (
    <div className="allblogs_editors">
      <div className="container position-relative">
        <Box className="mainContEditorPage">
          <div
            className="logoutBtn "
            style={{ position: "absolute", right: "20px" }}
          >
            <button
              style={{ marginRight: "5px" }}
              className="btn btn-success "
              onClick={() => {
                router.push("/blogs/blogeditor");
              }}
            >
              Add Blog
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                window.localStorage.removeItem("authToken");
                router.push("/blogs/bloggerauth");
              }}
            >
              Logout
            </button>
          </div>
          <Box className="page pt-35" bgcolor="#fff" borderRadius={7}>
            <Row className="m-0">
              {loading ? (
                <div className="loading">
                  {/*  <img src="/loading.gif" alt="loading" /> */}
                  <h1>Loading...</h1>
                </div>
              ) : (
                allblogs.map((blog, index) => {
                  return (
                    <AllblogsEd
                      blogNo={blog._id}
                      key={blog._id}
                      image={blog.blogImage}
                      auther={blog.blogAutherName}
                      createdAt={blog.createdAt}
                      title={blog.blogTitle}
                      description={blog.blogDesc}
                      deleteblog={deleteblog}
                    />
                  );
                })
              )}
            </Row>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Allblogs;

// export async function getStaticProps() {
//   const { data } = await axiosNext(
//     async () => await axios.get("/fetchblogs"),
//     localStorage
//   );
//   console.log(data);
// }
