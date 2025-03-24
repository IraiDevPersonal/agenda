import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layouts/Layout";

import AgendaMyDayPage from "@/features/agenda/pages/AgendaMyDayPage";
import AgendaPage from "@/features/agenda/pages/AgendaCalendarPage";
import AgendaCalendarPage from "@/features/agenda/pages/AgendaPage";
import NotFoundPage from "../pages/NotFoundPage";

import ROUTES from "@/config/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={ROUTES.MY_DAY} />} />
        <Route path={`${ROUTES.MY_DAY}/:uid?`} element={<AgendaMyDayPage />} />
        <Route path={ROUTES.AGENDA} element={<AgendaPage />} />
        <Route path={ROUTES.AGENDA_DETAIL} element={<AgendaCalendarPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoutes;
