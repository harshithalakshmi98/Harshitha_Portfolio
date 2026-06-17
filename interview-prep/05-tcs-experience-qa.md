# 05 — TCS Experience: Major Incident Manager (ELI5 + STAR + Q&A)

> **📖 Full STAR story template + SQL examples:** [`11-real-world-examples-workbook.md`](./11-real-world-examples-workbook.md) Section B.

**Role:** Major Incident Manager  
**Company:** Tata Consultancy Services (TCS)  
**Location:** Hyderabad  
**Period:** Jul 2019 – Aug 2025  

---

## What is a Major Incident Manager? (ELI5)

Imagine a **school** where the internet goes down during exams. A **major incident** is when something big breaks and many people are affected. You are the **captain** who:

1. Gets everyone on a call  
2. Figures out what's broken  
3. Gets it fixed fast  
4. Writes down why it happened  
5. Changes rules so it doesn't happen again  

You also use **data** (SQL, Excel, dashboards) like a detective — not guessing, **proving** patterns.

---

## Each bullet — ELI5 + STAR + Q&A

### 1. End-to-end incident response + 30% reduction in repeat incidents

**ELI5:** You didn't just fix fires — you fixed the **reason** fires restarted, so **30% fewer** same-type fires came back.

**STAR:**  
- S: High volume of repeat major incidents hurting SLA and customer trust  
- T: Lead response and drive preventive improvements  
- A: End-to-end process ownership, data-backed change proposals, ITSM updates, RCA follow-through  
- R: ~**30% reduction** in repeat incidents  

**Q: How did you measure 30%?**  
**A:** We tracked repeat incident categories over comparable time windows before/after process and fix deployment, using incident management data extracted via SQL and validated in Excel/dashboards. I'd clarify exact definition (same root cause category, same service, within X days) if asked.

**Q: What is "end-to-end" incident response?**  
**A:** Detection/declaration → bridge/call → role assignment → communication to stakeholders → technical recovery → verification → RCA → problem ticket → preventive actions → post-incident review.

---

### 2. Root cause analysis with SQL and Excel

**ELI5:** When something breaks, you ask **why five times** and use **spreadsheets and database queries** to find proof, not opinions.

**Real use case:** Same as debugging ML — bad data pipeline, class imbalance, wrong metric.

**Q: Walk through an RCA process.**  
**A:** Timeline reconstruction → identify contributing factors → separate proximate vs root cause → corrective vs preventive actions → document in ITSM → share with leadership.

**Q: Example SQL-style question you might get?**  
**A:** "Incidents by severity per month" — `SELECT month, severity, COUNT(*) FROM incidents GROUP BY 1,2 ORDER BY 1;`

---

### 3. Training programs on data-driven incident analysis and dashboarding

**ELI5:** You taught teammates how to use **charts and numbers** to decide what to fix first — like teaching friends to read a weather map.

**Q: Why training matters for AI roles?**  
**A:** ML teams need literacy in metrics and dashboards. I've already designed and delivered technical training to non-specialists.

---

### 4. ITSM processes and workflows

**ELI5:** ITSM is the **playbook** — forms, steps, approvals — so every incident is handled the same professional way.

**Q: ITSM tools you've likely touched?**  
**A:** ServiceNow or similar (state honestly). Concepts: incident, problem, change records, CMDB, SLA timers.

---

### 5. Performance monitoring dashboards for SLA tracking

**ELI5:** A **scoreboard** showing "are we on time?" — green/yellow/red for promises to customers.

**Real use case:** Same idea as model monitoring dashboards (latency, error rate, drift).

**Q: What KPIs on an incident dashboard?**  
**A:** MTTR, incident volume, SLA breach %, repeat incident rate, time to detect, time to assign, major incident count.

---

### 6. Root cause analysis and documentation

**ELI5:** Write a **story** of what happened so the next person doesn't start from zero.

**Q: Link to software engineering?**  
**A:** Postmortems ≈ engineering incident reviews. Documentation ≈ README, runbooks, model cards.

---

## Behavioral Q&A (TCS-focused)

**Q: Tell me about a stressful incident.**  
**A:** [Prepare one real anonymized story: calm coordination, clear comms, delegated technical track, documented timeline, followed up with RCA — no client names if confidential]

**Q: Conflict on a bridge call?**  
**A:** Focus on facts and SLA, assign single incident commander, park side debates offline, document decisions.

**Q: Why leave TCS?**  
**A:** I completed a strong chapter in operations and wanted to build AI systems directly. MSc AI and projects are the deliberate transition, not a random jump.

**Q: How does TCS experience help an AI Engineer role?**  
**A:** Reliability mindset, metrics, RCA, stakeholder communication, and operating under pressure — critical when models fail in production.

**Q: Leadership without people manager title?**  
**A:** Major incident commander role is situational leadership — coordinating experts, making call on priorities, accountable for outcomes.

---

## Keywords from your portfolio — quick definitions

| Keyword | Simple meaning |
|---------|----------------|
| End-to-end incident response | Own full lifecycle, not one step |
| Data-backed | Decisions supported by queried data |
| Root cause analysis | Find true underlying cause |
| ITSM | IT service management processes |
| SLA | Promised service level (e.g., 99.9% uptime) |
| Dashboarding | Visual KPI monitoring |
| Data-driven | Measure, then act |

---

## Complete STAR example (customize with your real case)

**Situation:** Client-facing payment service had repeat weekend outages during peak traffic.  
**Task:** Restore within SLA as Major Incident Manager and prevent recurrence.  
**Action:** Declared major incident; ran bridge with app/infra/DBA; queried 90 days of tickets in SQL; built Excel pivot + SLA dashboard for leadership; identified connection pool exhaustion tied to batch job timing; drove ITSM change + runbook update; trained L2 on new monitoring view.  
**Result:** Repeat incidents in that category fell ~30%; fewer SLA breaches in following quarters.

**Real-time parallel to ML:** Production model degradation → incident bridge → logs/metrics (SQL) → RCA → fix + monitor — same loop, different domain.

**⚠️ Replace with your anonymized true story before interviewing.**
