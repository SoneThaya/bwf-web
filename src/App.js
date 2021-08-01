import React from "react";
import "./App.css";
import GroupList from "./components/group-list";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GroupList />
      </header>
    </div>
  );
};

export default App;
