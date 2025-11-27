import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/pages/layout/Layout";
// import HomePage from "../components/pages/HomePage"; // Add home page
import Home from "../components/pages/layout/Home";
import Contact from "../components/pages/ContactUs";
import LoginForm from "../components/pages/auth/LoginForm";
import RegisterForm from "../components/pages/auth/SignupForm";
import ForgetForm from "../components/pages/auth/forgetForm";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout Wrapper */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/reset-password" element={<ForgetForm />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
