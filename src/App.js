import React from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div>
          <Sidebar />
          <Main />
        </div>
      </header>
    </div>
  );
};

export default App;
