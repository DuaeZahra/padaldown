export type Domain =
  | "Healthcare"
  | "Fintech"
  | "Data & Search"
  | "Generative AI"
  | "Automation"
  | "AI Research";

export interface Project {
  slug: string;
  title: string;
  domain: Domain;
  client?: string;
  tagline: string;
  buyer: string;
  problem: string;
  approach: string;
  architecture: string[];
  metrics: { value: string; label: string }[];
  outcomes: string[];
  stack: string[];
  liveUrl?: string;
  liveLabel?: string;
  featured?: boolean;
}

// Single source of truth for every project on the site. Add a project by
// appending an object here — /work, the homepage, and /work/[slug] all
// render from this file.
export const PROJECTS: Project[] = [
  {
    slug: "ai-dental-diagnosis",
    title: "AI Dental Diagnosis Tool",
    domain: "Healthcare",
    client: "Aga Khan University",
    tagline: "Measures diagnostic angles from dental X-rays automatically.",
    buyer: "Head of radiology or clinical operations at a hospital group or dental chain",
    problem:
      "Measuring diagnostic angles on a dental X-ray by hand takes a trained clinician several minutes per case, and the reading depends on who's holding the ruler.",
    approach:
      "We trained a convolutional neural network to detect landmark points on panoramic X-rays and compute the diagnostic angles directly from the image, then wrapped it in a Flask app clinicians could use without touching a model file.",
    architecture: [
      "Panoramic X-ray upload",
      "OpenCV preprocessing and landmark cropping",
      "TensorFlow CNN landmark regression",
      "Angle computation",
      "Flask review interface",
    ],
    metrics: [
      { value: "0.89", label: "R² vs. clinician ground truth" },
      { value: "2.26°", label: "mean absolute error" },
      { value: "~25 min", label: "manual work removed per case" },
    ],
    outcomes: [
      "R² of 0.89 against clinician-measured ground truth",
      "2.26° mean absolute error",
      "~25 minutes of manual measurement removed per case",
    ],
    stack: ["Flask", "TensorFlow", "OpenCV", "Python"],
    featured: true,
  },
  {
    slug: "fairstock",
    title: "FairStock",
    domain: "Fintech",
    tagline: "Real-time trading and auction platform with an autonomous trading agent.",
    buyer: "Product lead at a trading platform or exchange operator",
    problem:
      "Retail trading platforms need live price discovery and an auction mechanism that holds up under real order flow, plus a safe way to test autonomous strategies against that flow.",
    approach:
      "We built a real-time stock trading and auction platform on FastAPI and React, with an agentic module that trades autonomously using reinforcement learning.",
    architecture: [
      "React trading interface",
      "FastAPI order and auction engine",
      "PostgreSQL order book and settlement records",
      "RL agent module trading autonomously against live order flow",
    ],
    metrics: [
      { value: "Live", label: "in production at fairstock.trade" },
      { value: "Real-time", label: "order matching and settlement" },
    ],
    outcomes: [
      "Live in production at fairstock.trade",
      "Real-time order matching and auction settlement",
      "Autonomous RL trading agent module",
    ],
    stack: ["FastAPI", "React", "PostgreSQL", "Reinforcement learning"],
    liveUrl: "https://fairstock.trade",
    liveLabel: "fairstock.trade",
    featured: true,
  },
  {
    slug: "pgedge-vectorizer",
    title: "pgEdge Vectorizer",
    domain: "Data & Search",
    tagline: "Automated embedding generation and vector storage inside Postgres.",
    buyer: "CTO or VP Engineering at a document-heavy B2B SaaS company",
    problem:
      "Teams that want semantic search are usually told the first step is standing up a separate vector database next to the Postgres they already run and trust.",
    approach:
      "We contributed automated embedding generation and vector storage tooling directly into pgEdge's open-source pgvector stack, so embeddings are generated and kept in sync inside Postgres itself.",
    architecture: [
      "Source tables in Postgres",
      "pgEdge vectorizer embedding pipeline",
      "pgvector column storage",
      "Similarity queries via standard SQL",
    ],
    metrics: [
      { value: "Merged", label: "into pgEdge/pgedge-vectorizer" },
      { value: "0", label: "separate vector databases required" },
    ],
    outcomes: [
      "Merged into the official pgEdge/pgedge-vectorizer repository",
      "No separate vector database required",
    ],
    stack: ["PostgreSQL", "pgvector", "Python"],
    liveUrl: "https://github.com/pgEdge/pgedge-vectorizer",
    liveLabel: "View merged repository",
    featured: true,
  },
  {
    slug: "remembrly",
    title: "Remembrly",
    domain: "Generative AI",
    tagline: "Models question difficulty and generates practice on each student's weak topics.",
    buyer: "Product lead at an ed-tech company",
    problem:
      "Students spend equal time on every topic when studying, because nobody has actually measured which questions are hard for which student.",
    approach:
      "We built a platform that analyses past exam papers to model question difficulty, then generates personalised practice questions targeted at each student's weak topics.",
    architecture: [
      "Past exam papers ingested and parsed",
      "NLP difficulty modeling per question",
      "Per-student weak-topic scoring",
      "OpenAI-generated practice questions",
      "FastAPI + Postgres serving layer",
    ],
    metrics: [
      { value: "Live", label: "in production at remembrly.ai" },
      { value: "Per-student", label: "practice targeted at weak topics" },
    ],
    outcomes: [
      "Live in production at remembrly.ai",
      "Practice questions generated per student on modeled weak topics",
    ],
    stack: ["FastAPI", "NLP", "OpenAI API", "PostgreSQL"],
    liveUrl: "https://remembrly.ai",
    liveLabel: "remembrly.ai",
  },
  {
    slug: "social-content-automation",
    title: "Social Content Automation",
    domain: "Automation",
    client: "BridgeTower Blockchain",
    tagline: "Multimodal content generation with trend analysis and auto-publishing.",
    buyer: "Head of marketing operations scaling content output",
    problem:
      "Producing daily social content by hand (writing, generating images and video, scheduling, publishing) was consuming hours of a small team's day, every day.",
    approach:
      "We built a multimodal generation pipeline covering text-to-image and text-to-video, with trend analysis, scheduling, and auto-publishing, built for BridgeTower Blockchain.",
    architecture: [
      "Trend analysis feed",
      "Stable Diffusion text-to-image / text-to-video generation",
      "Redis job scheduling",
      "FastAPI orchestration and auto-publish",
    ],
    metrics: [{ value: "Hours/day", label: "of manual content work removed" }],
    outcomes: ["Removes hours of manual content work per day"],
    stack: ["FastAPI", "Stable Diffusion", "Redis"],
  },
  {
    slug: "virtual-try-on",
    title: "Virtual Try-On",
    domain: "Generative AI",
    tagline: "Real-time garment try-on from a Chrome extension.",
    buyer: "Product lead at an e-commerce company",
    problem:
      "Shoppers can't tell how a garment will actually look on them from a product photo, and returns from bad fit are expensive to absorb.",
    approach:
      "We built a Chrome extension and backend for real-time garment try-on using IDM-VTON diffusion, with CLIP-based wearability validation and SAM masking to isolate garment and body regions.",
    architecture: [
      "Chrome extension capture",
      "SAM segmentation masking",
      "IDM-VTON diffusion generation",
      "CLIP cosine-similarity wearability check",
    ],
    metrics: [{ value: "Zero-shot", label: "wearability validation via CLIP" }],
    outcomes: ["Zero-shot wearability validation via CLIP cosine similarity scoring"],
    stack: ["IDM-VTON", "CLIP", "SAM", "CUDA"],
  },
  {
    slug: "lung-abnormality-classifier",
    title: "Lung Abnormality Classifier",
    domain: "Healthcare",
    tagline: "3D CNN classification directly over CT volumes.",
    buyer: "Teleradiology provider or hospital imaging lead",
    problem:
      "Reviewing a full CT volume slice by slice for abnormalities is slow, and readings vary between reviewers.",
    approach:
      "We trained a 3D convolutional neural network directly on CT volumes, using pydicom and SimpleITK for volume loading and preprocessing.",
    architecture: [
      "DICOM volume loading (pydicom)",
      "SimpleITK preprocessing and resampling",
      "3D CNN classification",
    ],
    metrics: [{ value: "92%", label: "accuracy on a balanced validation set" }],
    outcomes: ["92% accuracy on a balanced validation set"],
    stack: ["PyTorch", "pydicom", "SimpleITK"],
  },
  {
    slug: "air-quality-dashboard",
    title: "Air Quality Dashboard",
    domain: "Data & Search",
    tagline: "Forecasting dashboard over 20,000+ cleaned air quality records.",
    buyer: "Urban planning or disaster response agency",
    problem:
      "Air quality data existed but was scattered across sources, uncleaned, and not set up for the kind of forecasting planning decisions need.",
    approach:
      "We scraped and cleaned more than 20,000 air quality records, ran H2O.ai AutoML for forecasting, and built a Chart.js dashboard for planners to work from.",
    architecture: [
      "Scraped source records",
      "Data cleaning pipeline",
      "H2O.ai AutoML forecasting",
      "Chart.js dashboard",
    ],
    metrics: [
      { value: "20,000+", label: "records scraped and cleaned" },
    ],
    outcomes: [
      "20,000+ records scraped and cleaned",
      "Used for urban planning and disaster response decisions",
    ],
    stack: ["H2O.ai AutoML", "Chart.js", "Python"],
  },
  {
    slug: "rl-training-environments",
    title: "RL Environments for LLM Robustness",
    domain: "AI Research",
    tagline: "Training scenarios that target where large language models break.",
    buyer: "Research lead at a frontier lab, or an ML platform team measuring model reliability",
    problem:
      "A model that answers ordinary questions well can still fail on the hard edges of systems work: a subtly wrong CUDA kernel, a precision trade-off that silently loses accuracy. Finding those failure modes needs environments built specifically to provoke them.",
    approach:
      "We designed high-difficulty reinforcement-learning environments aimed at known LLM failure modes in ML systems and optimization work, including CUDA kernel debugging and precision-optimization tasks across INT8, INT4, BF16, and FP16 on H100 hardware.",
    architecture: [
      "Failure-mode analysis against target task families",
      "Scenario authoring with verifiable success criteria",
      "CUDA/Triton kernel debugging tasks",
      "Precision-optimization tasks across INT8, INT4, BF16, FP16",
      "Evaluation on H100 hardware",
    ],
    metrics: [
      { value: "4", label: "numeric precisions covered: INT8, INT4, BF16, FP16" },
      // Non-numeric on purpose: CountUpMetric animates anything containing a
      // digit, so "H100" would count up from H0 and read as a glitch.
      { value: "Adopted", label: "scenarios used in Claude model training" },
    ],
    outcomes: [
      "Scenarios were submitted to Anthropic and used in Claude model training",
      "Covers CUDA kernel debugging and precision optimization across four numeric formats",
    ],
    stack: ["Python", "PyTorch", "CUDA", "Triton", "H100", "RLHF"],
  },
  {
    slug: "conditional-gan-text-to-image",
    title: "Text-to-Image Conditional GANs",
    domain: "Generative AI",
    tagline: "Custom conditional GAN architectures generating images from text prompts.",
    buyer: "ML team evaluating generative approaches before committing to a hosted diffusion API",
    problem:
      "Generating an image that matches a text description means the model has to learn the relationship between the two, not just how to produce a plausible picture.",
    approach:
      "We implemented custom Conditional GAN architectures that condition image generation on a text prompt, and measured them by how often the output fooled a pretrained classifier rather than by eye.",
    architecture: [
      "Text embedding of the prompt",
      "Conditional generator on the embedding",
      "Discriminator trained on real/fake pairs",
      "Evaluation against a pretrained classifier",
    ],
    metrics: [
      { value: "80%+", label: "fooling rate against a pretrained classifier" },
    ],
    outcomes: [
      "Over 80% fooling rate against a pretrained classifier on generated images",
      "Trained and evaluated on Caltech-UCSD Birds and MS-COCO",
    ],
    stack: ["Python", "TensorFlow", "Keras", "NumPy", "OpenCV", "CUDA"],
  },
];

export const DOMAINS: Domain[] = [
  "Healthcare",
  "Fintech",
  "Data & Search",
  "Generative AI",
  "Automation",
  "AI Research",
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
