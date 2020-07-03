import React, { useState, useEffect, Fragment, KeyboardEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Switch, Input } from "antd";
import { ToDoList } from "@/store/reduxers";
import { fetchList, fetchUpdate, fetchQuery } from "@/store/actions";
import { SearchOutlined } from "@ant-design/icons";
import "./list.css";

function List() {
  const [value, setValue] = useState("");
  const [pressVal, setPressVal] = useState("");
  const dispatch = useDispatch();
  const { fetchAddSuccess } = useSelector((state: any) => state.modal);
  const completed = useSelector((state: any) => state.todos);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch, fetchAddSuccess]);

  useEffect(() => {
    dispatch(fetchQuery(pressVal));
  }, [dispatch, pressVal, completed]);
  const { data } = useSelector((state: ToDoList) => state.list);
  console.log(data);

  const pressEnter = (e: KeyboardEvent) => {
    setPressVal(value);
  };
  return (
    <Fragment>
      <section className="input-box">
        <Input
          placeholder="请输入事项"
          prefix={<SearchOutlined />}
          onChange={(e) => setValue(e.target.value)}
          onPressEnter={pressEnter}
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
                checked={Boolean(item.completed)}
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
