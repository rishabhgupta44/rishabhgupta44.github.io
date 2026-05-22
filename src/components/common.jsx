import React, { useState } from "react";
import { PROFILE } from "../data/siteData.js";
import { cx, renderScientificParts } from "../utils/helpers.js";

export function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={cx("border-t border-red-900/10 py-14", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-800">{eyebrow}</p> : null}
          {title ? <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{title}</h2> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function ButtonLink({ href, children, variant = "primary" }) {
  const external = typeof href === "string" && /^https?:\/\//.test(href);
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={cx("inline-flex items-center justify-center border px-4 py-2 text-sm font-medium transition", variant === "primary" ? "border-red-900 bg-red-900 text-white hover:bg-red-800" : "border-red-900/25 bg-white text-slate-800 hover:border-red-800 hover:text-red-900")}>{children}</a>
  );
}

export function ScientificText({ text }) {
  return (
    <span className="inline">
      {renderScientificParts(text).map((part, index) => {
        const key = `${part.type}-${index}-${part.value || ""}`;
        const mathClass = "mx-0.5 inline-block whitespace-nowrap font-serif italic align-baseline text-slate-800";
        if (part.type === "ks0") return <span key={key} className={mathClass}>K<sub className="not-italic">S</sub><sup className="not-italic">0</sup></span>;
        if (part.type === "pt") return <span key={key} className={mathClass}>p<sub className="not-italic">T</sub></span>;
        if (part.type === "nch") return <span key={key} className={mathClass}>N<sub className="not-italic">ch</sub></span>;
        if (part.type === "sqrts") return <span key={key} className="mx-0.5 inline-block whitespace-nowrap font-serif align-baseline text-slate-800">√<span className="italic">s</span></span>;
        return <React.Fragment key={key}>{part.value}</React.Fragment>;
      })}
    </span>
  );
}

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      if (!navigator.clipboard) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }
  return <button type="button" onClick={copyEmail} className="inline-flex items-center justify-center border border-red-900/25 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-red-800 hover:text-red-900">{copied ? "Email copied" : "Copy email"}</button>;
}

export function ProfilePhoto() {
  const photoSources = [PROFILE.photoUrl, PROFILE.photoFallbackUrl, "./profile1.jpg", "/rishabh-gupta.jpg", "./rishabh-gupta.jpg"].filter(Boolean);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const currentSource = photoSources[sourceIndex];
  function handleImageError() {
    const nextIndex = sourceIndex + 1;
    if (nextIndex < photoSources.length) return setSourceIndex(nextIndex);
    setFailed(true);
  }
  if (failed || !currentSource) {
    return <div className="flex aspect-[4/5] w-full items-center justify-center border border-dashed border-red-900/25 bg-red-50/50 px-6 text-center text-sm leading-6 text-slate-600">Add your photo as public/profile1.jpg to display it here.</div>;
  }
  return <img src={currentSource} alt={`${PROFILE.name} portrait`} onError={handleImageError} className="h-full w-full object-cover object-[center_20%]" />;
}

export function PageHeader({ eyebrow, title, text }) {
  return <section className="bg-gradient-to-br from-[#fff7f4] via-white to-[#f8fafc] py-14"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-800">{eyebrow}</p><h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1><p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">{text}</p></div></section>;
}
