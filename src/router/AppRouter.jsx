import React from "react";
import { Route, Routes } from "react-router";
import AppRoutes from "./AppRoutes";
import { HomePage, ProjectsPage } from "../pages";

function AppRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.home} element={<HomePage />} />
      <Route path={AppRoutes.projects} element={<ProjectsPage />} />
    </Routes>
  );
}

export default AppRouter;
