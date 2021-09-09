import React from "react";
import blogs3 from "../public/frontend/media/blogs1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Person, Clock, ChatDots } from "react-bootstrap-icons";
import ReactHtmlParser from "react-html-parser";
function Blog({
  blogNo,
  image,
  blogTitle,
  auther,
  imageAlt,
  blogDesc,
  permalink,
  imagetitle,
  createdAT,
}) {
  return (
    <div className="col-md-4 col-sm-6">
      <article className="article">
        <div className="article_image">
          <Image
            src={`/uploads/${image}` || blogs3}
            alt={imageAlt}
            title={imagetitle}
            className="img-fluid"
            width={500}
            height={350}
          />
        </div>
        <h2 className="article_title" style={{ minHeight: "100px" }}>
          <Link href={`/blogs/${permalink}`}>
            <a className="commonLinkStyle">
              {blogTitle.slice(0, 50) ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicdistinctio quibusdam ex."}
            </a>
          </Link>
        </h2>
        <div className="article_meta">
          <ul>
            <li className="d-flex align-items-center">
              <Person />
              <p>{auther || "blog.userName"}</p>
            </li>
            <li className="d-flex align-items-center">
              <Clock />
              <p>
                {new Date(createdAT).toLocaleString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }) || "2/06/2021"}
              </p>
            </li>
          </ul>
        </div>
        <div
          className="article_content"
          style={{ minHeight: "230px", position: "relative" }}
        >
          <p>
            {ReactHtmlParser(
              blogDesc.length <= 200
                ? blogDesc
                : `${blogDesc.slice(0, 200)} ...`
            ) ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum culpa cum reprehenderit quibusdam inventore eaque sequi ipsam,dolores sapiente quam eligendi debitis aperiam eveniet expedita dolorum assumenda facere dolor."}
          </p>
          <div className="read-more">
            <Link
              // href={`/blogs/${blogNo} `}
              href={{
                pathname: "/blogs/[id]",
                query: { id: permalink },
              }}
            >
              <a className="commonLinkStyle" style={{ color: "white" }}>
                Read More
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Blog;
