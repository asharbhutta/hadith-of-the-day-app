import {
  GET_ALL_HADITH,
  GET_AHADITH_BY_CATEGORY,
  GET_HADITH_BY_CATEGORY_ID
} from '../../Actions/General/ActionTypes/ApiActionTypes';
// import fetchData from "../ReduxOnlySagaHelper";
import {takeEvery} from "redux-saga/effects";
import fetchData from "../SagaHelper"
import reduxOnlySagaHelper from "../ReduxOnlySagaHelper"

function* dataSaga() {
  // console.log(GET_ALL_HADITH)
  yield takeEvery(GET_ALL_HADITH, fetchData),
  yield takeEvery(GET_AHADITH_BY_CATEGORY, fetchData),
  yield takeEvery(GET_HADITH_BY_CATEGORY_ID,reduxOnlySagaHelper )




}

export default dataSaga
