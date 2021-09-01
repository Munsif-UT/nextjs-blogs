import React from "react";
import blogs3 from "../public/frontend/media/blogs1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Person, Clock, ChatDots } from "react-bootstrap-icons";
function Blog({ blogNo, image, title, userName, comments, chat, content }) {
  return (
    <div className="col-md-4">
      <article className="article">
        <div className="article_image">
          <Image src={image || blogs3} alt="blog-1" className="img-fluid" />
        </div>
        <h2 className="article_title">
          <Link href={`/blogs/${blogNo}`}>
            <a className="commonLinkStyle">
              {(title && title.slice(0, 100)) ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicdistinctio quibusdam ex."}
            </a>
          </Link>
        </h2>
        <div className="article_meta">
          <ul>
            <li className="d-flex align-items-center">
              <Person />

              <p>{userName || "blog.userName"}</p>
            </li>
            {/* <li className="d-flex align-items-center">
              <Clock />
              <p>{chat || "blog.chat"}</p>
            </li>
            <li className="d-flex align-items-center">
              <ChatDots />
              <p>{comments || "blog.comments"}</p>
            </li> */}
          </ul>
        </div>
        <div className="article_content">
          <p>
            {(content && content.slice(0, 200)) ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum culpa cum reprehenderit quibusdam inventore eaque sequi ipsam,dolores sapiente quam eligendi debitis aperiam eveniet expedita dolorum assumenda facere dolor."}
          </p>
          <div className="read-more">
            <Link
              // href={`/blogs/${blogNo} `}
              href={{
                pathname: "/blogs/[id]",
                query: { id: blogNo },
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
