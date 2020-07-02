import React, { useState, useEffect } from "react";
import { Modal, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
// import { ToggleType } from "@/store/reduxers";
import { toggle as toggleModal, fetchAdd } from "@/store/actions";
interface ToDos {
  toggle: boolean;
}

function AddItem() {
  const [value, setValue] = useState("");
  const [addValue, setAddValue] = useState("");
  const { toggle } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    if (addValue) {
      dispatch(fetchAdd(addValue));
      dispatch(toggleModal(false, true));
    }
  }, [dispatch, addValue]);
  const confirm = () => {
    setAddValue(value);
    cancel();
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
