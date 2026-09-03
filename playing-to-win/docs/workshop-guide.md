# Facilitator Guide — Playing to Win with GridGuardian

**Audience:** VPs and PDMs, EPC business lines, Southeast region
**Duration:** 90 minutes · **Room:** projector + 4–6 tables of 4–6 people, one laptop per table
**Materials:** `dashboard/index.html` on the big screen and on each table laptop; printed blank cascade (template at bottom of this doc); timer.

**Thesis of the session:** strategy is choice under constraint. A dashboard demo makes the constraints visceral in a way slides never do. By the debrief, the room should be able to say *which choices made GridGuardian coherent* — and then make the equivalent choices for their own line of business.

---

## Run of show

### 0:00–0:05 · Cold open — no slides
Project the dashboard already in **Hurricane Landfall**. Two feeders dark, ties closed, violations pulsing, 7,600 meters at risk on the KPI tile. Say one sentence:

> "It's 3 PM, Cat-2 landfall, and the planner who ran this study retired in March. What does the utility buy from us so this screen never surprises them?"

Then flip to **Blue Sky**. The contrast *is* the product pitch. Do not explain the UI — let them ask.

### 0:05–0:15 · Operate the product (facilitated)
Walk the four scenarios, taking cues from the room:
- **Heat Wave** — N-1 margins compress without any outage. Point: risk is a continuous variable, not an event.
- **High DER Export** — hosting-capacity bars go red, reverse-flow events in the ticker. Point: the same product serves the interconnection business, not just storm resilience. Two markets, one model.
- Click feeders on the map; show the 24-h native vs. contingency curves. Point at the dashed orange line: "that's the load this feeder inherits when its tie partner dies."

**Engagement rule:** hand the clicker to a VP within the first 10 minutes. The person driving stops being a skeptic.

### 0:15–0:45 · Decision Round (the core mechanic)
Open the **Decision Round** drawer on the big screen once to explain, then set tables loose on their own laptops.

- Each table = a team. $10M budget, four investments, budget bar goes red if they overspend.
- 15 minutes to argue, choose, and **Run the Storm**. Score lands on the leaderboard (persists in the browser — run all teams on one laptop if you want a single shared board).
- While they argue, circulate. The arguments you want to overhear — *"BESS is $8M and blows the budget for FLISR"* — are Playing-to-Win trade-offs in disguise. Note the best quotes for the debrief.

**Scoring (say it up front):** customer-minutes of interruption avoided + N-1 posture gained + hosting headroom created. There is no dominant portfolio: FLISR+VVO ($6M) wins on customer-minutes-per-dollar; recon+FLISR ($10M) wins on N-1 posture; BESS+VVO ($10M) wins the DER story. The point is that *the scoring function is a strategy choice* — reveal that in the debrief.

### 0:45–1:00 · Reveal the cascade
Toggle **Strategy Lens** on the big screen. The annotations map the product to the five Playing-to-Win questions:

| Cascade question | Where it lives on screen | The choice made |
|---|---|---|
| Winning aspiration | product masthead | Default grid-resilience copilot for SE distribution utilities |
| Where to play | territory map | Hurricane-exposed co-ops/munis, 15–200k meters — not IOUs, not transmission |
| How to win | KPI tiles | Minutes-to-decision vs. months-to-study; planning rigor at operations tempo |
| Must-have capabilities | analytics panels | Feeder power-flow engine on the utility's own GIS/AMI — no parallel model |
| Management systems | event feed | Usage telemetry as roadmap signal; every operator decision is training data |

Then connect it to their Decision Round: *"Your budget fight was a where-to-play fight. Teams that bought BESS chose the DER market. Teams that bought FLISR chose the reliability market. Nobody could buy both — that's what strategy costs."*

### 1:00–1:20 · Their cascade
Tables now fill the blank cascade **for their own EPC business line in the Southeast** — 15 minutes, then one table presents (pick the table with the most heated Decision Round). Force specificity: "utilities in the Southeast" is not a where-to-play; "munis under 100k meters replacing 1970s 4kV systems" is.

### 1:20–1:30 · Close
- Leaderboard winner announced (small prize, big ceremony).
- One commitment per VP: the single choice their cascade makes that they were *not* making yesterday.
- Leave-behind: this repo. The demo runs from a file; they can show it to their own teams Monday.

---

## Contingency plans (for the workshop itself)

- **No projector interaction / remote attendees:** the dashboard is a single file — screen-share works; send the file in chat and everyone runs it locally.
- **Room goes quiet in Decision Round:** impose a constraint live — "Corporate just cut you to $6M." Constraint restarts argument.
- **A VP challenges the engineering ("N-1 transfer isn't a flat 65%"):** correct — and that's the demo's job. Concede the simplification, then pivot: "the product ships with the real power flow; the workshop ships with the argument you're having right now."

## Blank cascade (print one per table)

1. **Winning aspiration** — what does winning look like for this business line, stated as an outcome for the client, not revenue?
2. **Where to play** — segment, geography, buyer, and explicitly: where will we *not* play?
3. **How to win** — the advantage a competitor with more people cannot copy in 18 months.
4. **Must-have capabilities** — the 2–3 capabilities the choice above demands; which do we build vs. buy vs. partner?
5. **Management systems** — what we will measure weekly to know the strategy is working, and who kills it if it isn't.
