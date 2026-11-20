// ─────────────────────────────────────────────────────────────
//  ALL PORTFOLIO CONTENT LIVES IN THIS FILE.
//  Edit the values below — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Madhushi Illesinghe',
  firstName: 'Madhushi',
  role: 'Full Stack Developer & Software Engineer',
  location: 'Galle, Sri Lanka',
  tagline: 'I build scalable, well-architected software — from Spring Boot back ends to React front ends.',
  email: 'madhushiillesinghe225@gmail.com',
  githubUser: 'madhushiillesinghe',
  github: 'https://github.com/madhushiillesinghe',
  linkedin: 'https://www.linkedin.com/in/madhushi-illesinghe-143805279/',
  // Your CV — replace public/cv.pdf with a new file to update it
  cv: '/cv.pdf',
  // Profile photo shown in the hero (transparent PNG in public/)
  photo: '/profile.png',
  openToWork: true,
}

export const about = {
  paragraphs: [
    "I'm a Full Stack Developer from Galle, Sri Lanka, currently pursuing a BSc (Hons) in Computer Science and holding a Diploma in Software Engineering from IJSE.",
    'My favourite place to work is the back end: designing clean APIs, layered architectures and data models that stay easy to change. On the front end I enjoy turning those systems into fast, accessible interfaces with React and Next.js.',
    "Right now I'm going deeper into advanced Spring Boot architecture, cloud deployment and DevOps, and applying AI and machine learning to real products.",
  ],
  facts: [
    { label: 'Education', value: 'BSc (Hons) Computer Science — London Metropolitan University (ongoing)' },
    { label: 'Diploma', value: 'Graduate Diploma in Software Engineering — IJSE (2023 – 2025)' },
    { label: 'Focus', value: 'Back end · Architecture · Cloud · AI' },
    { label: 'Based in', value: 'Galle, Sri Lanka' },
  ],
}

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Java', 'C#', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring Framework', 'Node.js', 'Express.js', 'ASP.NET Core', 'Jakarta EE'] },
  { group: 'Data & Cloud', items: ['MySQL', 'MongoDB', 'Firebase', 'Git', 'GitHub'] },
  { group: 'AI & Data', items: ['TensorFlow', 'scikit-learn', 'FastAPI', 'Pandas', 'OpenAI'] },
  { group: 'Tools', items: ['IntelliJ IDEA', 'Visual Studio', 'VS Code', 'Android Studio', 'Figma'] },
]

export const exploring = [
  'Advanced Spring Boot architecture',
  'AI & machine learning',
  'Cloud deployment & DevOps',
  'Cross-platform mobile',
  'Design patterns',
]

// ─────────────────────────────────────────────────────────────
//  FINAL PROJECT  (featured section)
// ─────────────────────────────────────────────────────────────
export const finalProject = {
  label: 'Final Research Project',
  title: 'SoilAI',
  client: 'AI soil analysis & crop recommendation · Sri Lanka',
  summary:
    'Built from my research: a farmer photographs their soil and picks a district, and SoilAI returns the soil type, estimated nutrients, the five best-suited crops and a fertilizer plan using Sri Lankan application rates.',
  highlights: [
    'Four ML models: soil type (MobileNetV2), soil properties, crop ranking and fertilizer plan',
    'Soil-photo check with ONNX Runtime rejects blurry, dark or non-soil images',
    'pH, N, P, organic matter & moisture shown as Low / Medium / High',
    '5-day weather with field-work advice, soil history charts and favourites',
    'English and Sinhala interface, light / dark mode, emailed password-reset codes',
  ],
  stack: ['Python', 'TensorFlow', 'scikit-learn', 'FastAPI', 'ONNX', 'Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Docker'],
  role: 'Research, ML model training & full-stack development',
  year: '2026',
  links: [
    { label: 'GitHub repo', href: 'https://github.com/madhushiillesinghe/Soil-AI', primary: true },
  ],
  // Shown in the code-window header when there is no screenshot
  codeFile: 'ml-service/app/main.py',
  // Optional screenshot: put an image in /public (e.g. /final-project.png) and set image: '/final-project.png'
  image: '',
}


// The ONLY repos shown in "Projects", in this order. Add or remove names here.
// Live data (stars, language) comes from the GitHub API; repos the API doesn't
// return (e.g. private ones like Soil-AI) are filled in from `fallbackRepos` below.
export const pinnedRepos = [
  'Soil-AI',
  'SRMSS-Frontend-New',
  'SRMSS-BACKEND',
  'phone-pos',
  'Travel-Plan-Frontend',
  'Task-Management-Backend',
  'Smart-Med-Pharmacy',
  'Chat-Application',
  'Crop-Management-React-Frontend',
  'React-Mobile',
  'web-scraping',
]

// Nicer display names for repos (otherwise the repo name is prettified automatically)
export const repoTitles: Record<string, string> = {
  'Soil-AI': 'SoilAI — Soil Analysis & Crop Advisor',
  'SRMSS-Frontend-New': 'SRMSS — Smart Route Frontend',
  'SRMSS-BACKEND': 'SRMSS — Smart Route Backend',
  'phone-pos': 'PhonePOS',
  'Travel-Plan-Frontend': 'AI Travel Plan App',
  'Smart-Med-Pharmacy': 'SmartMed Pharmacy',
  'Crop-Management-React-Frontend': 'Crop Monitoring — React',
}

// Your own descriptions — used when a repo has no description on GitHub.
export const repoDescriptions: Record<string, string> = {
  'Soil-AI':
    'AI soil analysis for Sri Lankan farmers: photo + district → soil type, nutrients, top 5 crops and a fertilizer plan. Next.js, Node/Express, MySQL and a FastAPI + TensorFlow ML service.',
  'SRMSS-Frontend-New':
    'Smart Route Management & Scheduling System — React + TypeScript admin dashboard and driver portal with live bus tracking on Leaflet maps.',
  'SRMSS-BACKEND':
    'Node.js / Express API for bus routes, schedules, drivers, ticket booking, fuel logs and maintenance, using MySQL, Sequelize and JWT.',
  'phone-pos':
    'PhonePOS — point of sale and management system for mobile phone shops: sales, repairs, installments, suppliers and reports.',
  'Travel-Plan-Frontend':
    'AI Travel Plan — React Native + TypeScript app that generates trip plans, with Firebase auth, Firestore and OpenCage location search.',
  'Task-Management-Backend':
    'Task management API in Express, Node.js and TypeScript with JWT authentication and MongoDB.',
  'Smart-Med-Pharmacy':
    'SmartMedPharmacy — C# Windows Forms admin panel for a pharmacy: medicines, customers, orders, and PDF / Excel reports.',
  'Chat-Application':
    'Multi-user chat app using Java socket programming — text, emoji and image messages, including Sinhala.',
  'Crop-Management-React-Frontend':
    'React + TypeScript + Redux front end for the Crop Monitoring System, styled with Tailwind CSS.',
}

// Used for any pinned repo the GitHub API doesn't return, and for everything
// if the API can't be reached (rate limit / offline). Keep one entry per pinned repo.
export const fallbackRepos = [
  { name: 'Soil-AI', language: 'TypeScript', stars: 0 },
  { name: 'SRMSS-Frontend-New', language: 'TypeScript', stars: 0 },
  { name: 'SRMSS-BACKEND', language: 'JavaScript', stars: 0 },
  { name: 'phone-pos', language: 'TypeScript', stars: 0 },
  { name: 'Travel-Plan-Frontend', language: 'TypeScript', stars: 1 },
  { name: 'Task-Management-Backend', language: 'TypeScript', stars: 1 },
  { name: 'Smart-Med-Pharmacy', language: 'C#', stars: 0 },
  { name: 'Chat-Application', language: 'Java', stars: 1 },
  { name: 'Crop-Management-React-Frontend', language: 'TypeScript', stars: 1 },
  { name: 'React-Mobile', language: 'TypeScript', stars: 1 },
  { name: 'web-scraping', language: 'Python', stars: 0 },
]
