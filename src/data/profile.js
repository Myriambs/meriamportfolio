// All content in this file is sourced directly from Meriam Ben Salah's CV.
// No fabricated metrics, projects, or experience.

export const profile = {
  name: 'Meriam Ben Salah',
  shortName: 'Mayna',
  title: 'QA Engineer — Manual & Automation Testing',
  location: 'Tunis, Tunisia',
  email: 'bensalahmeriam2@gmail.com',
  phone: '+216 94 655 439',
  links: {
    linkedin: 'https://www.linkedin.com/in/meriam-ben-salah-a921a7119/',
    github: 'https://github.com/Myriambs',
    gitlab: 'https://gitlab.com/bensalahmeriam19',
  },
  profileStatement:
    "Four years teaching full-stack JavaScript, then QA — where that instinct for explaining and debugging code finally had a name. I bring structured thinking, sharp documentation, and a real eye for what breaks: 250+ testing cycles, 180+ defect reports. Currently expanding into AI-assisted testing workflows and MCP integration with Playwright.",
}

export const heroStats = [
  { label: 'testing cycles', value: '250+', id: 'TC-001' },
  { label: 'defect reports filed', value: '180+', id: 'DR-002' },
  { label: 'peer issues validated', value: '120+', id: 'PV-003' },
  { label: 'user stories covered', value: '45+', id: 'US-004' },
]

export const careerPath = [
  {
    stage: 'Industrial Biology Engineering',
    org: 'INSAT, Tunis',
    period: 'Sep 2013 – Oct 2018',
    note: 'Built a foundation in hypothesis-driven thinking, controlled variables, and rigorous observation — the same discipline that later shaped how i design test cases.',
  },
  {
    stage: 'Full-Stack JavaScript',
    org: 'GoMyCode',
    period: 'Nov 2020 – Feb 2021',
    note: 'Retrained in modern web development, gaining first-hand fluency in the systems I would go on to test and teach.',
  },
  {
    stage: 'Senior Instructor & Technical Mentor',
    org: 'GoMyCode',
    period: 'Jun 2021 – Mar 2025',
    note: 'Four years explaining, debugging, and reviewing code in front of 250+ students — sharpening the ability to spot what breaks and communicate why.',
  },
  {
    stage: 'QA Engineer — Crowdtesting',
    org: 'TestIO & uTest',
    period: 'Oct 2025 – Present',
    note: 'Applying that combined lens — builder, teacher, scientist — to structured, production-grade testing across web and mobile.',
  },
]

export const experience = [
  {
    role: 'QA Engineer — Crowdtesting',
    org: 'TestIO & uTest',
    period: 'Oct 2025 – Present',
    location: 'Remote',
    bullets: [
      'Executed 250+ testing cycles across web and mobile apps in production environments, aligned with client acceptance criteria.',
      'Filed 180+ structured defect reports with detailed reproduction steps, severity ratings, and expected vs. actual outcomes — supporting UAT phases directly.',
      'Validated 120+ peer-reported issues, ensuring accuracy across the full defect lifecycle.',
      'Contributed to 45+ user stories and test scenarios, improving test coverage and traceability.',
      'Collaborated with distributed QA teams across time zones to clarify ambiguous defect reports before escalation.',
    ],
    stats: [
      { value: '250+', label: 'testing cycles' },
      { value: '180+', label: 'defect reports' },
      { value: '120+', label: 'issues validated' },
    ],
  },
  {
    role: 'Senior Instructor & Technical Mentor',
    org: 'GoMyCode',
    period: 'Jun 2021 – Mar 2025',
    location: 'Tunis, On-site',
    bullets: [
      'Delivered technical training to 250+ students on full-stack JavaScript — planning, preparing, and continuously updating course materials.',
      'Led weekly debugging workshops simulating client-facing problem resolution using Postman and browser DevTools.',
      'Logged and tracked 200+ issues in Jira, maintaining documentation and structured resolution workflows.',
      'Supported learners through API testing and integration troubleshooting, building the same debugging instincts now applied to production QA work',
      'Improved cohort-wide debugging efficiency by introducing structured validation and testing practices.',
    ],
    stats: [
      { value: '250+', label: 'students trained' },
      { value: '200+', label: 'issues tracked in Jira' },
    ],
  },
]

export const skillGroups = [
  {
    group: 'Testing',
    color: 'signal',
    items: ['Manual Testing', 'Web & Mobile', 'Test Case Design', 'Regression Testing', 'BDD/TDD', 'Cucumber', 'Jest', 'Performance Testing (k6)'],
  },
  {
    group: 'Tools',
    color: 'flag',
    items: ['Jira', 'Postman', 'Playwright', 'Selenium', 'Karate', 'Browser DevTools'],
  },
  {
    group: 'Development',
    color: 'paper',
    items: ['JavaScript', 'TypeScript', 'Python', 'Node.js', 'React', 'Express.js', 'MongoDB', 'SQL'],
  },
  {
    group: 'Methodology',
    color: 'slate',
    items: ['Agile / Scrum', 'Functional Analysis', 'Requirements Writing', 'UAT Facilitation'],
  },
  {
    group: 'Soft Skills',
    color: 'slate',
    items: ['Workshop Facilitation', 'Stakeholder Communication', 'Cross-team Collaboration', 'Technical Documentation'],
  },
]

export const projects = [
  {
    id: 'ai-bug-reporting',
    title: 'AI-Powered Bug Reporting & Ticket Automation',
    period: 'Feb 2026 – Present',
    tag: 'AI / Automation',
    summary: 'An AI system that generates structured bug reports from issue descriptions, with a human validation layer to ensure accuracy.',
    details: [
      'Built an AI system that generates structured bug reports from issue descriptions, with a human validation layer to ensure accuracy.',
      'Automated ticket lifecycle from local system to Trello — reducing manual effort and improving developer clarity.',
    ],
    stack: ['AI / Prompt Engineering', 'Trello API', 'Automation'],
    links: "https://github.com/Myriambs/Ai-Model",
  },
  {
    id: 'todo-drag-drop',
    title: 'Todo App with Drag & Drop',
    period: '2026 – Present',
    tag: 'Full-Stack & QA Automation',
   
    summary: 'A full-stack Todo app with drag & drop, designed from the ground up as a QA showcase project with a full Playwright suite and CI pipeline.',
    details: [
      'Built a full-stack Todo app featuring drag & drop, designed from the ground up as a QA showcase project.',
      'Implemented a full Playwright test suite: login/logout, create/edit/delete todos, drag & drop flows, empty states, and error handling.',
      'Applied Page Object Model and auth fixtures for clean, maintainable test architecture.',
      'Added a GitLab CI pipeline to run tests on every push with HTML reports as artifacts.',
    ],
    stack: ['Playwright', 'Page Object Model', 'GitLab CI', 'Full-Stack'],
    links: "https://github.com/Myriambs/draganddrop_Todo" ,
  },
  {
    id: 'tayar-scrapper',
    title: 'Tayar Car Scrapper',
    period: 'Aug 2025',
    tag: 'Full-Stack & QA Automation',
    summary: 'A full-stack app with a Puppeteer-based scraper and REST API, backed by an end-to-end QA strategy across API, UI, and regression testing.',
    details: [
      'Developed a full-stack app (React, Node.js, MongoDB) with a Puppeteer-based scraper and REST API.',
      'Designed end-to-end QA strategy covering API, UI, and regression testing using Postman, Karate, and Playwright.',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Puppeteer', 'Postman', 'Karate', 'Playwright'],
    links:  "https://github.com/Myriambs/tayara-car-scraper" ,
  },
]

export const certifications = [
  {
    title: 'Automated Web Testing with JavaScript and Playwright',
    issuer: 'Udemy',
  },
  {
    title: 'Postman API Fundamentals Student Expert Certification',
    issuer: 'Postman',
  },
  {
    title: 'Selenium Python Automation Testing and Frameworks',
    issuer: 'Udemy',
  },
]

export const education = [
  {
    degree: 'Full-Stack JavaScript',
    school: 'GoMyCode',
    period: 'Nov 2020 – Feb 2021',
  },
  {
    degree: 'Industrial Biology Engineering',
    school: 'INSAT, Tunis',
    period: 'Sep 2013 – Oct 2018',
  },
]
