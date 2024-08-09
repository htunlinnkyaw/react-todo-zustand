import React, { useState } from "react";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="w-[400px] mt-20 mx-auto">
      {/* <Header />
      <CreateTask />
      <TaskList /> */}
      <Counter />
    </div>
  );
};

export default App;
