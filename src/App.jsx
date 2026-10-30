import { useEffect, useState } from "react";
import { Navbar, Footer } from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ArchivePage from "./pages/ArchivePage.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import { runSelfTests } from "./tests/selfTests.js";

export default function App() {
  const initialPage = window.location.pathname.endsWith("/archive") ? "archive" : window.location.pathname.endsWith("/notes") ? "notes" : "home";
  const [activePage, setActivePage] = useState(initialPage);

  useEffect(() => {
    if (import.meta.env.DEV) runSelfTests();
  }, []);

  useEffect(() => {
    const onPopState = () => setActivePage(window.location.pathname.endsWith("/archive") ? "archive" : window.location.pathname.endsWith("/notes") ? "notes" : "home");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <main className="min-h-screen bg-[#fffaf8] font-sans text-slate-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "home" && <HomePage />}
      {activePage === "archive" && <ArchivePage />}
      {activePage === "notes" && <NotesPage />}
      <Footer />
    </main>
  );
}
