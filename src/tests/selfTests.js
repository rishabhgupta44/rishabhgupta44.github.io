import { PROFILE, projects, skills, timeline, archiveGroups, publications, notesPageStatus } from "../data/siteData.js";
import { filterProjects, renderScientificParts } from "../utils/helpers.js";

export function runSelfTests() {
  const oldProjects = archiveGroups.find((group) => group.title === "Old projects");
  const tests = [
    { name: "Profile links configured", pass: PROFILE.email === "rishabh200207@gmail.com" && PROFILE.githubUrl === "https://github.com/rishabhgupta44" && PROFILE.linkedinUrl === "https://www.linkedin.com/in/rishabhgupta44/" && PROFILE.inspireUrl === "https://inspirehep.net/authors/3131955?ui-citation-summary=true" },
    { name: "All projects filter", pass: filterProjects(projects, "All", "").length === projects.length },
    { name: "ML filter", pass: filterProjects(projects, "Machine Learning", "").every((p) => p.tag === "Machine Learning") },
    { name: "MAGE search", pass: filterProjects(projects, "All", "reproducibility").some((p) => p.title === "MAGE-HEP") },
    { name: "Scientific p_T rendering", pass: renderScientificParts("mean p_T").some((part) => part.type === "pt") },
    { name: "Scientific K_S^0 rendering", pass: renderScientificParts("K_S^0 spectra").some((part) => part.type === "ks0") },
    { name: "GEANT4 wording", pass: skills.includes("GEANT4") && !skills.includes("GEANT4 exposure") },
    { name: "SINP timeline", pass: timeline.some((item) => item.title === "Independent research with Saha Institute of Nuclear Physics" && item.text.includes("machine-learning applications in muon tomography")) },
    { name: "No separate GitHub repos group", pass: !archiveGroups.some((group) => group.title === "GitHub repositories") },
    { name: "Old project repo links", pass: oldProjects?.items.some((item) => item.githubUrl === "https://github.com/rishabhgupta44/epos4-hadron-correlation-analysis") && oldProjects?.items.some((item) => item.githubUrl === "https://github.com/rishabhgupta44/GAI-particle-spectra-prediction") },
    { name: "arXiv links", pass: publications.some((pub) => pub.link === "https://arxiv.org/abs/2605.17871") && publications.some((pub) => pub.link === "https://arxiv.org/abs/2605.09022") },
    { name: "Notes page status", pass: notesPageStatus === "Under construction" },
  ];
  const failed = tests.filter((test) => !test.pass);
  if (failed.length > 0) console.error("Website self tests failed:", failed);
}
