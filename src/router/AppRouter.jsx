import React from "react";
import { Route, Routes } from "react-router";
import AppRoutes from "./AppRoutes";
import { CvPage, HomePage, ProjectsPage } from "../pages";

function AppRouter() {
  return (
    <Routes>
      <Route path={AppRoutes.home} element={<HomePage />} />
      <Route path={AppRoutes.projects} element={<ProjectsPage />} />
      <Route path={AppRoutes.cv} element={<CvPage />} />
    </Routes>
  );
}

export default AppRouter;
