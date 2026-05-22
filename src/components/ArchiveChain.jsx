import { useState } from "react";
import { cx } from "../utils/helpers.js";

function MediaLightbox({ media, onClose }) {
  if (!media) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-auto border border-red-900/20 bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-red-900/10 p-4"><div><h3 className="text-lg font-semibold text-slate-950">{media.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{media.description}</p></div><button type="button" onClick={onClose} className="border border-red-900/20 px-3 py-1.5 text-sm font-medium text-red-900 hover:bg-red-50">Close</button></div>
        <div className="bg-[#fffaf8] p-4">{media.src ? <img src={media.src} alt={media.title} className="mx-auto max-h-[70vh] w-auto max-w-full object-contain" /> : <div className="flex min-h-[28rem] items-center justify-center border border-dashed border-red-900/25 bg-white p-8 text-center"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-800">Full-view placeholder</p><h4 className="mt-3 text-2xl font-semibold text-slate-950">Image will be added later</h4><p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">This space is reserved for a cleaned high-resolution image, diagram, render, certificate, or selected page preview.</p></div></div>}</div>
      </div>
    </div>
  );
}

function MediaPreview({ media, onOpen }) {
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(media.src) && !failed;
  return (
    <button type="button" onClick={() => onOpen(media)} className="group block w-full overflow-hidden border border-red-900/15 bg-white text-left transition hover:border-red-900/35 hover:shadow-sm" aria-label={`Open full view for ${media.title}`}>
      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#fff7f4]">{hasImage ? <img src={media.src} alt={media.title} onError={() => setFailed(true)} className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]" /> : <div className="px-4 text-center"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-800">Image space</p><p className="mt-2 text-xs leading-5 text-slate-500">Will be added after cleaning</p></div>}</div>
      <div className="p-3"><h5 className="text-sm font-semibold text-slate-950">{media.title}</h5><p className="mt-1 text-xs leading-5 text-slate-600">{media.description}</p></div>
    </button>
  );
}

export default function ArchiveChain({ group }) {
  const [openItems, setOpenItems] = useState({});
  const [selectedMedia, setSelectedMedia] = useState(null);
  function toggleItem(title) { setOpenItems((current) => ({ ...current, [title]: !current[title] })); }
  return (
    <article className="border border-red-900/15 bg-[#fffdfb] p-6 shadow-sm sm:p-7">
      <div className="mb-7 max-w-3xl"><h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">{group.title}</h2><p className="mt-2 text-sm leading-7 text-slate-700">{group.subtitle}</p></div>
      <div>{group.items.map((item, index) => { const isFirst = index === 0; const isLast = index === group.items.length - 1; const isOpen = Boolean(openItems[item.title]); return (
        <div key={item.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <div className="relative flex self-stretch items-center justify-center">{!isFirst ? <span className="absolute bottom-1/2 top-0 w-px bg-slate-300" /> : null}{!isLast ? <span className="absolute bottom-0 top-1/2 w-px bg-slate-300" /> : null}<span className={cx("relative z-10 h-3 w-3 rounded-full ring-4 ring-[#fffdfb]", isOpen ? "bg-red-800" : "bg-slate-400")} /></div>
          <div className={cx("pb-7", isLast ? "pb-0" : "")}><div className={cx("max-w-4xl border bg-white transition", isOpen ? "border-red-900/25 shadow-sm" : "border-red-900/10 hover:border-red-900/25")}>
            <button type="button" onClick={() => toggleItem(item.title)} className="block w-full p-4 text-left sm:p-5" aria-expanded={isOpen}><div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"><h3 className="text-base font-semibold text-slate-950">{item.title}</h3><span className="text-xs font-medium uppercase tracking-[0.12em] text-red-800">{item.meta}</span></div><p className="mt-2 text-sm leading-7 text-slate-700">{item.text}</p><p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-red-800">{isOpen ? "Hide details" : "Click to know more"}</p></button>
            {isOpen ? <div className="border-t border-red-900/10 bg-[#fffaf8] p-4 sm:p-5"><h4 className="text-sm font-semibold text-slate-950">Project notes</h4><ul className="mt-3 grid gap-2 md:grid-cols-2">{item.details.map((detail) => <li key={detail} className="flex gap-3 text-sm leading-7 text-slate-700"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-800" /><span>{detail}</span></li>)}</ul>
              {!item.hideMedia ? <div className="mt-6"><h4 className="text-sm font-semibold text-slate-950">Images / material</h4>{Array.isArray(item.media) && item.media.length > 0 ? <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{item.media.map((media) => <MediaPreview key={media.title} media={media} onOpen={setSelectedMedia} />)}</div> : <div className="mt-3 flex min-h-[10rem] items-center justify-center border border-dashed border-red-900/20 bg-white p-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-slate-500">Images will be added later</div>}</div> : null}
              {item.paperUrl ? <div className="mt-5 border border-red-900/20 bg-white p-3"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-800">Preprint</p><a href={item.paperUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex border border-red-900/25 px-3 py-1.5 text-sm font-medium text-red-900 hover:bg-red-50">Open arXiv preprint</a></div> : null}
              {item.githubUrl ? <div className="mt-5 border border-red-900/20 bg-white p-3"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-800">Repository</p><a href={item.githubUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex border border-red-900/25 px-3 py-1.5 text-sm font-medium text-red-900 hover:bg-red-50">Open GitHub repository</a></div> : null}
              {item.pdfStatus ? <div className="mt-5 border border-dashed border-red-900/20 bg-white p-3"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-800">PDF</p><p className="mt-1 text-sm text-slate-700">{item.pdfStatus}</p></div> : null}
            </div> : null}
          </div></div>
        </div>
      ); })}</div>
      <MediaLightbox media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </article>
  );
}
