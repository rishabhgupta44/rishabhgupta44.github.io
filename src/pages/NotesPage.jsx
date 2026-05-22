import { notesPageStatus } from "../data/siteData.js";
import { PageHeader, Section } from "../components/common.jsx";

export default function NotesPage() {
  return (
    <>
      <PageHeader eyebrow="Notes" title="Selected study notes" text="This page will contain selected handwritten derivation notes and study material later." />
      <Section id="notes-list" className="bg-white">
        <div className="flex min-h-[18rem] items-center justify-center border border-red-900/15 bg-[#fffdfb] p-8 text-center shadow-sm">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-800">{notesPageStatus}</p><h2 className="mt-3 text-2xl font-semibold text-slate-950">Notes archive coming soon</h2><p className="mt-3 max-w-xl text-sm leading-7 text-slate-700">Selected notes will be added after cleaning, formatting, and adding proper source references.</p></div>
        </div>
      </Section>
    </>
  );
}
