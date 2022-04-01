import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import TimeAttackPage from "./components/TimeAttackPage";

export default function App() {
  return (
    <BrowserRouter>
        <div>
          <Menu />
          <div className="page">
            <Routes>
              <Route path="https://rebikhub.github.io/ra-router-menu/" element={<HomePage/>} />
              <Route path="https://rebikhub.github.io/ra-router-menu/drift" element={<DriftPage/>} />
              <Route path="https://rebikhub.github.io/ra-router-menu/timeattack" element={<TimeAttackPage/>} />
              <Route path="https://rebikhub.github.io/ra-router-menu/forza" element={<ForzaPage/>} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}