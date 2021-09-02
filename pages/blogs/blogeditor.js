import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";
import "antd/dist/antd.css";
import CKEditor from "react-ckeditor-component";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
// import "./index.css";
import { Form, Input, InputNumber, Button } from "antd";
import NavbarInventoolyWebsite from "./../../components/NavbarInventoolyWebsite";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axiosNext from "../../components/axios";
import axios from "axios";
import { useRouter } from "next/router";

const { Dragger } = Upload;
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
const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
function Avatar() {
  const router = useRouter();
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [imageStatus, setImageStatus] = useState({
    loading: false,
  });

  const { loading, imageUrl } = imageStatus;

  useEffect(async () => {
    let data = await axiosNext(
      async (ax) => await ax.get("/test"),
      window.localStorage
    );
    let loggedin = data.statusText === "OK";
    setLoggedIn(loggedin);
    if (loggedin) {
      router.push("/blogs/blogeditor");
    } else {
      router.push("/blogs/bloggerauth");
    }
  }, []);
  const onFinish = async (values) => {
    values.ckEditorValue = ckeditorContent;
    // values.blogDescription = values.blog;
    const { data } = await axiosNext(
      async () => await axios.post("/fetchblogs", { values }),
      window.localStorage
    );
    console.log(data);
  };
  function onChange(evt) {
    var newContent = evt.editor.getData();
    setCkeditorContent(newContent);
  }

  return (
    <div
      className="blogeditor"
      style={{ background: `url("/frontend/media/wave.svg")` }}
    >
      <NavbarInventoolyWebsite />
      <div className="container">
        <Box className="mainContEditorPage">
          <Box className="page pt-35" bgcolor="#fff" borderRadius={7}>
            <Row className="m-0 d-flex justify-content-center align-items-center">
              <div className="col-md-10 formWrapper">
                <Form
                  {...layout}
                  name="nest-messages"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Box
                    className="page pt-35 p-5"
                    bgcolor="#fff"
                    borderRadius={7}
                  >
                    <div className="formImageAndValues">
                      <Form.Item
                        name={["blogImage"]}
                        label="Blog Picture"
                        /* rules={[
                        {
                          required: true,
                        },
                      ]} */
                      >
                        <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">
                            Click or drag file to this area to upload
                          </p>
                          <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly
                            prohibit from uploading company data or other band
                            files
                          </p>
                        </Dragger>
                      </Form.Item>
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
