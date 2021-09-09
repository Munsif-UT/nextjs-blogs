import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { Row } from "react-bootstrap";
import "antd/dist/antd.css";
import CKEditor from "react-ckeditor-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, Button } from "antd";
import NavbarInventoolyWebsite from "./../../components/NavbarInventoolyWebsite";
import axiosNext from "../../components/axios";
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
function Avatar() {
  const router = useRouter();
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [image, setImage] = useState("");
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
      //   router.push("/blogs/editblogs");
      // }
    } catch (error) {
      router.push("/blogs/bloggerauth");
    }
  };
  useEffect(() => {
    loginUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onFinish = async (values) => {
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
    const { data } = await axiosNext(
      async () => await axios.post("/fetchblogs", formData),
      window.localStorage
    );
    if (data.success) {
      alert("data inserted");
      router.push("/blogs/editblogs");
    } else {
      alert("data not inserted");
    }
    console.log(data);
  };
  function onChange(evt) {
    var newContent = evt.editor.getData();
    setCkeditorContent(newContent);
  }

  return (
    <div
      className="blogeditor"
      style={{
        background: `url("/frontend/media/wave.svg")`,
        fontFamily: "Nunito, sans-serif",
      }}
    >
      <NavbarInventoolyWebsite />
      <div className="container">
        <Box className="mainContEditorPage">
          <Box className="page pt-35" bgcolor="#fff" borderRadius={7}>
            <Row className="m-0 d-flex justify-content-center align-items-center">
              <div className="col-md-10 formWrapper">
                <h1 className="editPageTitile">New Blog</h1>
                <Form
                  {...layout}
                  name="nest-messages"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                  encType="multipart/form-data"
                >
                  <Box
                    className="page pt-35 p-5"
                    bgcolor="#fff"
                    borderRadius={7}
                  >
                    <div className="formImageAndValues">
                      <Form.Item label="Blog Image">
                        <input
                          type="file"
                          filename="blogImage"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </Form.Item>
                      {/* </Form.Item> */}
                      <div className="formOptions">
                        <Form.Item
                          name={["imageAlt"]}
                          label="image alt"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input />
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
export default Avatar;
