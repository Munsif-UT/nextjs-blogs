import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
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

const { Dragger } = Upload;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
} */
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
  const [name, setname] = useState("");
  const [titile, settitile] = useState("");
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [imageStatus, setImageStatus] = useState({
    loading: false,
  });

  const { loading, imageUrl } = imageStatus;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const onFinish = (values) => {
    console.log(values);
  };
  function onChange(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    setCkeditorContent(newContent);
  }
  function afterPaste(evt) {
    console.log("afterPaste event called with event info: ", evt);
  }
  console.log(ckeditorContent);
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
                    <Form.Item
                      name={["blogImage"]}
                      label="Blog Picture"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit
                          from uploading company data or other band files
                        </p>
                      </Dragger>
                      ,
                    </Form.Item>
                    <Form.Item
                      name={["blog", "authername"]}
                      label="Auther Name"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      onChange={(e) => setname(e.target.value)}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["blog", "title"]}
                      label="Blog Title"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      onChange={(e) => settitile(e.target.value)}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["blog", "description"]}
                      label="Blog Description :"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      {/*  <Input.TextArea /> */}
                      <CKEditor
                        activeClass="p10"
                        content={ckeditorContent}
                        events={{
                          afterPaste: afterPaste,
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
