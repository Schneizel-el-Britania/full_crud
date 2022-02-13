import React from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './Input.module.scss';

export default function Input(props) {
  const { name } = props;
  return (
    <label className={styles.container}>
      <Field name={name} placeholder={name} />
      <ErrorMessage name={name} component="span" />
    </label>
  );
}
