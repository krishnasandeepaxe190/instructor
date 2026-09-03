# Playing to Win — EPC Product Strategy Workshop

Hands-on workshop kit for **VPs and Product Delivery Managers of EPC business lines, Southeast region**, built around Lafley & Martin's *Playing to Win* strategy cascade. Two software pieces plus facilitation docs:

1. **Cascade Studio** (`app/`) — the workshop application: front end + back end. Teams join from their laptops, draft the five-choice strategy cascade live against a timer, present under a facilitator-controlled spotlight, then vote on three awards with live results on the projector.
2. **GridGuardian** (`dashboard/`) — an optional demo product (N-1 contingency + DER hosting-capacity dashboard on a fictional utility) used as the worked example of a completed cascade.

## Repo layout

| Path | What it is |
|---|---|
| `app/index.html` | Cascade Studio front end — single file, no build step. |
| `app/server.js` | Cascade Studio back end — zero-dependency Node JSON store + static server. |
| `dashboard/index.html` | GridGuardian demo dashboard (self-contained, synthetic data). |
| `docs/workshop-guide.md` | Facilitator run-of-show (90 min) and engagement mechanics. |
| `docs/product-brief.md` | GridGuardian one-pager as a completed Playing-to-Win cascade — the debrief "answer key". |

## Running Cascade Studio (the workshop app)

### In the room (self-hosted — recommended for the live session)

```bash
cd app
node server.js          # default port 8080; `node server.js 3000` to change
```

The server prints the LAN URLs; attendees join from any browser on the venue network — phones work. State persists to `app/data.json`; delete it or `POST /api/reset` for a fresh session.

- **Facilitator**: click *Facilitator* on the join screen. Default PIN is `coach` (stored in the `workshop/state` document — change it there).
- **Phases**: Lobby → Draft (opens with a 15:00 clock; timer buttons on the gold bar) → Present (spotlight one team at a time) → Vote (three awards, own team off the ballot) → Results.

### As a Claude Artifact (rehearsal / preview)

The same `index.html` runs as a published Claude artifact using the artifact `db` capability as its backend — realtime sync, no server. Note: a db-backed artifact is only reachable by signed-in members of the owner's claude.ai organization, so treat it as a rehearsal deployment unless your whole audience is in your org.

### Solo mode

Open `app/index.html` directly from disk and it falls back to a localStorage backend — single browser only, useful for rehearsing the facilitator flow.

The front end auto-detects its backend in that order (artifact db → `/api` server → localStorage) and shows which one it's on in the header.

## The five choices, as the app frames them

1. **Winning Aspiration** — winning defined as a market outcome, not a revenue line.
2. **Where to Play** — segments, geographies, buyers — and what you explicitly walk away from.
3. **How to Win** — the advantage, specific to that playing field, a bigger competitor can't copy in 18 months.
4. **Must-Have Capabilities** — the 2–3 reinforcing capabilities the choices demand; build/buy/partner.
5. **Management Systems** — what's reviewed weekly and who kills what isn't working.

Each step carries a "coach" hint enforcing the framework's core test: a real choice has a sensible opposite.

## Suggested session arc

Cold-open on the GridGuardian hurricane scenario (the worked example) → walk its cascade with the Strategy Lens toggle → tables draft their own cascade in Cascade Studio → spotlight + awards → debrief with `docs/product-brief.md`. Full run-of-show in `docs/workshop-guide.md`.

All data synthetic; utility and teams fictional; no client names.
