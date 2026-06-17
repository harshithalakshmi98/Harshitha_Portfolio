# 04 — All Skills Explained (ELI5 + Real Use Cases + Q&A)

Every skill listed on your portfolio, explained simply, then interview-ready.

---

## Programming & Development

### Core Java

**ELI5:** Java is a language where you write instructions once and run them on many computers — like a recipe everyone can follow the same way.

**Real use case:** Android apps, banking backends, enterprise tools. Your Coffee Shop and Auction House apps are Java.

**Q: Why Java for your projects?**  
**A:** University coursework emphasized OOP and desktop UIs. Java + Maven gave structured builds and JUnit testing — good practice for maintainable software before scaling to services.

**Q: Java vs Python for AI?**  
**A:** Python dominates ML ecosystems (PyTorch, scikit-learn). Java excels in enterprise integration. I use Python for models and Java where strong typing and desktop/enterprise patterns matter.

---

### Object-oriented design (OOP)

**ELI5:** Instead of one giant script, you make **things** (objects) like `Customer`, `Order`, `MenuItem` that know their own data and actions — like LEGO characters with rules.

**Real use case:** Uber models `Trip`, `Driver`, `Rider`. Your coffee shop models menu, orders, billing.

**Q: Name OOP pillars.**  
**A:** Encapsulation (hide internals), inheritance (reuse base classes), polymorphism (same interface, different behavior), abstraction (simplify complexity). In Coffee Shop I encapsulated order state and used polymorphism for different item types.

**Q: Composition vs inheritance?**  
**A:** Prefer composition ("has-a") over deep inheritance ("is-a") to avoid fragile base classes. An `Order` *has* `LineItems`, not necessarily *is* a `List`.

---

### Java Swing

**ELI5:** Swing draws **windows, buttons, and tables** on your computer — like building a small app with forms, not a website.

**Real use case:** Internal tools, kiosks, legacy enterprise desktops. Your order-taking UI and auction inventory UI.

**Q: Swing vs web (React)?**  
**A:** Swing is desktop-native, offline-friendly, no browser. React is for browsers and mobile web. I used Swing for coursework desktop requirements; React/Next.js for modern web UIs (Sudoku, portfolio).

---

### Maven

**ELI5:** Maven is a **project organizer** — it downloads libraries (dependencies), compiles code, and runs tests with one command (`mvn test`).

**Real use case:** Standard Java build in companies. Surefire plugin runs JUnit.

**Q: What does `pom.xml` do?**  
**A:** Project Object Model — defines dependencies, Java version, plugins (compiler, Surefire for tests), and build lifecycle phases.

---

## AI & Machine Learning

### Python

**ELI5:** Python reads like English-ish; scientists love it for data and AI.

**Real use case:** Netflix recommendations, spam filters, your NLP and CV projects.

**Q: Your Python stack in projects?**  
**A:** pandas/NumPy for data, scikit-learn for classical ML, PyTorch + Hugging Face for deep learning and transformers, NLTK for text preprocessing, Jupyter for experiments.

---

### Jupyter

**ELI5:** A notebook is a **lab book** — mix notes, code, and charts in one page, run step by step.

**Real use case:** EDA, model prototyping. Your `F21AA_CW2_Experiments.ipynb` documents the full ATA pipeline.

**Q: Notebook vs production code?**  
**A:** Notebooks for exploration; production moves to modules, tests, and CI. I structure notebooks by coursework steps (1–6) with clear sections for reproducibility.

---

### Machine Learning

**ELI5:** Show the computer many examples; it learns rules without you writing every `if` statement.

**Real use case:** Fraud detection, product recommendations, rating prediction from reviews.

**Q: Supervised vs unsupervised?**  
**A:** Supervised has labels (star ratings). Unsupervised finds structure without labels (topic modelling on reviews — NMF/LDA in ATA).

**Q: Train/validation/test?**  
**A:** Train = learn weights; validation = tune hyperparameters; test = final unbiased estimate. Never tune on test. I used stratified splits for imbalanced star ratings.

---

### Pandas & NumPy

**ELI5:** NumPy is fast **number grids**; pandas is **Excel tables** in code (`DataFrame`).

**Real use case:** Any tabular ML dataset. Your `train.csv` with `text` and `rating` columns.

**Q: Example pandas operations you used?**  
**A:** `read_csv`, `value_counts` for class imbalance, text length features, handling missing values, train/test splits.

---

## Back-End & Databases

### MySQL

**ELI5:** MySQL is a **filing cabinet** for structured data — rows and columns, queried with SQL.

**Real use case:** User accounts, orders, incident tickets. At TCS you used SQL for incident analysis.

**Q: Basic SQL you should know for interviews?**  
**A:** `SELECT`, `WHERE`, `GROUP BY`, `JOIN`, `ORDER BY`, aggregates (`COUNT`, `AVG`). Explain how you'd find repeat incident types by month.

**Q: SQL vs NoSQL?**  
**A:** SQL for relational, ACID, structured schemas. NoSQL for flexible docs/high scale. Incident and review metadata often fit SQL; raw review text might live in object storage with SQL for metadata.

---

## Cloud & IT Operations

### Google Cloud

**ELI5:** Rent computers and AI tools on Google's internet instead of buying your own servers.

**Real use case:** Host APIs, train models on GPUs, BigQuery analytics.

**Q: What GCP services do you know conceptually?**  
**A:** Compute Engine, Cloud Storage, BigQuery, Vertex AI for ML deployment — align to what you've touched in coursework; be honest if hands-on is limited.

---

### GitHub Actions

**ELI5:** Robots that run tests and deploy your code when you push to GitHub — like an automatic homework checker.

**Real use case:** CI/CD — run `npm test`, `mvn test`, lint on every PR.

**Q: What would you put in a workflow for this portfolio?**  
**A:** On push to `main`: install Node, `npm ci`, `next build`, optional lint. For Java: `mvn test` with Surefire.

---

### ITIL Framework

**ELI5:** ITIL is a **rulebook** for how IT teams handle services — incidents, changes, problems — so customers aren't left confused when things break.

**Real use case:** Banks, telcos, TCS client environments. Your Major Incident Manager role.

**Q: ITIL processes you used?**  
**A:** Incident management (restore service fast), problem management (root cause), change management (controlled releases), SLA tracking. I maintained ITSM workflows and dashboards.

**Q: How does ITIL relate to AI Engineering?**  
**A:** ML in production needs incident playbooks, monitoring, rollback, and documentation — same discipline as major incident management.

---

## Testing

### JUnit 5 with Maven Surefire

**ELI5:** JUnit checks **small pieces** of code automatically — "if I add 2+2, I get 4" — so bugs are caught early.

**Real use case:** Coffee shop billing logic, discount rules, domain models.

**Q: What did you test in Coffee Shop?**  
**A:** Core domain and billing behavior with JUnit — orders, prices, discounts — via Maven Surefire in the build pipeline.

**Q: Unit vs integration tests?**  
**A:** Unit tests isolate one class/function; integration tests check components together (e.g., CSV loader + order store).

---

## Project Management & Tools

### Git

**ELI5:** Git is a **time machine** for code — save snapshots (commits), branches for experiments, merge when ready.

**Q: Your Git workflow?**  
**A:** Feature branches, meaningful commits, PRs on group projects (F21AA), push to `main` for portfolio after review. See `13` for Teams and PR details.

### Figma

**ELI5:** Draw app screens before coding — like coloring the blueprint.

**Real example:** Wireframe an ML review dashboard — left panel paste review, center shows predicted stars + probability bars, right panel SHAP/top words or error analysis.

**Q: How used in AI context?**  
**A:** UI mockups for ML demos, dashboard wireframes for monitoring model metrics (latency, drift, confusion matrix).

### Slack

**ELI5:** Team chat for quick questions — like classroom group chat for projects.

**Real example:** F21AA group — "test.csv row count mismatch", "GPU machine free at 3pm", share Kaggle submission score in thread.

**Full guide:** [`13-github-teams-and-slack-qa.md`](./13-github-teams-and-slack-qa.md) — channels, threads, etiquette, GitHub + Slack workflow.

### GitHub Teams & collaboration

**ELI5:** GitHub **Teams** group people in an organization with shared repo access; **Pull Requests** let teammates review code before merge.

**Full guide:** [`13-github-teams-and-slack-qa.md`](./13-github-teams-and-slack-qa.md) — orgs, teams, branch protection, PR workflow with F21AA examples.

### Canva

**ELI5:** Easy graphics for presentations and reports.

**Real example:** Coursework report cover, infographic of F21AA pipeline steps for viva presentation.

---

## Cross-skill Q&A (interviewer favorites)

**Q: What's your strongest technical stack?**  
**A:** Python ML/NLP (scikit-learn, PyTorch, transformers) plus software engineering from Java OOP projects and incident-management discipline from TCS.

**Q: Full stack definition for you?**  
**A:** I can build UI (React/Next.js), logic (Java/Python), data (SQL/CSV), models (ML/DL), and operational practices (testing, Git, CI concepts, ITSM).

**Q: How do skills on your resume map to F21AA?**  
**A:** Python, Jupyter, ML, pandas → entire pipeline; NLP module → NLTK, transformers; Git → team repo; data analysis cert → EDA sections.

**Q: Skill you're actively improving?**  
**A:** Production ML — APIs, monitoring, and using AI agents (Claude Code) with strict review and token-efficient workflows.

---

> **📖 More real-world skill scenarios:** [`11-real-world-examples-workbook.md`](./11-real-world-examples-workbook.md)  
> **📖 GCP, GitHub Actions, portfolio architecture:** [`10-msc-coursework-portfolio-site.md`](./10-msc-coursework-portfolio-site.md)
