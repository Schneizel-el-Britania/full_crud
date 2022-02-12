import React from "react";
import { ErrorMessage, Field } from "formik";

export default function Input(props) {
  const { name } = props;
  return (
    <label>
      <Field name={name} placeholder={name} />
      <ErrorMessage name={name} component="div" />
    </label>
  );
}
