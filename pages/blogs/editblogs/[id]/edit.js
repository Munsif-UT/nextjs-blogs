import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "antd/dist/antd.css";
import CKEditor from "react-ckeditor-component";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Form, Input, Button } from "antd";
// import NavbarInventoolyWebsite from "./../../components/NavbarInventoolyWebsite";
import { Upload, message } from "antd";
import axiosNext from "../../../../components/axios";
import axios from "axios";
import { useRouter } from "next/router";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function Edit() {
  const router = useRouter();
  
  const [blogEditableFields, setblogEditableFields] = useState("");
  const [ckeditorContent, setCkeditorContent] = useState(blogEditableFields.blogDesc || "");
  const [image, setImage] = useState(blogEditableFields.blogImage
 || "" );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [imageStatus, setImageStatus] = useState({
    loading: false,
  });

  const { loading, imageUrl } = imageStatus;

  // useEffect(async () => {
  //   let data = await axiosNext(
  //     async (ax) => await ax.get("/test"),
  //     window.localStorage
  //   );
  //   let loggedin = data.statusText === "OK";
  //   setLoggedIn(loggedin);
  //   if (loggedin) {
  //     router.push("/blogs/blogeditor");
  //   } else {
  //     router.push("/blogs/bloggerauth");
  //   }
  // }, []);
  useEffect(async () => {
    console.log(router.query.id)
    /* if (router.query.id) {
      axios
        .get(`/fetchblogs/${router.query.id}`)
        .then((res) => {
          console.log(res)
          setblogEditableFields(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } */
    const res = await fetch(
      `http://localhost:3000/api/fetchblogs/${router.query.id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    console.log(data.data)
    console.log(data)
    setblogEditableFields(data.data);
  }, [router.query.id]);
  const onFinish = async (values) => {
    console.log(values);
    console.log(values.blogImage);
    const formData = new FormData();
    values.ckEditorValue = ckeditorContent;
    formData.append("imageAlt", values.imageAlt);
    formData.append("imagetitle", values.imagetitle);
    formData.append("metatitle", values.metatitle);
    formData.append("metaDesc", values.metaDesc);
    formData.append("permalink", values.permalink);
    formData.append("metakeywords", values.metakeywords);
    formData.append("blogauthername", values.blogauthername);
    formData.append("blogtitile", values.blogtitile);
    formData.append("ckEditorValue", values.ckEditorValue);
    formData.append("blogImage", image);
    // console.log(formData);
    const { data } = await axiosNext(
      async () => await axios.post("/fetchblogs", formData),
      window.localStorage
    );
    console.log(data);
  };
  function onChange(evt) {
    var newContent = evt.editor.getData();
    setCkeditorContent(newContent);
  }
const {metaTitle,metaDescription,metaKeywords,blogTitle,permalink,blogImage,blogDesc,images,blogAutherName}=blogEditableFields;
console.log(blogEditableFields)
  return (
    <div
      className="blogeditor"
      style={{ background: `url("/frontend/media/wave.svg")` }}
    >
      {/* <NavbarInventoolyWebsite /> */}
      <div className="container">
        <Box className="mainContEditorPage">
          <Box className="page pt-35" bgcolor="#fff" borderRadius={7}>
            <Row className="m-0 d-flex justify-content-center align-items-center">
              <div className="col-md-10 formWrapper">
                <Form
                  {...layout}
                  initialValues={{ metatitle:`${metaTitle}`,
                  metaDesc:`${metaDescription}`,
                  permalink:`${permalink}`,
                  metakeywords:`${metaKeywords}`,
                  blogauthername:`${blogAutherName}`,
                  blogtitile:`${blogTitle}`,
                  
                   }}
                  name="nest-messages"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                  encType="multipart/form-data"
                >
                  <Box className="page pt-35 p-5" bgcolor="#fff" borderRadius={7} >
                    <div className="formImageAndValues">
                      <input
                        type="file"
                        filename="blogImage"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      {/* </Form.Item> */}
                        <Form.Item
                          name={["imageAlt"]}
                          label="image alt"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input /* value={blogEditableFields.images.imageAlt} */ />
                        </Form.Item>
                        <Form.Item
                          name={["imagetitle"]}
                          label="image Title"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                    </div>
                    <Form.Item
                      name={["metatitle"]}
                      label="Meta Title"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["metaDesc"]}
                      label="Meta Description"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["permalink"]}
                      label="Permalink"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["metakeywords"]}
                      label="Meta keywords"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["blogauthername"]}
                      label="Auther Name"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["blogtitile"]}
                      label="Blog Title"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item label="Blog Description :">
                      <CKEditor
                        activeClass="p10"
                        content={ckeditorContent}
                        events={{
                          change: onChange,
                        }}
                      />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="blogeditorBtn"
                      >
                        Save
                      </Button>
                    </Form.Item>
                  </Box>
                </Form>
              </div>
            </Row>
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default Edit;
