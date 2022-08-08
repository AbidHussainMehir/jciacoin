import React from "react";
import { routes } from "./navigation";
import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((item, index) => {
        return (
          <Route
            key={item.path + index}
            path={item.path}
            element={item.component}
          />
        );
      })}
    </Routes>
  );
};
