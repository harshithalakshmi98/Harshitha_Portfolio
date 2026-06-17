# 09 — Master Mock Interview Q&A Bank

Use with a friend or mirror. Answer out loud in **60–90 seconds** unless noted.

> **Personalize:** Replace `[bracket]` answers with your real TCS story and group-project roles before mock interviews.  
> **Narrated examples:** [`12-real-world-examples-workbook.md`](./12-real-world-examples-workbook.md)

---

## Section 1 — Opening (10 questions)

**Q1. Tell me about yourself.**  
→ 2-min script: TCS → MSc → projects → AI Engineer goal.

**Q2. Why this company?**  
→ Research their product; tie your NLP/CV/incident skills.

**Q3. Why AI Engineer not Data Scientist?**  
→ You want build + ship (software + models), not only analysis.

**Q4. Strengths?**  
→ RCA discipline, communication, full-stack projects, persistence on hard ML problems.

**Q5. Weakness?**  
→ Deep experimentation before locking metrics; improved with F21AA protocol.

**Q6. Salary expectations?**  
→ Research UAE market; give range; flexible by role scope.

**Q7. Notice period?**  
→ Immediate / 2 weeks — state truth.

**Q8. Work visa status?**  
→ Answer honestly for UAE.

**Q9. Will you complete MSc while working?**  
→ Yes, discuss time management; coursework aligns with role.

**Q10. Questions for us?**  
→ 90-day plan, ML stack, mentorship, on-call, AI tool policy.

---

## Section 2 — TCS & behavioral (15 questions)

**Q11. Describe a major incident you led.**  
→ STAR; anonymized.

**Q12. Time you improved a process by data.**  
→ 30% repeat reduction narrative.

**Q13. Conflict with stakeholder.**  
→ Facts, SLA, documented decision.

**Q14. Train someone on technical topic.**  
→ Dashboard/incident training at TCS.

**Q15. Failure and learning.**  
→ Wrong initial RCA hypothesis; fixed with deeper data.

**Q16. Prioritization under pressure.**  
→ Incident commander triage.

**Q17. Documentation importance?**  
→ Handoffs, audits, ML model cards parallel.

**Q18. ITIL incident vs problem?**  
→ Incident restore fast; problem eliminate root cause.

**Q19. SLA example?**  
→ P1 response 15 min — adapt to your environment.

**Q20. SQL used how at TCS?**  
→ Extract, aggregate, trend incidents.

**Q21. Excel vs Python?**  
→ Excel quick RCA; Python scale and ML.

**Q22. Why leave TCS?**  
→ Planned pivot to AI engineering with MSc.

**Q23. Biggest achievement?**  
→ Repeat incident reduction + training scale.

**Q24. Leadership style?**  
→ Calm, data-led, inclusive on bridge calls.

**Q25. Handle ambiguity?**  
→ Clarify scope, define metrics, iterate.

---

## Section 3 — ML & NLP (25 questions)

**Q26. Supervised learning?**  
→ Labeled examples → predict labels.

**Q27. Unsupervised?**  
→ Structure without labels; clustering, topics.

**Q28. Classification vs regression?**  
→ Stars = classification; concrete strength = regression.

**Q29. Logistic regression for 5 classes?**  
→ Multinomial logistic / softmax regression.

**Q30. SVM intuition?**  
→ Max margin separator.

**Q31. Random Forest?**  
→ Ensemble of trees; bagging.

**Q32. XGBoost?**  
→ Gradient boosted trees; strong on tabular.

**Q33. TF-IDF formula idea?**  
→ High if frequent in doc, rare in corpus.

**Q34. Why macro-F1 on reviews?**  
→ Imbalance; all stars matter.

**Q35. Stratified split?**  
→ Preserve class % in train/val.

**Q36. Data leakage example?**  
→ Fit TF-IDF on full corpus including test.

**Q37. Cross-validation?**  
→ k-fold; stratified for classification.

**Q38. Precision/recall tradeoff?**  
→ Tune threshold by business cost.

**Q39. ROC-AUC vs PR curve?**  
→ PR better for imbalance.

**Q40. Word embedding vs TF-IDF?**  
→ Dense semantics vs sparse counts.

**Q41. LSTM purpose?**  
→ Sequence memory.

**Q42. Attention?**  
→ Weighted context per token.

**Q43. BERT pretraining tasks?**  
→ Masked LM; NSP (older BERT).

**Q44. Fine-tune vs feature extract?**  
→ Train head only vs full model tuning.

**Q45. DistilBERT benefit?**  
→ Smaller, faster, ~97% BERT performance.

**Q46. GPU bottleneck in training?**  
→ Matrix ops; batch size memory limit.

**Q47. Overfitting in transformers?**  
→ Early stopping, dropout, weight decay, more data.

**Q48. Topic modelling use?**  
→ Discover themes in 1-star vs 5-star.

**Q49. Ensemble methods you used?**  
→ Weighted blend, majority vote, Kaggle submissions.

**Q50. Deploy NLP model?**  
→ API + tokenizer + batching + monitoring.

---

## Section 4 — Computer vision & ANN (10 questions)

**Q51. CNN layer purpose?**  
→ Hierarchical feature extraction.

**Q52. Pooling?**  
→ Downsample spatial dimensions.

**Q53. Data augmentation?**  
→ Fake variety; reduce overfit.

**Q54. 38-class disease challenge?**  
→ Similar diseases confuse model; need per-class metrics.

**Q55. Crop recommendation inputs?**  
→ N,P,K, climate features.

**Q56. ANN forward pass?**  
→ Weighted sum + activation layer by layer.

**Q57. Backprop?**  
→ Chain rule updates weights to reduce loss.

**Q58. PSO vs grid search?**  
→ Swarm explores; no gradient needed.

**Q59. Activation ReLU?**  
→ max(0,x); avoids vanishing gradient partly.

**Q60. UCI dataset role?**  
→ Benchmark concrete compressive strength.

---

## Section 5 — Java & software engineering (15 questions)

**Q61. OOP four pillars?**  
→ Encapsulation, abstraction, inheritance, polymorphism.

**Q62. Interface vs abstract class?**  
→ Interface contract; abstract partial impl.

**Q63. Maven lifecycle?**  
→ compile test package.

**Q64. JUnit test structure?**  
→ Arrange act assert.

**Q65. Thread safety?**  
→ synchronized, locks, concurrent collections.

**Q66. Swing EDT?**  
→ UI thread rules.

**Q67. CSV vs database?**  
→ CSV simple; DB concurrent queries ACID.

**Q68. SOLID example?**  
→ Single responsibility Order vs Billing.

**Q69. Design patterns used?**  
→ Singleton log; MVC in UI.

**Q70. Git branch strategy?**  
→ main + feature branches + PR.

**Q71. Code review what you look for?**  
→ Correctness, tests, readability, security.

**Q72. Technical debt?**  
→ Shortcut now, cost later; document.

**Q73. REST status codes?**  
→ 200 OK, 400 bad request, 401 unauthorized, 404 not found, 500 server error.

**Q74. SQL injection?**  
→ Parameterized queries prevent.

**Q75. Logging levels?**  
→ DEBUG INFO WARN ERROR.

---

## Section 6 — Frontend (10 questions)

**Q76. React component?**  
→ Reusable UI function returning JSX.

**Q77. State hook?**  
→ `useState` local state.

**Q78. Effect hook?**  
→ Side effects after render.

**Q79. Next.js App Router?**  
→ `app/` directory routing.

**Q80. SSR vs CSR?**  
→ Server renders HTML vs client-only.

**Q81. `next/image` why?**  
→ Optimization lazy load.

**Q82. Tailwind approach?**  
→ Utility classes; your CSS variables for theme.

**Q83. a11y skip link?**  
→ Keyboard users jump to content.

**Q84. Responsive design?**  
→ Mobile-first breakpoints.

**Q85. TypeScript benefit?**  
→ Type safety on portfolio data.

---

## Section 6b — GitHub Teams & Slack (10 questions)

See full guide: [`13-github-teams-and-slack-qa.md`](./13-github-teams-and-slack-qa.md)

**Q86b. Git vs GitHub?**  
→ Git = version control tool; GitHub = hosting + PRs + teams.

**Q87b. What is a GitHub Organization Team?**  
→ Group of users with shared repo permissions in an org.

**Q88b. Why pull requests?**  
→ Code review + CI before merge to `main`.

**Q89b. Branch protection?**  
→ Rules preventing direct broken pushes to `main`.

**Q90b. Slack channel vs thread?**  
→ Channel = topic room; thread = focused reply under one message.

**Q91b. When use @channel?**  
→ Rarely — only urgent; otherwise @person or thread.

**Q92b. How GitHub + Slack integrate?**  
→ PR notifications, CI status in channel.

**Q93b. How you used Slack in F21AA?**  
→ Coordinate experiments, share Kaggle scores, PR links.

**Q94b. CODEOWNERS?**  
→ Auto-assign reviewers by file path.

**Q95b. Merge conflict?**  
→ Two edits same lines; human resolves in file.

---

## Section 7 — AI tools & agents (15 questions)

**Q86. Claude Code in one sentence?**  
→ Agentic coding across files with tools and permissions.

**Q87. CLAUDE.md purpose?**  
→ Project instructions for agent.

**Q88. MCP?**  
→ Connect external tools to model.

**Q89. Context window management?**  
→ Focused sessions, subagents, compact.

**Q90. Prompt engineering tip?**  
→ Specific files + success criteria.

**Q91. Token cost reduce how?**  
→ Caching, smaller model routing, concise prompts.

**Q92. `effort` parameter?**  
→ Reasoning depth vs cost.

**Q93. Agent vs chat?**  
→ Multi-step autonomous tool loop.

**Q94. Risks of AI coding?**  
→ Hallucination, security, unreviewed diffs.

**Q95. How you mitigate?**  
→ Tests, build, PR review, no secrets in prompts.

**Q96. `/batch` command?**  
→ Parallel subagents for large refactors.

**Q97. Subagents benefit?**  
→ Exploration without polluting main context.

**Q98. Fine-tuning vs RAG vs prompting?**  
→ Pick by data, latency, maintenance.

**Q99. Production LLM monitoring?**  
→ Latency, errors, toxicity, drift.

**Q100. Responsible AI?**  
→ Fairness, privacy, transparency, human oversight.

---

## Section 8 — Project-specific lightning (10 questions)

**Q101. Hardest part of F21AA?**  
→ Class imbalance + comparing fair baselines to transformers.

**Q102. Best Kaggle approach?**  
→ Ensemble strong models; validate locally first.

**Q103. Sudoku solver complexity?**  
→ Exponential worst case; pruning helps.

**Q104. Coffee shop concurrency lesson?**  
→ Thread-safe logging.

**Q105. PDDL project lesson?**  
→ Planning separate from ML perception.

**Q106. Portfolio built how?**  
→ Next.js, data-driven sections, mobile-first.

**Q107. Which project for production talk?**  
→ F21AA API + monitoring story.

**Q108. Group work conflict?**  
→ [Prepare honest example]

**Q109. If you redid F21AA?**  
→ Lock eval harness day 1; earlier error analysis.

**Q110. Next project idea?**  
→ RAG over incident runbooks tying TCS + NLP.

---

## Section 9 — Coding prompts (practice on paper)

1. Write SQL: count incidents by month and severity.  
2. Python: reverse words in a string.  
3. Python: TF-IDF intuition code sketch (not full lib).  
4. Java: class `Order` with addItem and total.  
5. Explain time complexity of nested loops on n reviews × m words.  
6. Write pseudo-code for train/val split stratified by label.  
7. JSON API response shape for `/predict` rating endpoint.  
8. Git commands: branch, commit, push, PR.  
9. Regex: find emails in text (basic).  
10. React: props for a `ProjectCard` component.

---

## Section 10 — Closing strong

**Final 30 seconds:**  
> "Thank you. I'm excited about this role because it combines the reliability discipline I built at TCS with the ML and NLP work I've been doing at Heriot-Watt. I'd welcome the chance to contribute to your team and grow with your stack."

---

## Scoring yourself after mock

| Score | Meaning |
|-------|---------|
| 9–10 | Hire-ready answer; clear, structured, evidence |
| 7–8 | Good; tighten numbers and technical terms |
| 5–6 | Vague; add STAR and project tie-in |
| <5 | Re-read relevant prep file and rehearse |

**Target:** 8+ average on Sections 1–3 and 7 before real interviews.
