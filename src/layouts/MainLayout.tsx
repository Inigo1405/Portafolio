import { Outlet } from "react-router-dom";

import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";


export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <header className="mb-15">
        <Navbar />
      </header>

      <main className="mx-15">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
