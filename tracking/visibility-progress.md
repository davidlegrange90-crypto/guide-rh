# Guide RH visibility improvement log

## Baseline, 2026-10-02
- Main commit: 3c3b92edf5b5c97398a2b895ae3e591a1664a679.
- Favicon installed; main sitemap contains 64 pages; placeholder content, metadata, date chronology, sources and documentary disclosures improved.
- Scores are editorial documentary assessments. No provider hands-on tests have been performed; do not claim otherwise. Preserve declared Coachello relationship.

## 2026-10-03: practical certification and ramp-up guidance
- Added an explicitly illustrative certification rubric, vendor demo checks and human/AI calibration guidance to the existing certification page.
- Added a sourced Yoodli / Google Cloud example; marked vendor-published claims as unverified independently. No performance numbers reused.
- Added a proposed ramp-up measurement protocol (baseline, endpoint, cohort comparison, incomplete participants and confounding factors), buying questions and contextual internal links.
- Qualified automatic gain/coherence claims and labelled the four-week itinerary as a suggested example, not a demonstrated completion period.
- Added per-page update dates, keeping unrelated use-case dates unchanged. Numeric provider scores and weighting unchanged.
- Sources consulted 2026-10-03:
  - https://yoodli.ai/case-studies/google-cloud-gtm-pitch-certification (published 2024-12-05)
  - https://support.yoodli.ai/en/articles/9628260-customizing-practice (updated 2026-05-19)
- Pre-publication validation: npm run build and npm run check:content passed. Parsed 64 HTML pages, checked 1785 internal links/fragments, JSON-LD syntax, sitemap XML, and changed-page canonical/update dates; no errors. Table headings use scope and a caption. Mobile visual verification and field performance measurements were not performed. Deployment must be checked through GitHub status and the changed live URLs after publication.
- www returned HTTP 502 from the environment proxy; apex comparison returned HTTP 200. This does not establish a DNS or origin failure; hosting/DNS settings need inspection before any change.

## 2026-10-04: accurate use-case pilot language
- Updated eight existing use-case guides: managers, conflict management, feedback, annual reviews, sales teams, customer service, onboarding and recruitment.
- Replaced seven “our test scenario” labels and one sentence claiming tests were run with explicit proposed-pilot language. Guide RH has not executed these comparative protocols.
- Replaced generic “what we observed” sections with use-case-specific checks for character behavior, score evidence, latency/transcription, compliance, human review and transfer to work.
- Removed the unsupported claim that progression is noticeable between the first and third session. The manager FAQ now explains how to define attempts and measurement without a universal session count.
- Clarified that provider grades are editorial notes based on documented capabilities, not standardized test scores. Numeric scores and criterion weights were not changed.
- Added individual 2026-10-04 update dates only to the eight changed guides.
- No new external performance claim was introduced, so no new source was required for this correction cycle.
- Pre-publication validation: `npm run build` and `npm run check:content` passed. Parsed 64 HTML pages, checked 1,794 internal links/fragments, 64 JSON-LD blocks, sitemap XML, and the canonical/update dates of all eight changed pages; no errors. Confirmed the unsupported test phrases are absent from the source and built pages. Deployment outcome: see commit and run report.

## 2026-10-05: RGPD, AI Act and Qualiopi accuracy
- Updated three criterion guides using current official sources: CNIL, European Commission, EUR-Lex and the French Ministry of Labour.
- RGPD: replaced the categorical AIPD statement with the risk-based test, added a documentary verification checklist and clarified that the comparison is not an independent compliance audit.
- AI Act: separated training-only use from employment-decision use, added the 2 February 2025 AI-literacy date, 2 August 2026 transparency date and 2 December 2027 Annex III high-risk date, and added intended-use controls.
- Qualiopi/OPCO: removed categorical software-funding language. Clarified that Qualiopi concerns provider quality processes and is required for relevant publicly or jointly funded actions, but does not guarantee OPCO approval.
- Added page-specific 2026-10-05 modification dates. Numeric provider scores and criterion weights were not changed.
- Sources consulted 2026-10-05:
  - https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd
  - https://cnil.fr/fr/realiser-une-analyse-dimpact-si-necessaire
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?exec=1ba4582&uri=CELEX%3A32024R1689
  - https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers
  - https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems
  - https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-high-risk-systems
  - https://travail-emploi.gouv.fr/IMG/pdf/guide_de_lecture_qualiopi_v9_du_8_janvier_2024.pdf
  - https://travail-emploi.gouv.fr/les-operateurs-de-competences-opco
- Pre-publication validation: `npm run build` and `npm run check:content` passed. Parsed 64 HTML pages, checked 1,797 internal links/fragments, 64 JSON-LD blocks, sitemap XML, and canonical/update/content markers for the three changed pages; no errors. Confirmed the outdated categorical AIPD and software-funding claims are absent. Deployment outcome: see commit and run report.

## 2026-10-06: integration, voice and pricing protocols
- Updated the LMS integration guide to distinguish links, SCORM, LTI 1.3/LTI Advantage, xAPI, SSO and provisioning. Added a six-step end-to-end acceptance test.
- Updated the voice guide with a reproducible French-language pilot protocol and a text/voice/avatar decision table. Removed the unsupported universal two-second latency threshold.
- Removed the unsourced 50–100 € general price range and avoided replacing it with invented figures. Added normalized quote assumptions, pricing-unit checks and a total-contract-cost worksheet.
- Added accessible captions and scoped table headers to new comparison tables.
- Added page-specific 2026-10-06 modification dates. Numeric provider scores and criterion weights were not changed.
- Sources consulted 2026-10-06:
  - https://www.1edtech.org/standards/lti
  - https://standards.1edtech.org/lti/guides/implementation_guide/implementation-guide
  - https://adlnet.gov/assets/uploads/xAPI_v1.0.1-2013-10-01.pdf
- Pre-publication validation: `npm run build` and `npm run check:content` passed. Parsed 64 HTML pages, checked 1,802 internal links/fragments, 64 JSON-LD blocks, sitemap XML, and canonical/update/content/table markers for the three changed pages; no errors. Confirmed the unsupported price range and latency cutoff are absent. Deployment outcome: see commit and run report.

## 2026-10-07: source-specific provider evidence
- Replaced generic criterion text with source-specific evidence on three provider profiles: Face Up, Reality Academy and Yoodli.
- Added 22 criterion-level source links in total: 8 for Face Up, 8 for Reality Academy and 6 for Yoodli. Before this cycle, none of these three profiles had a criterion-level source link.
- Face Up: documented voice/avatar formats, scenario creation, skill feedback, SCORM/LTI/SSO claims, the editor's EU-hosting/RGPD statements and the currently published launch offer.
- Reality Academy: documented made-to-measure scenarios, voice/keyboard modes, feedback, SCORM delivery, Qualiopi/OPCO claims, and the editor's detailed hosting, encryption, subprocessor and AI-governance statements.
- Yoodli: documented current formats, language selection, configurable roleplays, feedback, LMS/CRM/Teams/Slack integrations, SSO/SCIM and vendor security claims.
- Clearly labelled unverified vendor declarations and repeated where product quality, contract scope or technical details still require verification. No hands-on tests were claimed.
- Updated the comparison and profile modification dates and added a journal entry. Numeric scores, criterion weights and rankings were not changed.
- Sources consulted 2026-10-07:
  - https://face-up.fr/
  - https://face-up.fr/solution/roleplays
  - https://face-up.fr/tarifs
  - https://www.reality-academy.fr/roleplay-ia
  - https://www.reality-academy.fr/blog/eu-ai-act-formation-ia-conformite
  - https://yoodli.ai/platform/roleplays
  - https://yoodli.ai/platform/coach
  - https://support.yoodli.ai/en/articles/9550461-yoodli-overview
  - https://support.yoodli.ai/en/articles/9628260-customizing-practice
- Pre-publication validation: `npm run build` and `npm run check:content` passed. Parsed 64 HTML pages, checked 2,204 internal links/fragments, 64 JSON-LD blocks, 64 sitemap URLs, canonical tags and the changed-page content/date markers; no errors. Confirmed 22 criterion-level sources were added and every provider score remained unchanged. Deployment outcome: see commit and run report.

## Prioritized backlog
1. Continue replacing generic provider criterion evidence with source-specific documentation. Next candidates: Practicio, Super Sales and Edflex. Distinguish vendor assertions and independent verification.
2. Validate mobile table usability and establish a measured performance baseline. Do not claim Core Web Vitals or mobile visual success without measurements.
3. Investigate www hostname with hosting/DNS access; keep apex canonical. No speculative DNS edits.
4. Ownership, funding and author credentials require verified facts from the owner. Do not fabricate disclosures.
5. Search Console/Bing/analytics access needed to measure indexing, search queries, qualified visits and outbound provider clicks. No traffic or ranking result measured yet.
6. Plan actual product benchmarks only with product access and recorded identical scenarios/rubrics. Do not report proposed tests as executed.

## Operating rules
Read current main and this log before editing. Choose meaningful bounded improvements, not a daily page quota. Build/content checks must pass; validate changed links and structured data; push without force and verify deployment/live pages. Record verified results separately from hypotheses and pending checks. No paid services or outreach authorized.
