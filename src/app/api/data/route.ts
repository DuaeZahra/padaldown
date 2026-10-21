import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { projectdata } from '@/app/types/projectdata'
import { whyusdata } from '@/app/types/whyusdata'
import { resultdata } from '@/app/types/resultdata'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Services', href: '/#Services' },
  { label: 'Projects', href: '/#Projects' },
  { label: 'Tech Stack', href: '/#Stack' },
  { label: 'Why Us', href: '/#WhyUs' },
  { label: 'FAQ', href: '/#FAQ' },
]

// services (core competencies) data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Machine Learning & AI',
    icon: 'tabler:brain',
    paragraph:
      'Research-grade models built for real-world deployment, from medical imaging to autonomous agents.',
    items: [
      'Deep Learning (CNNs, GANs)',
      'NLP & LLM Integration',
      'Computer Vision',
      'Reinforcement Learning',
      'AutoML (H2O.ai)',
    ],
  },
  {
    heading: 'Full-Stack AI Products',
    icon: 'tabler:stack-2',
    paragraph:
      'Production-ready web apps with APIs, frontends and scalable backends, not just models.',
    items: [
      'Flask / FastAPI Backends',
      'React Frontend Development',
      'REST API Design & Deployment',
      'Real-time Systems (Kafka, Redis)',
      'Database Design (SQL / NoSQL)',
    ],
  },
  {
    heading: 'Specialized Engineering',
    icon: 'tabler:cpu',
    paragraph:
      'Deep technical work where most teams stop: GPU kernels, blockchain and generative systems.',
    items: [
      'CUDA / Triton Kernels (H100)',
      'Blockchain (Ethereum, Solidity)',
      'Medical Imaging / Diagnostics',
      'Generative AI (Stable Diffusion)',
      'Vector Databases (pgvector)',
    ],
  },
]

// tech-stack data
const WorkData: workdata[] = [
  {
    category: 'Languages',
    icon: 'tabler:code',
    items: ['Python', 'C++', 'JavaScript (Node.js)', 'Solidity'],
  },
  {
    category: 'AI & ML',
    icon: 'tabler:brain',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'H2O.ai'],
  },
  {
    category: 'Generative AI',
    icon: 'tabler:sparkles',
    items: ['Stable Diffusion', 'Conditional GANs', 'OpenAI API', 'CLIP', 'IDM-VTON', 'SAM'],
  },
  {
    category: 'Vector Databases',
    icon: 'tabler:vector-triangle',
    items: ['PostgreSQL + pgvector', 'pgedge-vectorizer'],
  },
  {
    category: 'Backend & APIs',
    icon: 'tabler:server-2',
    items: ['Flask', 'FastAPI', 'Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Frontend',
    icon: 'tabler:layout-dashboard',
    items: ['React', 'HTML / CSS / JS', 'Chart.js', 'Tableau'],
  },
  {
    category: 'Blockchain',
    icon: 'tabler:currency-ethereum',
    items: ['Ethereum', 'Solidity', 'Hardhat', 'Web3.js', 'MetaMask'],
  },
  {
    category: 'GPU & Hardware',
    icon: 'tabler:cpu-2',
    items: ['CUDA', 'Triton Kernels', 'H100 GPUs', 'INT8 / BF16 Precision'],
  },
]

// flagship projects data
const ProjectsData: projectdata[] = [
  {
    title: 'DentalAI: Automated Dental Diagnostics',
    domain: 'Healthcare',
    stack: ['Flask', 'TensorFlow', 'OpenCV', 'NumPy'],
    points: [
      'CNN model predicting dental angles from X-rays (RMSE 2.26°, R² 0.89).',
      'Cut manual diagnostic time by ~25 minutes per case.',
      'Real-time predictions behind a responsive Flask web app.',
    ],
  },
  {
    title: 'FairStock: AI Fintech & Stock Auctions',
    domain: 'Fintech',
    stack: ['FastAPI', 'React', 'Agentic AI', 'Reinforcement Learning'],
    points: [
      'Real-time stock auction platform with an autonomous trading agent.',
      'Responsive portfolio tracking and live auction listings.',
    ],
    link: { label: 'fairstock.trade', href: 'https://fairstock.trade' },
  },
  {
    title: 'AI Social Media Automation',
    domain: 'Marketing · BridgeTower Blockchain',
    stack: ['FastAPI', 'React', 'OpenAI API', 'Stable Diffusion', 'PostgreSQL', 'Redis'],
    points: [
      'LLM trend analysis generating captions, images and short-form video.',
      'Text-to-image and text-to-video pipeline with automated publishing.',
      'High-concurrency Redis job queues scaling across channels.',
    ],
  },
  {
    title: 'Virtual Try-On Backend & CLIP Validator',
    domain: 'E-commerce · Chrome Extension',
    stack: ['PyTorch', 'FastAPI', 'IDM-VTON', 'CLIP', 'SAM', 'CUDA'],
    points: [
      'High-throughput real-time try-on with the IDM-VTON diffusion framework.',
      'Zero-shot wearability validation via CLIP embedding similarity.',
      'Automated garment-to-mask pipelines with Segment Anything.',
    ],
  },
  {
    title: 'Adaptive Assessment & Smart Practice',
    domain: 'Education',
    stack: ['FastAPI', 'NLP', 'OpenAI API', 'PostgreSQL', 'Scikit-learn'],
    points: [
      'Models board-specific question difficulty from historical papers.',
      'NLP pipeline for topic extraction and difficulty estimation.',
      'Weak-topic detection drives personalised practice sessions.',
    ],
    link: { label: 'remembrly.ai', href: 'https://remembrly.ai/' },
  },
  {
    title: 'RL Environments for LLM Robustness',
    domain: 'AI Research',
    stack: ['PyTorch', 'CUDA', 'Triton', 'H100', 'RLHF'],
    points: [
      'High-difficulty RL environments targeting LLM failure modes.',
      'CUDA kernel debugging and INT8 / INT4 / BF16 / FP16 precision tasks on H100s.',
      'Scenarios submitted to Anthropic and used in Claude model training.',
    ],
  },
  {
    title: 'Text-to-Image with Conditional GANs',
    domain: 'Generative AI Research',
    stack: ['TensorFlow', 'Keras', 'OpenCV', 'CUDA'],
    points: [
      'Custom conditional GAN architectures generating images from text.',
      '80%+ fooling rate against a pretrained classifier.',
      'Trained on Caltech-UCSD Birds and MS-COCO.',
    ],
  },
  {
    title: 'AQI Prediction Dashboard',
    domain: 'Smart Cities',
    stack: ['Flask', 'H2O.ai AutoML', 'BeautifulSoup', 'Chart.js'],
    points: [
      'Scraped and cleaned 20,000+ regional air-quality records.',
      'Real-time AQI forecasting with H2O.ai AutoML.',
      'Interactive dashboard for urban planning and disaster response.',
    ],
  },
  {
    title: 'Lung Abnormality Classification (3D CNN)',
    domain: 'Healthcare',
    stack: ['TensorFlow', 'pydicom', 'SimpleITK', 'CUDA'],
    points: [
      '3D CNN classifying CT scans as normal vs. abnormal.',
      '92% accuracy on a balanced validation set.',
      'Volumetric preprocessing and 3D pooling for robust features.',
    ],
  },
]

// why-choose-us data
const WhyUsData: whyusdata[] = [
  {
    heading: 'Full-Stack Delivery',
    icon: 'tabler:rocket',
    paragraph:
      'We deploy production-ready web apps with APIs, frontends and scalable backends, not just models.',
  },
  {
    heading: 'Cross-Domain Expertise',
    icon: 'tabler:world',
    paragraph:
      'From healthcare AI and fintech to blockchain, social media automation and open-source databases.',
  },
  {
    heading: 'Open Source Credibility',
    icon: 'tabler:brand-github',
    paragraph:
      "Active contributors to pgEdge's pgvector ecosystem. We give back to the engineering community.",
  },
  {
    heading: 'Research-Grade Quality',
    icon: 'tabler:microscope',
    paragraph:
      'Our RL environments were used directly in Claude model training at Anthropic.',
  },
  {
    heading: 'Hardware Optimization',
    icon: 'tabler:cpu',
    paragraph:
      'Kernel-level GPU optimization with CUDA and Triton on H100s for maximum throughput and memory efficiency.',
  },
  {
    heading: 'Measurable Results',
    icon: 'tabler:chart-line',
    paragraph:
      'Every project ships with quantifiable outcomes: accuracy scores, latency benchmarks and real user impact.',
  },
]

// headline results data
const ResultsData: resultdata[] = [
  { value: '92%', label: 'CT-scan classification accuracy', project: 'Lung 3D CNN' },
  { value: '0.89', label: 'R² on dental angle prediction', project: 'DentalAI' },
  { value: '~25 min', label: 'saved per diagnostic case', project: 'DentalAI' },
  { value: '80%+', label: 'GAN fooling rate vs. classifier', project: 'Conditional GANs' },
  { value: '20,000+', label: 'air-quality records processed', project: 'AQI Dashboard' },
  { value: '2', label: 'live products in production', project: 'FairStock · Remembrly' },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Company',
    links: [
      { label: 'Services', href: '/#Services' },
      { label: 'Projects', href: '/#Projects' },
      { label: 'Why Us', href: '/#WhyUs' },
      { label: 'Contact', href: '/#Contact' },
    ],
  },
  {
    section: 'Services',
    links: [
      { label: 'Machine Learning & AI', href: '/#Services' },
      { label: 'Full-Stack AI Products', href: '/#Services' },
      { label: 'Specialized Engineering', href: '/#Services' },
    ],
  },
  {
    section: 'Live Work',
    links: [
      { label: 'FairStock', href: 'https://fairstock.trade' },
      { label: 'Remembrly', href: 'https://remembrly.ai/' },
      { label: 'pgedge-vectorizer', href: 'https://github.com/pgEdge/pgedge-vectorizer' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Aboutdata,
    WorkData,
    ProjectsData,
    WhyUsData,
    ResultsData,
    FooterLinksData,
  })
}
