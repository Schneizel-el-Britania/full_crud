import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TaskActionCreators from "../../../actions/taskCreators";
import styles from "./Task.module.scss";

export default function Task(props) {
  const { id, author, body, isDone } = props.task;

  const { setTaskDoneRequest } = bindActionCreators(TaskActionCreators, useDispatch());
  const handleIsDone = () => setTaskDoneRequest({ id });

  return (
    <article className={styles.container}>
      <p>{id}</p>
      <p>{author}</p>
      <p>{body}</p>
      <p>{isDone ? "done" : "in progress"}</p>
      <button onClick={handleIsDone} className={styles.isDoneButton}>
        {isDone ? "✘" : "✓"}
      </button>
    </article>
  );
}
