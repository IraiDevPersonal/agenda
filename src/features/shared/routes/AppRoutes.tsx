import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<main className="h-screen bg-red-300">APP</main>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
