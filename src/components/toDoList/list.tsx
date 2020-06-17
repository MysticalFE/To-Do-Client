import React from "react";
import { useSelector } from "react-redux";
import { AppStoreType } from "@/store/reduxers";

function List() {
  const list = useSelector((state: AppStoreType) => state.todos);
  console.log(list);
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item.value}</li>
      ))}
    </ul>
  );
}

export default List;
