import { useEffect, useState } from "react";
import { Navbar, Footer } from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ArchivePage from "./pages/ArchivePage.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import { runSelfTests } from "./tests/selfTests.js";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    if (import.meta.env.DEV) runSelfTests();
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
