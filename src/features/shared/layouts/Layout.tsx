import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/AppSidebar";

const rootElement = document.getElementById("root");

const Layout = () => {
  useLayoutEffect(() => {
    if (!rootElement) return;
    rootElement.classList.add("min-h-screen", "w-full", "flex");
  }, []);
  return (
    <>
      <AppSidebar />
      <Outlet />
    </>
  );
};

export default Layout;
