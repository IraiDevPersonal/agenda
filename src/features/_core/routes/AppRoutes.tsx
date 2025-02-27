import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layouts/Layout";

import MyDayPage from "@/features/agenda/pages/MyDayPage";
import AgendaPage from "@/features/agenda/pages/AgendaPage";
import AgendaDayPage from "@/features/agenda/pages/AgendaDayPage";
import NotFoundPage from "../pages/NotFoundPage";

import ROUTES from "@/config/routes";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MyDayPage />} />
            <Route path={ROUTES.AGENDA} element={<AgendaPage />} />
            <Route path={ROUTES.AGENDA_DETAIL} element={<AgendaDayPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
