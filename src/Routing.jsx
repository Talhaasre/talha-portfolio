import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { homeURL, homeURLV2, notFoundURL } from "./helpers/paths";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound/NotFound";
import Homepagev2 from "./pages/Homepagev2/Homepagev2";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={homeURL} element={<Homepage />} />
        <Route path={homeURLV2} element={<Homepagev2 />} />
        <Route exact path={notFoundURL} element={<NotFound />} />
        <Route path="*" element={<Navigate to={notFoundURL} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;
