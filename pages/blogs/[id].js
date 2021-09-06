import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavbarInventoolyWebsite from "../../components/NavbarInventoolyWebsite";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetails from "../../components/BlogDetails";
import axios from "axios";
import Head from "next/head";
function BlogDetail({ blogsData }) {
  const [loading, setloading] = useState(false);
  // const [blogsData, setblogsData] = useState({});
  // async function fetchSpecificBlog() {
  //   // console.log(router.query.id);
  //   const { data } = await axiosNext(
  //     async (ax) => await ax.get(`/fetchblogs/${router.query.id}`),
  //     window.localStorage
  //   );
  //   setloading(false);
  //   setblogDetail(data.data);
  // }
  // useEffect(() => {
  //   fetchSpecificBlog();
  // }, []);
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
          <div className="blog-detail">
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
                <div className="row">
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
              </div>
            </section>
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
  const res = await fetch(`http://localhost:3000/api/getblogs/${query.id}`, {
    method: "GET",
  });
  const { data } = await res.json();
  console.log(data);
  return { blogsData: data };
};

export default BlogDetail;
