import { Outlet } from "react-router-dom";

import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";


export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar className="mb-10"/>

      <main className="mx-18">
        <Outlet />
      </main>

      <Footer className="mt-10"/>
    </div>
  );
};
