import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Timeline from "./components/Timeline";
import Home from "./components/Home";
import { NavBar } from "./components/NavBar";

import { GuitarTools } from "./components/GuitarTools/GuitarTools";
import { Container, MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider
      theme={{
        fontFamily: "Merriweather",
        headings: {
          fontFamily: "Merriweather",
        },
      }}
    >
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/guitar-tools" element={<GuitarTools />} />
        </Routes>
      </HashRouter>
    </MantineProvider>
  );
}

export default App;
