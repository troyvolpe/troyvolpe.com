import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header className="portfolio-header">
        <Navbar />
      </header>
      <main className="portfolio-content">
        <Outlet />
      </main>
    </>
  );
}