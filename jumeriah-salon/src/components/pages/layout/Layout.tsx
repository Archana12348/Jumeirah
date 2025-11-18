import { Outlet } from "react-router-dom";
import Header from "../navbar/Header";
import FooterPage from "../navbar/Footer";  

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterPage />
    </div>
  );
}
