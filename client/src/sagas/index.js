import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { addTaskSaga, getTasksSaga, setTaskDoneSaga } from './task';

export default function * rootSaga () {
  yield takeLatest(ACTION_TYPES.ADD_TASK_REQUEST, addTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasksSaga);
  yield takeLatest(ACTION_TYPES.SET_TASK_DONE_REQUEST, setTaskDoneSaga);
}
