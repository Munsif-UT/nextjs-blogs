import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axiosNext from "../../../../components/axios";
import blogs3 from "../../../../public/frontend/media/blogs1.jpg";
import { Person } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { IdcardFilled } from "@ant-design/icons";
function EditSpecificBlog() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [blogDetail, setblogDetail] = useState({});
  async function fetchSpecificBlog() {
    // console.log(router.query.id);
    const { data } = await axiosNext(
      async (ax) => await ax.get(`/fetchblogs/${router.query.id}`),
      window.localStorage
    );
    setloading(false);
    setblogDetail(data.data);
  }
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
    fetchSpecificBlog();
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
              <div className="col-md-6">
                <article className="article" style={{ position: "relative" }}>
                  <div className="blogEditButtons">
                    {/* <div className="viewBlog">
                    <Link
                      href="/blogs/editblogs/[id]"
                      as={`/blogs/editblogs/${blogDetail._id}`}
                    >
                      <a>
                        <button className="btn btn-primary">View</button>
                      </a>
                    </Link>
                  </div> */}
                    <div className="editBlog">
                      <Link href={`/blogs/editblogs/${blogDetail._id}/Edit`}>
                        <a>
                          <button className="btn btn-primary">Edit</button>
                        </a>
                      </Link>
                    </div>
                    <div className="deleteBlog">
                      <Button
                        color="primary"
                        type="button"
                        onClick={() => setModalOpen(!modalOpen)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  <div className="article_image">
                    <Image
                      src={/* blogDetail.image  ||*/ blogs3}
                      alt="blog-1"
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="article_title">
                    {(blogDetail.title && blogDetail.title.slice(0, 100)) ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hicdistinctio quibusdam ex."}
                  </h2>
                  <div className="article_meta">
                    <ul>
                      <li className="d-flex align-items-center">
                        <Person />

                        <p>{blogDetail.title || "blog.userName"}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="article_content">
                    <p className="descPara">
                      {blogDetail.metaDescription ||
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum culpa cum reprehenderit quibusdam inventore eaque sequi ipsam,dolores sapiente quam eligendi debitis aperiam eveniet expedita dolorum assumenda facere dolor."}
                    </p>
                    <blockquote className="article_blockquote">
                      <p>
                        {blogDetail.metaKeywords || "This is a block Quote"}
                      </p>
                    </blockquote>
                    <p className="descPara">
                      {blogDetail.permalink || "this is another discription"}
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

export default EditSpecificBlog;
// export async function getServerSideProps({ params }) {
//   console.log(params.id);
//   const { data } = await axiosNext(
//     async (ax) => await ax.get(`/fetchblogs/${params.id}`)
//   );
//   console.log(data);
//   return {
//     props: {
//       blogsData: [],
//     },
//   };
// }
