import ACTION_TYPES from "./actionTypes";

export const clearError = () => ({
  type: ACTION_TYPES.CLEAR_ERROR
});

export const addTaskRequest = ({ values }) => ({
  type: ACTION_TYPES.ADD_TASK_REQUEST,
  payload: { values }
});
export const addTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.ADD_TASK_SUCCESS,
  payload: { task }
});
export const addTaskError = ({ error }) => ({
  type: ACTION_TYPES.ADD_TASK_ERROR,
  payload: { error }
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});
export const getTasksSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: { tasks }
});
export const getTasksError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error }
});

export const setTaskDoneRequest = ({ id }) => ({
  type: ACTION_TYPES.SET_TASK_DONE_REQUEST,
  payload: { id }
});
export const setTaskDoneSuccess = ({ task }) => ({
  type: ACTION_TYPES.SET_TASK_DONE_SUCCESS,
  payload: { task }
});
export const setTaskDoneError = ({ error }) => ({
  type: ACTION_TYPES.SET_TASK_DONE_ERROR,
  payload: { error }
});
