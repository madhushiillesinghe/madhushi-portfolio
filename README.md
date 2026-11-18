# Madhushi Illesinghe — Portfolio

A modern, animated, single-page developer portfolio built with **React 19, TypeScript, Vite, Tailwind CSS v4 and Motion**.
Projects are pulled **live from GitHub** ([@madhushiillesinghe](https://github.com/madhushiillesinghe)), so every new public repo shows up automatically.

**Sections:** Hero · About · Skills · Final Project (featured) · GitHub Projects · Contact

---

## 1. Technologies used

| Area | Technology | Why it's used |
|---|---|---|
| UI library | **React 19** | Component-based UI, the industry standard |
| Language | **TypeScript** | Type safety and editor autocompletion |
| Build tool | **Vite 8** | Very fast dev server with hot reload and optimised production builds |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`) | Utility-first CSS; theme colours and fonts defined in `src/index.css` |
| Animation | **Motion** (formerly Framer Motion) | Scroll-reveal, page-load and layout animations |
| Icons | **lucide-react** + custom SVG | Clean line icons; GitHub/LinkedIn logos are inline SVGs |
| Data | **GitHub REST API** | Loads your public repositories at runtime |
| Fonts | Google Fonts — *Instrument Serif*, *Manrope*, *JetBrains Mono* | Editorial headings, readable body, code accents |
| Linting | **oxlint** | Fast linter for catching mistakes |

**Features**
- Fully responsive (mobile → desktop), with a mobile menu
- Sticky glass navbar that highlights the section you're in
- Live GitHub project grid with language filter, star/fork counts and "show all"
- Repos cached in `localStorage` for 1 hour (stays under GitHub's 60 requests/hour limit)
- Offline fallback list if GitHub can't be reached
- Respects "reduced motion" accessibility settings
- SEO meta description and custom favicon

---

## 2. Prerequisites

- **Node.js 20 or newer** (22 LTS recommended) → https://nodejs.org
- **npm** (comes with Node)
- **Git** (optional, for pushing to GitHub)
- A code editor — VS Code recommended

Check your versions:

```bash
node -v
npm -v
```

---

## 3. Setup & run locally

```bash
# 1. Unzip the project and open the folder
cd madhushi-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL shown in the terminal (usually **http://localhost:5173**). The page reloads automatically when you save a file.

### All commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally to test it |
| `npm run build:single` | Build everything into **one** `dist/index.html` file (easy to share) |
| `npm run lint` | Run the linter |

---

## 4. Editing your content

**All text lives in one file: `src/data/profile.ts`.** You don't need to touch the components.

| What | Where in `profile.ts` |
|---|---|
| Name, role, tagline, location | `profile` |
| **Email address** (replace the placeholder!) | `profile.email` |
| CV download button | Put `cv.pdf` in `public/`, then set `profile.cv: '/cv.pdf'` |
| "Open to opportunities" badge | `profile.openToWork` |
| About paragraphs & quick facts | `about` |
| Skills | `skills` |
| "Currently exploring" chips | `exploring` |
| **Final project** (title, summary, highlights, stack, links) | `finalProject` |
| Final project screenshot | Put an image in `public/`, set `finalProject.image: '/final-project.png'` |
| Order of projects on the page | `pinnedRepos` |
| Repos to hide | `hiddenRepos` |
| Better display names | `repoTitles` |
| Descriptions for repos that have none on GitHub | `repoDescriptions` |

> **Tip:** The best way to improve the project cards is to add a description (and topics) to each repo on GitHub itself — the site uses those first.

**Colours & fonts:** edit the `@theme` block at the top of `src/index.css` (e.g. change `--color-amber` to change the accent colour).

---

## 5. Project structure

```
madhushi-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky nav + mobile menu
│   │   ├── Hero.tsx          # Name, role, CTA buttons
│   │   ├── About.tsx         # About text + quick facts
│   │   ├── Skills.tsx        # Marquee + skill groups
│   │   ├── FinalProject.tsx  # Featured final project
│   │   ├── Projects.tsx      # Live GitHub repo grid
│   │   ├── Contact.tsx       # Contact + footer
│   │   ├── Section.tsx       # Shared section layout & reveal animation
│   │   └── Icons.tsx         # GitHub / LinkedIn SVG icons
│   ├── data/
│   │   └── profile.ts        # ← ALL YOUR CONTENT
│   ├── hooks/
│   │   └── useGithubRepos.ts # Fetches + caches repos from GitHub
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Tailwind import + theme
├── index.html
├── vite.config.ts
└── package.json
```

---

## 6. Deploy (free)

### Option A — Vercel (recommended)
1. Push this folder to a new GitHub repo (see below).
2. Go to https://vercel.com → **Add New → Project** → import the repo.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.

### Option B — Netlify
1. https://app.netlify.com → **Add new site → Import from Git**.
2. Build command `npm run build`, publish directory `dist`.

### Option C — GitHub Pages
```bash
npm run build
npx gh-pages -d dist
```
Then in the repo: **Settings → Pages → Branch: `gh-pages`**. (The config already uses a relative `base`, so it works on a sub-path.)

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/madhushiillesinghe/portfolio-2026.git
git push -u origin main
```
(Create the empty `portfolio-2026` repo on GitHub first, or use any name you like.)

---

## 7. Troubleshooting

| Problem | Fix |
|---|---|
| Projects show "Showing saved projects" | GitHub's 60 requests/hour limit was hit or you're offline. It recovers automatically; the fallback list in `profile.ts` is shown meanwhile. |
| `npm install` fails | Update Node to v20+ and delete `node_modules` + `package-lock.json`, then reinstall. |
| Port 5173 in use | Run `npm run dev -- --port 3000`. |
| New repo not showing | Results are cached for 1 hour. Clear site data or wait. Check it isn't in `hiddenRepos` and isn't a fork. |

---

© Madhushi Illesinghe · [GitHub](https://github.com/madhushiillesinghe) · [LinkedIn](https://www.linkedin.com/in/madhushi-illesinghe-143805279/)
