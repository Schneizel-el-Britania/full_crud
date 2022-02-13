import * as Yup from 'yup';

export const TODO_SCHEMA = Yup.object({
  newTask: Yup.string().matches(/^.{0,24}$/, 'Task must be shorter').required(),
});