import React from "react";
import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <div className="body">
      <Outlet />
    </div>
  );
};

export default ContentLayout;
