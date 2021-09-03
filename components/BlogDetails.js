import React from "react";
import blogs3 from "../public/frontend/media/blogs1.jpg";
import Image from "next/image";
import ReactHtmlParser from "react-html-parser";
// import Link from "next/link";
import { Person, Clock, ChatDots } from "react-bootstrap-icons";
function BlogDetails({
  image,
  title,
  userName,
  blogDescription,
  imageAlt,
  imageTitle,
  createdAT,
}) {
  return (
    <div className="col-md-12">
      <article className="article">
        <div className="article_image">
          <Image
            src={`/uploads/${image}` || blogs3}
            alt={imageAlt}
            title={imageTitle}
            className="img-fluid"
            width={400}
            height={300}
          />
        </div>
        <h2 className="article_title">
          {(title && title.slice(0, 100)) ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicdistinctio quibusdam ex."}
        </h2>
        <div className="article_meta">
          <ul>
            <li className="d-flex align-items-center">
              <Person />

              <p>{userName || "blog.userName"}</p>
            </li>
            <li className="d-flex align-items-center">
              <Clock />
              <p>{createdAT || "blog.chat"}</p>
            </li>
            {/* <li className="d-flex align-items-center">
              <ChatDots />
              <p>{comments || "blog.comments"}</p>
            </li> */}
          </ul>
        </div>
        <div className="article_content">
          <p className="descPara">
            {ReactHtmlParser(blogDescription) ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum culpa cum reprehenderit quibusdam inventore eaque sequi ipsam,dolores sapiente quam eligendi debitis aperiam eveniet expedita dolorum assumenda facere dolor."}
          </p>
          {/* <blockquote className="article_blockquote">
            <p>{blockquote || "This is a block Quote"}</p>
          </blockquote> */}
          {/* <p className="descPara">{desc1 || "this is another discription"}</p> */}
        </div>
      </article>
    </div>
  );
}

export default BlogDetails;
