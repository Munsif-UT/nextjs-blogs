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
        <Image
          src={`/uploads/${image}` || blogs3}
          alt={""}
          title={""}
          width={1024}
          height={778}
        />
        <div
          className="Image-overlay blogOverlay"
          style={{
            textAlign: "left",
            marginBottom: "40px",
            padding: "20px 20px 0px 20px",
          }}
        >
          <span className="blogDate">
            {new Date(date).toLocaleString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }) || "2/06/2021"}
          </span>
          <h2
            className="blogParaHome"
            style={{
              bottom: "0",
              marginBottom: "10px",
            }}
          >
            {title ||
              "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis"}
          </h2>
          <a
            href={`/blogs/${blogNo}`}
            className="blogReadmore readMorePositionFixed stretched-link "
          >
            Read More
            <ArrowRight style={{ marginLeft: "5px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogsForHome;
