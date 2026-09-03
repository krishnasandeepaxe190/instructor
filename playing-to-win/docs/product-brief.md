# GridGuardian — Product Brief (the "answer key")

*Revealed at debrief. One page. The product exists to make the strategy cascade concrete; the cascade is the deliverable.*

**GridGuardian** is a continuously-refreshed N-1 contingency and DER hosting-capacity operations layer for distribution utilities — planning-grade analysis at operations tempo, running on the utility's own GIS/AMI model.

## The problem it prices

Southeast distribution utilities face two compounding pressures with one shared root cause:

1. **Storm exposure** — hurricane and derecho events force tie-switching decisions in minutes, against contingency studies that are 12–24 months stale.
2. **DER interconnection queues** — hosting-capacity screens are re-run manually per application; queue latency is now a rate-case and customer-satisfaction issue.

The root cause: the network model that answers both questions is locked in a planning tool that runs quarterly, operated by a shrinking bench of study engineers. GridGuardian moves that model to a live surface the operations and interconnection desks can both read.

## The cascade

**Winning aspiration.** Be the default grid-resilience copilot for Southeast distribution utilities — the screen the duty operator trusts at landfall and the screen the interconnection engineer trusts on a spring Sunday.

**Where to play.** Hurricane-exposed cooperatives and municipals, 15–200k meters, in the Southeast. Explicitly **not**: IOU transmission EMS (owned by incumbents), generic ADMS replacement (a 5-year procurement we lose by default), and not national-scale on day one. This segment is underserved: too small for the tier-1 EMS vendors to configure profitably, too complex for spreadsheet-era consulting to keep current.

**How to win.** Minutes-to-decision, not months-to-study. The wedge is *freshness*: same physics the planning study uses, re-evaluated continuously against today's switching state, load, and DER output. An EPC firm wins here specifically because it already builds and maintains these network models for study work — the product monetizes an asset the firm re-creates on every engagement and then shelves.

**Must-have capabilities.**
- Feeder-level power-flow + contingency engine consuming the utility's GIS/AMI directly (no parallel model to maintain — the #1 cause of tool abandonment).
- Hosting-capacity method defensible in an interconnection dispute (published methodology, versioned assumptions).
- Delivery muscle: model onboarding in weeks, priced as a fixed-fee EPC engagement that converts to subscription.

**Management systems.** Product telemetry as roadmap governance: scenario runs per operator per storm, interconnection screens per week, time-to-decision at landfall. A feature that doesn't move one of those three is cut. Quarterly win/loss review against the two named alternative futures (utility builds in-house on open tools; tier-1 vendor down-markets).

## Why the demo behaves the way it does

Every mechanic in the dashboard encodes a strategic claim:

- The **scenario switcher** claims the same model serves two buyers (resilience + interconnection) — that's the revenue-diversification argument.
- The **Decision Round** claims the product's job is capital-allocation support, not visualization — dashboards get cancelled, decision tools get renewed.
- The **leaderboard** claims adoption is social — operators evangelize tools that make them look good in the storm room.

*All data synthetic; utility fictional. The engineering simplifications (flat 65% tie transfer, static HC limits) are deliberate — the workshop sells the argument, the product ships the power flow.*
