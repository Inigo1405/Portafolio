import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>
        Navbar
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </>
  );
};
