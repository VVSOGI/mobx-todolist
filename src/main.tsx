import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
