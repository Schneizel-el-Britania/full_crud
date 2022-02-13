import React from "react";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TaskActionCreators from "../../../actions/taskCreators";
import Input from "../../Form/Input";

const initialValues = {
  author: "",
  body: "",
};

export default function AddTask() {
  const { addTaskRequest, clearError } = bindActionCreators(TaskActionCreators, useDispatch());
  const onSubmit = (values, formikBag) => {
    addTaskRequest({ values });
    clearError();
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input key="author" name="author" />
        <Input key="body" name="body" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
