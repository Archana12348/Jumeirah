import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/pages/layout/Layout";
// import HomePage from "../components/pages/HomePage"; // Add home page
import Home from "../components/pages/layout/Home";
import Contact from "../components/pages/ContactUs";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Wrapper */}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
