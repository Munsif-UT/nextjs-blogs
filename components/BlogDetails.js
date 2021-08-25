import React from "react";
import blogs3 from "../public/frontend/media/blogs1.jpg";
import Image from "next/image";
// import Link from "next/link";
import { Person, Clock, ChatDots } from "react-bootstrap-icons";
function BlogDetails({
  blogNo,
  image,
  title,
  userName,
  comments,
  chat,
  content,
  blockquote,
  desc1,
}) {
  return (
    <div className="col-md-6">
      <article className="article">
        <div className="article_image">
          <Image src={image || blogs3} alt="blog-1" className="img-fluid" />
        </div>
        <h2 className="article_title">
          <a href={`/blogs/${blogNo}`} className="commonLinkStyle">
            {(title && title.slice(0, 100)) ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicdistinctio quibusdam ex."}
          </a>
        </h2>
        <div className="article_meta">
          <ul>
            <li className="d-flex align-items-center">
              <Person />

              <p>{userName || "blog.userName"}</p>
            </li>
            <li className="d-flex align-items-center">
              <Clock />
              <p>{chat || "blog.chat"}</p>
            </li>
            <li className="d-flex align-items-center">
              <ChatDots />
              <p>{comments || "blog.comments"}</p>
            </li>
          </ul>
        </div>
        <div className="article_content">
          <p className="descPara">
            {content ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum culpa cum reprehenderit quibusdam inventore eaque sequi ipsam,dolores sapiente quam eligendi debitis aperiam eveniet expedita dolorum assumenda facere dolor."}
          </p>
          <blockquote className="article_blockquote">
            <p>{blockquote || "This is a block Quote"}</p>
          </blockquote>
          <p className="descPara">{desc1 || "this is another discription"}</p>
        </div>
      </article>
    </div>
  );
}

export default BlogDetails;
