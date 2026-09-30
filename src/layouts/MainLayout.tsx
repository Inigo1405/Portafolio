import { Outlet } from "react-router-dom";

import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";


export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <header className="mb-10">
        <Navbar />
      </header>

      <main className="mx-18">
        <Outlet />
      </main>

      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};
