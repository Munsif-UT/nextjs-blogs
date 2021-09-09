import React, { useState } from "react";
import blogs3 from "../public/frontend/media/blogs1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Person, Clock } from "react-bootstrap-icons";
import ReactHtmlParser from "react-html-parser";
// import { useRouter } from "next/router";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
function AllblogsEd({
  blogNo,
  image,
  title,
  auther,
  description,
  createdAt,
  deleteblog,
}) {
  // const router = useRouter();
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Delete Blog!
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>Are you sure you want to delete this blog? </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => deleteblog(blogNo)}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>
      <div className="col-md-4">
        <article className="article" style={{ position: "relative" }}>
          <div className="blogEditButtons">
            <div className="viewBlog">
              <Link
                href="/blogs/editblogs/[id]"
                as={`/blogs/editblogs/${blogNo}`}
              >
                <a>
                  <button color="success" className="btn btn-success">
                    View
                  </button>
                </a>
              </Link>
            </div>
            <div className="editBlog">
              <Link
                href={`/blogs/editblogs/${blogNo}/Edit`}
                // as={`/blogs/editblogs/${blogNo}/Edit`}
              >
                <a>
                  <button
                    className="btn"
                    style={{ background: "orange", color: "white" }}
                  >
                    Edit
                  </button>
                </a>
              </Link>
            </div>
            <div className="deleteBlog">
              <Button
                color="danger"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="article_image">
            <Image
              src={`/uploads/${image}` || blogs3}
              alt="blog-1"
              className="img-fluid"
              height={400}
              width={500}
            />
          </div>
          <h2
            className="article_title"
            style={{ minHeight: "100px", height: "100%" }}
          >
            <Link href={`/blogs/${blogNo}`}>
              <a className="commonLinkStyle">{title && title.slice(0, 100)}</a>
            </Link>
          </h2>
          <div className="article_meta">
            <ul>
              <li className="d-flex align-items-center">
                <Person />
                <p>{auther}</p>
              </li>
              <li className="d-flex align-items-center">
                <Clock />

                <p>
                  {new Date(createdAt).toLocaleString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
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
                description.length <= 200
                  ? description
                  : `${description.slice(0, 200)} ...`
              )}
            </p>
            <div className="read-more">
              <Link
                // href={`/blogs/${blogNo} `}
                href="/blogs/editblogs/[id]"
                as={`/blogs/editblogs/${blogNo}`}
              >
                <a className="commonLinkStyle" style={{ color: "white" }}>
                  Read More
                </a>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default AllblogsEd;
