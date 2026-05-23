const asset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const PROFILE = {
  name: "Rishabh Gupta",
  title: "High Energy Physics",
  institute: "M.Sc. Physics, Indian Institute of Technology Indore",
  email: "rishabh200207@gmail.com",
  location: "India",
  // The site looks for an image in the `public/` folder.
  // Recommended filename: `public/profile1.jpg`.
  // Put your photo at `public/profile1.jpg` and it will be displayed.
  photoUrl: asset("profile1.jpg"),
  photoFallbackUrl: asset("profile1.jpg"),
  cvUrl: asset("Rishabh_Gupta_CV.pdf"),
  githubUrl: "https://github.com/rishabhgupta44",
  linkedinUrl: "https://www.linkedin.com/in/rishabhgupta44/",
  inspireUrl: "https://inspirehep.net/authors/3131955?ui-citation-summary=true",
  tagline:
    "I am interested in high energy physics problems that probe the fundamental structure of nature, and I also enjoy building frameworks that make scientific workflows easier to develop, reproduce, and extend.",
};

export const researchTags = ["All", "HEP Software", "Machine Learning", "Detector R&D", "Simulation"];

export const projects = [
  {
    title: "MAGE-HEP",
    subtitle: "Monte Carlo Analysis and Graphical Environment for High-Energy Physics",
    tag: "HEP Software",
    status: "arXiv:2605.17871",
    paperUrl: "https://arxiv.org/abs/2605.17871",
    summary:
      "A reproducibility focused PYTHIA8 and ROOT workflow environment where steering files, analysis logic, ROOT output choices, generated code, environment details, and run metadata are preserved together. MAGE uses .mgp project bundles and .mcx context files to keep studies reusable, inspectable, and reproducible.",
    highlights: [
      "Node based analysis builder inspired by visual programming workflows",
      "User defined ROOT output rules instead of hardcoded histogram writing",
      ".mgp project bundles preserve studies, runs, generated code, logs, output schema, software versions, and provenance",
      ".mcx context files store node metadata, exposed parameters, sockets, ROOT output rules, and workflow logic",
      "Designed for small and medium scale generator studies where reproducibility and reuse are central",
    ],
  },
  {
    title: "Physics-informed ML for identified hadron production",
    subtitle: "Inferring identified hadron production in pp collisions with physics-informed machine learning at the LHC",
    tag: "Machine Learning",
    status: "arXiv:2605.09022",
    paperUrl: "https://arxiv.org/abs/2605.09022",
    summary:
      "A physics informed neural-network study trained on PYTHIA8 proton-proton collisions at a centre-of-mass energy of 13.6 TeV within the MAGE pipeline. The model infers identified hadron p_T spectra across pseudorapidity and multiplicity regions, including interpolation and extrapolation windows where direct training data are absent. A StageDNN strategy was employed in this project: a data-first training stage followed by warm-started refinement with progressively stronger physics constraints.",
    highlights: [
      "Built a spectra dataset for π, K, p, Λ, and K_S^0 using PYTHIA8 and ROOT output processed through MAGE",
      "Used input features combining p_T, pseudorapidity bin, multiplicity class, and one-hot particle identity",
      "Employed a StageDNN strategy, a staged PINN workflow with exploration, refinement, final search, and long post-refinement training",
      "Added physics losses for particle-yield ratios, spectral smoothness, and local shape consistency, applied periodically during training",
      "Compared the physics-informed model with XGBoost and LightGBM baselines across trained, interpolation, and extrapolation regions",
      "Validated the predictions using spectra, particle ratios, mean p_T versus multiplicity, and kinetic freeze-out observables",
    ],
  },
  {
    title: "THGEM detector simulation",
    subtitle: "B.Sc. dissertation project on numerical simulation for cosmic-muon detection",
    tag: "Detector R&D",
    status: "B.Sc. dissertation project, 2024",
    summary:
      "A COMSOL Multiphysics based numerical study of a THGEM detector for cosmic-muon detection. The dissertation focused on understanding charge amplification and detector response through 2D axisymmetric simulations, with separate studies for geometries with and without rim structures, different electric-field settings, negative-ion effects, Penning-related cases, charge concentration evolution, gain comparison, and streamer formation.",
    highlights: [
      "Built 2D axisymmetric THGEM detector geometries in COMSOL Multiphysics with and without rim structures",
      "Studied the effect of drift field, THGEM voltage, induction field, initial charge position, and detector geometry on charge amplification",
      "Simulated electron and ion concentration evolution, including negative-ion cases and Penning-related configurations",
      "Compared gain trends for different voltage and model settings to understand detector-response behaviour",
      "Wrote supporting Python code to streamline recurring THGEM calculations and simulation-data handling during the dissertation work",
    ],
  },
  {
    title: "Muon tomography reconstruction",
    subtitle: "Detector simulation, CNN object detection, and 3D reconstruction",
    tag: "Simulation",
    status: "Research internship project",
    summary:
      "Work on simulation and reconstruction concepts for muon tomography, including GEANT4, detector response ideas, object detection, and 3D point cloud or volumetric reconstruction workflows.",
    highlights: [
      "GEANT4 and detector response simulation",
      "CNN based object detection ideas",
      "3D point cloud and volumetric reconstruction studies",
      "Connection between detector information and incomplete reconstruction tasks",
    ],
  },
];

export const publications = [
  { title: "THGEM detector optimization study", venue: "Journal of Instrumentation, 2025", type: "Published", link: "#" },
  {
    title: "Inferring identified hadron production in pp collisions with physics-informed machine learning at the LHC",
    venue: "arXiv:2605.09022",
    type: "Preprint",
    link: "https://arxiv.org/abs/2605.09022",
  },
  {
    title: "MAGE-HEP: Monte Carlo Analysis and Graphical Environment for High-Energy Physics",
    venue: "arXiv:2605.17871",
    type: "Preprint",
    link: "https://arxiv.org/abs/2605.17871",
  },
];

export const skills = ["PYTHIA8", "ROOT", "C++", "Qt", "Python", "PyTorch", "Optuna TPE", "COMSOL", "GEANT4", "Detector simulation", "HEP analysis workflows", "Physics guided ML", "Staged PINN / StageDNN workflow"];

export const timeline = [
  { year: "Now", title: "M.Sc. Physics, IIT Indore", text: "Working on high energy physics, event generator studies, ROOT workflows, and physics guided machine learning for particle spectra." },
  { year: "Present", title: "Independent research with Saha Institute of Nuclear Physics", text: "Working on machine-learning applications in muon tomography, with emphasis on reconstruction from detector-level information." },
  { year: "2025", title: "JINST detector paper", text: "THGEM detector simulation and optimization work published in Journal of Instrumentation." },
];

export const archiveGroups = [
  {
    title: "Current projects",
    subtitle: "Research work, active manuscripts, and technical projects that define my present direction.",
    items: [
      {
        title: "MAGE-HEP",
        meta: "arXiv:2605.17871",
        text: "MAGE-HEP: Monte Carlo Analysis and Graphical Environment for High-Energy Physics. A reproducibility-focused environment for PYTHIA8 and ROOT workflows using .mgp project bundles and .mcx context files.",
        paperUrl: "https://arxiv.org/abs/2605.17871",
        details: ["Built around reusable project bundles, context files, generated analysis code, output rules, and provenance.", "The project is meant to make generator-based studies easier to inspect, rerun, and extend.", "Images to add later: GUI screenshots, node graph, project folder structure, and ROOT output preview."],
      },
      {
        title: "Inferring identified hadron production in pp collisions with physics-informed machine learning at the LHC",
        meta: "arXiv:2605.09022",
        text: "Physics-informed learning for identified hadron spectra across pseudorapidity and multiplicity regions.",
        paperUrl: "https://arxiv.org/abs/2605.09022",
        details: ["Uses PYTHIA8 and ROOT spectra processed through the MAGE pipeline.", "The model studies trained, interpolation, and extrapolation pseudorapidity regions.", "Images to add later: spectra comparison, staged optimisation diagram, particle-ratio plots, and freeze-out validation plots."],
      },
      {
        title: "Muon tomography reconstruction",
        meta: "Research internship project",
        text: "Detector simulation and reconstruction ideas involving GEANT4, CNN methods, and 3D reconstruction concepts.",
        details: ["Worked with simulation and reconstruction ideas for muon tomography applications.", "Explored detector response, object detection, and 3D reconstruction concepts from incomplete detector information.", "Images to add later: detector setup diagrams, reconstruction pipeline, and example visual outputs."],
      },
    ],
  },
  {
    title: "Old projects",
    subtitle: "Earlier technical work that shows how my interest in large systems, physics, and engineering developed over time.",
    items: [
      {
        title: "THGEM detector simulation",
        meta: "B.Sc. dissertation project, 2024",
        text: "COMSOL Multiphysics simulations of THGEM charge amplification, gain trends, and streamer formation.",
        details: ["Built 2D axisymmetric THGEM geometries with and without rim structures in COMSOL Multiphysics.", "Studied drift field, THGEM voltage, induction field, charge concentration, gain comparison, and streamer formation.", "Selected figures will be added here after cleaning and formatting."],
        media: [{ title: "COMSOL geometry", description: "Space for the 2D axisymmetric THGEM geometry and rim configuration figure.", src: "" }, { title: "Charge evolution", description: "Space for electron and ion concentration evolution or charge-cloud snapshots.", src: "" }, { title: "Gain comparison", description: "Space for gain comparison and voltage-variation plots from the dissertation.", src: "" }],
        pdfStatus: "PDF will be available later",
      },
      {
        title: "Aurora",
        meta: "NASA Ames Space Settlement Contest, Third Prize, Individual Category",
        text: "Class 12 individual project on a torus-based orbital settlement with structure, life support, and planning sections.",
        details: ["A more mature continuation of the early systems-design direction.", "Focused on torus-based settlement design, stability, construction, life support, governance, and economy.", "Selected pages and visuals will be added here after cleaning old image sources and formatting the archive version."],
        media: [{ title: "Selected page preview", description: "Space for a cleaned page preview from the Aurora project document.", src: "" }, { title: "Settlement geometry", description: "Space for geometry sketches, torus-layout visuals, or Blender renders.", src: "" }, { title: "Award proof", description: "Space for certificate or contest result proof if available.", src: "" }],
        pdfStatus: "PDF will be available later",
      },
      {
        title: "Project Elpida",
        meta: "NASA Ames Space Settlement Contest, Honorable Mention",
        text: "Class 9 individual space-settlement design project, kept as an early systems-design archive.",
        details: ["An early independent systems-design project on a space settlement concept.", "Included structure, life-support ideas, artificial gravity, water, energy, agriculture, and social planning sections.", "Selected pages and visuals will be added here after cleaning old image sources and formatting the archive version."],
        media: [{ title: "Selected page preview", description: "Space for a cleaned page preview from the Project Elpida document.", src: "" }, { title: "Original diagrams", description: "Space for original diagrams, settlement layout sketches, or system-design visuals.", src: "" }, { title: "Award proof", description: "Space for certificate or contest result proof if available.", src: "" }],
        pdfStatus: "PDF will be available later",
      },
      { title: "EPOS4 hadron-correlation analysis", meta: "Public GitHub repository", text: "EPOS4 based hadron-correlation analysis code for studying particle correlations, multiplicity selections, event mixing, and ROOT output workflows.", githubUrl: "https://github.com/rishabhgupta44/epos4-hadron-correlation-analysis", details: ["Contains analysis code for EPOS4 hadron-correlation studies.", "Shows experience with particle correlation analysis, charged-particle multiplicity handling, event mixing, and ROOT histograms.", "Kept here as an analysis-code archive that can be improved and extended over time."] },
      { title: "GAI particle spectra prediction", meta: "Public GitHub repository", text: "Physics guided machine-learning code for identified particle spectra prediction using PYTHIA8 and ROOT based data products.", githubUrl: "https://github.com/rishabhgupta44/GAI-particle-spectra-prediction", details: ["Connects to the physics-informed machine-learning study on identified hadron production.", "Shows particle-spectra preprocessing, model-training workflow, validation checks, and links between ML outputs and physics observables.", "Useful as a code companion to the PINN / StageDNN project and the particle-spectra manuscript."] },
    ],
  },
  {
    title: "Things I enjoy working on",
    subtitle: "Personal experiments, visual work, and small explorations that I enjoy working on while learning by making things.",
    items: [
      { title: "3D animations", meta: "Blender visual work", text: "Scientific and geometry-based 3D animations created in Blender while learning modelling, motion, and visualization.", details: ["A personal archive of 3D animations made in Blender while learning geometry, motion, and visual storytelling.", "These are not formal research projects, but they show my long-term interest in building and visual explanation.", "Images to add later: renders, short GIFs, animation frames, and modelling screenshots."] },
      { title: "Rule-Based Cognitive Architecture (Cortex)", meta: "2019 side project", text: "My first independent Python project, where I tried to explore how a rule-based language system could be designed from scratch without prior knowledge of LLMs.", hideMedia: true, githubUrl: "https://github.com/rishabhgupta44/Cortex", details: ["Built a deterministic NLU-style pipeline to understand how language input could be mapped manually to JSON dictionaries, intent logic, confidence scores, memory states, and rule-based system responses.", "Organized the project around a biologically inspired directory structure, including Frontal Lobe, Broca's Area, and Limbic System components.", "Frontal Lobe handled executive-function style cross-referencing of input against manual dictionaries for intent mapping and confidence assignment.", "Broca's Area orchestrated speech production and system output, while the Limbic System managed chronological logging and memory-like state tracking.", "The logic was simple, but building it helped me understand algorithmic orchestration, state management, and system-level design from first principles.", "The cleaned archive is available as the Cortex repository on GitHub."] },
    ],
  },
];

export const notesPageStatus = "Under construction";
