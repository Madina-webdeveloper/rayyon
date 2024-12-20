import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Service } from "./pages/Service/Service";
import { Contact } from "./pages/Contact/Contact";
import { Manufacturers } from "./pages/Manufacturers/Manufacturers";
import { Catalog } from "./pages/Catalog/Catalog";
import { Frezerniy } from "./ExtraPages/Frezerniy/Frezerniy";
import { Tokarniy } from "./ExtraPages/Tokarniy/Tokarniy";
import { Zuboobrat } from "./ExtraPages/Zuboobrat/Zuboobrat";
import { List } from "./ExtraPages/List/List";
import { Footer } from "./components/Footer";
import { Shlif } from "./ExtraPages/Shlif/Shlif";
import { Dvigatel } from "./ExtraPages/Dvigatel/Dvigatel";
import { Svarka } from "./ExtraPages/Svarka/Svarka";
import { language } from "./lang";
function App() {
  

  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frezerniy" element={<Frezerniy />} />
        <Route path="/tokarniy" element={<Tokarniy />} />
        <Route path="/zuboobra" element={<Zuboobrat />} />
        <Route path="/list" element={<List />} />
        <Route path="/shlif" element={<Shlif />} />
        <Route path="/dvigatel" element={<Dvigatel />} />
        <Route path="/svarka" element={<Svarka />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manufacturers" element={<Manufacturers />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
