import React from "react";
import { Row, Col } from "antd";

import {
  Header,
  InputBox,
  PlusCircle,
  AddItemModel,
  ToDoList,
} from "@/components";

export default function Layout() {
  return (
    <Row justify={"center"}>
      <Col
        sm={16}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <InputBox />
        <PlusCircle />
        <AddItemModel />
        <ToDoList />
      </Col>
    </Row>
  );
}
