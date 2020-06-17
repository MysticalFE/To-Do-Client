import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ToggleType } from "@/store/reduxers";
import { toggle as toggleModal, addToDos } from "@/store/actions";
interface ToDos {
  toggle: boolean;
}

function AddItem() {
  const [value, setValue] = useState("");
  const toggle = useSelector((state: ToggleType) => state.toggle);
  const dispatch = useDispatch();

  const confirm = () => {
    value && dispatch(addToDos(value)) && cancel();
  };
  const cancel = () => {
    dispatch(toggleModal(false));
  };
  return (
    <section className="tip-modal">
      <Modal
        title="添加待办事项"
        maskClosable={false}
        destroyOnClose={false}
        getContainer={false}
        visible={toggle}
        onOk={confirm}
        onCancel={cancel}
        cancelText="取消"
        okText="添加"
      >
        <Input
          placeholder="请输入待办的事项"
          onChange={(e) => setValue(e.target.value)}
        />
      </Modal>
    </section>
  );
}

export default AddItem;
