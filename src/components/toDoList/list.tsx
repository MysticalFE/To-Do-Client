import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToDoList } from "@/store/reduxers";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { fetchList, fetchUpdate } from "@/store/actions";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./list.css";

function List() {
  const dispatch = useDispatch();
  const { fetchAddSuccess } = useSelector((state: any) => state.modal);
  const completed = useSelector((state: any) => state.todos);
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch, fetchAddSuccess, completed]);
  const { data } = useSelector((state: ToDoList) => state.list);
  return (
    <Fragment>
      <section className="input-box">
        <Input
          placeholder="请输入事项"
          prefix={<SearchOutlined />}
          // onChange={}
          allowClear
        />
      </section>
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
                  dispatch(fetchUpdate(item));
                }}
                size="small"
              />
            </li>
          ))}
      </ul>
    </Fragment>
  );
}

export default List;
