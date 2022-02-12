import React from "react";
import styles from "./Task.module.scss";

export default function Task(props) {
  const { author, body, isDone } = props.task;
  return (
    <article className={styles.container}>
      <p>{author}</p>
      <p>{body}</p>
      <p>{isDone ? "done" : "in progress"}</p>
      <button className={styles.isDoneButton}>{isDone ? "✘" : "✓"}</button>
    </article>
  );
}
