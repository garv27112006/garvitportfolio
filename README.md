# Garvit Agarwal - Personal Portfolio Website

A modern, responsive, and high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. Designed for **Garvit Agarwal**, B.Tech Student at **JECRC University, Jaipur**.

---

## 🌟 Key Features

- **Hero / Home Section**: Professional introduction with dynamic status pill ("Available for Internships & Projects"), interactive code console preview, direct CTAs to projects and contact.
- **About Me**: Student-friendly yet professional narrative covering background, values, and key engineering pillars.
- **Education Section**: Detailed Bachelor of Technology (B.Tech) breakdown at JECRC University, Jaipur with timeline and relevant learning areas.
- **Skills Section**: Interactive skill cards with custom icons and category filters:
  - HTML, CSS, JavaScript, Python
  - Artificial Intelligence & Generative AI
  - Web Development & Digital Productivity
- **Projects Section**: Card showcases with tags, descriptions, and an interactive **Project Details Modal** for:
  1. Personal Portfolio Website
  2. AI Website Project
  3. Student Productivity Project
- **Achievements Section**: Modular section with filter tabs for **Certifications**, **Hackathons**, **Courses**, and **Awards**, plus an easy extension pattern.
- **Contact Section**: Professional contact cards with **one-click copy email**, direct LinkedIn connection, and an interactive message form.
- **Modern UI & UX**:
  - Dark / Light mode toggle with persistent local storage
  - Smooth scrolling navigation with active section highlighting
  - Mobile hamburger navigation drawer
  - Clean glassmorphism styling and subtle animated gradient glows
  - 100% responsive across mobile, tablet, laptop, and desktop

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port shown in terminal).

### 3. Build for Production
```bash
npm run build
```
This generates an optimized static build in the `dist/` folder.

---

## ✏️ How to Customize Your Portfolio

All your personal information, links, skills, projects, and achievements are organized in a single file:
👉 **`src/data/portfolioData.js`**

### Modifying Your Details:
- **Email & LinkedIn**: Update the `email` and `linkedin` fields in `personalInfo`.
- **Add New Projects**: Add a new object inside `projectsData`.
- **Add New Achievements / Certifications**: Add a new item inside `achievementsData` with category set to `'Certifications'`, `'Courses'`, `'Hackathons'`, or `'Awards'`.
- **Add New Skills**: Add new items inside `skillsData`.

---

## 🌐 Deploying to Vercel

This portfolio is configured to work out-of-the-box with Vercel:

1. Push this repository to your **GitHub** account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of modern portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **"Deploy"**. Your portfolio will be live in seconds with HTTPS!

---

## 🛠️ Tech Stack

- **React 18**: Component-based UI library
- **Vite 5**: Next-generation fast frontend tooling
- **Tailwind CSS 3**: Utility-first CSS framework
- **Lucide React**: Modern, clean iconography

---

Designed and crafted for **Garvit Agarwal** • JECRC University, Jaipur, INDIA.
