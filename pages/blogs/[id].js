import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavbarInventoolyWebsite from "../../components/NavbarInventoolyWebsite";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetails from "../../components/BlogDetails";
import axios from "axios";
import Head from "next/head";
import { Box } from "@material-ui/core";
import Contectus from "../../components/Contectus";
function BlogDetail({ blogsData }) {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(false);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <Head>
            <title>{blogsData.metaTitle}</title>
            <meta name="description" content={blogsData.metaDescription} />
            <meta name="keywords" content={blogsData.metaKeywords} />
          </Head>
          <div
            className="blog-detail"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <NavbarInventoolyWebsite />
            <section>
              <div
                className="container d-flex banner-m align-items-center justify-content-centre"
                style={{
                  minHeight: "100vh",
                  padding: " 150px 0px 0px 0px",
                  overflow: "hidden",
                }}
              >
                <Box className="page pt-35" bgcolor="#fff" borderRadius={7}>
                  <div className="row d-flex justify-content-center ">
                    {
                      <BlogDetails
                        key={blogsData._id}
                        title={blogsData.blogTitle}
                        userName={blogsData.blogAutherName}
                        blogDescription={blogsData.blogDesc}
                        image={blogsData.blogImage}
                        imageAlt={blogsData.images.imageAlt}
                        imageTitle={blogsData.images.imageTitle}
                        createdAT={blogsData.createdAt}
                      />
                    }
                  </div>
                </Box>
              </div>
            </section>
            <Contectus />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
BlogDetail.getInitialProps = async (context) => {
  const { query } = context;
  // if (!context.req) {
  //   return {
  //     blogsData: {},

  //   };
  // }
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? `http://localhost:3000/api/getblogs/${query.id}`
        : "https://app.inventooly.com/api/getblogs"
    }`,
    {
      method: "GET",
    }
  );
  const { data } = await res.json();
  console.log(data);
  return { blogsData: data };
};

export default BlogDetail;
