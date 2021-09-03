import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import NavbarInventoolyWebsite from "../../components/NavbarInventoolyWebsite";
import { useRouter } from "next/router";
import blogsData from "./../../data/blogsData";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetails from "../../components/BlogDetails";
import axios from "axios";
import { set } from "mongoose";
import Head from "next/head";
function BlogDetail() {
  const [blogsData, setblogsData] = useState({});
  const [loading, setloading] = useState(true);
  const router = useRouter();
  console.log(router.query.id);
  console.log(router.query);
  useEffect(async () => {
    setloading(true);
    const res = await fetch(
      `http://localhost:3000/api/getblogs/${router.query.id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    setblogsData(data.data);
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

export default BlogDetail;
// export async function getServerSideProps({ params }) {
//   console.log(params.id);
//   const { data } = await axios.get(
//     `https://localhost:3000/api/getblogs/${params.id}`
//   );
//   return {
//     props: {
//       data,
//     },
//   };
// }
