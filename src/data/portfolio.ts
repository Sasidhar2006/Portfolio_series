/**
 * Central portfolio data — generated from Kokkiligadda Sasidhar's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kokkiligadda Sasidhar',
  displayName: 'Kokkiligadda Sasidhar',
  firstName: 'SASIDHAR',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SASIDHAR ORIGINAL',
  role: 'MERN Full Stack Developer',
  tagline: ['MERN Full Stack', 'Java', 'DSA'],
  intro:
    'Aspiring MERN Full Stack Developer and B.Tech Computer Science & Engineering student (CGPA 8.63) building responsive and scalable full-stack web applications with MongoDB, Express.js, React.js, Node.js, Java, and consistent DSA practice.',
  location: 'Machilipatnam, Andhra Pradesh',
  fullAddress: 'Saradanagar, Machilipatnam, Andhra Pradesh, India',
  phone: '9705481214',
  email: 'sasidharkokkiligadda0@gmail.com',
  links: {
    // Resume PDF links "Linkedin" to https://linkedin.com — update with your personal LinkedIn URL when ready.
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/Sasidhar2006',
  },
  resumePdf: '/assets/Kokkiligadda_Sasidhar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Kokkiligadda Sasidhar',
  },
  interests: ['Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Computer Networks'],
};

export type EducationEntry = {
  school: string;
  place?: string;
  degree: string;
  period: string;
  score: string;
};

export const education: EducationEntry[] = [
  {
    school: 'Vishnu Institute of Technology',
    degree: 'B.Tech Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'CGPA: 8.63',
  },
];

export const experience = [
  {
    company: 'SmartBridge Educational Services Pvt. Ltd. (in collaboration with APSCHE)',
    role: 'Full Stack Developer (MERN Stack) Virtual Intern',
    place: 'Virtual',
    period: '2-Month / 120-Hours',
    points: [
      'Gained hands-on practical experience in MongoDB, Express.js, React.js, and Node.js (MERN) while strengthening skills in full-stack web application development.',
      'Successfully completed all internship requirements, building scalable project modules and earning a Certificate of Completion.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Optional live deployment link from the resume. */
  demo?: string;
  palette: Palette;
  motif: 'resume' | 'medical' | 'network';
};

export const projects: Project[] = [
  {
    id: 'resume-analyzer',
    title: 'Resume Analyzer',
    year: 'LIVE',
    genre: 'MERN SaaS • Gemini 1.5 Pro • Firebase',
    logline:
      'A MERN stack SaaS application integrating Google Gemini 1.5 Pro for automated resume generation, AI-powered ATS checks, and live PDF export.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Firebase', 'Gemini 1.5 Pro', 'Tailwind CSS', 'Framer Motion'],
    build: [
      'Developed a MERN stack SaaS application with Firebase for secure Google OAuth and user management.',
      'Integrated Google Gemini 1.5 Pro to automate resume generation, featuring an AI-powered ATS checker and job description analyzer.',
      'Designed a responsive UI with Tailwind CSS and Framer Motion, featuring a live resume preview, analytics dashboard, and high-quality PDF generation.',
    ],
    features: [
      'Firebase Google OAuth & user management',
      'Gemini 1.5 Pro automated resume generation',
      'AI-powered ATS checker & job description analyzer',
      'Live resume preview & analytics dashboard',
      'High-quality PDF generation',
    ],
    metrics: [
      { value: 'MERN', label: 'Full-stack SaaS architecture' },
      { value: 'Gemini', label: '1.5 Pro AI & ATS engine' },
      { value: 'OAuth', label: 'Firebase Google auth' },
      { value: 'Live', label: 'Preview, analytics & PDF' },
    ],
    github: 'https://github.com/Sasidhar2006/resume_analyze',
    demo: 'https://resume-analyze-client.onrender.com',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'resume',
  },
  {
    id: 'book-a-doctor',
    title: 'Book a Doctor',
    year: 'LIVE',
    genre: 'Full-Stack • Healthcare • REST API',
    logline:
      'A full-stack healthcare booking platform with JWT authentication, role-based access control, and RESTful APIs for doctor management and scheduling.',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'REST APIs'],
    build: [
      'Developed a full-stack Book a Doctor application.',
      'Implemented JWT authentication, role-based access, and secure appointment booking.',
      'Built RESTful APIs for doctor management and appointment scheduling.',
      'Designed a responsive UI for scalable healthcare data management.',
    ],
    features: [
      'JWT authentication & role-based access',
      'Secure appointment booking flow',
      'RESTful APIs for doctor management & scheduling',
      'Responsive UI for scalable healthcare data',
    ],
    metrics: [
      { value: 'JWT', label: 'Secure token authentication' },
      { value: 'RBAC', label: 'Role-based access control' },
      { value: 'REST', label: 'Doctor & booking APIs' },
      { value: 'Live', label: 'Deployed healthcare UI' },
    ],
    github: 'https://github.com/Sasidhar2006/sasi',
    demo: 'https://doctor-frontend-7r4j.onrender.com',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'medical',
  },
  {
    id: 'alumni-connect',
    title: 'Alumni-Connect',
    year: 'SIH',
    genre: 'MERN • Smart India Hackathon',
    logline:
      'Built for Smart India Hackathon (SIH) to strengthen student–alumni communication through mentorship requests, alumni search, and job/internship postings.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    build: [
      'Developed for Smart India Hackathon (SIH) to strengthen communication between students and alumni.',
      'Implemented secure user authentication, mentorship requests, and job/internship posting features.',
      'Enabled networking through alumni search and career guidance features.',
    ],
    features: [
      'Built for Smart India Hackathon (SIH)',
      'Secure user authentication',
      'Mentorship requests & alumni search',
      'Job/internship postings & career guidance',
    ],
    metrics: [
      { value: 'SIH', label: 'Smart India Hackathon build' },
      { value: 'MERN', label: 'React, Node, Express, MongoDB' },
      { value: 'Mentor', label: 'Mentorship & career guidance' },
      { value: 'Jobs', label: 'Job & internship postings' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'network',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sih',
    title: 'Smart India Hackathon',
    org: 'SIH Participant',
    detail: 'Participated in Smart India Hackathon (SIH), building Alumni-Connect to strengthen communication between students and alumni.',
    laurel: 'Hackathon',
  },
  {
    id: 'smartbridge-intern',
    title: '120-Hour MERN Intern',
    org: 'SmartBridge × APSCHE',
    detail: 'Completed a 2-Month / 120-Hours Virtual Internship building scalable MERN project modules and earning a Certificate of Completion.',
    laurel: 'Virtual Internship',
  },
  {
    id: 'btech-cse',
    title: '8.63 CGPA',
    org: 'Vishnu Institute of Technology',
    detail: 'Pursuing B.Tech in Computer Science and Engineering (2023 – 2027) with core focus on DSA, DBMS, OS, and Computer Networks.',
    laurel: 'B.Tech CSE',
  },
  {
    id: 'live-deployments',
    title: '2 Live Productions',
    org: 'MERN & AI Deployments',
    detail: 'Shipped Resume Analyzer (Gemini 1.5 Pro SaaS) and Book a Doctor (JWT & RBAC healthcare platform) as live web applications.',
    laurel: 'Shipped Live',
    link: 'https://resume-analyze-client.onrender.com',
    linkLabel: 'View live demo ↗',
  },
];

export type Certification = { issuer?: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Certification', name: 'Programming in Java' },
  { issuer: 'Certification', name: 'Data Structures and Algorithms' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming & web languages',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'mern',
    title: 'Frameworks / Stack',
    subtitle: 'Full-stack MERN & UI libraries',
    skills: [
      { name: 'MongoDB', mono: 'Mg', note: 'MERN' },
      { name: 'Express.js', mono: 'Ex', note: 'MERN' },
      { name: 'React.js', mono: 'Re', note: 'MERN' },
      { name: 'Node.js', mono: 'No', note: 'MERN' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Framer Motion', mono: 'Fm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'NoSQL & relational data systems',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Tech',
    subtitle: 'Workflow, APIs, auth & AI integration',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Gemini 1.5 Pro', mono: 'Gm' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'core-subjects',
    title: 'Core Subjects',
    subtitle: 'Computer Science foundations',
    skills: [
      { name: 'DSA', mono: 'Ds', note: 'Certified' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, experience, or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Programming in Java Certification', 'Profile Summary'],
  JavaScript: ['MERN Stack Projects', 'Profile Summary'],
  HTML: ['Responsive Web UI', 'Profile Summary'],
  CSS: ['Responsive Web UI', 'Profile Summary'],
  SQL: ['MySQL & DBMS', 'Profile Summary'],
  MongoDB: ['Resume Analyzer', 'Book a Doctor', 'Alumni-Connect', 'SmartBridge MERN Intern'],
  'Express.js': ['Resume Analyzer', 'Book a Doctor', 'Alumni-Connect', 'SmartBridge MERN Intern'],
  'React.js': ['Resume Analyzer', 'Book a Doctor', 'Alumni-Connect', 'SmartBridge MERN Intern'],
  'Node.js': ['Resume Analyzer', 'Book a Doctor', 'Alumni-Connect', 'SmartBridge MERN Intern'],
  'Tailwind CSS': ['Resume Analyzer'],
  'Framer Motion': ['Resume Analyzer'],
  MySQL: ['Technical Skills — Databases'],
  'Git / GitHub': ['Resume Analyzer Repo', 'Book a Doctor Repo', 'Profile Summary'],
  'VS Code': ['Technical Skills — Tools & Technologies'],
  Postman: ['API Testing & REST Workflows'],
  Firebase: ['Resume Analyzer — Google OAuth & User Management'],
  'Gemini 1.5 Pro': ['Resume Analyzer — AI ATS Checker & JD Analyzer'],
  'JWT Auth': ['Book a Doctor — Role-Based Access'],
  'REST APIs': ['Book a Doctor — Doctor Management & Scheduling'],
  DSA: ['Data Structures and Algorithms Certification', 'Consistent Competitive Programming'],
  DBMS: ['Core Subjects', 'MongoDB & MySQL'],
  'Operating Systems': ['B.Tech CSE Core Subjects'],
  'Computer Networks': ['B.Tech CSE Core Subjects'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2027',
    synopsis: 'B.Tech in Computer Science and Engineering at Vishnu Institute of Technology — building strong CS core subjects and an 8.63 CGPA.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Science Core',
        description: 'Pursuing B.Tech Computer Science and Engineering at Vishnu Institute of Technology with a CGPA of 8.63.',
        tags: ['B.Tech CSE', 'CGPA 8.63'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'CS Fundamentals',
        description: 'Studying Data Structures and Algorithms (DSA), Database Management Systems (DBMS), Operating Systems, and Computer Networks.',
        tags: ['DSA', 'DBMS', 'OS', 'CN'],
        runtime: 'Core Subjects',
        palette: amber,
      },
      {
        code: 'S01 E03',
        title: 'Java & Algorithms',
        description: 'Earned certifications in Programming in Java and Data Structures and Algorithms with consistent competitive programming practice.',
        tags: ['Java', 'DSA', 'Competitive Coding'],
        runtime: 'Certified',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The Internship Arc',
    period: '2-Month / 120-Hours',
    synopsis: 'Virtual Internship in Full Stack Development (MERN Stack) with SmartBridge Educational Services Pvt. Ltd. in collaboration with APSCHE.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'MERN Stack Hands-On',
        description: 'Gained practical experience in MongoDB, Express.js, React.js, and Node.js while strengthening full-stack web application skills.',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        runtime: 'SmartBridge × APSCHE',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Scalable Modules',
        description: 'Successfully completed all 120-hour internship requirements, building scalable project modules and earning a Certificate of Completion.',
        tags: ['120-Hours', 'Virtual', 'Completed'],
        runtime: 'Certificate Earned',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Shipping Originals',
    period: 'Full-Stack Builds',
    synopsis: 'Three MERN productions — an AI resume analyzer SaaS, a healthcare booking system, and a Smart India Hackathon alumni network.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Resume Analyzer',
        description: 'MERN SaaS with Firebase Google OAuth, Google Gemini 1.5 Pro ATS & JD analysis, Tailwind CSS + Framer Motion UI, and PDF generation.',
        tags: ['MERN', 'Gemini 1.5 Pro', 'Firebase'],
        runtime: 'Live Demo',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Book a Doctor',
        description: 'Full-stack healthcare booking app with JWT authentication, role-based access, RESTful APIs, and responsive data management.',
        tags: ['MERN', 'JWT', 'REST APIs'],
        runtime: 'Live Demo',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'Alumni-Connect',
        description: 'Built for Smart India Hackathon (SIH) with secure authentication, mentorship requests, alumni search, and job/internship postings.',
        tags: ['SIH', 'MERN', 'Networking'],
        runtime: 'Hackathon',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Now Streaming',
    period: 'Current Focus',
    synopsis: 'Building responsive and scalable full-stack web applications while sharpening Data Structures and Algorithms.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Next Episode',
        description: 'Continuing MERN full-stack development, Java & SQL engineering, and consistent competitive programming practice.',
        tags: ['MERN Full Stack', 'Java', 'DSA'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'AI SaaS Original', title: 'Resume Analyzer', detail: 'MERN • Gemini 1.5 Pro • Firebase • Live', palette: crimson },
  { label: 'Healthcare Build', title: 'Book a Doctor', detail: 'JWT • RBAC • REST APIs • Live', palette: amber },
  { label: 'National Stage', title: 'Smart India Hackathon', detail: 'Participant • Built Alumni-Connect', palette: ocean },
  { label: 'Virtual Internship', title: 'SmartBridge × APSCHE', detail: '2-Month / 120-Hours MERN Stack Intern', palette: jade },
  { label: 'Core Architecture', title: 'MERN Stack', detail: 'MongoDB • Express.js • React.js • Node.js', palette: violet },
  { label: 'Academic Track', title: '8.63 CGPA', detail: 'B.Tech CSE • Vishnu Institute of Technology', palette: amber },
  { label: 'Primary Language', title: 'Java', detail: 'Certified in Programming in Java', palette: crimson },
  { label: 'Problem Solving', title: 'DSA', detail: 'Certified • Competitive Programming Practice', palette: jade },
  { label: 'Data Layer', title: 'MongoDB & MySQL', detail: 'NoSQL & Relational SQL Databases', palette: ocean },
  { label: 'Developer Toolkit', title: 'Git • VS Code • Postman', detail: 'Version control & API testing', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Vishnu Institute of Technology', '2023 – 2027'],
    chips: ['CGPA: 8.63'],
  },
  {
    kicker: 'Skills',
    title: 'MERN & Java.',
    lines: ['MongoDB, Express.js, React.js, Node.js', 'Java, JavaScript, HTML, CSS, SQL, MySQL · Git, VS Code, Postman'],
    chips: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Java', 'DSA'],
  },
  {
    kicker: 'Experience',
    title: '120-Hour Internship',
    lines: [
      'Full Stack Developer (MERN Stack) Virtual Intern',
      'SmartBridge Educational Services Pvt. Ltd. × APSCHE · 2-Month',
      'Scalable project modules · Certificate of Completion',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: [
      'Resume Analyzer — MERN SaaS with Gemini 1.5 Pro & Firebase OAuth',
      'Book a Doctor — JWT auth, RBAC & RESTful appointment APIs',
      'Alumni-Connect — Smart India Hackathon student–alumni network',
    ],
  },
  {
    kicker: 'Highlights',
    title: 'Top Moments',
    lines: [
      'Smart India Hackathon Participant',
      'Certifications in Programming in Java & DSA',
      'Live Deployments for Resume Analyzer & Book a Doctor',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Building to Scale',
    lines: ['MERN Full-Stack Web Applications · Java · Consistent DSA Practice'],
  },
];

export type ProfileId = 'sasidhar' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sasidhar',
    name: 'Sasidhar',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internship', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • MERN & AI`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
