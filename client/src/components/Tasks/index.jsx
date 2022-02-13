import React from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import * as TaskActionCreators from "../../actions/taskCreators";
import AddTask from "./AddTask";
import List from "./List";

export default function Tasks() {
  const { isFetching, errors } = useSelector(({ tasks }) => tasks);
  const { clearError } = bindActionCreators(TaskActionCreators, useDispatch());
  return (
    <section>
      {isFetching && "Loading..."}
      {errors && (
        <div>
          {errors.map((error, index) => (
            <p key={index}>{error.message}</p>
          ))}
          <button onClick={clearError}>X</button>
        </div>
      )}
      <AddTask />
      <List />
    </section>
  );
}
