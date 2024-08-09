import React, { useState } from "react";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="w-[400px] mt-20 mx-auto">
      <Header />
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default App;
