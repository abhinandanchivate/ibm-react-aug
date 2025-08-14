import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRouter from "./auth/router";
import Landing from "./core/components/layouts/Landing";
import DashboardRouter from "./dashboard/router";
import Alert from "./core/components/layouts/Alert";
import ProfileRouter from "./profile/routers/ProfileRouter";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/dashboard/*" element={<DashboardRouter />} />
      <Route path="/profile/*" element={<ProfileRouter />}></Route>
    </Routes>
  );
};

export default RootRouter;
