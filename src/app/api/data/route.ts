import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { projectdata } from '@/app/types/projectdata'
import { whyusdata } from '@/app/types/whyusdata'
import { footerlinks } from '@/app/types/footerlinks'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Services', href: '/#Services' },
  { label: 'Projects', href: '/#Projects' },
  { label: 'About', href: '/#About' },
  { label: 'Technology', href: '/#Stack' },
]

// services (core competencies) data
const Aboutdata: aboutdata[] = [
  {
    heading: 'Machine Learning & AI',
    paragraph:
      'Models for images, text and decision-making, trained on your data and measured against agreed metrics.',
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
    paragraph:
      'Web applications built around those models, with the APIs, frontends and infrastructure to run them.',
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
    paragraph:
      'GPU kernel work, smart contracts, medical imaging and generative pipelines.',
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
    items: ['Python', 'C++', 'JavaScript (Node.js)', 'Solidity'],
  },
  {
    category: 'AI & ML',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'H2O.ai'],
  },
  {
    category: 'Generative AI',
    items: ['Stable Diffusion', 'Conditional GANs', 'OpenAI API', 'CLIP', 'IDM-VTON', 'SAM'],
  },
  {
    category: 'Vector Databases',
    items: ['PostgreSQL + pgvector', 'pgedge-vectorizer'],
  },
  {
    category: 'Backend & APIs',
    items: ['Flask', 'FastAPI', 'Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML / CSS / JS', 'Chart.js', 'Tableau'],
  },
  {
    category: 'Blockchain',
    items: ['Ethereum', 'Solidity', 'Hardhat', 'Web3.js', 'MetaMask'],
  },
  {
    category: 'GPU & Hardware',
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
    heading: 'We ship the full product',
    paragraph:
      'We build and deploy the whole application: backend, API, frontend and infrastructure.',
  },
  {
    heading: 'Work across industries',
    paragraph:
      'Healthcare, fintech, education, e-commerce, social media automation and open-source databases.',
  },
  {
    heading: 'Open-source contributors',
    paragraph:
      "We contribute to pgEdge's pgvector tooling, and our work there has been merged upstream.",
  },
  {
    heading: 'Research experience',
    paragraph:
      'RL environments we designed were used in Claude model training at Anthropic.',
  },
  {
    heading: 'GPU optimization',
    paragraph:
      'We optimize at the GPU kernel level with CUDA and Triton on H100s to improve throughput and memory use.',
  },
  {
    heading: 'Measured results',
    paragraph:
      'We report results in numbers: accuracy, error rates, latency and time saved.',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Company',
    links: [
      { label: 'Services', href: '/#Services' },
      { label: 'Projects', href: '/#Projects' },
      { label: 'About', href: '/#About' },
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
    FooterLinksData,
  })
}
