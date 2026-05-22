import { archiveGroups } from "../data/siteData.js";
import { PageHeader, Section } from "../components/common.jsx";
import ArchiveChain from "../components/ArchiveChain.jsx";

export default function ArchivePage() {
  return (
    <>
      <PageHeader eyebrow="Archive" title="All projects" text="An archive of all my projects, including research work, technical experiments, simulations, visualizations, and early systems-design projects. This page keeps the full project history available while the homepage remains focused on selected work." />
      <Section id="all-projects" title="Project archive" className="bg-white">
        <div className="space-y-8">{archiveGroups.map((group) => <ArchiveChain key={group.title} group={group} />)}</div>
      </Section>
    </>
  );
}
