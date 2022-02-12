import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as TaskActionCreators from '../actions/taskCreators';

export function* addTaskSaga(action) {
  try {
    const { data: { data: [task] } } = yield API.addTask(action.payload.values);
    yield put(TaskActionCreators.addTaskSuccess({ task }));
  } catch (error) {
    yield put(TaskActionCreators.addTaskError({ error }));
  }
}

export function* getTasksSaga(action) {
  try {
    const { data: { data: tasks } } = yield API.getTasks(action.payload);
    yield put(TaskActionCreators.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(TaskActionCreators.getTasksError({ error }));
  }
}

export function* setTaskDoneSaga(action) {
  try {
    const { data: { data: [task] } } = yield API.setTaskDone(action.payload.values);
    yield put(TaskActionCreators.setTaskDoneSuccess({ task }));
  } catch (error) {
    yield put(TaskActionCreators.setTaskDoneError({ error }));
  }
}