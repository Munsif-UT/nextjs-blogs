import React, { useEffect, useState } from "react";
// import { Row, Col } from "react-bootstrap";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "antd/dist/antd.css";
// import CKEditor from "react-ckeditor-component";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "../../../components/Blog";
import axiosNext from "../../../components/axios";
import axios from "axios";
import { set } from "mongoose";
import AllblogsEd from "../../../components/AllblogsEd";
// import Image from "next/image";
// import "./index.css";
// import { Form, Input, InputNumber, Button } from "antd";
// import NavbarInventoolyWebsite from "./../../components/NavbarInventoolyWebsite";
// import { Upload, message } from "antd";
// import { InboxOutlined } from "@ant-design/icons";
// import axiosNext from "../../components/axios";
// import axios from "axios";
// import { useRouter } from "next/router";

function Allblogs() {
  const [loading, setloading] = useState(true);
  const [allblogs, setallblogs] = useState([]);

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
    console.log("inside useEffect");
    fetchAllBlogs();
  }, [loading]);

  return (
    <div className="allblogs_editors">
      <div className="container">
        <Box className="mainContEditorPage">
          <Box className="page pt-35" bgcolor="#fff" borderRadius={7}>
            <Row className="m-0 ">
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
                      title={blog.title}
                      description={blog.metaDescription}
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
