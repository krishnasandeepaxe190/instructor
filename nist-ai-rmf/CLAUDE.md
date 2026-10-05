# CLAUDE.md — NIST AI RMF 1.0 Operating Rules

This file tells Claude Code how to build, change, and review AI systems so the work lines up with the
**NIST AI Risk Management Framework 1.0 (NIST AI 100-1, January 2023)**. For generative AI / LLM systems,
also apply the **Generative AI Profile (NIST AI 600-1)**.

To apply these rules to a whole repo, add this line to the root `CLAUDE.md`:

```
@nist-ai-rmf/CLAUDE.md
```

The AI RMF is voluntary and outcome-based. It does not prescribe controls. These rules turn its outcomes
into concrete engineering duties. Subcategory IDs (e.g., `MAP 2.2`) are cited so every artifact traces
back to the framework.

---

## 1. Ground rules (always on)

1. **No AI feature ships without a risk record.** Any change that adds or changes a model, prompt,
   tool, retrieval source, or decision threshold must create or update an entry in `ai-risk/register.yaml`
   (see §4). (`GOVERN 1.4`, `GOVERN 4.2`, `MANAGE 1.2`)
2. **Every AI system is in the inventory.** New models, agents, or third-party AI APIs go in
   `ai-risk/inventory.yaml` with owner, purpose, risk tier, and data classes. (`GOVERN 1.6`)
3. **Document what cannot be measured.** If a trustworthiness property is not tested, say so in the
   system card and explain why. Silence is not acceptable. (`MEASURE 1.1`)
4. **Human oversight is designed, not assumed.** Any output that drives a consequential action
   (operational switching, customer-facing decisions, financial or safety-relevant actions) needs an
   explicit human-in-the-loop or human-on-the-loop control, an override path, and a logged decision.
   (`MAP 3.5`, `GOVERN 3.2`, `MANAGE 2.4`)
5. **Fail safe outside the knowledge envelope.** Systems must detect out-of-scope inputs, low
   confidence, or validation failure and degrade to a safe default (refuse, escalate, or fall back to a
   non-AI path). Never silently return a best guess. (`MEASURE 2.6`, `MAP 2.2`)
6. **Never weaken a control to make a test pass.** Do not loosen validators, delete eval cases, raise
   thresholds, or disable guardrails without a recorded risk-acceptance decision by the named owner.
   (`GOVERN 4.1`, `MANAGE 1.3`)
7. **Third-party AI is in scope.** Foundation-model APIs, pre-trained weights, embedding models, and
   datasets are risk components. Pin versions and record provenance and license. (`GOVERN 6.1`,
   `MAP 4.1`, `MANAGE 3.1`, `MANAGE 3.2`)

---

## 2. Trustworthiness characteristics → engineering requirements

| Characteristic (AI RMF §3) | What Claude must do in code and docs | Primary subcategories |
|---|---|---|
| **Valid & reliable** | Eval suite on data that matches deployment conditions; report metrics with uncertainty (CI or variance across seeds/runs); document generalization limits. | `MEASURE 2.3`, `MEASURE 2.5` |
| **Safe** | Define hazards and unsafe outputs; add guardrails, refusal paths, rate limits, and kill switch; test failure modes beyond the knowledge envelope. | `MEASURE 2.6`, `MANAGE 2.4` |
| **Secure & resilient** | Threat-model prompt injection, data poisoning, model extraction, tool abuse, and supply-chain attacks; least-privilege tool scopes; secrets never in prompts or logs; adversarial tests in CI. | `MEASURE 2.7` |
| **Accountable & transparent** | Name an owner per system; log model version, prompt version, inputs/outputs (subject to privacy rules), and human decisions; keep a change log. | `GOVERN 2.1`, `MEASURE 2.8` |
| **Explainable & interpretable** | Return rationale, citations, or feature attributions where the decision requires it; state in the system card how outputs should be read. | `MEASURE 2.9` |
| **Privacy-enhanced** | Data minimization; PII detection/redaction before prompts and logs; retention limits; no training on customer data without a documented basis. | `MEASURE 2.10` |
| **Fair – harmful bias managed** | Identify affected groups; run disaggregated metrics; document known disparities and mitigations. | `MEASURE 2.11` |

Validity and reliability are the base condition. Accountability and transparency cut across the rest.
When characteristics trade off (e.g., explainability vs. accuracy, privacy vs. bias testing), record the
trade-off and who approved it.

---

## 3. Lifecycle workflow — what Claude does at each stage

### MAP — before writing model code
Create or update `ai-risk/systems/<system>/context.md` with:
- Intended purpose, users, deployment setting, and **out-of-scope uses** (`MAP 1.1`, `MAP 3.3`)
- Business value and the non-AI alternative considered (`MAP 1.4`, `MANAGE 2.1`)
- Task type and method: classifier, extractor, generator, agent, recommender (`MAP 2.1`)
- Knowledge limits and how humans will use and check outputs (`MAP 2.2`)
- Expected benefits and costs of errors — false positives vs. false negatives in operational terms
  (`MAP 3.1`, `MAP 3.2`)
- Third-party components and their risks, incl. IP/licensing (`MAP 4.1`, `MAP 4.2`)
- Impact likelihood × magnitude for each identified harm (`MAP 5.1`)
- A **go / no-go recommendation** with the risk tier (Low / Moderate / High / Critical)

If the risk tier is High or Critical, stop and ask the user to confirm the named owner and risk
tolerance before implementing. (`MAP 1.5`, `GOVERN 2.3`)

### MEASURE — while building
- Put evals in `evals/<system>/` with versioned test sets and a README that states the source,
  representativeness, and known gaps of each set. (`MEASURE 2.1`, `MAP 2.3`)
- Required eval groups, scaled to risk tier:
  - Task performance on deployment-like data (`MEASURE 2.3`)
  - Robustness: perturbed, adversarial, and out-of-distribution inputs (`MEASURE 2.5`, `MEASURE 2.7`)
  - Safety: harmful or unsafe output rate; fail-safe behavior (`MEASURE 2.6`)
  - Bias: disaggregated metrics where people are affected (`MEASURE 2.11`)
  - Privacy: PII leakage / memorization checks (`MEASURE 2.10`)
  - GenAI-specific (per NIST AI 600-1): confabulation rate, grounding/citation accuracy, prompt
    injection success rate, data leakage through tools
- Report each metric with its threshold, measured value, uncertainty, and pass/fail.
- Track eval effectiveness: when a production incident escapes the eval suite, add a regression case.
  (`MEASURE 2.13`, `MEASURE 4.3`)
- High/Critical systems: flag for review by someone who did not build the system. (`MEASURE 1.3`)

### MANAGE — before and after release
- Release gate: `MANAGE 1.1` decision recorded in `ai-risk/systems/<system>/release.md` with eval
  results, open risks, treatment (mitigate / transfer / avoid / accept), and **residual risk** stated
  for downstream users. (`MANAGE 1.3`, `MANAGE 1.4`)
- Production monitoring: drift, error rates, guardrail trigger rates, latency, cost, and user feedback
  with alert thresholds. (`MEASURE 2.4`, `MANAGE 4.1`)
- Deactivation: a feature flag or config switch that disables the AI path and routes to the fallback,
  with a named person authorized to use it. (`MANAGE 2.4`)
- Incident runbook: detection, triage, rollback, notification of affected parties. (`MANAGE 2.3`,
  `MANAGE 4.3`)
- Feedback and appeal path for end users and impacted parties. (`MEASURE 3.3`, `GOVERN 5.1`)
- Decommissioning plan: data deletion, dependency removal, user notice. (`GOVERN 1.7`)

### GOVERN — continuous
- Do not merge AI changes that lack the artifacts above; point out the missing item by subcategory ID.
- Re-run MAP when purpose, user population, data source, or base model changes.
- Re-assess third-party models on every vendor version change. (`MANAGE 3.2`)

---

## 4. Required artifacts

```
ai-risk/
  inventory.yaml                 # all AI systems: id, owner, purpose, tier, vendors, data classes
  register.yaml                  # risks: id, system, description, characteristic, likelihood,
                                 #        impact, treatment, owner, status, RMF subcategory refs
  systems/<system>/
    context.md                   # MAP outputs + go/no-go
    system-card.md               # purpose, limits, eval results, oversight, residual risk
    release.md                   # MANAGE 1.1 decision record, sign-off
    monitoring.md                # metrics, thresholds, alert routing
    incident-runbook.md
    third-party.md               # vendor/model provenance, versions, license, vendor attestations
evals/<system>/                  # versioned test sets, eval harness, results history
```

Minimal `register.yaml` entry:

```yaml
- id: R-2026-014
  system: outage-summary-agent
  description: Model invents switching steps not present in source records
  characteristic: valid_reliable
  rmf_refs: [MAP 5.1, MEASURE 2.5, MANAGE 1.3]
  likelihood: medium
  impact: high
  treatment: mitigate
  controls: [schema validation, citation-required output, operator approval before action]
  residual_risk: low
  owner: <named person>
  status: open
  review_by: 2026-12-31
```

---

## 5. Code-level patterns Claude should use

- **Structured outputs with validation**: define outputs as Pydantic models with field validators;
  reject and retry on failure, with a capped retry count and a logged fallback when retries run out.
- **Grounding**: for RAG systems, require source IDs in the output schema and verify that cited
  sources exist in the retrieved context.
- **Confidence and abstention**: include an explicit `insufficient_information` / abstain path in output
  schemas rather than forcing an answer.
- **Pinned models**: pin exact model IDs and prompt versions in config; log both on every call.
- **Tool permissions**: agents get the smallest tool set needed; write-capable tools require approval
  or dry-run mode.
- **Logging**: structured logs with request ID, model ID, prompt version, validation outcome, guardrail
  hits, and human override events. Redact PII before logging.
- **Kill switch**: one config flag disables the AI path end to end.

---

## 6. Review checklist (use on every AI-related PR)

- [ ] Inventory and risk register updated (`GOVERN 1.6`, `MANAGE 1.2`)
- [ ] Context / intended use and out-of-scope uses documented (`MAP 1.1`, `MAP 3.3`)
- [ ] Evals added or updated, with thresholds and uncertainty (`MEASURE 2.1`, `MEASURE 2.3`)
- [ ] Security tests incl. prompt injection for LLM/agent paths (`MEASURE 2.7`)
- [ ] Bias / privacy checks where people or personal data are involved (`MEASURE 2.10`, `MEASURE 2.11`)
- [ ] Untested characteristics declared (`MEASURE 1.1`)
- [ ] Human oversight and override path present (`MAP 3.5`, `MANAGE 2.4`)
- [ ] Monitoring and alerting configured (`MEASURE 2.4`, `MANAGE 4.1`)
- [ ] Third-party model/data versions pinned and recorded (`MANAGE 3.1`, `MANAGE 3.2`)
- [ ] Residual risk stated in the system card (`MANAGE 1.4`)

---

## 7. Vendors and third-party AI

Requirements for suppliers of AI models, APIs, and AI-enabled products are in
[`VENDOR_REQUIREMENTS.md`](./VENDOR_REQUIREMENTS.md). When a change brings in a new third-party AI
component, Claude must create `ai-risk/systems/<system>/third-party.md` and list which vendor evidence
items (V-1 … V-12 in that file) have been received and which are still open.
