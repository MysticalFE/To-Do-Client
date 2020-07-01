import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reduxers";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

middlewares.push(thunk);

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);
