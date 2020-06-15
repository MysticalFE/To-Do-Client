import React from "react";
import { useSelector } from "react-redux";
// import { ADD_TO_DO } from "@/store/actionTypes";
import { AppStoreType } from "@/store/reduxers";

function List() {
  const { list } = useSelector((state: AppStoreType) => state.todos);

  return (
    <ul>
      (list.map(item =>{" "}
      <li>
        {item.id}. {}
      </li>
      ))
    </ul>
  );
}

export default List;
