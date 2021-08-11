import React from "react";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Button variant="contained" color="secondary">
        My button
      </Button>
    </div>
  );
};

export default Sidebar;
