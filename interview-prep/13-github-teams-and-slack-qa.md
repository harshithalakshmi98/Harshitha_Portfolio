# 13 — GitHub Teams & Slack Basics (ELI5 + Real Use Cases + Q&A)

Collaboration tools on your portfolio: **Git** (version control) + **Slack** (team chat). In industry you also use **GitHub Organizations & Teams** for group access and code review.

---

## Part 1 — GitHub basics (foundation)

### ELI5

GitHub is like **Google Drive for code** — but smarter: it remembers every version, who changed what, and lets many people work without overwriting each other.

### Core concepts

| Term | ELI5 | Real example |
|------|------|--------------|
| **Repository (repo)** | Project folder in the cloud | `F21AA_CW2_PG_Group4`, `Harshitha_Portfolio` |
| **Commit** | Saved snapshot with message | "Add ATA project to portfolio" |
| **Branch** | Parallel timeline for one feature | `feature/nlp-preprocessing` |
| **Merge** | Combine branch into main line | After PR approved |
| **Pull Request (PR)** | "Please review my changes before merge" | Group coursework standard |
| **Clone** | Copy repo to your laptop | `git clone https://github.com/...` |
| **Push / Pull** | Upload / download changes | Daily sync with team |
| **Fork** | Your copy of someone else's repo | Open-source contribution |
| **Issue** | Task or bug ticket | "Fix class imbalance in eval" |

### Real workflow (F21AA group project)

```
1. git pull origin main          # get latest
2. git checkout -b feature/tfidf # new branch
3. # edit notebooks / code
4. git add . && git commit -m "Add TF-IDF baseline"
5. git push -u origin feature/tfidf
6. Open Pull Request on GitHub
7. Teammate reviews → comment → approve
8. Merge to main
9. Slack: "#f21aa-cw2 — TF-IDF PR merged, please re-pull"
```

### Your repos (examples to mention)

| Repo | How you used GitHub |
|------|---------------------|
| `harshithalakshmi98/Harshitha_Portfolio` | Solo: commit + push to `main` |
| `sagarr57/F21AA_CW2_PG_Group4` | Group: branches, PRs, shared `data/` |
| Java project repos | Coursework submission history |

---

## Part 2 — GitHub Organizations & Teams

### ELI5

- **Organization (Org)** = shared company/university **workspace** on GitHub (e.g. `@heriot-watt-university`, `@my-company`).  
- **Team** = **group of people** inside the org (e.g. `ml-team`, `f21aa-group-4`) with shared permissions.

Think: **Org = building**, **Team = department**, **Repo = project room**.

### Why Teams exist

| Without Teams | With Teams |
|---------------|------------|
| Add 50 people to each repo manually | Add team once → all members get access |
| Hard to offboard | Remove from team → access revoked consistently |
| Mixed permissions chaos | `ml-readers` vs `ml-admins` teams |

### Common permission levels (repos)

| Role | Can do |
|------|--------|
| **Read** | Clone, view code |
| **Write** | Push to branches (often via PR policy) |
| **Maintain** | Manage issues, some settings |
| **Admin** | Full repo settings, delete repo |

**Note:** Many companies require **PR + review** even if you have Write access — protects `main`.

### GitHub Teams features (know the names)

| Feature | What it is |
|---------|------------|
| **@mentions** | `@org/team-name` notifies whole team in issues/PRs |
| **Team review requests** | Assign PR review to a team |
| **CODEOWNERS** | File auto-assigns reviewers (e.g. `*.py @ml-team`) |
| **Branch protection** | `main` needs 1–2 approvals, CI green |
| **GitHub Projects** | Kanban board tied to issues/PRs |
| **Discussions** | Forum inside repo (design decisions) |
| **Actions** | CI/CD (see `10-msc-coursework-portfolio-site.md`) |

### Real company example

**Startup AI team:**

- Org: `acme-ai`  
- Teams: `platform`, `nlp`, `data-eng`  
- Repo `review-classifier` → `nlp` team Write, `platform` Admin  
- PR to `main` requires 1 approval from `nlp` + passing `pytest` Action  

### Real university example (your F21AA)

- Shared org or one owner's repo with **collaborators**  
- Group 4: divide notebooks sections (EDA, classical, transformers, report)  
- Issues: "Kaggle submission format wrong" → assign teammate  
- PR: "Section 5 DistilBERT" → review before merge  

### Q&A — GitHub Teams

**Q: What is a GitHub Organization?**  
**A:** Shared account structure for multiple repos and members — used by companies and universities for centralized access and billing.

**Q: What is a GitHub Team?**  
**A:** A group of users in an org with shared repository permissions. Simplifies onboarding and consistent access control.

**Q: Difference between GitHub Team and Slack channel?**  
**A:** GitHub Team controls **code access** and **review routing**; Slack channel is **communication**. They complement each other — PR link posted in Slack.

**Q: What is branch protection?**  
**A:** Rules on `main` — e.g. no direct push, require PR, require CI pass, require 1 approval. Prevents broken code on production branch.

**Q: What is CODEOWNERS?**  
**A:** File in repo listing who owns paths; PRs auto-request those reviewers. E.g. `/notebooks/ @harshitha @teammate-b`.

**Q: How did you use GitHub in group projects?**  
**A:** Branches per feature, PRs for review, issues for tasks, commit messages for experiment traceability — same discipline I'd use on an engineering team.

**Q: Merge commit vs squash merge?**  
**A:** Squash combines all commits into one clean commit on `main` (common for feature branches). Merge commit preserves full branch history.

**Q: What if two people edit same file?**  
**A:** Git merge conflict — markers `<<<<<<<` in file; human resolves, commits, continues. Prevention: small PRs, communicate in Slack.

---

## Part 3 — Slack basics

### ELI5

Slack is **WhatsApp for work** — organized into **rooms (channels)** by topic, with **threads** so side conversations don't spam everyone.

### Core UI map

```
Slack Workspace (e.g. "Heriot-Watt MSc" or "TCS Client")
├── Channels (public or private)
│   ├── #general
│   ├── #f21aa-group-4
│   └── #random
├── Direct Messages (DMs) — 1:1 or small group
├── Threads — reply under one message (keeps channel tidy)
└── Apps / Integrations — GitHub, Google Drive, Zoom
```

### Essential actions

| Action | How | When |
|--------|-----|------|
| **Message channel** | Type in `#channel`, Enter | Updates whole team |
| **@mention person** | `@harshitha` | Get someone's attention |
| **@mention channel** | `@channel` (careful!) | Urgent for everyone |
| **Thread reply** | Hover message → Reply in thread | Long discussion on one topic |
| **React with emoji** | 👍 ✅ eyes | Acknowledge without noise |
| **Pin message** | Pin important links | Kaggle link, dataset URL |
| **Search** | `Ctrl/Cmd + K` or search bar | Find old decision |
| **Set status** | 🎓 In lecture / 🏥 away | Let team know availability |

### Channel naming conventions (common)

| Pattern | Example | Purpose |
|---------|---------|---------|
| `#proj-`* | `#proj-f21aa` | One project |
| `#team-`* | `#team-ml` | Ongoing team |
| `#incident-`* | `#incident-p1-payment` | Ops / TCS-style bridges |
| `#help-`* | `#help-python` | Questions |

### Slack etiquette (interviewers notice soft skills)

1. **Use threads** for long technical debates — don't flood main channel  
2. **Don't `@channel`** unless urgent — respect focus time  
3. **Link GitHub PRs** in Slack: "PR ready: [url] — TF-IDF baseline"  
4. **Summarize decisions** after long threads: "Decision: use macro-F1 for model selection"  
5. **Use code blocks** for errors:

   ````
   ```python
   ValueError: shape mismatch
   ```
   ````

### Slack integrations (real-world)

| Integration | What it does |
|-------------|--------------|
| **GitHub** | PR opened/merged notifications in channel |
| **Google Drive** | File preview when link pasted |
| **Zoom / Huddle** | Quick voice/video in Slack |
| **Jira / ServiceNow** | Ticket updates (common at TCS-scale clients) |
| **PagerDuty** | Alert on-call engineer → Slack |

### Real scenario — F21AA group (4 students)

**Monday `#f21aa-group-4`:**  
> @team EDA done — notebook Section 1 pushed, PR #12. Class distribution: 38% one-star. Please review before we lock preprocessing.

**Wednesday thread on PR #15:**  
> Teammate: "Should we lemmatize?"  
> You: "Try both in CV; document in report table."  
> ✅ Decision pinned.

**Sunday:**  
> Kaggle submission `submission_distilbert_plus` uploaded — macro-F1 0.71 on val. Link in thread.

### Real scenario — TCS / enterprise (conceptual)

Major incident bridge often parallels Slack patterns:

- Dedicated channel per incident  
- Roles: commander, comms, technical  
- Timestamped updates for stakeholders  
- Post-incident summary pinned  

**Say in interview:**  
> "Slack at university taught async coordination for group ML work. At TCS we used similar structured comms on bridges — clear roles, timestamped updates, documented decisions — which maps to how I'd work in a distributed engineering team."

---

## Part 4 — GitHub + Slack together

### Typical flow

```
Developer pushes branch → opens PR on GitHub
        ↓
GitHub bot posts in Slack #engineering
        ↓
Reviewer comments on PR (line-level code review)
        ↓
CI (GitHub Actions) runs tests — ✅ or ❌ in PR
        ↓
Approve + merge → Slack notification "merged to main"
```

### ELI5

GitHub holds the **homework**; Slack is where you **talk about the homework**; GitHub Actions is the **automatic checker** that stamps pass/fail.

---

## Part 5 — Comparison table (quick revision)

| | GitHub | Slack |
|--|--------|-------|
| **Primary job** | Code, versions, reviews | Chat, coordination |
| **Permanent record** | Commits, PRs, issues | Searchable but chatty |
| **Best for** | Source of truth | Quick questions, alerts |
| **Access control** | Teams, roles, branch protection | Public/private channels |
| **Your portfolio** | Hosts all project code | Listed as collaboration tool |

---

## Part 6 — Interview Q&A rapid fire

**Q: Git vs GitHub?**  
**A:** Git is version control software (local); GitHub is hosting + collaboration (PRs, issues, teams).

**Q: What is a pull request?**  
**A:** Request to merge changes; enables code review and CI before `main`.

**Q: Why not email code zip files?**  
**A:** No history, no merge strategy, no review, no automation — GitHub fixes that.

**Q: How do you handle a bad commit on main?**  
**A:** Revert commit (safe) or hotfix branch; never force-push shared main without team agreement.

**Q: Slack vs email?**  
**A:** Slack faster for team chat and integrations; email better for formal external comms.

**Q: How would you onboard to a new team's GitHub org?**  
**A:** Get added to correct Team, read README/CONTRIBUTING, clone repo, set up branch protection awareness, join Slack `#team` channel, watch GitHub notifications.

**Q: Have you used GitHub Issues?**  
**A:** Yes — track bugs/tasks in group projects; link issues to PRs with "Fixes #23".

**Q: What is `git stash`?**  
**A:** Temporarily shelve uncommitted changes to switch branches cleanly.

**Q: What is `.gitignore`?**  
**A:** Files Git should not track — `node_modules/`, `venv/`, `.env`, large datasets.

**Q: How does Slack help ML projects?**  
**A:** Share experiment results, coordinate GPU time, notify on PR/CI, document decisions in threads without losing context in DMs.

---

## Part 7 — Practice exercise (5 minutes)

1. Explain to a friend: **GitHub Team vs Slack channel** using F21AA group.  
2. Draw on paper: **branch → PR → review → merge → Slack notify**.  
3. Answer without notes: **Why branch protection on `main`?**

**Pass:** Clear, under 90 seconds, mentions real example from your coursework.

---

## Cross-links

- Git basics in workflow: [`04-skills-explained-qa.md`](./04-skills-explained-qa.md)  
- GitHub Actions CI: [`10-msc-coursework-portfolio-site.md`](./10-msc-coursework-portfolio-site.md)  
- Group project narrative: [`11-real-world-examples-workbook.md`](./11-real-world-examples-workbook.md)  
- Mock questions: [`15-master-mock-interview-qa.md`](./15-master-mock-interview-qa.md)
