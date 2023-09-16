import React from "react";
import { Route, Routes } from "react-router";
import AppRoutes from "./AppRoutes";
import { HomePage } from "../pages";

function AppRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.home} element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;
