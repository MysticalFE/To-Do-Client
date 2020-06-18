import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppStoreType } from "@/store/reduxers";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { completedToDo } from "@/store/actions";
import "./list.css";

function List() {
  const list = useSelector((state: AppStoreType) => state.todos);
  const dispatch = useDispatch();
  return (
    <ul className="list-wrap">
      {list.map((item, index) => (
        <li key={index}>
          <span className={`text ${item.completed && "line-text"}`}>
            {item.value}
          </span>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={item.completed}
            onChange={(checked) => {
              dispatch(completedToDo(item.id));
            }}
            size="small"
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
