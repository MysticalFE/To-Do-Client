import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToDoList } from "@/store/reduxers";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { completedToDo, fetchList } from "@/store/actions";
import "./list.css";

function List(props: any) {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchList());
    };
    fetchData();
  }, [dispatch]);
  const { data } = useSelector((state: ToDoList) => state.list);
  return (
    <ul className="list-wrap">
      {data &&
        data.map((item, index) => (
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
