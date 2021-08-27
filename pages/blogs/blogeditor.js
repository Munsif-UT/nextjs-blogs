import { Upload, message } from "antd";
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
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function getBase64(img, callback) {
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
}
const validateMessages = {
  required: "${label} is required!",
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function Avatar() {
  const [ckeditorContent, setCkeditorContent] = useState("");
  const [imageStatus, setImageStatus] = useState({
    loading: false,
  });

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setImageStatus(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        setImageStatus({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  const { loading, imageUrl } = imageStatus;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  console.log(imageUrl);
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
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                      >
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt="avatar"
                            style={{ width: "100%" }}
                          />
                        ) : (
                          uploadButton
                        )}
                      </Upload>
                    </Form.Item>
                    <Form.Item
                      name={["blog", "authername"]}
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
                      name={["blog", "title"]}
                      label="Blog Title"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
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
