import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import "./plus.css";
import { ADD_TO_DO } from "@/store/actionTypes";
import { useDispatch } from "react-redux";

function PlusCircle() {
  const dispatch = useDispatch();
  return (
    <section
      className="plusCircle"
      onClick={() => dispatch({ type: ADD_TO_DO, toggle: true })}
    >
      <PlusCircleFilled />
    </section>
  );
}

// export default connect(null, { addToDos })(PlusCircle);
export default PlusCircle;
