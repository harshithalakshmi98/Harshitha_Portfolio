# 12 — Real-World Examples Workbook (Study This for Interviews)

Every section: **ELI5 → Real company → Your project → Sample interview answer (say this aloud).**

---

## Section A — NLP & F21AA (Google Maps reviews)

### A1. TF-IDF with a real review

**Review (1-star):**  
*"Waited 45 minutes for cold pizza. Never again."*

| Word | Why TF-IDF cares |
|------|------------------|
| waited, cold, pizza | Appear in this review; "pizza" may be common in food reviews but "cold" + "45 minutes" are strong negative signals |
| the, for | Stopwords — low IDF, downweighted |

**ELI5:** Highlight words that feel **special** to this angry review, not words every review uses.

**Real company:** Yelp routes 1-star food complaints to restaurant partners; DoorDash tracks "cold food" theme spikes.

**Your project:** F21AA Step 3 — TF-IDF + LogReg baseline before transformers.

**Say in interview:**  
> "I treat each review as a bag of weighted words. TF-IDF stops 'the' from dominating and boosts discriminative terms like 'cold' and 'waited'. On imbalanced data I pair this with macro-F1 and stratified CV, not raw accuracy."

---

### A2. Class imbalance (~38% one-star)

**ELI5:** If 38% of essays are grade F, a lazy grader who always picks F is right 38% of the time.

**Real company:** Fraud detection — fraud is rare; banks care about catching fraud (recall), not only overall accuracy.

**Numbers to remember:** ~288k train rows; heavy 1-star skew (from your EDA).

**Say in interview:**  
> "I used stratified splits so each fold keeps star distribution. I selected models on macro-F1 so minority classes like 5-star still influence the score. I also inspected confusion matrix — which stars get confused, e.g. 2 vs 3."

---

### A3. Transformer vs LogReg — production tradeoff

| | LogReg + TF-IDF | DistilBERT fine-tuned |
|--|-----------------|----------------------|
| Latency | ~milliseconds | tens-hundreds ms (GPU helps) |
| Cost | Low CPU | GPU $$$ |
| Interpretability | Top weighted words | Harder |
| Context | "not good" weak | "not good" strong |

**Real scenario:** Zomato gets 10k reviews/hour — might use LogReg for triage, transformer for disputed cases.

**Say in interview:**  
> "I'd deploy a two-tier system: fast baseline flags urgent 1-stars; transformer re-scores borderline cases. I'd monitor drift when menu or location changes."

---

### A4. Topic modelling (NMF)

**1-star topics might surface:** wait time, rude staff, dirty tables  
**5-star topics might surface:** friendly staff, fresh food, great ambiance  

**Real company:** McDonald's HQ analyzes themes across regions without reading every review manually.

**Say in interview:**  
> "Topic modelling on rating subsets gives product insights beyond accuracy — leadership cares about *why* ratings differ."

---

### A5. Kaggle ensemble (real logic)

**ELI5:** Ask three friends to guess a test answer; if 2 agree, use that — often better than one friend alone.

**Your repo:** `submission_ensemble_weighted_721`, blends of RoBERTa + DistilBERT + LogReg.

**Say in interview:**  
> "I blended models with different inductive biases — sparse linear vs transformer. Ensembles reduced variance on hard 2/3-star boundary cases, validated on local CV before upload."

---

## Section B — TCS incident management (realistic scenario)

### B1. Full STAR story (template — personalize names)

**S:** Enterprise client payment portal had recurring weekend outages during peak load.  
**T:** As Major Incident Manager, restore service within SLA and stop repeats.  
**A:**  
- Declared major incident within 15 min; bridge with app, infra, DBA  
- Pulled 90-day incident SQL data — pattern: DB connection pool exhaustion after batch jobs  
- Excel pivot + dashboard for leadership: MTTR trend  
- Drove change request: pool size + job schedule; updated ITSM runbook  
- Trained L2 on new monitoring dashboard  
**R:** Repeat incidents for that category dropped ~30% over next two quarters; SLA breaches reduced.

**Say in interview:**  
> Use this structure with **your** real anonymized case. Never fake metrics.

---

### B2. SQL in RCA (concrete)

```sql
SELECT category, COUNT(*) AS cnt
FROM incidents
WHERE service = 'PaymentPortal'
  AND opened_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)
GROUP BY category
ORDER BY cnt DESC;
```

**Result interpretation:** "Interface Error" spiked after release X → links to bad deployment (change correlation).

---

### B3. SLA dashboard (real KPIs)

| KPI | Meaning | Real-time use |
|-----|---------|---------------|
| MTTR | Mean time to restore | Exec weekly review |
| % SLA met | Promises kept | Client QBR |
| Repeat rate | Same root cause again | Your 30% initiative |

**Parallel to ML:** Model latency p95, error rate, drift alerts — same operational mindset.

---

## Section C — Coffee Shop & Auction (Java / OOP)

### C1. Coffee shop — classes (whiteboard)

```
Menu → MenuItem (Drink, Food)
Order → List<LineItem>
Bill → applyDiscount(LoyaltyCard)
OrderStore → load/save CSV
SimulationEngine → threads: Customer, Server
EventLog (singleton, thread-safe) → audit trail
```

**Real company:** Starbucks POS — menu, modifiers, queue, kitchen display.

**Say in interview:**  
> "I separated domain logic from Swing UI so JUnit tests billing without clicking buttons. CSV persistence simulated a simple database for coursework."

---

### C2. Thread-safe event log — why it matters

**Scenario:** Two baristas log orders simultaneously during simulation. Without sync, log file corrupts — lines interleaved.

**Real company:** Trading systems, airline reservation logs — concurrency bugs are production incidents.

**Say in interview:**  
> "Singleton event log with synchronized writes mirrors how I'd think about shared resources in any multi-threaded service."

---

### C3. Auction house — inventory

**Scenario:** Sotheby's clerk adds "Victorian Chair", condition "Good", reserve price $5000, sorts by price, exports CSV for auction catalog.

**OOP:** `Furniture extends Collectible`, validation on price > 0.

---

## Section D — Building portfolio with AI agents (step-by-step)

### Real workflow you actually used

| Step | What you did | Tool |
|------|--------------|------|
| 1 | "Build mobile-first portfolio from resume text" | Cursor agent |
| 2 | Data in `portfolio.ts` | Single source of truth |
| 3 | "Add GitHub links + keyword highlights to projects" | Agent + review |
| 4 | `npm run build` after each change | You verify |
| 5 | Fix hero image crop manually | Specific prompt |
| 6 | `git commit` + push | Standard Git |

**Good prompt (real example from your session):**  
> "Add GitHub hyperlinks to project sections, highlight keywords in violet, add tech badges on every card. Reuse patterns in ProjectsSection."

**Bad prompt:**  
> "Make portfolio better."

**Say in interview:**  
> "I treat the agent as a fast junior developer: clear scope, file paths, success criteria (`next build` passes), and I review every diff for accessibility and design tokens."

---

## Section E — Sudoku & algorithms

### E1. Backtracking walkthrough (mini grid)

```
4 . . 3
. . . .
. . . .
3 . . 4
```

Try row1 col2 = 1 → conflict → backtrack → try 2 → propagate constraints → continue.

**Real use:** Airline crew scheduling, exam timetabling — same search with constraints.

**Say in interview:**  
> "Sudoku is a constraint satisfaction problem. Backtracking explores choices; propagation prunes early. UI in Next.js shows grid state and optional solver steps for education."

---

## Section F — ANN, PSO, Crop AI

### F1. Concrete strength (ANN + PSO)

**Inputs:** cement, water, age, fly ash, etc. (UCI)  
**Output:** compressive strength MPa  

**PSO ELI5:** Birds fly randomly; best bird whispers "try this direction"; swarm converges on good ANN weights.

**Real use:** Civil engineers optimize mix design — less cement, same strength, lower CO₂.

---

### F2. Crop recommendation

**Farmer inputs:** N=90, P=42, K=43, rainfall=200mm, pH=6.5  
**Model output:** Rice (example class)  

**Real apps:** India's ICAR advisories, AgriTech startups in UAE food security programs.

---

### F3. Disease detection — 38 classes

**Photo:** Tomato leaf with yellow spots  
**Output:** Early Blight vs Late Blight vs healthy  

**Risk:** Wrong diagnosis → wrong pesticide → crop loss.  
**Mitigation:** Show confidence; human agronomist if < 80%.

---

## Section G — Intro scripts (memorize)

### 60 seconds

> "I'm Harshitha, AI Engineer in Dubai, finishing MSc AI at Heriot-Watt. Six years at TCS I led major incident response — data-driven RCA, dashboards, 30% fewer repeat incidents. Now I build ML systems: Google Maps review classification with transformers, computer vision for crop disease, Java simulation apps, and React portfolios. I combine operational discipline with hands-on Python and NLP."

### 2 minutes

Add:  
- One project depth (F21AA pipeline in 4 sentences)  
- Why AI engineering (prevent problems with intelligent systems, not only fight incidents)  
- How you use Claude/Cursor responsibly (review, test, document)

### 5 minutes

Add:  
- TCS STAR story  
- Technical tradeoff example (LogReg vs DistilBERT)  
- Where you want to grow (production ML, MLOps)

---

## Section H — Intelligent Agents / PDDL (Lunar project)

**PDDL snippet concept:**

```
(:action drive-rover
  :parameters (?from ?to)
  :precondition (connected ?from ?to) (at rover ?from)
  :effect (not (at rover ?from)) (at rover ?to))
```

**ELI5:** Robot can drive only if roads connect and it's at the start.

**Real:** NASA rovers, warehouse AMRs — plan validated before execution.

**Your app:** User picks mission → planner outputs steps → SVG animates rover path on lunar map.

---

## Section I — Metrics cheat sheet with numbers

**Example confusion matrix (5-class, tiny):**

|  | Pred 1 | Pred 2 | Pred 3 |
|--|--------|--------|--------|
| True 1 | 90 | 5 | 2 |
| True 2 | 8 | 70 | 10 |
| True 3 | 1 | 12 | 75 |

**Precision class 2:** 70 / (5+70+12)  
**Recall class 2:** 70 / (8+70+10)  

**Say in interview:**  
> "I read confusion matrix before celebrating accuracy — systematic 2↔3 confusion suggests similar language; might need bigrams or transformers."

---

## Section J — "Explain to a 5-year-old" rapid pack

| Term | Kid explanation |
|------|-----------------|
| API | Waiter takes your order to kitchen, brings food |
| Database | Filing cabinet with labeled drawers |
| Model | Brain after studying flashcards |
| Training | Studying flashcards |
| Inference | Taking the test |
| Overfitting | Memorizing answers but failing new questions |
| Git | Save game with many slots |
| Docker | Lunchbox that fits any microwave |
| Transformer | Reader who remembers whole sentence at once |
| SLA | Pinky promise how fast we fix things |

---

## Section K — Questions that impress interviewers

1. "How would you monitor this model in production?"  
2. "What happens when review language shifts (new slang)?"  
3. "How do you document experiments for reproducibility?"  
4. "Ethical risks of auto-rating reviews?"  
5. "How does your incident background change how you ship code?"

Prepare 3-sentence answers for each using Sections A–B and `08`.

---

## Final verification drill (30 min)

1. Read Section G aloud — time yourself  
2. Explain Section A1 without looking  
3. Draw Coffee Shop classes (Section C1)  
4. Recite DistilBERT vs LogReg table (Section A3)  
5. Answer 10 random questions from `09`  

**Pass criteria:** Under 90 seconds per topic, no long pauses, at least one real company name per answer.
