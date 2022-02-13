import produce from 'immer';
import ACTION_TYPES from '../actions/actionTypes';
const initialState = {
  tasks: [],
  isFetching: false,
  errors: null,
};

const handleRequest = produce((draftState, action) => {
  draftState.isFetching = true;
});
const handleError = produce((draftState, action) => {
  const {
    payload: {
      error: {
        response: {
          data: { errors },
        },
      },
    },
  } = action;
  draftState.errors = errors;
  draftState.isFetching = false;
});

const handlers = {
  [ACTION_TYPES.CLEAR_ERROR]: produce((draftState, action) => {
    draftState.errors = null;
  }),

  [ACTION_TYPES.ADD_TASK_REQUEST]: handleRequest,
  [ACTION_TYPES.GET_TASKS_REQUEST]: handleRequest,
  [ACTION_TYPES.SET_TASK_DONE_REQUEST]: handleRequest,
  [ACTION_TYPES.ADD_TASK_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    draftState.isFetching = false;
    draftState.tasks.push(task);
  }),
  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { tasks },
    } = action;
    draftState.isFetching = false;
    draftState.tasks.push(...tasks);
  }),
  [ACTION_TYPES.SET_TASK_DONE_SUCCESS]: produce((draftState, action) => {
    const {
      payload: { task },
    } = action;
    const { tasks } = draftState;
    draftState.isFetching = false;
    const index = tasks.map((task) => task.id).indexOf(task.id);
    tasks.splice(index, 1, task);
  }),
  [ACTION_TYPES.ADD_TASK_ERROR]: handleError,
  [ACTION_TYPES.GET_TASKS_ERROR]: handleError,
  [ACTION_TYPES.SET_TASK_DONE_ERROR]: handleError,
};

export default function taskReducer (state = initialState, action) {
  const { type } = action;
  const handler = handlers[type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}
