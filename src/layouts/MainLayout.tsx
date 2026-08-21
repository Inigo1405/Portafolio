import { Outlet } from "react-router-dom";

import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";


export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mb-15">
        <Navbar />
      </header>

      <main className="mx-15">
        <Outlet />
      </main>

      <footer className="mx-28 mt-8">
        <Footer />
      </footer>
    </div>
  );
};
