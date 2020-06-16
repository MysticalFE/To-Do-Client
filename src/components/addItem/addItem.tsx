import React, { useState } from "react";
import { Modal, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ToggleType } from "@/store/reduxers";
import { ADD_TO_DO, TOGGLE_MODAL } from "@/store/actionTypes";
interface ToDos {
  toggle: boolean;
}

function AddItem() {
  const [value, setValue] = useState("");
  const toggle = useSelector((state: ToggleType) => state.toggle);
  console.log(toggle);
  const dispatch = useDispatch();

  const confirm = () => {
    value && dispatch({ type: ADD_TO_DO, value }) && cancel();
  };
  const cancel = () => {
    dispatch({ type: TOGGLE_MODAL, toggle: false });
  };
  return (
    <Modal
      title="添加待办事项"
      maskClosable={false}
      visible={toggle}
      onOk={confirm}
      onCancel={cancel}
      cancelText="取消"
      okText="添加"
    >
      <Input onChange={(e) => setValue(e.target.value)} />
    </Modal>
  );
}

export default AddItem;
