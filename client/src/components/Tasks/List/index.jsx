import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as TaskActionCreators from "../../../actions/taskCreators";
import Task from "../Task";

export default function List() {
  const { tasks } = useSelector(({ tasks }) => tasks);
  const { getTasksRequest } = bindActionCreators(TaskActionCreators, useDispatch());

  useEffect(() => getTasksRequest(), []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
