import React, { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Father from "../components/main.jsx";
import Home from "../components/home/main.jsx";
import Destination from "../components/destination/main.jsx";
import Crew from "../components/crew/main.jsx";
import Technology from "../components/technology/main.jsx";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Father />}>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
