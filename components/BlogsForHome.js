import React from "react";
import blogs1 from "../public/frontend/media/blogs1.jpg";
import Image from "next/image";
import { ArrowRight } from "react-bootstrap-icons";
function BlogsForHome({ blogNo, date, title, image }) {
  return (
    <div className="col-md-4 ">
      <div
        className="card cardHeight"
        style={{
          padding: "4px",
          textAlign: "center",
          width: "100%",
          borderRadius: "5px",
          boxShadow: "0px 0 5px rgb(1 41 112 / 8%)",
          border: "none ",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Image src={image || blogs1} alt="" />
        <div
          className="Image-overlay blogOverlay"
          style={{
            textAlign: "left",
            marginBottom: "40px",
            padding: "20px 20px 0px 20px",
          }}
        >
          <span
            className="blogDate"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "rgba(1, 41, 112, 0.6)",
              display: "block",
              marginBottom: "10px",
            }}
          >
            {date || "Mon, Jan 15"}
          </span>
          <p
            className="blogPara"
            style={{
              bottom: "0",
              marginBottom: "10px",
            }}
          >
            {title ||
              "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis"}
          </p>
          <a
            style={{
              position: "absolute",
              bottom: "0",
              marginBottom: "10px",
            }}
            href={`/blogs/${blogNo}`}
            className="blogReadmore readMorePositionFixed stretched-link "
          >
            Read More
            <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogsForHome;
