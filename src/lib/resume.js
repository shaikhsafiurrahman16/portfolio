import { PERSONAL, EXPERIENCE, EDUCATION, SKILL_GROUPS, PROJECTS } from "./portfolio-data";

/**
 * Generates a self-contained, print-ready HTML resume document matching the exact PDF resume specification.
 * Opens in a new tab where the user can print to PDF using Ctrl/Cmd+P.
 */
export function generateResumeHTML() {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${PERSONAL.name} — Full Stack Software Engineer Resume</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: A4; margin: 12mm 15mm; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    line-height: 1.45;
    font-size: 10pt;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .resume {
    max-width: 800px;
    margin: 0 auto;
    padding: 6mm 0;
  }
  
  /* Header */
  .header {
    border-bottom: 2px solid #0f172a;
    padding-bottom: 12px;
    margin-bottom: 16px;
  }
  .header h1 {
    font-size: 24pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #0f172a;
    text-transform: uppercase;
  }
  .header .title {
    font-size: 11pt;
    color: #0284c7;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-top: 2px;
    margin-bottom: 8px;
  }
  .header .contact-row {
    font-size: 8.8pt;
    color: #475569;
    display: flex;
    flex-wrap: wrap;
    gap: 6px 14px;
    align-items: center;
  }
  .header .contact-row span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .header .contact-row strong {
    color: #0f172a;
  }
  .header .contact-row a {
    color: #0284c7;
    text-decoration: none;
  }

  /* Sections */
  .section {
    margin-bottom: 16px;
  }
  .section-title {
    font-size: 10.5pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 1.5px solid #cbd5e1;
    padding-bottom: 3px;
    margin-bottom: 8px;
  }

  /* Summary */
  .summary-text {
    font-size: 9.3pt;
    color: #334155;
    text-align: justify;
    line-height: 1.5;
  }

  /* Experience */
  .exp-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .exp-head h3 {
    font-size: 10.2pt;
    font-weight: 700;
    color: #0f172a;
  }
  .exp-date {
    font-size: 9pt;
    color: #475569;
    font-weight: 600;
  }
  .exp-company {
    font-size: 9.5pt;
    color: #0284c7;
    font-weight: 600;
    margin-bottom: 4px;
  }
  .bullet-list {
    list-style: none;
    padding-left: 0;
    margin-top: 4px;
  }
  .bullet-list li {
    font-size: 9pt;
    color: #334155;
    padding-left: 14px;
    position: relative;
    margin-bottom: 3px;
    line-height: 1.4;
  }
  .bullet-list li::before {
    content: "•";
    color: #0f172a;
    position: absolute;
    left: 2px;
    font-size: 11pt;
    top: -1px;
  }

  /* Projects */
  .project-item {
    margin-bottom: 10px;
  }
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .project-title {
    font-size: 9.8pt;
    font-weight: 700;
    color: #0f172a;
  }
  .project-badge {
    font-size: 8.5pt;
    font-weight: 600;
    color: #475569;
  }
  .project-tech {
    font-size: 8.8pt;
    color: #0284c7;
    font-weight: 600;
    margin-bottom: 3px;
  }

  /* Education */
  .edu-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .edu-item h3 {
    font-size: 9.8pt;
    font-weight: 700;
    color: #0f172a;
  }
  .edu-inst {
    font-size: 9.2pt;
    color: #0284c7;
    font-weight: 600;
  }

  /* Skills Grid */
  .skills-table {
    width: 100%;
    font-size: 9pt;
    border-collapse: collapse;
  }
  .skills-table tr {
    border-bottom: 1px solid #f1f5f9;
  }
  .skills-table td {
    padding: 3.5px 0;
    vertical-align: top;
  }
  .skills-table td.skill-label {
    width: 130px;
    font-weight: 700;
    color: #0f172a;
  }
  .skills-table td.skill-val {
    color: #334155;
  }

  /* Print Button & Footer */
  .print-btn {
    position: fixed;
    top: 16px;
    right: 16px;
    background: #0284c7;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 10pt;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);
    transition: background 0.2s;
    z-index: 100;
  }
  .print-btn:hover { background: #0369a1; }
  
  .footer-note {
    margin-top: 14px;
    text-align: right;
    font-size: 8pt;
    color: #94a3b8;
  }

  @media print {
    .print-btn { display: none; }
    body { font-size: 9.5pt; }
    .resume { padding: 0; }
  }
</style>
</head>
<body>
<button class="print-btn" onclick="window.print()">Download / Print PDF</button>

<div class="resume">
  <!-- Header -->
  <div class="header">
    <h1>${PERSONAL.name}</h1>
    <div class="title">${PERSONAL.title}</div>
    <div class="contact-row">
      <span><strong>Email:</strong> <a href="mailto:${PERSONAL.email}">${PERSONAL.email}</a></span>
      <span><strong>Phone:</strong> ${PERSONAL.phone}</span>
      <span><strong>Location:</strong> ${PERSONAL.locationShort}</span>
      <span><strong>GitHub:</strong> <a href="${PERSONAL.github}">github.com/${PERSONAL.githubUser}</a></span>
      <span><strong>Portfolio:</strong> <a href="${PERSONAL.portfolio}">${PERSONAL.portfolioShort}</a></span>
    </div>
  </div>

  <!-- Professional Summary -->
  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      Results-driven Full Stack Software Engineer with extensive expertise in architecting scalable web applications, inventory management platforms, and intelligent automation systems. Proficient in modern JavaScript ecosystems (React.js, Node.js, Express.js), relational database design, Python Flask backends, machine learning integration, and cross-platform Flutter/Dart applications. Demonstrated history of delivering high-performance enterprise software and commercial client solutions.
    </p>
  </div>

  <!-- Professional Experience -->
  <div class="section">
    <div class="section-title">Professional Experience</div>
    <div class="exp-head">
      <h3>Full Stack Software Development Intern</h3>
      <span class="exp-date">2026 – Present</span>
    </div>
    <div class="exp-company">Fast Engineering Services & Technology (FEST) & Enterprise Solutions</div>
    <ul class="bullet-list">
      <li>Architected full-stack enterprise applications and automated workflow systems utilizing React.js, Node.js, and Express.js.</li>
      <li>Developed and integrated robust logistics and tracking solutions including Translink Transporters and TradeLink trade platforms.</li>
      <li>Engineered core student enrollment workflows, cross-platform Flutter mobile applications, and backend modules for Pakistan Institute of Management (PIM) enterprise software.</li>
      <li>Implemented secure JWT authentication frameworks, role-based access control, and optimized complex relational database queries in MySQL and MongoDB.</li>
    </ul>
  </div>

  <!-- Key Projects & Client Solutions -->
  <div class="section">
    <div class="section-title">Key Projects & Client Solutions</div>

    <!-- TradeStack -->
    <div class="project-item">
      <div class="project-header">
        <span class="project-title">TradeStack | Multi-Industry Inventory & Sales Management System</span>
        <span class="project-badge">Enterprise Software</span>
      </div>
      <div class="project-tech">React.js, Node.js, Express.js, MySQL, Ant Design, Tailwind CSS</div>
      <ul class="bullet-list">
        <li>Engineered a comprehensive inventory and multi-branch point-of-sale platform tailored for 4 distinct commercial sectors: Automotive, Kiryana, Computer Accessories, and Paper Shop.</li>
        <li>Implemented automated billing logic, customer ledgers, inventory tracking, and real-time stock auditing modules with high-performance database schemas.</li>
      </ul>
    </div>

    <!-- EarthScape AI -->
    <div class="project-item">
      <div class="project-header">
        <span class="project-title">EarthScape AI | Predictive Climate Analytics Platform</span>
        <span class="project-badge">AI / Machine Learning</span>
      </div>
      <div class="project-tech">Python, Flask, scikit-learn, Pandas, SQLite, React.js</div>
      <ul class="bullet-list">
        <li>Designed an intelligent climate analytics engine incorporating machine learning regression pipelines to process environmental metrics and forecast weather conditions & anomalies based on user input parameters.</li>
        <li>Built RESTful prediction endpoints in Flask coupled with dynamic 3D atmospheric data visualization interfaces.</li>
      </ul>
    </div>

    <!-- GN Graphix -->
    <div class="project-item">
      <div class="project-header">
        <span class="project-title">GN Graphix | Professional Commercial Web Application</span>
        <span class="project-badge">Client Project (Live)</span>
      </div>
      <div class="project-tech">React.js, Tailwind CSS, Production (<a href="https://gngraphix.pk" target="_blank">gngraphix.pk</a>)</div>
      <ul class="bullet-list">
        <li>Developed and deployed a high-conversion, fully responsive promotional web platform for digital branding and custom interior wall coverings.</li>
        <li>Optimized front-end rendering performance, asset delivery, and mobile UI layouts to maximize user engagement and SEO visibility.</li>
      </ul>
    </div>
  </div>

  <!-- Education -->
  <div class="section">
    <div class="section-title">Education</div>
    <div class="edu-item">
      <div>
        <h3>Intermediate in Computer Science (ICS)</h3>
        <div class="edu-inst">Government Degree College Latifabad No.11</div>
      </div>
      <span class="exp-date">2026</span>
    </div>
  </div>

  <!-- Technical Expertise -->
  <div class="section">
    <div class="section-title">Technical Expertise</div>
    <table class="skills-table">
      <tr>
        <td class="skill-label">Frontend & UI:</td>
        <td class="skill-val">React.js, Flutter, Dart, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Ant Design, Bootstrap, Redux</td>
      </tr>
      <tr>
        <td class="skill-label">Backend & APIs:</td>
        <td class="skill-val">Node.js, Express.js, Python, Flask, RESTful APIs, JWT Authentication, Express Validator</td>
      </tr>
      <tr>
        <td class="skill-label">Databases & Tools:</td>
        <td class="skill-val">MySQL, MongoDB, SQLite, phpMyAdmin, HeidiSQL, Git, GitHub, VS Code, Postman, Vercel</td>
      </tr>
      <tr>
        <td class="skill-label">AI & Analytics:</td>
        <td class="skill-val">scikit-learn, Pandas, Predictive Modeling, Machine Learning Models, Data Processing Pipelines</td>
      </tr>
    </table>
  </div>

  <div class="footer-note">
    Page 1 · Safi ur Rahman
  </div>
</div>

<script>
  window.onload = function() {
    setTimeout(function() { window.print(); }, 600);
  };
</script>
</body>
</html>`;
}

/**
 * Opens the resume in a new tab and triggers the browser's print dialog.
 * The user can save as PDF from the print dialog.
 */
export function downloadResume() {
  const html = generateResumeHTML();
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (!win) {
    // Fallback: navigate current tab
    window.location.href = url;
  }
  // Revoke after delay to allow print
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
