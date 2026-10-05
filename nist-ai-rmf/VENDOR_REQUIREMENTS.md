# Vendor AI Risk Requirements — Aligned to NIST AI RMF 1.0

## Bottom line

There is **no NIST AI RMF certification**. The framework is voluntary and outcome-based, so a vendor
saying "we follow NIST AI RMF" proves nothing on its own. Conformance is enforced through three levers:

1. **Contract** — binding clauses that make the RMF outcomes obligations (§2).
2. **Evidence** — specific artifacts the vendor must hand over, mapped to RMF subcategories (§3).
3. **Verification** — independent assurance where it exists (ISO/IEC 42001 certification, SOC 2 with
   AI-relevant controls, third-party red-team reports), plus your own acceptance testing (§4).

Ask vendors to submit a **Current Profile** (their present state against the RMF subcategories) and a
dated **Target Profile** with a gap closure plan. This is the RMF's own mechanism (AI RMF §6) and
gives you a baseline to audit against.

The buyer's own duties are set by `GOVERN 6.1`, `GOVERN 6.2`, `MAP 4.1`, `MAP 4.2`, `MANAGE 3.1`,
and `MANAGE 3.2`. Everything below exists to let you meet them.

---

## 1. Tier the vendor first

Scale the ask to the risk. Over-asking low-risk vendors wastes cycles and weakens leverage where it
matters.

| Tier | Typical use | Evidence required |
|---|---|---|
| **Low** | Internal productivity, no sensitive data, human reviews all output | V-1, V-2, V-7, V-10 |
| **Moderate** | Customer-facing content, internal decision support, confidential data | V-1 … V-8, V-10, V-11 |
| **High** | Influences operational, safety, financial, or individual-rights decisions | All V-1 … V-12 + independent assessment |
| **Critical** | Autonomous or near-autonomous action on safety-relevant or critical-infrastructure systems | All + on-site / source-level audit right, pre-production joint testing, contractual kill switch |

---

## 2. Contract clauses (put in MSA / AI addendum)

**C-1. Framework alignment.** Vendor shall maintain an AI risk management program aligned to NIST AI
RMF 1.0 and, for generative AI, NIST AI 600-1, and shall deliver a Current and Target Profile at
contract start and annually.

**C-2. Documentation.** Vendor shall provide and keep current a system/model card for each AI
component delivered, covering intended use, out-of-scope use, training data provenance (at category
level at minimum), evaluation results, known limitations, and residual risks. (`MAP 2.2`, `MANAGE 1.4`)

**C-3. Change notification.** Vendor shall give at least **30 days' written notice** (or a contractually
defined shorter window for security fixes) before any material change to model version, training data,
safety filters, sub-processors, or hosting region, and shall allow Customer to stay on the prior
version for a defined period. (`MANAGE 3.2`)

**C-4. Incident notification.** Vendor shall notify Customer within **72 hours** (24 hours for
security incidents) of any AI incident affecting Customer, including harmful outputs, data leakage,
model compromise, or significant performance degradation, and provide root-cause analysis within
30 days. (`MANAGE 4.3`, `GOVERN 6.2`)

**C-5. Data use.** Customer inputs, outputs, and fine-tuning data shall not be used to train or
improve vendor models without Customer's written opt-in. Retention, deletion, and residency terms
shall be stated. (`MEASURE 2.10`)

**C-6. Testing rights.** Customer may conduct its own evaluation and adversarial testing of the AI
component, and vendor shall support it with a non-production environment. (`MEASURE 2.7`, `MEASURE 1.3`)

**C-7. Audit and assessment.** Vendor shall submit to independent assessment on request (High/Critical
tier) and share results of its own third-party audits and red-team exercises, redacted as needed.

**C-8. Human oversight and deactivation.** Vendor shall provide technical means for Customer to
override, disable, or roll back the AI functionality without disabling the wider product.
(`MANAGE 2.4`)

**C-9. IP and provenance.** Vendor warrants it has rights to the training data and model components
used and shall indemnify Customer against third-party IP claims arising from model outputs used as
intended. (`GOVERN 6.1`, `MAP 4.1`)

**C-10. Sub-processors and upstream models.** Vendor shall disclose upstream foundation-model
providers and sub-processors, and flow these obligations down to them. (`MANAGE 3.1`)

**C-11. Exit.** On termination, vendor shall return or certify deletion of Customer data, including
fine-tuned weights and embeddings derived from it. (`GOVERN 1.7`)

---

## 3. Evidence checklist (what the vendor must hand over)

| ID | Evidence | What "good" looks like | RMF refs |
|---|---|---|---|
| **V-1** | AI governance policy and named accountable executive | Board- or exec-approved, dated, with review cycle | `GOVERN 1.1–1.5`, `GOVERN 2.3` |
| **V-2** | Model / system card per AI component | Intended + prohibited uses, limits, eval summary, residual risk | `MAP 2.2`, `MANAGE 1.4` |
| **V-3** | Training and evaluation data provenance statement | Sources, licensing basis, collection dates, PII handling, known gaps in representativeness | `MAP 2.3`, `MAP 4.1` |
| **V-4** | Evaluation report | Test sets, metrics, thresholds, uncertainty, conditions close to your deployment; not just public benchmarks | `MEASURE 2.1`, `MEASURE 2.3`, `MEASURE 2.5` |
| **V-5** | Safety and red-team report | Scope, methods, findings, fixes; for GenAI: prompt injection, jailbreak, confabulation, harmful content | `MEASURE 2.6`, `MEASURE 2.7` |
| **V-6** | Bias / fairness assessment | Disaggregated metrics for relevant groups; mitigations | `MEASURE 2.11` |
| **V-7** | Security and privacy attestations | SOC 2 Type II, ISO 27001, and privacy impact assessment; AI-specific threat model | `MEASURE 2.7`, `MEASURE 2.10` |
| **V-8** | Production monitoring description | Drift, abuse, and quality monitoring; what is shared with customers | `MEASURE 2.4`, `MANAGE 4.1` |
| **V-9** | Incident response plan + AI incident history (last 24 months) | Defined severity levels, timelines, customer notification, post-mortems | `MANAGE 2.3`, `MANAGE 4.3` |
| **V-10** | Change management and versioning policy | Version pinning, deprecation schedule, advance notice | `MANAGE 3.2`, `MANAGE 4.2` |
| **V-11** | Third-party / upstream model dependency list | Named providers, versions, how vendor monitors them | `GOVERN 6.1`, `MANAGE 3.1` |
| **V-12** | Independent assurance | ISO/IEC 42001 certificate (with scope statement) or third-party AI audit report | `MEASURE 1.3` |

**ISO/IEC 42001** is the closest certifiable proxy for AI RMF conformance; NIST publishes a crosswalk
between the two. Always check the certificate's **scope** — a certificate covering one business unit
does not cover the product you are buying.

---

## 4. Questionnaire (send with RFP / renewal)

Ask for answers plus the artifact that proves each one. "Yes" with no artifact scores zero.

**Govern**
1. Who is the accountable executive for AI risk? Attach the governance policy and its last review date.
2. Have you completed a NIST AI RMF Current Profile? Share it and your Target Profile with dates.
3. How do you train staff and contractors on AI risk? (`GOVERN 2.2`)
4. How do you manage risk from upstream model providers and data suppliers? (`GOVERN 6.1`)

**Map**
5. What are the intended uses and explicitly prohibited uses of the AI component?
6. What are its known knowledge limits and failure modes? How should human operators check outputs?
7. What data was the model trained and fine-tuned on? What rights do you hold to it?
8. Which of our use cases did you assess impact for, and what did you find? (`MAP 5.1`)

**Measure**
9. Provide your evaluation results on data representative of our deployment conditions — not only
   public benchmarks. Include error bars or variance.
10. Describe your last red-team exercise: who ran it, scope, critical findings, fix status.
11. What is the measured hallucination / confabulation rate, and how was it measured?
12. How do you test for prompt injection and data exfiltration through tools or retrieval?
13. Which trustworthiness characteristics do you **not** test, and why? (`MEASURE 1.1`)
14. Are evaluations reviewed by people independent of the development team? (`MEASURE 1.3`)

**Manage**
15. How do you monitor model behavior in production, and what do customers see?
16. How much notice do you give before model version changes? Can we pin a version?
17. How can we disable or roll back the AI feature without losing the rest of the product?
18. List AI incidents in the past 24 months, how customers were notified, and what changed.
19. What residual risks remain that we, as the deployer, must manage? (`MANAGE 1.4`)

---

## 5. Scoring and decision

Score each RMF function 0–3 per vendor:

| Score | Meaning |
|---|---|
| 0 | No answer or claim without evidence |
| 1 | Policy exists, no operating evidence |
| 2 | Operating evidence provided, gaps noted |
| 3 | Operating evidence + independent verification |

- **Moderate tier**: minimum 2 in every function.
- **High / Critical tier**: minimum 2 in every function and 3 in MEASURE and MANAGE.
- Any score of 0 in a High/Critical engagement is a **no-go** unless the gap is closed by contract and
  a compensating control on your side, recorded as an accepted risk with a named owner.

## 6. Red flags

- "We comply with NIST AI RMF" with no Current Profile.
- Only public benchmark scores; no evaluation in conditions like yours.
- Refusal to disclose the upstream foundation model.
- No version pinning; model updates pushed silently.
- Customer data used for training by default (opt-out instead of opt-in).
- No way to disable the AI feature independently.
- No AI incidents ever reported — usually means no detection, not no incidents.

## 7. After signing — keep it live

- Store vendor evidence in `ai-risk/systems/<system>/third-party.md` and track expiry dates.
- Re-run your own acceptance evals on every vendor model version change (`MANAGE 3.2`).
- Re-collect V-2, V-4, V-5, and V-9 annually and at renewal.
- Feed vendor incidents into your own risk register and incident process (`GOVERN 6.2`, `MANAGE 4.3`).
