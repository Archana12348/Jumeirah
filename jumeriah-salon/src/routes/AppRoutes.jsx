import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/pages/layout/Layout";
// import HomePage from "../components/pages/HomePage"; // Add home page

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* ⬇ All pages inside MainLayout */}
          {/* <Route index element={<HomePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
