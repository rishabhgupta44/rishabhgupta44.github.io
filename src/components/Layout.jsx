import { PROFILE } from "../data/siteData.js";
import { cx } from "../utils/helpers.js";
import { useState } from "react";

export function Navbar({ activePage, setActivePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const homeLinks = ["Research", "Projects", "Publications", "CV", "Contact"];
  const pageLinks = [{ id: "archive", label: "All projects" }, { id: "notes", label: "Notes" }];
  function openPage(pageId) {
    setMobileOpen(false);
    setActivePage(pageId);
    window.setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  }
  function openHomeSection(event, sectionId) {
    event.preventDefault();
    setMobileOpen(false);
    setActivePage("home");
    window.setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  }
  return (
    <header className="sticky top-0 z-50 border-b border-red-800 bg-gradient-to-r from-red-950 via-red-900 to-red-950 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <button aria-label="Home" type="button" onClick={() => openPage("home")} className="text-sm font-semibold tracking-wide text-red-50">{PROFILE.name}</button>
        <div className="hidden items-center gap-5 md:flex">
          {homeLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={(event) => openHomeSection(event, link.toLowerCase())} className={cx("text-sm hover:text-white", activePage === "home" ? "text-red-100/85" : "text-red-100/60")}>{link}</a>)}
          {pageLinks.map((link) => <button key={link.id} type="button" onClick={() => openPage(link.id)} className={cx("text-sm hover:text-white", activePage === link.id ? "text-white underline underline-offset-4" : "text-red-100/70")}>{link.label}</button>)}
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="Email" href={`mailto:${PROFILE.email}`} className="hidden md:inline-block border border-red-200/30 bg-white/10 px-3 py-1.5 text-sm font-medium text-red-50 underline-offset-4 hover:bg-white/15 hover:text-white hover:underline">Email</a>
          <button aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Toggle menu" type="button" onClick={() => setMobileOpen((s) => !s)} className="md:hidden text-red-50">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </nav>
      {mobileOpen ? (
        <div id="mobile-menu" className="md:hidden border-t border-red-900/10 bg-red-950/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8">
            {homeLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={(event) => openHomeSection(event, link.toLowerCase())} className="px-2 py-2 text-sm text-red-100/90">{link}</a>)}
            {pageLinks.map((link) => <button key={link.id} type="button" onClick={() => openPage(link.id)} className="text-left px-2 py-2 text-sm text-red-100/90">{link.label}</button>)}
            <a href={`mailto:${PROFILE.email}`} className="mt-2 inline-block border border-red-200/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-red-50">Email</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return <footer className="border-t border-red-900/20 bg-red-950 px-5 py-8 text-center text-sm text-red-50 sm:px-8"><p>© {new Date().getFullYear()} {PROFILE.name}</p></footer>;
}
