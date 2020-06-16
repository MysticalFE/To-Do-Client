import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import "./plus.css";
import { TOGGLE_MODAL } from "@/store/actionTypes";
import { useDispatch } from "react-redux";

function PlusCircle() {
  const dispatch = useDispatch();
  return (
    <section
      className="plusCircle"
      onClick={() => dispatch({ type: TOGGLE_MODAL, toggle: true })}
    >
      <PlusCircleFilled />
    </section>
  );
}

// export default connect(null, { addToDos })(PlusCircle);
export default PlusCircle;
