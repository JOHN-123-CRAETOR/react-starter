import React from "react";
import TaskCard from "./TaskCard";

function Column({ title, tasks, columnKey, moveTask }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "10px",
        border: "2px solid #ccc",
        borderRadius: "10px",
        minHeight: "300px"
      }}
    >
      <h3>{title}</h3>

      {tasks.length === 0 && <p>No tasks</p>}

      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          columnKey={columnKey}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
}

export default Column;