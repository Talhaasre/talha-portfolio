import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { homeURL, notFoundURL } from "./helpers/paths";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound/NotFound";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={homeURL} element={<Homepage />} />
        <Route exact path={notFoundURL} element={<NotFound />} />
        <Route path="*" element={<Navigate to={notFoundURL} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
