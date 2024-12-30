import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/ui";

const rootElement = document.getElementById("root");

export const Layout = () => {
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
