import { applyMiddleware } from "redux";
import { compose } from "redux";
import createLogger from "redux-logger";
import { thunk } from "redux-thunk";

const middlewareList = [thunk];

if (process.env.NODE_ENV !== "production") {
  middlewareList.push(createLogger);
}

const middleware = compose(applyMiddleware(...middlewareList));

export default middleware;
