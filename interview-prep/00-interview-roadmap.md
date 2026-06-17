# 00 — Interview Roadmap & Procedure

> **✅ Full coverage audit:** [`10-COVERAGE-VERIFICATION.md`](./10-COVERAGE-VERIFICATION.md)  
> **⭐ Real-world narrated examples:** [`12-real-world-examples-workbook.md`](./12-real-world-examples-workbook.md)

## What a typical AI Engineer interview looks like

Most companies run **4–6 rounds**. Order varies.

| Round | Duration | Focus | Your best assets |
|-------|----------|--------|------------------|
| **HR / Recruiter** | 20–30 min | Motivation, visa, salary band, availability | MSc AI, Dubai, TCS stability |
| **Hiring manager** | 45–60 min | Career story, projects, team fit | TCS + transition to AI |
| **Technical — ML/NLP** | 60 min | Algorithms, metrics, project depth | F21AA ATA, Crop AI, ANN |
| **Technical — Coding** | 45–60 min | Python/Java, SQL, logic | Sudoku, Java projects |
| **System / Design** (sometimes) | 45 min | Architecture, trade-offs | Coffee shop OOP, portfolio Next.js |
| **Behavioral** | 30–45 min | STAR stories | 30% repeat incident reduction |

---

## The STAR method (use for TCS + group projects)

- **S**ituation — context in one sentence  
- **T**ask — what you were responsible for  
- **A**ction — what *you* did (use "I", not only "we")  
- **R**esult — number or outcome if possible  

**Example (ready to say):**

> **S:** At TCS we had many repeat major incidents.  
> **T:** I owned end-to-end incident response and improvement.  
> **A:** I ran root cause analysis with SQL and Excel, built dashboards for SLA tracking, and drove process changes in ITSM workflows.  
> **R:** Repeat incidents dropped about **30%**, and I trained teams on data-driven analysis.

---

## How to explain technical things (ELI5 framework)

Use this **4-step pattern** in every answer:

1. **Toy example** — "Imagine a library…" / "Like sorting LEGO by color…"
2. **Real world** — who pays for this (Google, banks, hospitals)
3. **What you built** — tie to *your* project
4. **One technical term** — define it simply after the story

**Bad:** "We used TF-IDF with Logistic Regression and macro-F1."  
**Good:** "Reviews are like homework essays — common words like 'the' don't help guess the star rating. TF-IDF highlights words that are special for each review. We trained a classifier like a teacher who learns patterns from past graded essays. We measured success with macro-F1 so one-star and five-star reviews matter equally."

---

## Before the interview checklist

- [ ] Portfolio open in a tab (live URL)
- [ ] GitHub repos starred / README skimmed
- [ ] 60-second intro rehearsed
- [ ] 3 STAR stories: TCS incident, one ML project, one Java project
- [ ] Whiteboard: train/val/test split, confusion matrix, REST vs DB
- [ ] Questions to ask them (team, stack, on-call, growth)

---

## Questions YOU should ask the interviewer

1. "What does the first 90 days look like for this role?"
2. "How does the team use ML in production — notebooks, APIs, or batch jobs?"
3. "What's the balance between research-style work and shipping features?"
4. "How do you evaluate model quality before release?"
5. "Do engineers use AI coding assistants — any internal guidelines?"

---

## Red flags to avoid

- Claiming you "built GPT" or "invented transformers"
- Cannot explain a metric you put on your resume
- No idea how your TCS experience connects to AI engineering
- Bad-mouthing TCS or university

---

## Q&A — Interview process

**Q: Walk me through your background in 2 minutes.**  
**A:** I'm Harshitha, AI Engineer based in Dubai, completing MSc AI at Heriot-Watt. I spent six years at TCS as Major Incident Manager — leading response, RCA with SQL/Excel, dashboards, and ITSM process work, with measurable reduction in repeat incidents. I'm now hands-on with Python ML/NLP — text classification on Google Maps reviews with classical and transformer models, computer vision for crop disease, ANN/PSO from scratch — plus Java desktop systems and React/Next.js frontends. I want to build reliable AI products, not just notebooks.

**Q: Why AI Engineering after incident management?**  
**A:** Incident management is already applied data science — patterns in logs, SLA metrics, root cause, automation. MSc AI formalized what I was doing informally. I want to build models and systems that prevent failures *before* they become incidents — recommendation, classification, monitoring with ML.

**Q: Why should we hire you over a fresh MSc graduate?**  
**A:** I combine production discipline from TCS — documentation, SLAs, stakeholder communication — with current coursework and projects in NLP, CV, and agents. I know how systems fail in the real world and how to measure improvement.

**Q: What's your biggest weakness?**  
**A:** I sometimes dive deep into model experimentation before locking evaluation protocol. I've learned to fix metrics and test splits first — especially important with imbalanced text data in my F21AA project — then iterate on models.

**Q: Where do you see yourself in 3 years?**  
**A:** Shipping ML features end-to-end — data pipeline, model, API, monitoring — ideally in NLP or applied AI, mentoring juniors on both engineering hygiene and responsible AI use.
