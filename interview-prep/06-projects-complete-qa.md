# 06 — All Projects: ELI5 + Real Use Cases + Interview Q&A

Seven projects from your portfolio. For each: **simple explanation**, **industry use case**, **what you did**, **likely interview questions**.

> **📖 Deep real-world narrated examples:** see [`11-real-world-examples-workbook.md`](./11-real-world-examples-workbook.md) (Sections A–H).

---

# Project 1 — Google Maps Review Rating Classification (F21AA / ATA)

**Tech:** Python, NLTK, scikit-learn, PyTorch, Transformers, TF-IDF  
**GitHub:** https://github.com/sagarr57/F21AA_CW2_PG_Group4  

## ELI5

People write **reviews** of restaurants like "Food was amazing but slow service." You teach the computer to guess how many **stars** (1–5) they would give **only from the words** — like a teacher guessing your grade from your essay tone.

## Real use cases

- Auto-routing bad reviews to support  
- Trend analysis for chains (McDonald's, hospitals, clinics)  
- Training data for recommendation systems  
- Competitor intelligence from public reviews  

### Worked example (say this in interview)

**Input review:** *"Waited 45 minutes for cold pizza. Never again."*  
**Expected label:** 1 star  

**Pipeline walkthrough:**

1. **Clean text** — lowercase, remove URLs, tokenize with NLTK  
2. **TF-IDF** — weights "cold", "waited", "45" higher than "the", "for"  
3. **LogReg baseline** — fast prediction ~1 star; inspect top negative coefficients  
4. **DistilBERT** — understands full sentence context; better on sarcasm edge cases  
5. **Evaluate** — macro-F1 on holdout; confusion matrix shows if 2-star and 3-star blur  
6. **Business action** — route to "food quality + wait time" queue; topic model confirms themes  

**Real companies doing similar:** Google Maps/Zomato/Yelp internal tools; Trustpilot B2B analytics.

## What you did (technical)

1. **EDA** — ~288k training reviews; heavy **class imbalance** (~38% one-star)  
2. **Text processing** — tokenization, stopwords, stemming/lemmatization (NLTK)  
3. **Features** — unigrams/bigrams, TF-IDF, embeddings (GloVe)  
4. **Classical models** — Logistic Regression, SVM, Naive Bayes, Random Forest, XGBoost  
5. **Sequence models** — BiLSTM  
6. **Transformers** — fine-tuned DistilBERT, RoBERTa  
7. **Topic modelling** — NMF on high vs low ratings  
8. **Kaggle** — multiple submissions, ensembles, blends  

## Q&A

**Q: Why is this multi-class classification hard?**  
**A:** Five labels, imbalanced classes, informal text, sarcasm, mixed sentiment in one review. Accuracy alone is misleading — a model predicting all 1-stars can look "accurate."

**Q: Why macro-F1?**  
**A:** Macro-F1 averages F1 per class equally — rare classes (5-star) still count. Critical when 1-star dominates.

**Q: Explain TF-IDF like I'm five.**  
**A:** Words everyone uses ("the", "good") aren't special. TF-IDF makes rare *important* words loud and common words quiet.

**Q: Classical vs transformer?**  
**A:** TF-IDF + LogReg is fast, interpretable, strong baseline. Transformers capture context ("not good" ≠ "good") but need GPU, more data, careful tuning.

**Q: What is fine-tuning?**  
**A:** Start from DistilBERT/RoBERTa pre-trained on huge text; train last layers on our star-rating task — transfer learning.

**Q: BiLSTM in one sentence?**  
**A:** Reads sentence left-to-right and right-to-left to remember context before predicting class.

**Q: Topic modelling purpose?**  
**A:** Discover themes in 1-star vs 5-star reviews (wait time, rude staff) without manual labels.

**Q: How did you handle imbalance?**  
**A:** Stratified splits, class weights, macro-F1 for selection, possibly oversampling — state what you actually used in notebook.

**Q: Group work — your contribution?**  
**A:** [Prepare honestly: e.g., preprocessing experiments, transformer training, Kaggle submissions, report sections]

**Q: Production next steps?**  
**A:** REST API, model versioning, monitoring drift, A/B test, latency budget (DistilBERT vs LogReg fallback).

### Resume bullets (two lines)

- Developed multi-class text classification on Google Maps reviews (1–5 stars) with NLTK preprocessing, TF-IDF/embeddings, and classical models (Logistic Regression, SVM), using cross-validation for model selection.  
- Extended pipeline with BiLSTM and transformer fine-tuning (DistilBERT, RoBERTa), topic modelling, and Kaggle ensemble submissions.

---

# Project 2 — Lunar Mission Visualizer (PDDL Planning Simulator)

**Tech:** PDDL, React, TypeScript, SVG, Planning  
**GitHub:** https://github.com/harshithalakshmi98/Lunar-Mission-Visualizer  

## ELI5

You're planning a **trip to the Moon** — which rover moves where, which tools to use. **PDDL** is a **language robots understand** for plans. Your app **shows the plan on a map** with moving pictures (SVG), like a cartoon mission control.

## Real use cases

- NASA / robotics mission planning  
- Warehouse robot routing  
- Game AI planners  
- Autonomous drone logistics  

## Q&A

**Q: What is PDDL?**  
**A:** Planning Domain Definition Language — describes states, actions, preconditions, effects for automated planners.

**Q: Why React + SVG?**  
**A:** React for interactive UI (mission selection); SVG for scalable animated maps without heavy game engines.

**Q: Planner vs ML?**  
**A:** Classical planning is symbolic and explainable; ML is statistical. Planning fits deterministic action rules; ML fits perception/noisy data.

---

# Project 3 — SudoSage (Intelligent Sudoku Solver)

**Tech:** Next.js, React, TypeScript, Backtracking, Algorithms  
**GitHub:** https://github.com/harshithalakshmi98/Intelligent-Sudoku-Solver  

## ELI5

Sudoku is a number puzzle with rules. **Backtracking** tries a number; if stuck, **goes back** and tries another — like maze solving. **Constraint propagation** quickly rules out impossible numbers. The website lets you **play and watch** the solver.

## Real use cases

- Scheduling (airlines, exams)  
- Resource allocation  
- Verification / formal methods foundations  

## Q&A

**Q: Explain backtracking.**  
**A:** DFS over choices; prune invalid branches early; undo last choice when dead end.

**Q: Constraint propagation?**  
**A:** When a cell gets value v, eliminate v from peers in row/col/box — reduces search space.

**Q: Time complexity?**  
**A:** Worst-case exponential; propagation makes real Sudoku tractable.

**Q: Why Next.js?**  
**A:** React UI with routing, SSR/SSG options, good DX for interactive puzzle app.

---

# Project 4 — ANN + PSO for Concrete Strength Prediction

**Tech:** Python, ANN, PSO, NumPy, Machine Learning  
**GitHub:** https://github.com/harshithalakshmi98/F21BC_PG09  

## ELI5

**Concrete strength** = how hard concrete becomes. You built a **brain from scratch** (ANN) that guesses strength from ingredients. **PSO** (Particle Swarm Optimization) is like **birds flocking** to find the best ANN settings — each "bird" tries a solution and shares with neighbors.

## Real use cases

- Civil engineering quality control  
- Reducing material waste  
- UCI benchmark comparisons in research  

## Q&A

**Q: Why build ANN from scratch?**  
**A:** To understand forward pass, activations, backprop — not treat frameworks as black boxes.

**Q: What is PSO?**  
**A:** Metaheuristic optimization; particles move in search space using personal best and swarm best — good for hyperparameter search.

**Q: Informant topology?**  
**A:** Each particle learns from subset of neighbors, not whole swarm — balances exploration/exploitation.

**Q: Activation functions?**  
**A:** ReLU, sigmoid, tanh — introduce non-linearity so network learns complex patterns.

---

# Project 5 — Coffee Shop Simulation

**Tech:** Java, Swing, Maven, JUnit, CSV, Concurrency  
**GitHub:** https://github.com/harshithalakshmi98/F21AS_PG04  

## ELI5

A pretend **coffee shop**: customers order, staff serve, queue grows, bills get discounts. Two **windows** on screen — one for orders, one watching the **busy shop**. Data saved in **CSV files** like spreadsheets. **Thread-safe log** means many workers can write notes without messing up.

## Real use cases

- POS systems (Starbucks)  
- Discrete-event simulation for operations research  
- Teaching OOP and concurrency  

## Q&A

**Q: OOP design highlights?**  
**A:** Menu hierarchy, orders, billing/discount rules, separation of UI and domain logic.

**Q: Thread-safe singleton event log?**  
**A:** Single log instance; synchronized access so concurrent simulation threads don't corrupt log file.

**Q: Why CSV persistence?**  
**A:** Simple coursework storage; production might use SQL.

**Q: What did JUnit test?**  
**A:** Domain and billing behavior independent of Swing UI.

---

# Project 6 — Auction House Inventory System

**Tech:** Java, Swing, OOP, CSV, Desktop UI  
**GitHub:** https://github.com/harshithalakshmi98/Auction-House-Inventory-System  

## ELI5

A **museum shop database** for furniture, sculptures, coins — add items, sort them, change price/condition, save to file, print statistics.

## Real use cases

- Auction houses (Sotheby's inventory)  
- Antique dealers  
- Asset tracking  

## Q&A

**Q: How model collectibles in OOP?**  
**A:** Base `Collectible` with subclasses or composition for type-specific fields; encapsulate condition and price validation.

**Q: Sorting and filtering approach?**  
**A:** In-memory collections with `Comparator` or streams; persist sorted export to CSV.

---

# Project 7 — AI-Driven Crop Recommendation & Disease Detection

**Tech:** Python, Deep Learning, Computer Vision, ML, Classification  
**GitHub:** https://github.com/harshithalakshmi98/PG-Group-3  

## ELI5

**Part A:** Farmer tells soil numbers (N, P, K) and weather → computer suggests **which crop** grows best.  
**Part B:** Photo of **leaf** → computer guesses **disease** from 38 types — like a plant doctor app.

## Real use cases

- Agri-tech startups in India/UAE  
- Food security programs  
- Mobile advisory apps for farmers  

## Q&A

**Q: Crop recommendation — ML type?**  
**A:** Typically multi-class classification or recommendation from tabular features (nutrients, rainfall, pH, temperature).

**Q: Disease detection — ML type?**  
**A:** Image classification (CNN) across 38 classes; needs careful train/val split by plant/disease to avoid leakage.

**Q: Challenges in field deployment?**  
**A:** Lighting, phone camera quality, leaf occlusion, class imbalance, need for on-device vs cloud inference.

**Q: Metrics for imbalanced 38 classes?**  
**A:** Macro-F1, per-class recall, confusion matrix — missing rare disease is costly.

---

## Cross-project Q&A

**Q: Which project best shows AI Engineering?**  
**A:** F21AA — full NLP pipeline, classical + deep learning, rigorous evaluation, Kaggle iteration.

**Q: Which shows software engineering?**  
**A:** Coffee Shop — OOP, UI, concurrency, tests, Maven.

**Q: Which shows frontend?**  
**A:** Sudoku, Lunar visualizer, and this Next.js portfolio.

**Q: Pick one project to deep-dive for 30 minutes.**  
**A:** Prepare F21AA: data → preprocess → features → models → metrics → errors → deployment.

---

## Appendix — 30-second pitch per project (memorize)

| Project | 30-second pitch |
|---------|-----------------|
| **F21AA** | "Predict 1–5 stars from Google reviews; compared TF-IDF + LogReg to DistilBERT/RoBERTa on 288k rows with macro-F1 and Kaggle ensembles." |
| **Lunar** | "PDDL planning simulator — pick a mission, visualize rover actions on an SVG lunar map in React." |
| **Sudoku** | "Backtracking + constraint propagation solver with interactive Next.js UI." |
| **ANN+PSO** | "Built neural net from scratch; PSO tuned weights on UCI concrete strength data." |
| **Coffee Shop** | "Java Swing POS + live simulation; OOP domain, CSV store, thread-safe log, JUnit billing tests." |
| **Auction** | "Java Swing inventory for collectibles with sort, edit, CSV persistence, stats." |
| **Crop AI** | "Tabular crop recommendation from soil/climate; CNN disease classifier across 38 leaf classes." |
| **Portfolio** | "Next.js 16 site — data-driven sections, keyword highlights, mobile-first, built with agent-assisted workflow." |

See [`10-msc-coursework-portfolio-site.md`](./10-msc-coursework-portfolio-site.md) for portfolio technical deep-dive.
