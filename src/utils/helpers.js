export function cx(...values) {
  return values.filter(Boolean).join(" ");
}

export function filterProjects(allProjects, activeTag, query) {
  const q = String(query || "").toLowerCase().trim();
  return allProjects.filter((project) => {
    const matchesTag = activeTag === "All" || project.tag === activeTag;
    const searchableText = [project.title, project.subtitle, project.tag, project.status, project.summary, ...project.highlights]
      .join(" ")
      .toLowerCase();
    return matchesTag && (!q || searchableText.includes(q));
  });
}

export function renderScientificParts(text) {
  const source = String(text || "");
  const tokens = [
    { value: "K_S^0", type: "ks0" },
    { value: "p_T", type: "pt" },
    { value: "N_ch", type: "nch" },
    { value: "sqrt(s)", type: "sqrts" },
  ];
  const parts = [];
  let cursor = 0;
  while (cursor < source.length) {
    let match = null;
    let matchIndex = source.length;
    for (const token of tokens) {
      const index = source.indexOf(token.value, cursor);
      if (index !== -1 && index < matchIndex) {
        match = token;
        matchIndex = index;
      }
    }
    if (!match) {
      parts.push({ type: "text", value: source.slice(cursor) });
      break;
    }
    if (matchIndex > cursor) parts.push({ type: "text", value: source.slice(cursor, matchIndex) });
    parts.push(match);
    cursor = matchIndex + match.value.length;
  }
  return parts.length > 0 ? parts : [{ type: "text", value: source }];
}
