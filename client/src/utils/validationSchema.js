import * as Yup from 'yup';

export const TASK_SCHEMA = Yup.object({
  author: Yup.string().matches(/^[A-Z][a-z-]{3,15}$/, 'Author does not match!').required(),
  body: Yup.string().matches(/[a-z0-9-_ ]{3,25}$/i, 'Body does not match!').required(),
});