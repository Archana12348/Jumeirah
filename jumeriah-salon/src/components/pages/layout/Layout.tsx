import { Outlet } from "react-router-dom";
import Header from "../navbar/Header";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
