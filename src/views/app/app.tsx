import React from "react";
import { Provider } from "react-redux";
import Layout from "@/layout";
import store from "@/store";

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
