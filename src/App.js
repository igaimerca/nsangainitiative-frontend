import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* <Route
            path="/components/:type/:subtype/:name"
            element={<ComponentRenderer />}
          />
          <Route
            path="/components/:type/:name"
            element={<ComponentRenderer />}
          />
          <Route path="/thank-you" element={<ThankYouPage />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
