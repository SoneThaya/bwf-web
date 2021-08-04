import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="general-content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
