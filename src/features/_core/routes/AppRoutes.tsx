import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layouts";
import { ROUTES } from "@/config";

import MyDayPage from "@/features/agenda/pages/MyDayPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
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

export default AppRoutes;
