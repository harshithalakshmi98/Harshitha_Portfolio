# 10 — MSc Coursework, Certification & Portfolio Website (Detailed + Q&A)

Topics not tied to a single GitHub project but critical in interviews.

---

## Part 1 — MSc coursework modules (explain each)

### Machine Learning

**ELI5:** Show the computer 1000 photos of cats and dogs; it learns patterns; then guess on new photos.

**Real companies:** Netflix recommendation, spam filters, credit scoring.

**Your proof:** ANN+PSO concrete project; crop recommendation tabular ML; F21AA classical models.

**Interview example:**  
> "In concrete strength prediction I compared a neural network trained with backprop to hyperparameters tuned by PSO — like trying many recipes and keeping the best cake. Metric was RMSE on UCI holdout data."

**Q: Supervised learning types you used?**  
**A:** Classification (star ratings, disease class, crop type) and regression (concrete strength).

---

### Deep Learning

**ELI5:** Many layers of mini-brains stacked — good for images and long text.

**Real companies:** Tesla vision, Google Translate, medical imaging.

**Your proof:** BiLSTM in F21AA; DistilBERT/RoBERTa; crop disease CNN (38 classes).

**Interview example:**  
> "For leaf disease, a CNN learns edges → textures → disease patterns hierarchically — similar to how radiology AI detects tumors, but with plant leaves."

---

### Natural Language Processing (NLP)

**ELI5:** Teaching computers to read and understand human language.

**Real companies:** ChatGPT, Gmail smart reply, Zendesk ticket routing, Amazon review summarization.

**Your proof:** Entire F21AA coursework.

**Real-time scenario — Amazon seller:**  
A 1-star review says: *"Package arrived late but product quality is excellent."*  
- Bag-of-words might get confused (mixed sentiment).  
- Transformer attention can weigh "late" vs "excellent" by position.  
- Your system outputs star rating + could route "shipping" complaints to logistics team via topic tags.

---

### Computer Vision

**ELI5:** Computer eyes — pixels → patterns → labels.

**Real companies:** UAE drone inspection, hospital X-ray assist, retail shelf monitoring.

**Your proof:** PG-Group-3 disease detection (38 classes).

**Real-time scenario — farmer app:**  
Farmer photographs tomato leaf in field (bright sun, blurry). App warns low confidence, asks retake; on clear image predicts "Early Blight" with 87% confidence and links to treatment guide.

**Q: Challenges deploying CV in field?**  
**A:** Lighting, blur, offline connectivity, class imbalance, need human agronomist in loop for low confidence.

---

### Intelligent Agents

**ELI5:** A robot brain that **decides actions** in a world — not just predict one label.

**Real companies:** Warehouse robots, game NPCs, NASA rovers, logistics planners.

**Your proof:** Lunar Mission Visualizer + PDDL planning.

**Real-time scenario — Amazon warehouse:**  
Agent state: robot at A, package at B, battery 40%.  
Actions: move, pick, charge.  
PDDL-style planner finds sequence: go B → pick → go dock — **before** moving motors.

**Q: Planning vs machine learning?**  
**A:** Planning = known rules and goals, explainable sequences. ML = learn from data, better for messy perception (camera noise). Real robots combine both.

---

## Part 2 — Udemy certification (Data Analysis)

**Course:** Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects

### SQL — real example

**Business question:** "Which month had most P1 incidents?"

```sql
SELECT DATE_FORMAT(opened_at, '%Y-%m') AS month,
       COUNT(*) AS incident_count
FROM incidents
WHERE severity = 'P1'
GROUP BY month
ORDER BY incident_count DESC;
```

**Tie to you:** Same mindset as grouping star ratings in pandas `value_counts()`.

### Excel — real example

Pivot table: rows = incident category, columns = month, values = count.  
Chart shows spike after a release → RCA finds bad deployment.

### Tableau / Power BI — real example

**Dashboard page 1:** SLA gauge (green if MTTR < 4h).  
**Page 2:** Trend of repeat incidents (your 30% story).  
**Page 3:** Drill-down by service tower.

**Q: Why certification if you're doing MSc AI?**  
**A:** It formalized exploratory analysis and visualization — the step before any ML project. F21AA Section 1 EDA is the same discipline at 288k row scale.

---

## Part 3 — Tools: Figma, Git, Canva, Slack

### Figma

**ELI5:** Draw app screens before coding.

**Real use:** Wireframe ML dashboard — confusion matrix panel, upload review box, model version dropdown.

**Q: How you'd design F21AA demo UI?**  
**A:** Left: paste review. Center: predicted stars + probabilities bar. Right: top TF-IDF words or attention highlight (if feasible).

### Git

**Real workflow you can describe:**

```bash
git checkout -b feature/add-ata-project
# edit portfolio.ts
git add src/data/portfolio.ts
git commit -m "Add F21AA project to portfolio"
git push -u origin feature/add-ata-project
# open PR, review, merge
```

### Canva / Slack

**Group project:** F21AA team Slack channel for dataset issues; Canva for report figures if not using matplotlib.

---

## Part 4 — Google Cloud & GitHub Actions

### Google Cloud (conceptual + honest hands-on)

| Service | ELI5 | Real use for your projects |
|---------|------|---------------------------|
| **Cloud Storage** | Dropbox for apps | Store `train.csv`, model checkpoints |
| **Vertex AI** | Train/deploy ML | Host DistilBERT endpoint |
| **BigQuery** | Giant SQL in cloud | Analyze millions of reviews |
| **Cloud Run** | Run container API | FastAPI inference auto-scales |

**Interview answer (honest):**  
> "My hands-on ML is coursework-scale on local/GPU notebooks. I understand GCP architecture for deploying an NLP API: containerize FastAPI + model → Cloud Run → monitor latency. I'd deepen hands-on in first 90 days on the job."

### GitHub Actions — example workflow for portfolio

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
```

**Q: What does CI give you?**  
**A:** Every push proves the site still builds — same philosophy as JUnit on Coffee Shop.

---

## Part 5 — Your portfolio website (this repo)

**Stack:** Next.js 16, React, TypeScript, Tailwind CSS 4, `next/font` (Outfit + DM Sans)

### Architecture (explain in interview)

```
src/data/portfolio.ts     ← single source of truth (content)
src/components/*          ← one section per component
src/lib/highlightKeywords ← shared keyword highlighter
src/app/page.tsx          ← composes page
src/app/globals.css       ← theme tokens (--accent, --keyword)
```

### Real features you built

1. **Data-driven sections** — edit one file to update site  
2. **Keyword highlighting** — violet `--keyword` for skills/terms  
3. **Project cards** — tech badges + GitHub links  
4. **Mobile nav** — hamburger, touch targets  
5. **Hero image** — `next/image`, object-cover crop  
6. **Accessibility** — skip link, `aria-labelledby`, focus rings  

### Q&A

**Q: Why Next.js for a static portfolio?**  
**A:** Fast SEO metadata, optimized images, component model, easy deploy to Vercel, scales if I add blog or API later.

**Q: Server vs Client Components?**  
**A:** Most sections are Server Components — data imported at build/render time, less client JS. Use `"use client"` only when browser interactivity needed (e.g. mobile menu state in header).

**Q: How did you build it with AI agents?**  
**A:** Cursor/Claude for scaffolding components matching design tokens; I reviewed diffs, ran `npm run build`, adjusted spacing and accessibility manually. See `11` Section D for step-by-step.

**Q: highlightKeywords — why not dangerouslySetInnerHTML?**  
**A:** React-safe: split text and wrap matches in `<span>` — avoids XSS and keeps styling in CSS variables.

---

## Part 6 — Color & typography (if designer asks)

| Token | Hex | Use |
|-------|-----|-----|
| `--background` | `#07080c` | Page bg |
| `--accent` | `#2dd4bf` | Teal links, CTAs |
| `--keyword` | `#c4b5fd` | Highlighted terms |
| Display font | Outfit | Headings |
| Body font | DM Sans | Paragraphs |

**Real-world parallel:** Similar to dark-mode dev tools (GitHub, Vercel) — reduces eye strain, teal accent for CTAs.

---

## Part 7 — Connecting everything in one answer

**Q: How does your profile fit together?**  
**A:**  
> "TCS taught me operational excellence and data-driven RCA. Udemy and MSc formalized analysis and ML. Java projects prove OOP and testing. Python projects prove NLP and CV. React/Next portfolio proves I can ship user-facing software. I use Claude Code/Cursor as accelerators with review and CI — the same quality bar I applied to incident documentation now applies to code and models."
