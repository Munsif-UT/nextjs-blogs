import React from "react";
import Footer from "../../components/Footer";
import NavbarInventoolyWebsite from "../../components/NavbarInventoolyWebsite";
import { useRouter } from "next/router";
import blogsData from "./../../data/blogsData";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetails from "../../components/BlogDetails";
function BlogDetail() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="blog-detail">
      <NavbarInventoolyWebsite />
      <section>
        <div
          className="container d-flex banner-m align-items-center justify-content-centre"
          style={{
            minHeight: "100vh",
            /* background: `url("/frontend/media/light-bg2.png") top center no-repeat`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", */
            padding: "150px 0px",
            overflow: "hidden",
          }}
        >
          <div className="row">
            {blogsData
              .filter((blog) => blog.blogNo === parseInt(router.query.id))
              .map((blog) => (
                <BlogDetails
                  key={blog.blogNo}
                  blogNo={blog.blogNo}
                  title={blog.title}
                  userName={blog.userName}
                  comments={blog.comments}
                  chat={blog.chat}
                  content={blog.content}
                  blockquote={blog.blockquote}
                  desc1={blog.desc1}
                />
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BlogDetail;
