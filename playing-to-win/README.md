# Playing to Win — EPC Product Strategy Workshop

Hands-on strategy workshop for **VPs and Product Delivery Managers of EPC business lines, Southeast region**. The session uses a live, interactive product demo — **GridGuardian**, an N-1 contingency + DER hosting-capacity operations dashboard — as the vehicle for working through the Playing-to-Win strategy cascade (Lafley & Martin) on a product the audience's own market would buy.

The premise: instead of lecturing strategy, the room *operates* a product for 90 minutes, makes capital-allocation decisions under a simulated hurricane, and then reverse-engineers the strategic choices that made the product coherent.

## What's in this repo

| Path | What it is |
|---|---|
| `dashboard/index.html` | GridGuardian demo — single-file, zero-dependency interactive dashboard. Open in any browser; no server, no build. |
| `docs/workshop-guide.md` | Facilitator run-of-show: 90-minute agenda, engagement mechanics, decision-round scoring, debrief prompts. |
| `docs/product-brief.md` | GridGuardian one-pager framed as a completed Playing-to-Win cascade — the "answer key" revealed at debrief. |

## Running the demo

```
open dashboard/index.html        # macOS
start dashboard\index.html       # Windows
```

Or serve the folder and project it: `python -m http.server 8080`.

Everything is synthetic data on a fictional utility ("SE-Coast Demo Co-op"). No client data, no client names.

## The three engagement mechanics

1. **Scenario switcher** — Blue Sky / Heat Wave / Hurricane Landfall / High DER Export. The room watches N-1 posture, customer exposure, and hosting capacity react live. The hurricane is the emotional hook.
2. **Decision Round** — teams get a $10M resilience budget and four investment options (reconductoring, BESS, FLISR, smart-inverter VVO). They run the storm with their portfolio and get scored on customer-minutes avoided. A persistent leaderboard keeps the competition alive across teams.
3. **Strategy Lens** — one toggle overlays the Playing-to-Win cascade onto the running product: each dashboard region is annotated with the strategic choice it embodies (Where to Play → the map; How to Win → the KPIs; Capabilities → the analytics; Management Systems → the event feed).

## Facilitation in one line

Hook them with the storm, make them spend money, then show them that every trade-off they just argued about *was* a Playing-to-Win choice — and hand them the blank cascade for their own business line.
