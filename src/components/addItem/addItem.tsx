import React, { useState, useCallback } from "react";
import { Modal, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppStoreType } from "@/store/reduxers";
import { ADD_TO_DO } from "@/store/actionTypes";
interface ToDos {
  toggle: boolean;
}

function AddItem() {
  const [value, setValue] = useState("");
  const { toggle } = useSelector((state: AppStoreType) => state.todos);
  const dispatch = useDispatch();

  const confirm = () => {
    value && dispatch({ type: ADD_TO_DO, toggle: false, value });
  };
  const cancel = () => {
    dispatch({ type: ADD_TO_DO, toggle: false });
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
