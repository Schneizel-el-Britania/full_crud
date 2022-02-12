import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as TaskActionCreators from "../../../actions/taskCreators";
import Task from "../Task";

export default function List() {
  const { tasks, isFetching, error } = useSelector(({ tasks }) => tasks);
  const { getTasksRequest } = bindActionCreators(TaskActionCreators, useDispatch());

  useEffect(() => {
    getTasksRequest();
  }, []);

  return (
    <>
      {isFetching && "Loading..."}
      {error && <p>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
}
