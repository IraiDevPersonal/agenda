import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layouts/Layout";

import AgendaMyDayPage from "@/modules/agenda/pages/AgendaMyDayPage";
import AgendaCalendarPage from "@/modules/agenda/pages/AgendaCalendarPage";
import AgendaPage from "@/modules/agenda/pages/AgendaPage";
import NotFoundPage from "../pages/NotFoundPage";

import ROUTES from "@/config/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={ROUTES.MY_DAY} />} />
        <Route path={`${ROUTES.MY_DAY}/:uid?`} element={<AgendaMyDayPage />} />
        <Route path={ROUTES.AGENDA} element={<AgendaCalendarPage />} />
        <Route path={`${ROUTES.AGENDA_DETAIL}/:uid?`} element={<AgendaPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </>,
  ),
);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
