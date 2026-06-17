# 12 — AI Tools: Claude, Claude Code, Agents, Prompt Engineering & Token Optimization

Interview-ready Q&A based on Anthropic documentation (2025–2026). Use this when asked about **how you use AI in development**.

> **📖 Step-by-step portfolio build with agents:** [`11-real-world-examples-workbook.md`](./11-real-world-examples-workbook.md) Section D.  
> **📖 AI-first workflow interview tiers:** [`14-ai-first-engineering-workflow-qa.md`](./14-ai-first-engineering-workflow-qa.md)

---

## Part A — Claude (the model) vs Claude Code (the product)

### ELI5

- **Claude** = smart helper you **chat** with (like a very good tutor).  
- **Claude Code** = smart helper that **sits in your terminal/IDE**, **reads your whole project**, **edits files**, **runs commands**, and **keeps trying** until tests pass (with your permission).

### Real use cases

| Tool | Use case |
|------|----------|
| Claude chat | Draft emails, explain papers, brainstorm architecture |
| Claude API | Build products (support bots, document Q&A) |
| Claude Code | Refactor module, fix CI, add feature across 10 files |
| Cursor + Claude | Same agentic loop inside IDE (what you use for portfolio) |

---

## Part B — Claude Code features (know these names)

**Q: What is Claude Code?**  
**A:** Anthropic's **agentic coding system** — reads codebase, edits multiple files, runs shell/git/tests, iterates on failures. Available in terminal CLI, VS Code/Cursor extension, desktop app, and browser/cloud sessions.

**Q: How is Claude Code different from Copilot autocomplete?**  
**A:** Autocomplete suggests the next line. Claude Code works at **project level**: plans multi-file changes, executes tools, runs test suite, fixes errors in a loop. Developer sets goal and reviews diffs.

**Q: What is `CLAUDE.md`?**  
**A:** Markdown in project root read at session start — coding standards, architecture, preferred libraries, test commands. Keeps agent aligned. **Keep it concise** — bloated files waste tokens and get ignored.

**Q: What is MCP (Model Context Protocol)?**  
**A:** Standard way to connect Claude to **external tools/data** — databases, browsers, Figma, custom APIs. Extends context beyond local files.

**Q: What are subagents / background agents?**  
**A:** Lead agent delegates subtasks to child agents (e.g., one fixes tests, one updates docs). `claude agents` dashboard monitors parallel sessions. `/batch` splits large refactors into parallel worktrees.

**Q: Useful Claude Code commands?**  
**A:**  
- `/clear` — reset context when off-track  
- `/compact` — summarize history to save tokens  
- `/agents` — manage parallel sessions  
- `/batch` — large parallel codebase changes  
- `/fast` — faster Opus configuration for iteration  
- `/goal` — set completion condition; agent loops until met  
- `/cd` — move session to another directory  

**Q: Permission model?**  
**A:** **Deny-first** — asks before file edits and shell commands by default. Reduces risk. Use `--safe-mode` to disable customizations when debugging config issues.

**Q: Agent SDK?**  
**A:** Build **custom agents** programmatically (Python/TypeScript) using Claude Code tools — for CI bots, internal workflows.

---

## Part C — How LLMs work (interview-safe, not hype)

**Q: What is a token?**  
**A:** Small piece of text (~3–4 chars English). Billing and context limits are in tokens. "Hello world" ≈ 2–3 tokens.

**Q: Context window?**  
**A:** Maximum tokens model can see in one request (conversation + files + tool outputs). When full, performance degrades — **most important resource** in agentic coding.

**Q: What happens inside (high level)?**  
**A:** Transformer predicts next token from prior context. Training on huge text; fine-tuning/chat tuning for helpfulness. **Not** a database lookup — statistical patterns with reasoning emergent at scale.

**Q: Hallucination?**  
**A:** Model states false things confidently. **Mitigation:** require citations, run tests, verify file paths, never trust unverified API names.

**Q: Temperature? (legacy note)**  
**A:** Older API knob for randomness. Newer Claude models steer behavior via **prompt** and **`effort`** / **adaptive thinking** instead of temperature (deprecated on latest APIs).

---

## Part D — Prompt engineering (best practices)

**Q: Golden rules?**  
**A:**  
1. **Be specific** — files, constraints, success criteria  
2. **Give examples** (few-shot) for format/tone  
3. **Structure long prompts** — XML tags or markdown sections  
4. **Say what NOT to do** — "don't refactor unrelated files"  
5. **Iterate** — small prompts often beat one giant prompt  

**Q: Bad vs good prompt (portfolio example)?**  

❌ Bad: `fix the image`  

✅ Good: `Hero profile image crops the head. In HeroSection.tsx use object-cover, overflow-hidden rounded frame, object-position ~18%, slight scale from top. Don't change unrelated sections. Run next build.`

**Q: What is chain-of-thought?**  
**A:** Ask model to reason step-by-step before answer — improves complex tasks. API can use adaptive thinking instead of manual "think step by step."

**Q: System vs user prompt?**  
**A:** System sets role/rules; user gives task. In Claude Code, `CLAUDE.md` + environment act like system context.

**Q: Few-shot prompting?**  
**A:** Include 2–3 input/output examples in prompt so model copies pattern.

**Q: Role prompting?**  
**A:** "You are a senior ML engineer reviewing my notebook for data leakage" — sets expertise level.

---

## Part E — Token optimization (cost + performance)

**Q: Why optimize tokens?**  
**A:** Cost, latency, and **context limits**. Agent sessions fill context with every file read and command output.

**Q: Claude Code context tips?**  
**A:** (from Anthropic best practices)  
- Context fills fast — performance drops when near full  
- Use **specific file paths** instead of "search whole repo"  
- **Subagents** for exploration so main thread stays clean  
- `/compact` or new session when topic changes  
- **Concise `CLAUDE.md`** — every line competes with your actual task  
- Don't paste huge logs — paste **relevant 20 lines**  

**Q: Prompt caching (API)?**  
**A:** Reuse static prefix (system prompt, docs) across requests — up to **~90% input cost reduction** on cached portions. Set cache breakpoints on stable content.

**Q: Token-efficient tool use (API beta)?**  
**A:** Header `token-efficient-tools-2025-02-19` reduces tool-calling output tokens (~14–70% savings in Anthropic benchmarks).

**Q: `effort` parameter?**  
**A:** Calibrates reasoning depth vs cost:  
- `low` — simple tasks, subagents  
- `medium` — cost-sensitive  
- `high` — default for intelligence tasks  
- `xhigh` — coding/agentic work  
- `max` — hardest problems; watch overthinking  

**Q: Adaptive thinking?**  
**A:** `thinking: {type: "adaptive"}` — model decides how much internal reasoning needed. Prefer over manual thinking budgets on current models.

**Q: `max_tokens`?**  
**A:** Hard cap on output — always set to prevent runaway generation. Agentic tasks may need 16k–64k for multi-step tool use.

**Q: Model routing strategy?**  
**A:** Haiku for classification/routing; Sonnet balance; Opus for hard coding — don't use Opus to rename a variable.

---

## Part F — Developing frontend/backend with agents

### Workflow you can describe in interviews

**1. Plan**  
- Write 3–5 bullet spec in issue or prompt  
- List files likely touched  

**2. Context**  
- Open relevant files in IDE  
- Ensure `CLAUDE.md` has: stack, `npm run build`, test command, folder structure  

**3. Execute**  
- One feature per session when possible  
- Agent edits → you **review diff** like a PR  

**4. Verify**  
- Run build/tests locally  
- Manual check responsive UI / API response  

**5. Commit**  
- Small commits with clear messages  
- Never commit secrets (.env)  

### Frontend with agents

**Q: Example task?**  
**A:** "Add ATA project card to portfolio.ts matching existing schema; reuse highlightKeywords helper; run build."

**Pitfalls:**  
- Agent invents wrong Tailwind tokens — verify against `globals.css`  
- Breaks mobile layout — always resize browser  
- Duplicates components — ask to extend existing patterns  

### Backend with agents

**Q: Example task?**  
**A:** "Add FastAPI endpoint `/predict` accepting review text JSON; load saved DistilBERT; return rating + probabilities; add input validation."

**Pitfalls:**  
- Loading huge model on every request — use lifespan singleton  
- No error handling on bad input  
- Security: rate limit public endpoints  

### ML notebooks with agents

**Q: Safe use?**  
**A:** Agent drafts EDA cells; **you** verify no test leakage, correct metric, reproducible seed. Don't auto-submit Kaggle without reviewing submission file shape.

---

## Part G — Cursor (your environment)

**Q: What is Cursor?**  
**A:** AI-native IDE (VS Code fork) with chat, composer, agents, MCP integrations — you built portfolio here.

**Q: Cursor vs Claude Code?**  
**A:** Overlapping capabilities; both agentic. Cursor integrates editor UI tightly; Claude Code strong in terminal/CI/SDK. Many developers use both.

**Q: Rules / skills?**  
**A:** Project rules guide agent behavior persistently (like `CLAUDE.md`). Skills are reusable instruction packs for specific tasks.

---

## Part H — Ethics & responsible AI use (impress interviewers)

**Q: How do you use AI without cheating on coursework?**  
**A:** Follow university policy; use AI for understanding, boilerplate, debugging — **cite when required**; you must explain and defend every design choice in viva.

**Q: Data privacy with AI tools?**  
**A:** Don't paste client confidential data or PII into public models; use enterprise tiers or local tools when needed.

**Q: Code ownership?**  
**A:** You review every line; tests prove correctness; you're accountable in interview — same as copying from Stack Overflow.

---

## Part I — 25 rapid-fire Q&A for AI tooling round

| Q | A |
|---|---|
| What is an agent? | System that plans multi-step actions toward a goal using tools |
| Tool use? | Model calls functions: read_file, bash, grep |
| RAG? | Retrieve documents, augment prompt, then generate — reduces hallucination on company docs |
| Embeddings in RAG? | Vector search for relevant chunks |
| Chunking? | Split long docs for retrieval; size/overlap affects quality |
| Why `/clear`? | Toxic or bloated thread hurts quality |
| Git + agents? | Agent can commit; human reviews; never force-push main |
| CI + agents? | Claude Code can watch GitHub Actions and propose fixes |
| Parallel agents risk? | Merge conflicts — use worktrees (`/batch`) |
| CLAUDE.md max size? | Short; link to docs for details |
| Prompt injection? | Untrusted text tricks model — sanitize user content in apps |
| Jailbreak? | Bypass safety — not relevant to coding interviews but know term |
| Fine-tuning vs prompting? | Prompting faster; fine-tune when need style/domain at scale |
| Distillation? | Big model teaches small (DistilBERT) |
| ONNX? | Export model for faster inference |
| vLLM? | High-throughput LLM serving |
| LangChain? | Orchestration framework — know concept, don't oversell |
| Hugging Face? | Models, datasets, transformers library — you used it |
| GPU why? | Parallel matrix math for training/inference |
| Batch size? | Samples per gradient step — memory vs stability tradeoff |
| Learning rate? | Step size in training — too high diverges, too low slow |
| Epoch? | One full pass over training data |
| Early stopping? | Stop when val metric worsens |
| Model ensemble? | Combine predictions — your Kaggle blends |
| What would you improve in agent workflow? | Smaller tasks, stricter CLAUDE.md, automated CI on agent PRs |

---

## Part J — Sample interview answer: "How do you use AI in your workflow?"

> "I use Claude and Cursor agentically for boilerplate, refactors, and exploration — but I treat output like a junior developer's PR. I give specific prompts with file paths and success criteria, keep project rules in CLAUDE.md concise, and run builds and tests after every change. For ML I don't let agents pick metrics or splits without my review — that's where leakage happens. I manage context with focused sessions, subagents for wide searches, and `/compact` when threads grow. On the API side I understand token costs: prompt caching for static instructions, right-sized models, and `effort` tuning. My TCS background helps — I document what changed and verify before ship, same as incident postmortems."

---

## References (study before interview)

- Claude Code docs: https://code.claude.com/docs/en/  
- Claude Code best practices: https://code.claude.com/docs/en/best-practices  
- Prompt engineering: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices  
- Token-saving updates: https://claude.com/blog/token-saving-updates  

---

## Appendix — Real prompts you used on this portfolio (examples)

| Task | Effective prompt pattern |
|------|--------------------------|
| Add GitHub links + badges | "Add githubUrl, keywords, tech to each project in portfolio.ts; update ProjectsSection with badges and violet highlights; run build" |
| Fix hero image | "Head cropping — use object-cover, overflow-hidden, object-position ~18%, scale from top; don't change other sections" |
| Experience highlights | "Reuse highlightKeywords helper from projects; add keyword arrays to experience bullets" |
| Interview prep | "Create interview-prep MD files Q&A format covering all portfolio skills and projects" |

**Token-saving habits you can cite:**

- One feature per agent session  
- Point to exact files (`src/data/portfolio.ts`)  
- Run `next build` instead of pasting full error logs — paste last 20 lines only  
- Keep `CLAUDE.md` short if you add one: stack, test command, folder map  
- `/compact` or new chat when switching from "portfolio UI" to "ML notebook" topics  
