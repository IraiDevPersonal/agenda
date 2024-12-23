import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyDayPage from "@/features/agenda/pages/MyDayPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../layouts/Layout";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MyDayPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
