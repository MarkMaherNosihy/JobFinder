import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
const MainLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="pt-[75px]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
