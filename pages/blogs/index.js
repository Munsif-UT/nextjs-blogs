import React from "react";
import NavbarInventoolyWebsite from "../../components/NavbarInventoolyWebsite";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";
import blogs3 from "../../public/frontend/media/blogs1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
// import blogsData from "../../data/blogsData";

// import Image from "next/image";
// import Link from "next/link";
import { Person, Clock, ChatDots } from "react-bootstrap-icons";
import Blog from "../../components/Blog";
import blogsData from "./../../data/blogsData";
import axios from "axios";
import Head from "next/head";
import { Box } from "@material-ui/core";
import Contectus from "../../components/Contectus";
function blogs({ Blogs }) {
  console.log(Blogs);
  return (
    <div className="blogsCont" style={{ fontFamily: "Nunito, sans-serif" }}>
      <Head>
        <title>Inventooly Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Inventooly Blogs" key="title" />
        <meta name="description" content="Inventooly Blogs" />
      </Head>
      <NavbarInventoolyWebsite />
      <section>
        <div
          className="container d-flex banner-m align-items-center justify-content-centre"
          style={{
            minHeight: "100vh",
            padding: "150px 0px",
            overflow: "hidden",
          }}
        >
          <Box className="page pt-35" bgcolor="#fff" borderRadius={7}>
            <Row className="m-0 ">
              {Blogs.map((blog) => (
                <Blog
                  key={blog._id}
                  image={blog.blogImage}
                  blogTitle={blog.blogTitle}
                  auther={blog.blogAutherName}
                  blogDesc={blog.blogDesc}
                  metaDescription={blog.metaDescription}
                  metaTitle={blog.metaTitle}
                  metaKeywords={blog.metaKeywords}
                  imagetitle={blog.images.imageTitle}
                  imageAlt={blog.images.imageAlt}
                  permalink={blog.permalink}
                  createdAT={blog.createdAt}
                />
              ))}
            </Row>
          </Box>
        </div>
      </section>
      <Contectus />
      <Footer />
    </div>
  );
}

export default blogs;
export async function getServerSideProps() {
  // const { data } = await axios.get("/getblogs");
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/getblogs"
        : "https://app.inventooly.com/api/getblogs"
    }`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  console.log(data.allblogs);
  if (!data) {
    return {
      props: {
        data,
      },
    };
  }
  return {
    props: {
      Blogs: data.allblogs,
    },
  };
}
