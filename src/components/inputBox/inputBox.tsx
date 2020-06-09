import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./inputBox.css";

export default function InputBox() {
  return (
    <section className="inputBox">
      <Input
        placeholder="请输入事项"
        prefix={<SearchOutlined />}
        // onChange={}
        allowClear
      />
    </section>
  );
}
