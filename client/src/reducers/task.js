import produce from "immer";
import ACTION_TYPES from "../actions/actionTypes";
const initialState = {
  tasks: [],
  isFetching: false,
  error: null
}

const handleRequest = produce((draftState, action) => {
  draftState.isFetching = true;
})
const handleError = produce((draftState, action) => {
  const { payload: { error } } = action;
  draftState.error = error;
  draftState.isFetching = false;
})

const handlers = {
  [ACTION_TYPES.CLEAR_ERROR]: produce((draftState, action) => {
    draftState.error = null;
  }),

  [ACTION_TYPES.ADD_TASK_REQUEST]: handleRequest,
  [ACTION_TYPES.GET_TASKS_REQUEST]: handleRequest,
  [ACTION_TYPES.ADD_TASK_SUCCESS]: produce((draftState, action) => {
    const { payload: { task } } = action;
    draftState.isFetching = false;
    draftState.tasks.push(task);
  }),
  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const { payload: { tasks } } = action;
    draftState.isFetching = false;
    draftState.tasks.push(...tasks);
  }),
  [ACTION_TYPES.ADD_TASK_ERROR]: handleError,
  [ACTION_TYPES.GET_TASKS_ERROR]: handleError,
}

export default function taskReducer(state = initialState, action) {
  const { type } = action;
  const handler = handlers[type];
  if (handler) { return handler(state, action) }
  return state;
}
