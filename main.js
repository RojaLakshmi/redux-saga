import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Counter from "./Counter";
import Register from "./Register";
import reducer from "./simple-store/reducers";
import rootSaga from "./simple-store/sagas";
import {
  CREATE_USER_PARAMS,
  SEND_EMAIL_PARAMS,
  SEND_SMS_PARAMS,
  VERIFY_EMAIL_PARAMS,
  VERIFY_XPUB_PARAMS
} from "./constants/data";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
const action = (type, params = {}) => store.dispatch({ type, params });

function render() {
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState()}
        onIncrement={() =>
          action("INCREMENT", { state: store.getState().state })
        }
        onDecrement={() =>
          action("DECREMENT", { state: store.getState().state })
        }
        onIncrementAsync={() =>
          action("INCREMENT_ASYNC", { state: store.getState().state })
        }
      />
      <Register
        value={store.getState()}
        createUser={() => action("CREATE_USER_REQUEST", CREATE_USER_PARAMS)}
        verifySentEmail={() => action("SEND_EMAIL_REQUEST", SEND_EMAIL_PARAMS)}
        verifyEmail={() => action("VERIFY_EMAIL_REQUEST", VERIFY_EMAIL_PARAMS)}
        verifySms={() => action("SEND_SMS_REQUEST", SEND_SMS_PARAMS)}
        verifyXpub={() => action("VERIFY_XPUB_REQUEST", VERIFY_XPUB_PARAMS)}
      />
    </div>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
