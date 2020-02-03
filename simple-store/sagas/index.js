import { all, take, takeLatest, put, call } from "redux-saga/effects";
import * as types from "../actions/types";

import {
  incrementAsync,
  increment,
  decrement,
  createUserSuccess,
  createUserFail,
  sendEmailSuccess,
  sendEmailFail,
  sendSmsSuccess,
  sendSmsFail,
  verifyEmailSuccess,
  verifyEmailFail,
  verifyXpubSuccess,
  verifyXpubFail
} from "../actions";
import {
  createService,
  sendEmailService,
  smsService,
  verifyEmailService,
  xpubService
} from "../../services/bittr_api";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsyncSaga({ payload }) {
  // yield delay(1000);
  yield call(delay, 1000);
  yield put(incrementAsync(payload));
}

export function* incrementSaga() {
  yield put(increment());
}

export function* decrementSaga() {
  yield put(decrement());
}

export function* createUserSaga({ params }) {
  // yield take(types.CREATE_USER_REQUEST);
  const result = yield call(createService, params);
  if (!result || !result.data) {
    yield put(createUserFail());
  } else {
    yield put(createUserSuccess(result.data));
  }
}

export function* sendEmailSaga({ params }) {
  // yield take(types.SEND_EMAIL_REQUEST);
  const result = yield call(sendEmailService, params);
  console.log("Email result", result);
  if (!result) {
    yield put(sendEmailFail());
  } else {
    yield put(sendEmailSuccess(result.data));
  }
}

export function* sendSmsSaga({ params }) {
  // yield take(types.SEND_SMS_REQUEST);
  const result = yield call(smsService, params);
  console.log("SMS result", result);
  if (!result) {
    yield put(sendSmsFail());
  } else {
    yield put(sendSmsSuccess(result.data));
  }
}

export function* verifyEmailSaga({ params }) {
  // yield take(types.VERIFY_EMAIL_REQUEST);
  const result = yield call(verifyEmailService, params);
  console.log("Email token result", result);
  if (!result) {
    yield put(verifyEmailFail());
  } else {
    yield put(verifyEmailSuccess(result.data));
  }
}

export function* verifyXpubSaga({ params }) {
  // yield take(types.VERIFY_XPUB_REQUEST);
  const result = yield call(xpubService, params);
  console.log("XPUB RESULT", result);
  if (!result) {
    yield put(verifyXpubFail());
  } else {
    yield put(verifyXpubSuccess(result.data));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.CREATE_USER_REQUEST, createUserSaga),
    takeLatest(types.SEND_EMAIL_REQUEST, sendEmailSaga),
    takeLatest(types.VERIFY_EMAIL_REQUEST, verifyEmailSaga),
    takeLatest(types.SEND_SMS_REQUEST, sendSmsSaga),
    takeLatest(types.VERIFY_XPUB_REQUEST, verifyXpubSaga),
    takeLatest(types.INCREMENT_ASYNC, incrementAsyncSaga),
    takeLatest(types.INCREMENT, incrementSaga),
    takeLatest(types.DECREMENT, decrementSaga)
  ]);
}
