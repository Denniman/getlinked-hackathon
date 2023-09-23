import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages";

import { APP_URL_LIST } from "./url";

export const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL_LIST.HOME_URL} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
