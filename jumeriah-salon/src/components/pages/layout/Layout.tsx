import { Outlet } from "react-router-dom";
import HeaderWrapper from "../navbar/HeaderWrapper"; // ← mobile+desktop header

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 🔥 Responsive Header */}
      <HeaderWrapper />

      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
