import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axiosNext from "../../../../components/axios";
import blogs3 from "../../../../public/frontend/media/blogs1.jpg";
import { Person, Clock } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ReactHtmlParser from "react-html-parser";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
function EditSpecificBlog({ blogDetail }) {
  console.log(blogDetail);
  const router = useRouter();
  const [loading, setloading] = useState(false);
  // const [blogDetail, setblogDetail] = useState({});
  // async function fetchSpecificBlog() {
  //   // console.log(router.query.id);
  //   const { data } = await axiosNext(
  //     async (ax) => await ax.get(`/fetchblogs/${router.query.id}`),
  //     window.localStorage
  //   );
  //   setloading(false);
  //   setblogDetail(data.data);
  // }
  const [isLoggedIn, setLoggedIn] = useState(false);
  const loginUser = async () => {
    try {
      let data = await axiosNext(
        async (ax) => await ax.get("/test"),
        window.localStorage
      );
      let loggedin = data.status === 401;
      console.log(data);
      setLoggedIn(loggedin);
      // if (loggedin) {
      //   router.push(`/blogs/editblogs/${blog}`);
      // }
    } catch (error) {
      router.push("/blogs/bloggerauth");
    }
  };
  useEffect(() => {
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [modalOpen, setModalOpen] = React.useState(false);
  async function deleteBLog(id) {
    console.log(id);
    setloading(true);
    const { data } = await axiosNext(
      async (ax) => await ax.delete(`/fetchblogs/${id}`),
      window.localStorage
    );
    if (data.success) {
      router.push("/blogs/editblogs");
    }
  }
  useEffect(() => {
    // fetchSpecificBlog();
  }, []);
  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
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
            onClick={() => deleteBLog(blogDetail._id)}
          >
            Delete
          </Button>
        </ModalFooter>
      </Modal>
      <div>
        <section>
          <div
            className="container d-flex banner-m align-items-center justify-content-centre"
            style={{
              minHeight: "100vh",
              padding: "150px 0px",
              overflow: "hidden",
            }}
          >
            <div className="row d-flex justify-content-center">
              <div className="col-md-10">
                <article
                  className="article"
                  style={{ position: "relative", height: "100%" }}
                >
                  <div
                    className="blogEditButtons"
                    style={{
                      position: "absolute",
                      width: "12%",
                      right: "12px",
                      top: "12px",
                      background:"transparent"
                    }}
                  >
                    <div className="editBlog">
                      <Link href={`/blogs/editblogs/${blogDetail._id}/Edit`}>
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
                      src={`/uploads/${blogDetail.blogImage}` || blogs3}
                      alt={blogDetail.images.imageAlt}
                      title={blogDetail.images.imageTitle}
                      className="img-fluid"
                      height={400}
                      width={500}
                    />
                  </div>
                  <h2 className="article_title">
                    {blogDetail.blogTitle ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicdistinctio quibusdam ex."}
                  </h2>
                  <div className="article_meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <Person />
                        <p>{blogDetail.blogAutherName || "blog.userName"}</p>
                      </li>
                      <li className="d-flex align-items-center">
                        <Clock />
                        <p>
                          {new Date(blogDetail.createdAt).toLocaleString(
                            "en-GB",
                            { day: "numeric", month: "long", year: "numeric" }
                          ) || "2/06/2021"}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="article_content">
                    <p className="descPara">
                      {ReactHtmlParser(blogDetail.blogDesc) ||
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum culpa cum reprehenderit quibusdam inventore eaque sequi ipsam,dolores sapiente quam eligendi debitis aperiam eveniet expedita dolorum assumenda facere dolor."}
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
EditSpecificBlog.getInitialProps = async ({ query }) => {
  // console.log(query);
  const res = await fetch(`http://localhost:3000/api/fetchblogs/${query.id}`, {
    method: "GET",
  });
  const { data } = await res.json();
  // console.log(data);
  return { blogDetail: data };
};
export default EditSpecificBlog;
