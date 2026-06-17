# 14 — AI-First Engineering Workflow Q&A

How to answer when interviewers test **how you work with AI** — not whether you can copy-paste from ChatGPT.

**What they're listening for:** You treat AI output as a **first draft**, you prepare **specs and context** before prompting, and **you** are accountable for what ships.

**Red flag:** *"I'd just ship what the AI gives me."*

**Your honest anchor:** You built this portfolio and F21AA coursework using Cursor/Claude — with `npm run build`, reviews, and incremental commits. Say that.

---

## Tier 1 — Basic AI Workflow

### Q1. You need to build a new feature. What do you give the AI before it writes a single line of code?

**A:** I give a **mini-spec**, not a vague wish.

1. **Goal** — one sentence: *"Add ATA project card to portfolio with GitHub link, tech badges, keyword highlights."*  
2. **Constraints** — stack, files to touch, files **not** to touch: *"Only `portfolio.ts` and `ProjectsSection.tsx`; match existing card style."*  
3. **Success criteria** — verifiable: *"`npm run build` passes; mobile layout unchanged."*  
4. **Context** — point to patterns: *"Reuse `highlightKeywords` from `src/lib/`."*  
5. **Examples** — link or paste one existing project entry as template.

**ELI5:** You don't ask a contractor to "build a kitchen." You give a floor plan, budget, and which walls are load-bearing.

**Real use:** Same as writing a good Jira ticket at TCS — clear scope prevents rework.

---

### Q2. AI gives you 200 lines of code. How do you verify it's correct before accepting it?

**A:** I never accept on faith. My checklist:

| Step | Action |
|------|--------|
| 1 | **Read the diff** — understand every changed file; skip = future bug |
| 2 | **Run build** — `npm run build` / `mvn test` / `pytest` |
| 3 | **Run linter** — fix new warnings |
| 4 | **Manual smoke test** — click the feature; resize mobile/desktop |
| 5 | **Edge cases** — empty data, missing fields, long strings |
| 6 | **Security scan** — no secrets, no `dangerouslySetInnerHTML` unless justified |
| 7 | **Git hygiene** — one logical change; commit message explains *why* |

**ELI5:** AI is a fast intern. You still sign the homework.

**Real use:** At TCS you wouldn't close an incident without verification — same bar for code.

---

### Q3. AI writes a function that looks right but tests fail. Walk through debugging **without touching the code yourself**.

**A:** I **direct** the AI; I don't abdicate thinking.

1. **Paste the exact error** — last 20–30 lines of stack trace, not the whole log (saves tokens, focuses context).  
2. **State expected vs actual** — *"Expected macro-F1 on val; got NaN after TF-IDF fit."*  
3. **Ask for hypothesis, not blind fix** — *"List 3 possible causes ranked by likelihood."*  
4. **Narrow scope** — *"Add a minimal repro test with 10 rows."*  
5. **Verify fix** — make AI run the single failing test, then full suite.  
6. **If loop fails twice** — `/clear` or new session; context may be polluted.

**Without touching code myself** still means: I read the proposed fix, I approve the diff, I run tests locally. I don't merge what I don't understand.

---

### Q4. You've been working with AI for 3 hours and it starts giving inconsistent, contradictory suggestions. What's happening and how do you fix it?

**A:** **Context window fatigue** — the session is stuffed with old errors, wrong paths, and abandoned approaches. The model optimizes for the messy thread, not the goal.

**Fix:**

1. **Stop** — don't chase the 15th contradictory patch.  
2. **Write a fresh spec** — 5 bullets: current state, desired state, what's broken.  
3. **New session or `/compact`** — drop dead ends.  
4. **Re-attach only what matters** — 2–3 key files, not whole repo.  
5. **Smaller task** — *"Fix only the failing test in `billing.test.ts`"* not *"fix everything."*

**ELI5:** After 3 hours of group chat, nobody remembers the plan. Start a new meeting with an agenda.

**From Claude Code docs:** Context is your scarcest resource; performance degrades as it fills.

---

### Q5. What's the difference between telling an AI **what to build** vs **how to build**? Which gives better results?

**A:**

| | **What** (outcome) | **How** (implementation) |
|--|-------------------|-------------------------|
| Example | "Users can filter projects by tech stack" | "Use Redux + middleware + debounced lodash" |
| Best for | Greenfield, trusting team conventions | Legacy constraints, performance-critical paths |
| Risk | AI may pick wrong library | Over-constrains; you miss better options |

**Better default:** **What + constraints + success criteria.** Add **how** only when necessary (e.g. "must use existing `highlightKeywords` helper", "no new dependencies").

**Real use:** Product owner says *what*; senior engineer adds *how* when stack matters. You're both.

---

## Tier 2 — Quality & Reliability

### Q6. AI writes tests that pass 100%. Why isn't that necessarily good? How do you validate tests are useful?

**A:** Tests can pass while proving nothing.

**Bad test patterns:**

- Assert `true === true` or only check "function runs"  
- Mock everything so production path is never exercised  
- Snapshot of wrong behavior frozen forever  
- No edge cases — only happy path  

**How I validate:**

1. **Mutation test mentally** — if I break the logic, should this test fail? If not, test is useless.  
2. **Review assertions** — assert **behavior**, not implementation (`expect(total).toBe(90)` not `expect(discountCalled).toBe(true)`).  
3. **Add one failing case on purpose** — confirm test catches it.  
4. **Coverage ≠ quality** — 100% line coverage with weak asserts is theater.

**Your Coffee Shop example:** JUnit on billing — test wrong discount math, zero items, negative price rejected.

---

### Q7. Build an API endpoint. How do you ensure AI handles edge cases, not just happy path?

**A:** I put edge cases **in the spec before code**:

```markdown
POST /predict-rating
- Body: { "text": string, required, max 5000 chars }
- 400: empty text, missing field, text too long
- 401: missing/invalid API key
- 413: payload too large
- 429: rate limit
- 500: model load failure → structured error, no stack trace to client
- 200: { "rating": 1-5, "probabilities": [...] }
```

Then I ask AI to **generate tests first** (or test table), then implementation.

**Also:** concurrency — stateless handler, no global mutable model without lock; load test with 10 parallel requests.

**TCS parallel:** Major incidents often come from "happy path only" releases — I learned to ask "what if it fails at 2am?"

---

### Q8. AI refactors code; all tests pass. How do you know it didn't introduce a bug tests don't cover?

**A:**

1. **Characterize behavior before refactor** — manual checklist or characterization tests.  
2. **Small diff** — one refactor per PR; easy to bisect.  
3. **Types still strict** — TypeScript compile is a weak test but catches API shape breaks.  
4. **Integration / smoke test** — run app, not only unit tests.  
5. **Watch observability** — if in prod, compare error rates before/after.  
6. **Ask: did tests cover this path before?** If coverage was thin, refactor risk is high.

**Rule:** Passing tests mean "didn't break what we thought to test" — not "correct."

---

### Q9. A teammate says "the AI wrote it so it should be fine." What's wrong with that?

**A:** **Accountability doesn't transfer.** The AI isn't on-call. You are.

- AI hallucinates APIs, omits auth, uses deprecated patterns.  
- AI optimizes for plausible code, not *your* business rules.  
- Code review and CI exist because humans (and models) err.

**Say in interview:**  
> "AI is an accelerator, not an approver. I review every diff like a PR from a junior — because I'm the one paged if it breaks."

---

### Q10. How do you stop AI from confidently solving the **wrong problem**?

**A:**

1. **Restate the problem** in the prompt: *"Before coding, summarize what I'm asking in 3 bullets and list assumptions."*  
2. **Acceptance criteria upfront** — measurable done-ness.  
3. **Milestone checkpoints** — "show plan only" → approve → "implement step 1."  
4. **Compare to user story** — who is the user, what changes for them?  
5. **Demo early** — screenshot or curl before polishing.

**Red flag phrase from AI:** "Done!" without you having run success criteria.

---

## Tier 3 — Architecture & Complexity

### Q11. Complex feature: DB schema + API + UI + notifications. How do you break it down for AI?

**A:** **Vertical slices or layer sequence** — never "build everything" in one prompt.

**Option A — vertical slices (preferred):**

1. Slice 1: schema + migration + read API (no UI)  
2. Slice 2: write API + validation  
3. Slice 3: UI consumes API  
4. Slice 4: notification hook on success event  

Each slice: spec → tests → code → merge.

**Option B — contract first:**

1. OpenAPI / TypeScript types agreed  
2. Mock API for UI parallel work  
3. Implement backend to contract  

**Give AI one slice + interfaces** from previous slices.

---

### Q12. How do you ensure AI integrates cleanly with a 50-file codebase?

**A:**

1. **`CLAUDE.md` / project rules** — stack, folder map, naming, test command (keep short).  
2. **Point to reference files** — *"Match `ProjectsSection.tsx` patterns."*  
3. **Grep before generate** — ask AI to search existing usages first.  
4. **Minimal diff rule** — "do not refactor unrelated files."  
5. **CI on every PR** — build + test.  
6. **Subagent for exploration** — explore in side thread; implement in clean main thread (`12`).

**Real use:** Your portfolio has clear `src/data` + `src/components` split — tell AI that boundary.

---

### Q13. Proprietary business logic (e.g. IVA eligibility rules). How do you encode domain knowledge?

**A:**

1. **Rules document** — bullet rules, examples, counter-examples.  
2. **Decision table** — inputs → outcome rows AI can implement literally.  
3. **Worked examples** — 10 cases with expected output (golden tests).  
4. **Explicit "never" rules** — *"Never approve if income < X and dependants > Y."*  
5. **Human sign-off** on rules before code generation.  
6. **No AI inventing policy** — AI implements; SME defines policy.

**Your parallel:** F21AA star ratings — coursework rubric is the "policy"; AI doesn't choose metric, you do (macro-F1).

---

### Q14. When do you **NOT** use AI to generate code?

**A:**

| Human-first | Why |
|-------------|-----|
| Auth/crypto primitives | Security-critical; use vetted libraries + expert review |
| Legal/compliance decisions | AI doesn't own liability |
| Novel algorithm proof | Need human reasoning trace |
| Production incident commander | Human judgment, comms, ethics |
| Tiny one-liner you understand | Faster to type; context cost too high |
| Learning core fundamentals | MSc exams, interviews — you must know it |

**Do use AI:** boilerplate, tests scaffolding, refactors with coverage, docs, exploring APIs.

---

### Q15. AI suggests a pattern that's wrong for your stack. How do you course-correct?

**A:**

1. **Name the constraint explicitly** — *"We use Next.js App Router Server Components; no `useEffect` fetch in page."*  
2. **Point to canonical example** in repo.  
3. **Reject with reason** — *"Don't use Redux; we use colocated state in `portfolio.ts`."*  
4. **Smaller retry** — one file, correct pattern.  
5. **Update `CLAUDE.md`** so it doesn't repeat.

Don't argue in chat for 20 messages — reset context with corrected rules.

---

## Tier 4 — Team & Process

### Q16. Two devs use AI independently; generated code conflicts. What process prevents this?

**A:**

1. **Short-lived branches** — merge daily.  
2. **Task ownership** — one issue per person on disjoint files/modules.  
3. **PR required** — no direct push to `main` (`13`).  
4. **Slack/thread** — "I'm on `ProjectsSection.tsx` today."  
5. **Rebase often** — `git pull --rebase` before new AI session.  
6. **CODEOWNERS** — auto-route reviewers by path.

**AI doesn't replace coordination** — it makes conflicts faster if process is weak.

---

### Q17. How do you write a spec so AI executes without constant clarification?

**A:** Good spec contains:

| Section | Content |
|---------|---------|
| **Problem** | Who suffers, what breaks today |
| **Goal** | One measurable outcome |
| **Non-goals** | What we're NOT doing |
| **Acceptance criteria** | Checklist (Given/When/Then) |
| **Technical constraints** | Stack, files, performance, a11y |
| **API/data contracts** | Shapes, status codes |
| **Test plan** | Cases to pass |
| **References** | Mockups, similar code in repo |

**Example (portfolio):**  
*"Add project X to `portfolio.ts` with fields Y; render badges; `next build` passes; no new deps."* — that's executable.

---

### Q18. Senior says "works but wrong approach." How does an AI-first team handle that?

**A:**

1. **Thank and capture** — approach note in PR comment or ADR (Architecture Decision Record).  
2. **Ask for preferred pattern** — link to example.  
3. **Re-prompt AI** with senior's constraint — or rewrite yourself if faster.  
4. **Update team docs** — `CLAUDE.md` / wiki so AI doesn't repeat mistake.  
5. **No ego** — working ≠ right; maintainability matters.

**Culture:** Review critiques the **code**, not "you used AI."

---

### Q19. Junior doesn't understand AI-written code. Acceptable?

**A:** **Not acceptable to merge** if they can't explain it at a high level.

- They must know: inputs, outputs, failure modes, where to change behavior.  
- AI is a learning tool — junior should ask AI to **explain** the diff line by line.  
- Mentor reviews with "teach back" — junior explains PR in 2 minutes.

**Hiring angle:** AI raises the floor on typing speed; **raises the bar on understanding** before merge.

---

### Q20. Code ownership and accountability when AI wrote most of the code?

**A:**

- **Git blame** still points to the human who committed.  
- **PR author** owns defects.  
- **Reviewers** share responsibility if they approved.  
- **Docs and tests** prove intent beyond generated text.  
- **Runbooks** for on-call — human-readable, not "ask the model."

**Say:** *"I use AI like a power tool. The carpenter owns the cut, not the saw."*

---

## Tier 5 — Security & Production

### Q21. AI generates a database query. What do you check?

**A:**

| Check | Why |
|-------|-----|
| **SQL injection** | Parameterized queries / ORM — never string concat user input |
| **Over-broad SELECT** | `SELECT *` leaking PII columns |
| **Missing `WHERE` tenant filter** | Multi-tenant data leak |
| **Unbounded queries** | No `LIMIT` → DoS |
| **Excessive permissions** | App user shouldn't be DB admin |
| **Logged secrets** | Query logs exposing passwords |

**Prompt:** *"Use parameterized queries only; show me the query and bindings."*

---

### Q22. Auth flow — what do you let AI write vs review manually?

| AI can draft | Human must review hard |
|--------------|------------------------|
| Route structure, middleware skeleton | Token expiry, refresh rotation |
| Form UI | Password hashing params (bcrypt cost) |
| OAuth callback wiring | CSRF, state param, redirect allowlist |
| Test scaffolding | Session fixation, cookie flags (`HttpOnly`, `Secure`, `SameSite`) |

**Rule:** AI proposes; human verifies against OWASP Auth cheatsheet.

---

### Q23. AI writes file upload handling. Name 3 security checks before accept.

**A (give 5 in interview):**

1. **File type validation** — magic bytes, not only extension  
2. **Size limit** — reject huge uploads  
3. **Storage path** — no user-controlled path (path traversal)  
4. **Virus scan / sandbox** — for production  
5. **AuthZ** — user can only access their uploads  
6. **Bonus:** randomize stored filename; serve from separate domain/CDN

---

### Q24. Keep secrets out of AI context without breaking codegen?

**A:**

1. **`.env` in `.gitignore`** — never paste keys into chat.  
2. **`.env.example`** with fake placeholders — give AI that file.  
3. **Environment variables** — code reads `process.env.API_KEY`, prompt says "use env var name only."  
4. **Cursor/IDE ignore** — exclude secrets from indexing.  
5. **Secret manager** in prod (GCP Secret Manager, Vault) — not in repo.  
6. **Rotate** if accidentally pasted — assume leaked.

---

### Q25. AI code passed review and tests but caused production incident. Who's accountable? Post-mortem?

**A:**

- **Accountable:** humans — author, reviewers, deployer. Not the vendor model.  
- **Post-mortem (blameless):** timeline, root cause, contributing factors (weak test? missing monitor?), action items.  
- **AI-specific factors:** Was diff too large to review? Were edge cases unspecified? Context hallucination?  
- **Actions:** add test, add alert, update `CLAUDE.md`, tighten spec template.

**TCS parallel:** Same as major incident RCA — data-backed, preventive, documented.

---

## Bonus — How They Actually Think

### Q26. Feature you'd be excited to build with AI that'd be tedious manually?

**A (personalize):**  
> "Batch-updating 7 portfolio project cards with consistent schema, badges, and keyword arrays — AI handles repetitive JSX/data edits while I verify design tokens and `next build`. Or generating boilerplate EDA notebook sections for a new dataset while I own metrics and leakage checks."

---

### Q27. Most expensive mistake in AI-first workflow?

**A:** **Shipping unreviewed code you don't understand** — especially auth, payments, PII, or ML evaluation with leakage. Speed without verification creates **fast technical debt** and **fast incidents**.

---

### Q28. If AI writes code 10x faster, where does saved time go in a well-run team?

**A:**

- **Better specs and design**  
- **Stronger tests and edge cases**  
- **Code review depth**  
- **User research / stakeholder comms**  
- **Monitoring and docs**  
- **Mentoring juniors to understand, not just generate**

**Not:** more meetings about nothing. **Yes:** higher quality bar.

---

### Q29. Bad prompt → good prompt (example)

**Bad:**  
> "Make my portfolio better."

**Good:**  
> "In `src/data/portfolio.ts`, add project F21AA with githubUrl, keywords, tech array matching existing entries. Update `ProjectsSection` only if needed for badges. Use `highlightKeywords` from `src/lib`. Run `npm run build`. Do not change hero or experience sections."

**Why better:** goal, files, constraints, success command, scope boundary.

---

### Q30. The AI says "done." What do you do next?

**A:**

1. **Don't trust "done"** — run success criteria yourself.  
2. **Build / test / lint**  
3. **Manual check** — UI, mobile, a11y  
4. **Read diff** one more time  
5. **Commit** with human-written message  
6. **Only then** say done to the team  

**ELI5:** Teacher says "I finished your homework" — you still read it before handing it in.

---

## Extra Q&A (added for depth)

### Q31. How is using AI different from copying from Stack Overflow?

**A:** Volume and customization — AI generates novel glue code fast. **Same duty:** verify, attribute if needed, understand before merge. SO answer is static snippet; AI answer may be subtly wrong in your context.

### Q32. Do you paste client confidential data into AI?

**A:** No — anonymize samples, use enterprise tiers if required, follow employer policy. TCS/client data especially off public tools.

### Q33. How do you use AI in ML without cheating on coursework?

**A:** Follow university policy; AI for understanding and boilerplate; **you** defend design in viva; document what you used; never fabricate results.

### Q34. What's your rule for PR size with AI?

**A:** **Small PRs** — ideally <400 lines changed; one feature. AI tempts huge dumps; split them.

### Q35. How do you document AI-assisted work?

**A:** PR description: "AI-assisted scaffold; manually verified tests and auth." Commit messages human-written. ADR for big decisions.

### Q36. AI suggests adding 5 npm packages for a 10-line task. Response?

**A:** Reject — ask for zero-dependency or existing lib solution. Bundle size and supply chain risk matter.

### Q37. How do you evaluate if AI is worth it for a task?

**A:** If explaining the task takes longer than doing it, type it yourself. If task is repetitive, well-specified, and verifiable — use AI.

### Q38. Connection to your TCS background?

**A:** Incident management taught me verify-before-close, document assumptions, and never declare resolved without evidence — identical mindset for AI-generated code.

### Q39. Connection to your MSc / ML work?

**A:** AI coding tools don't replace knowing metrics, leakage, or class imbalance. I use agents for notebook scaffolding; I own evaluation protocol (F21AA macro-F1, stratified splits).

### Q40. One sentence philosophy?

**A:**  
> **"AI is my draft engine; I'm the editor, tester, and owner."**

---

## Quick revision card (30 seconds before interview)

| Principle | One line |
|-----------|----------|
| Spec first | Goal + constraints + success criteria |
| Verify always | Build, test, read diff, smoke test |
| Context hygiene | New session when confused |
| Small slices | Don't one-shot complex features |
| Security | Params, auth, secrets, uploads |
| Accountability | Human ships, human on-call |
| Team | PRs, branches, Slack coordination |
| Quality | Tests must fail when code breaks |

---

## Cross-links

- Claude & tokens: [`12-ai-claude-agents-prompt-engineering-qa.md`](./12-ai-claude-agents-prompt-engineering-qa.md)  
- GitHub + Slack process: [`13-github-teams-and-slack-qa.md`](./13-github-teams-and-slack-qa.md)  
- Real portfolio prompts: `12` Appendix  
- Mock drills: [`15-master-mock-interview-qa.md`](./15-master-mock-interview-qa.md)
