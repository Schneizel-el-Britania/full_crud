import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as TaskActionCreators from '../../../actions/taskCreators';
import Input from '../../Form/Input';
import { TASK_SCHEMA } from '../../../utils/validationSchema';

const initialValues = {
  author: '',
  body: '',
};

export default function AddTask() {
  const { addTaskRequest, clearError } = bindActionCreators(
    TaskActionCreators,
    useDispatch()
  );
  const onSubmit = (values, formikBag) => {
    addTaskRequest({ values });
    clearError();
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={TASK_SCHEMA}
    >
      <Form>
        <Input key="author" name="author" />
        <Input key="body" name="body" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
