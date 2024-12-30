import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyDayPage from "@/features/agenda/pages/MyDayPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../layouts/Layout";
import { ROUTES } from "@/config/routes";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MyDayPage />} />
            <Route path={ROUTES.TEST} element={"Pagina test"} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
