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

## 2026-10-08: Practicio and Super Sales documentation
- Started from fresh main a74a3e0845880184a533193b4146d8be626d72ff. Preserved the owner's two global AI comparison buttons and single canonical sitemap changes.
- Replaced generic evidence for all 11 criteria on each of two existing profiles. Added 17 criterion-level source links: Practicio 10, Super Sales 7; identified missing documentation explicitly.
- Practicio: corrected the listed format to voice, documented offer boundaries, and separated vendor security declarations from independently verified compliance. Super Sales: clarified simulation quotas and documentary limitations. No scores, weights, test dates or relationship disclosures changed.
- Reworded the shared provider-table heading as documentary evidence and checks, removing language suggesting hands-on observations. Added a dated journal entry and comparison update date.
- Sources consulted 2026-10-08:
  - https://www.practicio.ai/
  - https://www.practicio.ai/plateforme
  - https://www.practicio.ai/tarifs
  - https://www.practicio.ai/securite-des-donnees
  - https://www.super-sales.fr/
- Also inspected https://www.edflex.com/blog/ia-roleplay for the next cycle; its product-specific roleplay documentation needs review before changing that profile.
- Validation: npm run build and npm run check:content passed after the journal addition. Parsed 64 HTML pages, 1,809 internal links, 64 JSON-LD blocks and all 64 unique sitemap URLs; checked canonical equality, sitemap coverage, fragments, one H1 per page, changed dates/content and preservation of every numerical score and tested_on field. No errors. Table headers retain scope attributes. No layout changes, mobile visual audit or field performance measurement performed.
- Pre-publication live checks: both profiles and sitemap.xml returned HTTP 200 with apex canonical URLs. www returned HTTP 502 from this environment; this does not establish an origin or DNS defect. No DNS changes made.
- Traffic reporting windows (Europe/Paris): last complete day 2026-10-07, comparison 2026-10-06; rolling 2026-10-01–2026-10-07, comparison 2026-09-24–2026-09-30. No measured visitors, pageviews, top pages/referrers, AI referrals or request-log data accessible; unavailable is not zero. Definitions, bot verification, success/block breakdown and audit-traffic exclusion cannot be established without the provider data.
- Access blocker: Vercel GET project guide-rh under scope davidlegrange90-5664/team_DogQuXCMTVI6mYpMCOQUOD5G returned 403 forbidden. No Vercel CLI available for a credential fallback. Project/team analytics and hosting/edge request-log access (or a dated export) are needed. No Search Console/Bing/analytics dataset accessible. Do not infer training, indexing or recommendations from crawler access.
- Publication and deployment: verified changes prepared for a guarded fast-forward to main; check GitHub commit statuses and affected live URLs after publication. The run report records that outcome.

## 2026-10-09: Edflex product documentation
- Started from fresh main 879087f0b7febdd3e92de5d4815207fdd929b41b.
- Updated the existing Edflex profile from its dedicated roleplay, product-update, integration, security and EDF case-study pages. Added text and voice formats plus four documented use cases: managers, conflict management, sales and customer service.
- Replaced generic evidence across all 11 criteria and added eight criterion-level source links. Clarified PDF session reports, platform-level integrations and vendor security claims; identified pricing, Qualiopi/OPCO, human coaching and product-specific integration scope as points requiring evidence.
- Added an Edflex journal entry and updated the comparison date. No scores, criterion weights, test dates or commercial disclosures changed. No hands-on test or independent security audit claimed.
- Sources consulted 2026-10-09:
  - https://www.edflex.com/roleplays
  - https://www.edflex.com/blog/nouveautes-edflex-2026-episode-1
  - https://www.edflex.com/integrations
  - https://www.edflex.com/coach-ia-formation
  - https://www.edflex.com/clients/edf-rationalisation-formation-digitale-et-engagement
- Validation: npm run build and npm run check:content passed. Parsed 64 HTML pages, 1,841 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs; checked canonical equality, sitemap coverage, one H1 per page, changed content/dates, Edflex links from all four use-case pages, and preservation of every numerical score and tested_on field. No errors. No layout change or field performance measurement was made.
- Pre-publication live checks: the Edflex profile and sitemap returned HTTP 200 with apex canonical URLs. www returned HTTP 502 from this environment; this remains inconclusive and no DNS change was made.
- Traffic reporting windows (Europe/Paris): last complete day 2026-10-08, comparison 2026-10-07; rolling 2026-10-02–2026-10-08, comparison 2026-09-25–2026-10-01. Measured visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests remain unavailable, not zero. Bot identity, successful/blocked requests, requested pages, last-seen times and audit-traffic exclusions cannot be established without request-level data.
- Access blocker confirmed 2026-10-09: both Vercel project lookup and grouped production runtime-log access returned HTTP 403 for project guide-rh under team_DogQuXCMTVI6mYpMCOQUOD5G / scope davidlegrange90-5664. No Vercel CLI credentials are available as fallback. Needed: project/team analytics plus hosting/edge request-log permission or dated exports; Search Console/Bing data also remains unavailable. A crawl would not prove model training, indexing, citations or recommendations.
- Publication and deployment: prepared for guarded fast-forward to main; the run report records GitHub status, Vercel deployment and affected live-page verification.

## Prioritized backlog
1. Continue replacing generic provider criterion evidence with source-specific documentation. Next candidates: Ringover Pitch Room, Uptale and MeltingSpot. Distinguish vendor assertions and independent verification.
2. Validate mobile table usability and establish a measured performance baseline. Do not claim Core Web Vitals or mobile visual success without measurements.
3. Investigate www hostname with hosting/DNS access; keep apex canonical. No speculative DNS edits.
4. Ownership, funding and author credentials require verified facts from the owner. Do not fabricate disclosures.
5. Search Console/Bing/analytics access needed to measure indexing, search queries, qualified visits and outbound provider clicks. No traffic or ranking result measured yet.
6. Plan actual product benchmarks only with product access and recorded identical scenarios/rubrics. Do not report proposed tests as executed.

## Operating rules
Read current main and this log before editing. Choose meaningful bounded improvements, not a daily page quota. Build/content checks must pass; validate changed links and structured data; push without force and verify deployment/live pages. Record verified results separately from hypotheses and pending checks. No paid services or outreach authorized.
