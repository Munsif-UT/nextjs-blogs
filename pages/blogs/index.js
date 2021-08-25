import React from "react";
import NavbarInventoolyWebsite from "../../components/NavbarInventoolyWebsite";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/Footer";
import blogs3 from "../../public/frontend/media/blogs1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import blogsData from "../../data/blogsData";

// import Image from "next/image";
// import Link from "next/link";
import { Person, Clock, ChatDots } from "react-bootstrap-icons";
import Blog from "../../components/Blog";
import blogsData from "./../../data/blogsData";
console.log(blogsData);
function blogs() {
  return (
    <div className="blogsCont">
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
            {blogsData.map((blog) => (
              <Blog
                key={blog.blogNo}
                blogNo={blog.blogNo}
                title={blog.title}
                userName={blog.userName}
                comments={blog.comments}
                chat={blog.chat}
                content={blog.content}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default blogs;
