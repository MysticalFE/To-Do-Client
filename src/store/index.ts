import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reduxers";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
