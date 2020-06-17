import React from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import "./plus.css";
import { toggle } from "@/store/actions";

function PlusCircle() {
  const dispatch = useDispatch();
  return (
    <section className="plusCircle" onClick={() => dispatch(toggle(true))}>
      <PlusCircleFilled />
    </section>
  );
}

// export default connect(null, { addToDos })(PlusCircle);
export default PlusCircle;
