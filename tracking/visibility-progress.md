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

## 2026-10-10: Ringover Pitch Room documentation
- Started from fresh main 00a4cadb4f6ee5b91f97c91cf77920743ee75109.
- Updated the existing Ringover Pitch Room profile using Ringover's product pages, announcement, DPA and current AI terms. Added documented service-client and recruitment use cases alongside sales.
- Replaced generic evidence across all 11 criteria and added seven criterion-level source links. Documented scenario controls, live advice, post-session reports, Empower integrations and the published AI-subprocessor locations and transfer mechanism. Missing Pitch Room pricing, LMS, Qualiopi/OPCO, human-coaching and named client evidence is stated explicitly.
- Added a Ringover journal entry and updated the comparison date. No scores, weights, test dates or commercial disclosures changed. No hands-on test or compliance audit claimed.
- Sources consulted 2026-10-10:
  - https://www.ringover.fr/plateforme-coaching
  - https://www.ringover.fr/simulation-entretien-de-vente
  - https://www.ringover.fr/actualites/ringover-pitch-room-ia-simulation-vente
  - https://www.ringover.fr/accord-traitement-donnees
  - https://www.ringover.fr/cgv
- Validation: npm run build and npm run check:content passed. Parsed 64 HTML pages, 1,852 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs; checked canonicals, sitemap coverage, one H1 per page, changed content/dates, Ringover links from all three use-case pages, and preservation of every numerical score and tested_on field. No errors. No layout change or field performance measurement was made.
- Pre-publication live checks: Ringover profile and sitemap returned HTTP 200 with apex canonical URLs. www returned HTTP 502 from this environment; this remains inconclusive and no DNS change was made.
- Traffic reporting windows (Europe/Paris): last complete day 2026-10-09, comparison 2026-10-08; rolling 2026-10-03–2026-10-09, comparison 2026-09-26–2026-10-02. Measured visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests remain unavailable, not zero. Bot identity, successful/blocked requests, requested pages, last-seen times and audit-traffic exclusions cannot be established without request-level data.
- Access blocker confirmed 2026-10-10: Vercel project lookup and grouped production runtime-log access again returned HTTP 403 for project guide-rh under team_DogQuXCMTVI6mYpMCOQUOD5G / scope davidlegrange90-5664. No Vercel CLI credentials are available as fallback. Needed: project/team analytics plus hosting/edge request-log permission or dated exports; Search Console/Bing data also remains unavailable. A crawl would not prove model training, indexing, citations or recommendations.
- Publication and deployment: prepared for guarded fast-forward to main; the run report records GitHub status, Vercel deployment and affected live-page verification.

## 2026-10-11: Uptale product documentation and stable publication dates
- Started from fresh main 58e01487d6ac49fca9ba777d6a440a12ef60b337.
- Updated the existing Uptale profile from its current Roleplay IA, platform, AI, Factory and Monoprix case-study pages. Added voice, AI-avatar and video formats plus four documented use cases: managers, feedback, sales and customer service.
- Replaced generic evidence across all 11 criteria and added 10 criterion-level source links. Documented live feedback, final reports, SCORM/xAPI/LTI/SSO, Azure OpenAI and European-hosting declarations, published Factory packs and the roleplay-specific Monoprix case. Product-level versus platform-level scope is stated explicitly.
- Corrected date rendering so date-only editorial records use UTC and no longer display the preceding day in some build environments.
- Added an Uptale journal entry and updated the comparison date. No scores, criterion weights, test dates or commercial disclosures changed. No hands-on test, independent security audit or independent verification of case-study outcomes claimed.
- Sources consulted 2026-10-11:
  - https://www.uptale.io/fr/platform/roleplay-ai/
  - https://www.uptale.io/fr/platform/plateforme/
  - https://www.uptale.io/en/resources/artificial-intelligence-uptale/
  - https://www.uptale.io/fr/platform/service-uptale-factory
  - https://www.uptale.io/fr/content/cas-client/monoprix-6-points-de-nps-grace-a-lia-conversationnelle/
- Validation: `npm run build` and `npm run check:content` passed. Parsed 64 HTML pages, 1,879 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs; checked canonical equality, sitemap coverage, one H1 per page, corrected 2026-10-11 rendering, changed markers, Uptale links from all four use-case pages, and preservation of every numerical score and `tested_on` field. No errors. No layout change, mobile visual audit or field performance measurement was made.
- Pre-publication live checks: the existing Uptale profile and `sitemap.xml` returned HTTP 200 with the apex hostname. `www` again returned HTTP 502 from this environment; this remains inconclusive and no DNS change was made.
- Traffic reporting windows (Europe/Paris): last complete day 2026-10-10, comparison 2026-10-09; rolling 2026-10-04–2026-10-10, comparison 2026-09-27–2026-10-03. Measured visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests remain unavailable, not zero. Bot identity, successful/blocked requests, requested pages, last-seen times and audit-traffic exclusions cannot be established without request-level data.
- Access blocker confirmed 2026-10-11: the connected Vercel account lists no teams, while both project lookup and grouped production runtime-log access return HTTP 403 for project `guide-rh` under team `team_DogQuXCMTVI6mYpMCOQUOD5G` / scope `davidlegrange90-5664`. No Vercel CLI credential is available as fallback. Needed: reconnect or authorize the connector to that team, then grant project analytics and request-log access; Search Console/Bing data also remains unavailable. A crawl would not prove model training, indexing, citations or recommendations.
- Publication and deployment: prepared for guarded fast-forward to main; the run report records GitHub status, Vercel deployment and affected live-page verification.

## 2026-10-12: MeltingSpot Roleplay documentation
- Started from fresh main 31d10de203c76f42df4a366e4d4a18aa43363550.
- Updated the existing MeltingSpot (Mizou) profile from the current Roleplay product, Learning Agent, quote, onboarding, manager-training and acquisition pages. Added text, voice and video formats plus eight documented use cases spanning managers, conflict, feedback, reviews, sales, service, onboarding and ramp-up.
- Replaced generic evidence across all 11 criteria and added nine criterion-level source links. Documented prompt-based scenario creation, automatic evaluation, instant feedback, in-app delivery, general LMS/CRM claims, EU-hosting and encryption declarations, active-user pricing and the limits of logo-only references. Missing technical integration details and product-specific case studies are stated explicitly.
- Added a MeltingSpot journal entry and updated the comparison date. No scores, criterion weights, test dates or commercial disclosures changed. No hands-on test, independent security audit or customer-result verification claimed.
- Sources consulted 2026-10-12:
  - https://meltingspot.io/en/products/roleplay
  - https://meltingspot.io/fr
  - https://meltingspot.io/fr/get-a-quote
  - https://meltingspot.io/fr/blog/roleplay-ia-formation
  - https://meltingspot.io/fr/blog/roleplay-onboarding-nouveaux-arrivants
  - https://meltingspot.io/en/blog/manager-training-roleplay
  - https://meltingspot.io/en/blog/best-ai-roleplay-training-software
- Validation: `npm run build` and `npm run check:content` passed. Parsed 64 HTML pages, 1,922 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs; checked canonical equality, sitemap coverage, one H1 per page, changed markers, MeltingSpot links from all eight use-case pages, and preservation of every numerical score and `tested_on` field. No errors. No layout change, mobile visual audit or field performance measurement was made.
- Pre-publication live checks: the existing MeltingSpot profile and `sitemap.xml` returned HTTP 200 with the apex hostname. `www` again returned HTTP 502 from this environment; this remains inconclusive and no DNS change was made.
- Traffic reporting windows (Europe/Paris): last complete day 2026-10-11, comparison 2026-10-10; rolling 2026-10-05–2026-10-11, comparison 2026-09-28–2026-10-04. Measured visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests remain unavailable, not zero. Bot identity, successful/blocked requests, requested pages, last-seen times and audit-traffic exclusions cannot be established without request-level data.
- Access blocker confirmed 2026-10-12: the connected Vercel account lists no teams, while project lookup and grouped production runtime-log access return HTTP 403 for project `guide-rh` under team `team_DogQuXCMTVI6mYpMCOQUOD5G` / scope `davidlegrange90-5664`. No Vercel CLI credential is available as fallback. Needed: reconnect or authorize the connector to that team, then grant project analytics and request-log access; Search Console/Bing data also remains unavailable. A crawl would not prove model training, indexing, citations or recommendations.
- Publication and deployment: prepared for guarded fast-forward to main; the run report records GitHub status, Vercel deployment and affected live-page verification.

## 2026-10-13: Exec product documentation
- Started from fresh main `fdaffb1bfa92343ebcb07b7c4e1293e71236af88`.
- Updated the existing Exec profile from the current AI Roleplays, Scenario Studio, multilingual, avatar, AI Coach, enterprise privacy, pricing, LTI and employee-training pages.
- Added avatar/video formats and documented use cases spanning managers, difficult conversations, feedback, reviews, sales, customer service, onboarding, recruitment, certification and ramp-up.
- Replaced generic evidence across all 11 criteria and added nine criterion-level source links. Documented French-language roleplays, scenario/rubric controls, scorecards, LTI 1.3, published plan limits, human coaching and vendor security statements. Missing French customer evidence, Qualiopi/OPCO proof, hosting location, subprocessors, transfer safeguards and product quality evidence are stated explicitly.
- Added an Exec journal entry and updated the comparison date. No scores, criterion weights, test dates or commercial disclosures changed. No hands-on test, independent security audit or verification of testimonials claimed.
- Sources consulted 2026-10-13:
  - https://www.exec.com/ai-roleplays
  - https://www.exec.com/demos/scenario-studio-overview
  - https://www.exec.com/news/multilingual-scenario-studio
  - https://www.exec.com/news/ai-avatars-for-roleplays
  - https://www.exec.com/news/ai-coach
  - https://www.exec.com/enterprise-privacy
  - https://www.exec.com/pricing
  - https://www.exec.com/news/roleplays-inside-your-lms
  - https://www.exec.com/solutions/employee-training
- Validation: `npm run build` and `npm run check:content` passed. Parsed 64 HTML pages, 1,957 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs; checked canonical equality, sitemap coverage, one H1 per page, changed markers, Exec links from all ten documented use-case pages, and preservation of every numerical score and `tested_on` field. No errors. No layout change, mobile visual audit or field performance measurement was made.
- Pre-publication live checks: the existing Exec profile and `sitemap.xml` returned HTTP 200 with the apex hostname. `www` again returned HTTP 502 from this environment; this remains inconclusive and no DNS change was made.
- Traffic reporting windows (Europe/Paris): last complete day 2026-10-12, comparison 2026-10-11; rolling 2026-10-06–2026-10-12, comparison 2026-09-29–2026-10-05. Measured visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests remain unavailable, not zero. Bot identity, successful/blocked requests, requested pages, last-seen times and audit-traffic exclusions cannot be established without request-level data.
- Access blocker confirmed 2026-10-13: the connected Vercel account lists no teams, while project lookup and production runtime-log access return HTTP 403 for project `guide-rh` under team `team_DogQuXCMTVI6mYpMCOQUOD5G` / scope `davidlegrange90-5664`. No Vercel CLI credential is available as fallback. Needed: reconnect or authorize the connector to that team, then grant project analytics and request-log access; Search Console/Bing data also remains unavailable. A crawl would not prove model training, indexing, citations or recommendations.
- Publication and deployment: prepared for guarded fast-forward to main; the run report records GitHub status, Vercel deployment and affected live-page verification.

## 2026-10-14: Mursion delivery models and buying checks
- Started from fresh main f670773855eb7b412c585f297c5fa8058b7491ef. Read repository instructions and prior progress; inspected live profile HTML.
- Distinguished AI-powered avatars, Simulation Specialist-led avatars and individual coaching. Replaced generic evidence across 11 criteria with specific documentation or explicit missing-evidence statements; added eight criterion-level sources.
- Added documented conflict, feedback, annual-review and customer-service use cases. Clarified modality-specific French availability, scheduling, device/network prerequisites, SCORM/SSO, US hosting under the general privacy notice, Enterprise/DPA scope and vendor AI governance statements. No vendor result figures reproduced.
- Added journal and comparison update date. All scores, tested_on fields and relationship disclosures unchanged. No hands-on test or independent compliance audit claimed.
- Sources consulted 2026-10-14:
  - https://www.mursion.com/platform/simulations/
  - https://www.mursion.com/platform/coaching/
  - https://www.mursion.com/platform/enterprise/
  - https://www.mursion.com/platform/enterprise/integrations/
  - https://www.mursion.com/privacynotice/
  - https://www.mursion.com/ai-commitment/
  - https://support.mursion.com/knowledge/mursions-code-of-conduct
  - https://support.mursion.com/knowledge/operating-hours
  - https://support.mursion.com/knowledge/what-browsers-are-supported-by-mursion
- Validation: npm run build and npm run check:content passed. Parsed 64 HTML pages, 1,976 internal links/fragments, 64 JSON-LD blocks and all 64 unique sitemap URLs. Verified canonical equality, one H1 per page, sitemap coverage, use-case backlinks, numerical score/test/disclosure preservation and git diff --check. No layout change or mobile visual/field-performance measurement made.
- www returned HTTP 502 from this environment; inconclusive, no DNS changes.
- Traffic windows, Europe/Paris: last complete day 2026-10-13 versus 2026-10-12; rolling 2026-10-07–2026-10-13 versus 2026-09-30–2026-10-06. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests unavailable, not zero. Metric definitions, identity verification, successful/blocked requests, pages, last seen and audit exclusions cannot be established.
- Access: connected Vercel account lists no teams; project lookup and production runtime logs return 403 under team_DogQuXCMTVI6mYpMCOQUOD5G / davidlegrange90-5664. No vercel CLI available. Needs project analytics and hosting/edge request-log read permission or dated exports. Search Console/Bing/Cloudflare AI Crawl Control unavailable. Crawl does not prove training, indexing, citation or recommendation.
- Publication: guarded fast-forward prepared; monitor GitHub Vercel status and affected live URLs. Outcome in run report.

## 2026-10-15: bounded Second Nature source review
- Fresh main 77b4ab29adadadd48d468ed1bb0b10d8c0d61fb9; read README, CHECKLIST and current log. Existing live profile returned HTTP 200.
- Replaced generic criterion evidence with specific accessible documentation or explicit unresolved checks. Added six criterion-level source links, French-language claim, scenario generation, feedback/dashboard, SCORM/LTI and Oracle NetSuite vendor-case context. Added managers, feedback, annual-review and customer-service use cases.
- Source-access limitation: direct opens of main-domain product, enterprise, FAQ and news pages returned 403. Search-index snippets were inspected for discovery but not used to publish detailed security, format or contract claims. No access blocker bypass attempted.
- Sources read 2026-10-15:
  - https://lp.secondnature.ai/ai-role-play-sales-training
  - https://lp.secondnature.ai/
  - https://go.secondnature.ai/hubfs/case-studies/oracle_netsuite_case_study.pdf
- No vendor outcome figures reproduced. No score, weight, tested_on, format or relationship disclosure changed. No hands-on test, benchmark or compliance audit claimed.
- Validation: npm run check:content and npm run build passed. Checked 64 HTML pages, 1,995 internal links/fragments, 64 JSON-LD blocks, 64 unique sitemap URLs, canonical equality, one H1 per page, full sitemap coverage, seven use-case backlinks, changed markers and score/test/disclosure preservation. git diff --check passed. No layout change, mobile visual audit or measured performance baseline.
- www returned HTTP 502; remains inconclusive, no DNS changes.
- Traffic windows (Europe/Paris): 2026-10-14 versus 2026-10-13; rolling 2026-10-08–2026-10-14 versus 2026-10-01–2026-10-07. Visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests unavailable, not zero. Metric definitions, successful/blocked breakdown, bot verification, requested pages, last seen and audit exclusions unavailable.
- Access: Vercel lists no teams; project and production runtime-log requests return 403 for guide-rh under team_DogQuXCMTVI6mYpMCOQUOD5G / davidlegrange90-5664. No vercel CLI available. Need project analytics and hosting/edge request-log read access or dated exports. Runtime application output would not alone establish static-page traffic. No Search Console/Bing/Cloudflare AI Crawl Control dataset available. Crawl is not evidence of training, indexing, citation or recommendation.
- Publication prepared as guarded fast-forward; run report records GitHub Vercel status and live verification.

## 2026-10-16: Hyperbound source-specific documentation
- Fresh main 19dfcb01142838013f048fb82b970afcf88ea8fd; read repository instructions and progress. Existing profile HTTP 200.
- Replaced generic evidence across all 11 criteria, adding eight criterion-level links. Documented French/French-Canadian, custom and multi-party roleplays, scorecards, Practice versus Perform, catalog integrations, per-user licensing and EU residency listed under add-ons. Added certification, onboarding, manager and customer-service use cases.
- Vanta case kept as vendor-published reference without reproducing outcome figures. No independent result/security verification claimed. Trust Center returned no readable text; reports and DPA not inspected.
- Sources read 2026-10-16:
  - https://www.hyperbound.ai/
  - https://www.hyperbound.ai/product/ai-sales-roleplays
  - https://www.hyperbound.ai/product/ai-post-sales-roleplays
  - https://www.hyperbound.ai/use-cases/onboarding-and-certifications
  - https://www.hyperbound.ai/pricing
  - https://www.hyperbound.ai/integrations
  - https://www.hyperbound.ai/enterprise
  - https://www.hyperbound.ai/case-studies/vanta
- All numerical scores, weights, tested_on fields, formats and commercial disclosures unchanged. No hands-on test.
- Validation: npm run check:content and npm run build passed; 64 HTML pages, 2,014 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, full sitemap coverage, six use-case backlinks, changed markers, score/test/format/disclosure preservation and git diff --check. No layout change, visual mobile audit or field-performance measurement.
- www again returned HTTP 502 from environment; inconclusive, no DNS change.
- Traffic windows Europe/Paris: 2026-10-15 versus 2026-10-14; rolling 2026-10-09–2026-10-15 versus 2026-10-02–2026-10-08. Visitors, pageviews, top pages/referrers, AI referrals, crawlers and user-triggered assistant requests unavailable, not zero. Metric definitions, coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access unchanged: Vercel lists no teams; project lookup and runtime logs return 403 for guide-rh under team_DogQuXCMTVI6mYpMCOQUOD5G / davidlegrange90-5664. No CLI fallback installed. Need project Web Analytics and hosting/edge request-log read permission or dated exports. Runtime application logs alone would not establish static-page visits. Search Console/Bing/Cloudflare AI Crawl Control unavailable. Crawl does not prove model training, indexing, citations or recommendations.
- Prepared guarded fast-forward; run report records deployment and live outcome.

## 2026-10-17: Coachello documentary parity and source precision
- Fresh main ecec8137bd5ded3842bd363c65a190c5966ef6f7; read README, CHECKLIST and log. Live profile returned HTTP 200.
- Reviewed Coachello under the same documentary standard as the panel, preserving its declared professional relationship and all numerical scores. Replaced promotional effectiveness assertions with documented capabilities, explicit vendor attribution and buying checks.
- All 11 criteria now have source links (previously two). Corrected the contradictory sentence claiming no score was displayed. Clarified coaching debriefs may be optional, SCORM completion versus LTI launch, and possible non-EEA subprocessors despite primary Azure Paris hosting.
- Replaced non-resolving Microsoft source paths with the actual public Teams app page. The page consulted identifies itself as Publisher Attestation with developer self-assessment dated 2024-10-01. This does not establish current Microsoft certification or all roleplay capabilities; no claim of certification revocation made.
- Sources read 2026-10-17:
  - https://coachello.ai/fr/roleplays-ia/
  - https://coachello.ai/fr/securite-donnees/
  - https://coachello.ai/fr/integrations/
  - https://coachello.ai/fr/financement-tarifs/
  - https://coachello.ai/fr/conformite-ai-act/
  - https://coachello.ai/fr/nos-coachs-professionnels/
  - https://learn.microsoft.com/en-us/microsoft-365-app-certification/teams/coachello-sas
- Trust Center returned no readable text; no private certificate/DPA reviewed. General privacy page did not substantiate Azure by itself; product/security declarations attributed accordingly. No vendor outcome figures or private user-memory facts used.
- Validation: npm run build and npm run check:content passed. Parsed 64 HTML pages, 2,017 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Checked canonicals, one H1 per page, sitemap coverage, changed markers and removal of contradictory score text. All providers' numerical scores, tested_on, formats, use cases and disclosures preserved; all other provider objects unchanged. git diff --check passed. No layout change, mobile visual audit or field-performance measurement.
- www returned HTTP 502 again; inconclusive, no DNS changes.
- Traffic Europe/Paris: complete day 2026-10-16 versus 2026-10-15; rolling 2026-10-10–2026-10-16 versus 2026-10-03–2026-10-09. Visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered requests unavailable, not zero. Metric definitions, bot identity, successful/blocked requests, pages, last seen and audit exclusions cannot be established.
- Vercel lists no teams; guide-rh project and production runtime logs return 403 under team_DogQuXCMTVI6mYpMCOQUOD5G / davidlegrange90-5664. No CLI available. Need Web Analytics and hosting/edge request-log read access or dated exports. Runtime function output alone is not static-page traffic. Search Console/Bing/Cloudflare AI Crawl Control datasets unavailable. Crawl does not establish training, indexing, citations or recommendations.
- Prepared guarded main update; run report records GitHub deployment and live verification outcome.

## 2026-10-18: alternatives-page selection and buying guidance
- Fresh main ea334665a1ff89b600dcbff64435b89e65f878c1. Read README, CHECKLIST and progress; inspected current alternatives template/data/styles and live Yoodli alternatives HTML (curl; web reader unavailable).
- Improved the 14 existing alternatives pages without changing provider data or selection/ranking. Table now displays only referenced common use cases rather than all capabilities of each alternative. Added selection rule, eight-result limit, distinction between global editorial score and project fit, and explicit documentary/test caveat.
- Added a descriptive table caption and four practical checks linking to existing French/format, data, integration and price guides. No new vendor facts, scores or prices introduced.
- Replaced stale fixed 2026-10-02 date with latest of template revision (2026-10-18) and recorded changelog dates from the original provider and displayed alternatives. Same date used visibly and in Article JSON-LD; not based on build time or unrelated provider updates.
- Primary guidance consulted 2026-10-18: https://developers.google.com/search/docs/appearance/publication-dates (visible and structured dates should be consistent and reflect the page update, not an unrelated event).
- Validation: npm run check:content and npm run build passed. Parsed 64 HTML pages, 2,076 internal links/fragments, 64 JSON-LD blocks and all 64 unique sitemap URLs. Verified all 14 alternatives tables and 112 rows against data-derived selection and common-use-case intersection; ItemList names/order unchanged, dates agree, table caption and scoped headers present. Canonicals, one H1 per page, sitemap coverage and fragments passed. Provider data byte-equivalent in parsed JSON to main. git diff --check passed.
- No CSS or table column count changed; mobile visual audit and field performance not measured. Caption/header semantics checked statically, not a full accessibility audit.
- www returned HTTP 502 from environment; inconclusive, no DNS changes.
- Traffic windows Europe/Paris: 2026-10-17 versus 2026-10-16; rolling 2026-10-11–2026-10-17 versus 2026-10-04–2026-10-10. Visitors, pageviews, top pages/referrers, AI referrals, crawlers and user-triggered assistant requests unavailable, not zero. Definitions/coverage, successful versus blocked requests, verified bot identities, requested pages, last seen and audit exclusions cannot be established.
- Access check: Vercel lists no teams; guide-rh project lookup returns 403 for scope davidlegrange90-5664 / team_DogQuXCMTVI6mYpMCOQUOD5G. No CLI available. Need project Web Analytics and hosting/edge request-log read access, or dated exports. No Search Console, Bing or Cloudflare AI Crawl Control data accessible. Do not infer training, indexing, citations or recommendations from crawling.
- Prepared guarded main update; run report records GitHub deployment and live verification.

## 2026-10-19: onboarding scope and role-specific buying checks
- Fresh checkout of main 6de745e36e504f665f38d96e265df18214ca1cf4. Read README, CHECKLIST and full current progress; no AGENTS.md found. Live onboarding page returned HTTP 200 and still described only managers although its panel includes commercially focused onboarding solutions.
- Broadened the shared label to “Onboarding et prise de poste”, keeping the existing URL, provider memberships, rankings and scores. Rewrote the existing guide to distinguish managerial and commercial paths explicitly, rather than imply every listed solution covers both.
- Added two attributed vendor-documentation examples, role-specific proposed scenarios, a four-part buying/pilot checklist, internal links and two FAQ answers. Removed the implied fixed 90-day prescription in favor of an illustrative sequence without an optimal-duration claim. Preserved and recalled the professional Coachello disclosure. No tests or gains claimed.
- Sources read 2026-10-19:
  - https://www.hyperbound.ai/use-cases/onboarding-and-certifications
  - https://coachello.ai/fr/roleplays-ia/
- Yoodli candidate sales-onboarding URL was inaccessible to the web reader and not used as a source. No promotional vendor outcome figures reproduced.
- Validation: npm run check:content and npm run build passed. Parsed 64 HTML pages, 2,147 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs; all routes covered, canonical equality and one H1 per page. Onboarding visible/Article dates agree at 2026-10-19; new content/FAQ markers present and obsolete shared label absent throughout built HTML. All provider data and criterion weights unchanged. git diff --check passed. No CSS or component layout changes; no browser/mobile visual audit or field-performance measurement performed.
- www returned HTTP 503 from this environment today, versus prior 502; availability remains inconclusive without hosting/DNS inspection. No DNS changes.
- Traffic Europe/Paris: last complete day 2026-10-18 versus 2026-10-17; rolling 2026-10-12–2026-10-18 versus 2026-10-05–2026-10-11. Visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, pages requested, last seen and audit-traffic exclusions cannot be established.
- Connected Vercel project lookup still returns 403 for guide-rh under davidlegrange90-5664 / team_DogQuXCMTVI6mYpMCOQUOD5G. No vercel CLI installed. Need project Web Analytics and hosting/edge request-log read access, or dated exports. No accessible Search Console/Bing/Cloudflare AI Crawl Control data. Runtime application output alone would not establish static-page traffic. Crawling does not establish training, indexing, citations or recommendations.
- Publication prepared as guarded main fast-forward; deployment status and affected live URLs checked in run report.

## 2026-10-20: comparison-summary evidence and rating transparency
- Fresh main e653602e280fecd7c8962eac37fbb3a0bc62018b; read README, CHECKLIST and tracking; no AGENTS.md found. Inspected live comparison HTML, which still claimed Coachello was the only platform combining roleplay, AI coaching and a human-coach network.
- Replaced unsupported exclusivity and broad superiority language in the main comparison summary with attributed capabilities and buying checks. Current Exec documentation also describes roleplays, an AI Coach debrief and human coaching; this overlap does not establish equivalence of the offers. Preserved Coachello's editorial-selection label and exact professional disclosure.
- Added data-derived counts distinguishing documentary scores (14) from recorded standardized tests (0), plus explicit interpretation of the global weighted ranking. Renamed misleading internal “tested” variables to “scored” without changing filtering, order or ItemList contents. Qualified French-language availability in the introduction; added a descriptive table caption. No new CSS, columns or layout component changes.
- Sources read 2026-10-20:
  - https://coachello.ai/fr/roleplays-ia/
  - https://www.exec.com/ai-roleplays
  - https://www.exec.com/coaching-platform
- Candidate https://www.exec.com/ai-coach was inaccessible and not used; AI Coach evidence came from the current roleplay page. No vendor results, reviews or certification claims republished.
- Validation: npm run check:content and npm run build passed. Parsed 64 HTML pages, 2,150 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Canonical equality, one H1, sitemap coverage, fragments, visible/Article date 2026-10-20, counts, caption and disclosure passed. Checked ItemList names/order against the data-derived weighted ranking and verified all provider data and criterion weights unchanged. git diff --check passed. No mobile visual audit, full accessibility audit or field-performance measurement performed.
- www returned HTTP 503 from this environment; still inconclusive, no DNS changes.
- Traffic Europe/Paris: complete day 2026-10-19 versus 2026-10-18; rolling 2026-10-13–2026-10-19 versus 2026-10-06–2026-10-12. Visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests unavailable, not zero. Metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established. Crawl would not establish training, indexing, citations or recommendations.
- Access rechecked: Vercel project lookup returns 403 for guide-rh under davidlegrange90-5664 / team_DogQuXCMTVI6mYpMCOQUOD5G; no vercel CLI installed. Windsor discovery exposes only a Coachello GA4 property and coachello.ai Search Console property, not an identified Guide RH source; those unrelated accounts were not queried for Guide RH traffic. Need Guide RH project Web Analytics and hosting/edge request-log read access, or dated exports / an authorized Guide RH analytics property. No accessible Bing or Cloudflare AI Crawl Control data.
- Prepared guarded main publication; run report records GitHub deployment and live verification outcome.

## 2026-10-21: methodology, source hierarchy and test-status consistency
- Fresh main 155e77bf31cd71090ca12bb574b27b354d08fce9; read README, CHECKLIST and full progress log. The live methodology returned HTTP 200 but displayed the category's stale 2026-10-17 date, while the comparison had been revised on 2026-10-20.
- Aligned the public methodology, repository workflow and editorial checklist with the site's actual state: 14 documentary-scored providers and zero recorded standardized tests. Replaced wording that implied tests were already performed with a proposed protocol requiring real access, common scenarios, a date and published notes.
- Added a source hierarchy and explicit interpretation rules for documentary evidence, 0/5 versus `null`, weighted ordering, alphabetical tie-breaking and editorial selections. Added current Article metadata/byline and a dated journal entry. No numerical score, criterion weight, provider order, provider membership or `tested_on` value changed.
- This was an internal consistency and transparency correction based on the repository's public data and rendered pages; no new external product claim or source was introduced.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,474 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, full sitemap coverage, methodology markers, Article date 2026-10-21, journal entry and preservation of provider/criterion data. `git diff --check` passed. No CSS or shared layout component changed; no mobile visual audit or field-performance measurement was performed.
- Apex methodology, journal and sitemap returned HTTP 200 before publication. www returned HTTP 503 again from this environment; this remains an availability/hosting blocker, not evidence supporting a DNS change. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-20 versus 2026-10-19; rolling 2026-10-14–2026-10-20 versus 2026-10-07–2026-10-13. Visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests unavailable, not zero. Metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established. A crawl would not prove training, indexing, citations or recommendations.
- Access rechecked: Vercel project lookup returns 403 for guide-rh under davidlegrange90-5664 / team_DogQuXCMTVI6mYpMCOQUOD5G; the connection needs explicit access to that target team plus Web Analytics and hosting/edge request-log read permission, or dated exports. No Vercel CLI is installed. Windsor exposes only Coachello GA4 and coachello.ai Search Console sources, not Guide RH; they were not misused. No accessible Bing or Cloudflare AI Crawl Control dataset.
- Prepared guarded main publication; run report records GitHub deployment and live verification outcome.

## 2026-10-22: mobile and keyboard access to comparison tables
- Fresh main 087644930131f6296a60bd882fab99e5f2a435ee; read README, CHECKLIST and the full progress log. Live inspection of the main comparison found that the large table was horizontally scrollable but its scroll container was absent from sequential keyboard focus and had no accessible name or visible mobile instruction.
- Added a reusable static `TableScroll` component with an accessible region name, `tabindex="0"`, visible focus ring, mobile scroll instruction and an explicit minimum table width. Applied it to the main comparison, 14 provider profiles, 14 alternatives pages, criterion pages, use-case solution tables, methodology and journal.
- Kept native HTML table semantics, captions and scoped row/column headers. No client-side JavaScript was added. Provider facts, numerical scores, weights, ranking, use-case memberships, disclosures and test status are unchanged.
- Primary accessibility reference consulted 2026-10-22: https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/ (scrollable content can be reached with sequential focus navigation; example uses `tabindex="0"`).
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,474 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, full sitemap coverage, compiled minimum-width/focus styles, 47 labelled focusable scroll regions and 47 visible mobile hints across the affected templates. `git diff --check` passed. Four smaller editorial tables embedded in HTML strings retain their existing native horizontal overflow and were not modified in this bounded cycle. No device-level mobile screenshot or field-performance measurement was available.
- www returned HTTP 503 again before publication, while apex home and comparison returned HTTP 200. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-21 versus 2026-10-20; rolling 2026-10-15–2026-10-21 versus 2026-10-08–2026-10-14. Visitors, pageviews, top pages/referrers, AI referrals, crawler and user-triggered assistant requests unavailable, not zero. Metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established. Crawling would not prove training, indexing, citations or recommendations.
- Access rechecked: Vercel lists no teams and project lookup returns 403 for guide-rh under davidlegrange90-5664 / team_DogQuXCMTVI6mYpMCOQUOD5G. Windsor exposes only Coachello GA4 and coachello.ai Search Console, not Guide RH. Need explicit Vercel team access plus Web Analytics and edge/request-log read permission, dated exports, or an authorized Guide RH analytics property. No accessible Bing or Cloudflare AI Crawl Control dataset.
- Prepared guarded main publication; run report records GitHub deployment and affected live-page verification.

## 2026-10-23: embedded editorial table accessibility
- Fresh main 2e7600677c56bb5d78b50ee81c382f11bab7e38e; read README, CHECKLIST and the full progress log. Before this cycle, the certification, LMS integration, format and pricing guides each rendered two tables but only the provider table had a labelled, focusable scroll region. The apex site and all four pages returned HTTP 200; www returned HTTP 503.
- Added one shared server-side formatter for controlled editorial HTML. It preserves placeholder rendering and now wraps embedded tables in a labelled `role="region"` with `tabindex="0"`, the existing visible small-screen instruction and minimum-width behavior. The accessible name is derived from each table caption. No client-side JavaScript was added.
- All four remaining editorial tables now match the common table treatment. The table contents, native caption/header semantics, provider facts, numerical scores, weights, ranking, use-case memberships, disclosures and test status are unchanged.
- Primary accessibility source consulted 2026-10-23: https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/ (scrollable content or a descendant should be reachable through sequential focus navigation; the passed example uses `tabindex="0"`).
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,481 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, full sitemap coverage, and 51 labelled focusable scroll regions plus 51 visible hints for all 51 generated tables. Each of the four changed guides has two tables and two matching regions. `git diff --check` passed. A headless browser library was available but its browser executable was not installed, so device-level visual and live keyboard interaction checks were not claimed; field performance was not measured.
- Traffic windows Europe/Paris: complete day 2026-10-22 versus 2026-10-21; rolling 2026-10-16–2026-10-22 versus 2026-10-09–2026-10-15. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and coachello.ai Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns 403 for guide-rh under davidlegrange90-5664 / team_DogQuXCMTVI6mYpMCOQUOD5G. The connector does not expose its recommended team-authorization action. Need explicit access to that Vercel team plus Web Analytics and edge/request-log read permission, dated exports, or an authorized Guide RH analytics property. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-10-24: Yoodli evidence and documented use-case coverage
- Fresh main 72a17171a5d9486e5fc12ab66d35d098519534f9; read README, CHECKLIST and the full progress log. The live Yoodli profile returned HTTP 200 but still used generic, unsourced criterion text for AI Act, Qualiopi/OPCO, pricing, human coaching and French references, and listed only three use cases.
- Replaced those five generic statements with source-specific evidence and limitations. Updated security language to reflect the Trust Center's US/Europe subprocessor regions and the privacy policy's non-EEA transfer language. Documented the published Business per-seat/annual and Enterprise quote model without inventing prices. Distinguished Yoodli Coach and a named CSM from included human coaching sessions.
- Added six explicitly documented use cases: managers, difficult conversations, feedback, performance reviews, customer service and onboarding. All 11 criteria now have a source link. Updated the seven affected use-case page dates and the main comparison date; added a dated journal entry.
- Sources read 2026-10-24:
  - https://support.yoodli.ai/en/articles/9550461-yoodli-overview
  - https://support.yoodli.ai/en/articles/9550465-practice-with-yoodli
  - https://support.yoodli.ai/en/articles/15862405-create-chat-based-roleplays
  - https://yoodli.ai/use-cases/onboarding-certification
  - https://yoodli.ai/pricing
  - https://trust.yoodli.ai/
  - https://yoodli.ai/privacy-policy
  - https://yoodli.ai/compare/yoodli-vs-hyperbound
  - https://yoodli.ai/case-studies
- All source URLs returned HTTP 200. The AI Act statement is explicitly treated as the editor's own claim because the cited comparison page does not provide an intended-use analysis, provider/deployer role or conformity dossier. No case-study outcome figures were republished.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,510 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, all nine Yoodli use-case links, seven visible/structured update dates, journal/RSS publication and removal of generic evidence text. Every numerical score, `tested_on` and disclosure value for Yoodli was preserved; every other provider object remained byte-equivalent after JSON parsing. `git diff --check` passed. No layout/CSS change, device visual audit or field-performance measurement.
- www returned HTTP 503 while the apex and live Yoodli profile returned HTTP 200 before publication. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-23 versus 2026-10-22; rolling 2026-10-17–2026-10-23 versus 2026-10-10–2026-10-16. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and coachello.ai Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns 403 for guide-rh under davidlegrange90-5664 / team_DogQuXCMTVI6mYpMCOQUOD5G. Need explicit access to that Vercel team plus Web Analytics and edge/request-log read permission, dated exports, or an authorized Guide RH analytics property. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-10-25: Face Up evidence, Qualiopi scope and documented use cases
- Fresh main `736e40f3e9daf269ac4251ff43e0b0d8a65daeb0`; read README, CHECKLIST and the full progress log. The live Face Up profile returned HTTP 200 but still had generic, unsourced evidence for Qualiopi/OPCO, human coaching and French references, and listed only three use cases.
- Updated the existing profile from current product, enterprise, training-organization, debriefing, privacy, AI-transparency and pricing pages. All 11 criteria now have a source link. Documented the editor's EU hosting, encryption, retention, no-training, transparency, LMS and cohort-reporting statements with explicit limits; no independent security, legal or product-performance audit claimed.
- Corrected the unsupported wording “Certification Qualiopi annoncée”. Face Up describes how its traces may contribute to indicators 5, 12, 17 and 19; this does not certify the software or establish automatic OPCO funding.
- Added three use cases explicitly illustrated in the editor's documentation: feedback, conflict management and recruiter training. Recruiter training is described as pedagogical practice, not candidate selection; Face Up states that the product is not a recruitment or selection tool.
- Sources read 2026-10-25:
  - https://face-up.fr/solution/roleplays
  - https://face-up.fr/enterprise
  - https://face-up.fr/training-organization
  - https://face-up.fr/solution/debriefing
  - https://face-up.fr/legal/privacy-policy
  - https://face-up.fr/legal/ai-transparency
  - https://face-up.fr/tarifs
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No customer outcome figures were republished.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,527 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, all 11 Face Up criterion sources, Face Up links and 2026-10-25 dates on the three added use-case pages, journal/RSS publication and `git diff --check`. No CSS/layout change, device visual audit or field-performance measurement.
- Before publication, apex, the live Face Up profile and the homepage returned HTTP 200. `www.guide-rh.com` returned HTTP 503; no DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-24 versus 2026-10-23; rolling 2026-10-18–2026-10-24 versus 2026-10-11–2026-10-17. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`. The error explicitly requires authorizing this connection for that team, then project Web Analytics and hosting/edge request-log read access. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-10-26: Reality Academy evidence, Qualiopi scope and use cases
- Fresh main `ca9772ac37e8305499ad69b8f8e81d0e63e31e3b`; read README, CHECKLIST and the full progress log. The live Reality Academy profile returned HTTP 200 but still had generic, unsourced evidence for pricing, human coaching and French references, listed only three use cases, and described the training-organization registration number as a Qualiopi number.
- Replaced those three generic statements with evidence and buying guidance from current official pages. All 11 criteria now have a source link. Documented the three delivery modes without inventing amounts, distinguished a dedicated pedagogical team from included one-to-one human coaching, and qualified the homepage references as Reality Academy-wide rather than proven Roleplay IA deployments.
- Corrected the wording around `11756139875`: the site presents it as the training organization's registration number, while separately declaring Qualiopi and possible OPCO financing. The current certificate, its scope and any project-specific funding remain to be verified.
- Added two explicitly documented use cases: feedback and training for inclusive recruitment. Recruitment is described as pedagogical practice for recruiters and managers, not candidate selection.
- Sources read and returned HTTP 200 on 2026-10-26:
  - https://www.reality-academy.fr/roleplay-ia
  - https://www.reality-academy.fr/
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No customer outcome figures, Google reviews or product-test results were republished.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,539 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, all 11 Reality Academy criterion sources, links and 2026-10-26 dates on the feedback and recruitment pages, journal/RSS publication and `git diff --check`. No CSS/layout change, device visual audit or field-performance measurement.
- Before publication, apex, the comparison, Reality Academy profile and both affected use-case pages returned HTTP 200. `www.guide-rh.com` returned HTTP 503; no DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-25 versus 2026-10-24; rolling 2026-10-19–2026-10-25 versus 2026-10-12–2026-10-18. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; the connector requires team authorization before Web Analytics or request logs can be read. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-10-27: Super Sales data transfers, buying guidance and use cases
- Fresh main `4f07fddfbb1b504c8867912f350f33646ddf3b37`; read README, CHECKLIST and the full progress log. The live Super Sales profile returned HTTP 200 but used one general source, left four criterion sources empty and repeated a broad Europe-only data statement.
- Reconciled current official product, CGU, privacy and legal pages. The privacy policy lists Scaleway in France, Firebase in the EU and OpenAI in the United States with SCC and/or Data Privacy Framework, while the commercial page says data never leave the EU. The profile now flags that inconsistency for contractual clarification instead of presenting the marketing wording as established fact.
- Documented account and simulation retention, AI-output limitations, public plan quotas, the absence of published LMS/SSO/SCORM/xAPI details, automated rather than human coaching, and anonymous rather than verifiable customer references. All 11 criteria now have a source link.
- Added onboarding and ramp-up as explicitly presented commercial training uses, without republishing the claimed reduction in ramp-up time as a verified result.
- Sources read and returned HTTP 200 on 2026-10-27:
  - https://www.super-sales.fr/
  - https://www.super-sales.fr/cgu
  - https://www.super-sales.fr/politique-confidentialite
  - https://www.super-sales.fr/mentions-legales
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No anonymous testimonial result was treated as verified, and no review or product-test result was added.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,551 internal links/fragments, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, all 11 Super Sales criterion sources, links and 2026-10-27 dates on onboarding and ramp-up, journal/RSS publication and `git diff --check`. No CSS/layout change, device visual audit or field-performance measurement.
- Before publication, apex, the comparison, Super Sales profile and both affected use-case pages returned HTTP 200. `www.guide-rh.com` returned HTTP 503; no DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-26 versus 2026-10-25; rolling 2026-10-20–2026-10-26 versus 2026-10-13–2026-10-19. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel project lookup still returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; team access plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-10-28: Second Nature security, integrations and onboarding evidence
- Fresh main `d243d42d03a1c03da5e157456776814da4ee48e3`; read README, CHECKLIST and the full progress log. The live Second Nature profile returned HTTP 200 but left five criterion sources empty, described security pages as inaccessible and did not include onboarding among its documented uses.
- Relied only on current official pages, all read directly and returning HTTP 200 on 2026-10-28. Documented the editor's claims for GCP in the Netherlands, encryption, non-use of customer data for model training, deletion, SOC 2 Type II, ISO 27001 and ISO 27701. These remain vendor claims: certificates and scope, DPA, subprocessors, transfers and retention require buyer verification.
- Expanded integration evidence to SCORM, LTI, API, SCIM, SAML SSO, named LMS and CRM platforms. Added onboarding as an explicitly documented commercial and customer-service use case. All 11 criteria now have a source link.
- Sources read 2026-10-28:
  - https://secondnature.ai/faqs/
  - https://secondnature.ai/product/
  - https://secondnature.ai/enterprise/
  - https://secondnature.ai/use-case/customer-support/
  - https://secondnature.ai/end-user-license-agreement/
  - https://lp.secondnature.ai/ai-role-play-sales-training
  - https://lp.secondnature.ai/
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No promotional outcome, customer review, price, Google review or product-test result was added.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,622 internal links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, all 11 Second Nature criterion sources, eight use-case links including onboarding, visible/structured 2026-10-28 dates, journal/RSS publication and `git diff --check`.
- Before publication, apex, comparison, Second Nature and onboarding returned HTTP 200. `www.guide-rh.com` returned HTTP 503; no DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-27 versus 2026-10-26; rolling 2026-10-21–2026-10-27 versus 2026-10-14–2026-10-20. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-10-29: Ringover Pitch Room pricing, references and ramp-up evidence
- Fresh main `91e2fd5fbe15a5ceebfd6a91ffc95f13096c6687`; read README, CHECKLIST and the full progress log. The live Ringover Pitch Room profile returned HTTP 200 but left four criterion sources empty and did not connect its documented new-recruit training to onboarding or ramp-up.
- Relied only on current official Ringover pages, all read directly and returning HTTP 200 on 2026-10-29. The profile now states that the public pricing page presents Empower IA conversationnelle without a usable Pitch Room amount, and lists the exact quote inputs to compare. It distinguishes manager feedback and complementary human training from any human coaching service supplied by Ringover.
- Qualified the launch article's customer names as Ringover-wide references, not proof of Pitch Room deployments. Added onboarding and ramp-up because Ringover explicitly describes simulated-call training for new arrivals and new commercial recruits; no promotional time-saving claim was repeated as a measured result. All 11 criteria now have a source link.
- Sources read 2026-10-29:
  - https://www.ringover.fr/plateforme-coaching
  - https://www.ringover.fr/simulation-entretien-de-vente
  - https://www.ringover.fr/actualites/ringover-pitch-room-ia-simulation-vente
  - https://www.ringover.fr/simulateur-entretien-embauche
  - https://www.ringover.fr/tarifs
  - https://www.ringover.fr/cgv
  - https://www.ringover.fr/accord-traitement-donnees
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No price, customer outcome, review, Google review or product-test result was invented.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,634 internal links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, all 11 Ringover criterion sources, five use-case links including onboarding and ramp-up, visible/structured 2026-10-29 dates, journal/RSS publication and `git diff --check`.
- Before publication, apex, comparison and the affected live pages returned HTTP 200. `www.guide-rh.com` returned HTTP 503; no DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-28 versus 2026-10-27; rolling 2026-10-22–2026-10-28 versus 2026-10-15–2026-10-21. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-10-30: Uptale certification claim, conflict scenario and Orange evidence
- Fresh main `13558ffc9ff9be4e6edf95cb50cdd7e46a53b5bf`; read README, CHECKLIST and the full progress log. The live Uptale profile returned HTTP 200 but left one criterion source empty, omitted the homepage's current ISO 27001 claim and did not connect its public conflict roleplay to the corresponding use-case guide.
- Relied only on current official Uptale pages, all read directly and returning HTTP 200 on 2026-10-30. Added the editor's ISO 27001 claim with explicit buyer guidance to request the current certificate, scope and covered services; no certification audit claimed.
- Added the public “Résolution de conflits RH” AI Roleplay to the conflict-management guide, with a clear limit that a demo does not establish dialogue quality, feedback quality or effectiveness. Added the Orange & HES voice-recognition roleplay alongside the existing Monoprix case without republishing participant or outcome figures as independent results. All 11 criteria now have a source link.
- Sources read 2026-10-30:
  - https://www.uptale.io/fr/
  - https://www.uptale.io/fr/platform/roleplay-ai/
  - https://www.uptale.io/fr/platform/plateforme/
  - https://www.uptale.io/fr/platform/service-uptale-factory
  - https://www.uptale.io/demos-vr/?theme=education
  - https://www.uptale.io/fr/content/cas-client/monoprix-6-points-de-nps-grace-a-lia-conversationnelle/
  - https://www.uptale.io/fr/content/cas-client/orange-hes-relation-client-maitriser-excellence-service-disc/
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No certificate details, customer outcome, review, Google review or product-test result was invented.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,641 internal links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, all 11 Uptale criterion sources, five use-case links including conflict management, visible/structured 2026-10-30 dates, journal/RSS publication and `git diff --check`.
- Before publication, apex, comparison, Uptale and conflict-management pages returned HTTP 200. `www.guide-rh.com` returned HTTP 503; no DNS change made. No layout/CSS change or field-performance measurement was made in this bounded cycle.
- Traffic windows Europe/Paris: complete day 2026-10-29 versus 2026-10-28; rolling 2026-10-23–2026-10-29 versus 2026-10-16–2026-10-22. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## Prioritized backlog
1. All 14 provider profiles now link every scored criterion to a primary source. Continue reviewing stale claims and use-case memberships against current explicit documentation; do not infer capabilities or formats absent from primary sources.
2. Complete a device-level mobile visual audit and establish a measured performance baseline. Keyboard-accessible scroll regions now cover every generated table; do not claim Core Web Vitals or device-level visual success without measurements.
3. Investigate www hostname with hosting/DNS access; keep apex canonical. No speculative DNS edits.
4. Ownership, funding and author credentials require verified facts from the owner. Do not fabricate disclosures.
5. Search Console/Bing/analytics access needed to measure indexing, search queries, qualified visits and outbound provider clicks. No traffic or ranking result measured yet.
6. Plan actual product benchmarks only with product access and recorded identical scenarios/rubrics. Do not report proposed tests as executed.

## 2026-10-31: Edflex Qualiopi scope, offer structure and human-support distinction
- Fresh main `9dcf02e884b8344e29a9b2a910ae038a78c2b873`; read README, CHECKLIST and the full progress log. No AGENTS.md found. The live Edflex profile and apex returned HTTP 200 before publication.
- Relied only on current official Edflex pages, all read directly and returning HTTP 200 on 2026-10-31. All 11 Edflex criteria now have a source link, up from eight.
- Qualified Edflex's declaration that it is Qualiopi-certified for training actions: this does not by itself make a roleplay licence eligible for OPCO funding. Buyers should request the current certificate and scope, identify the eligible service and obtain the funder's approval.
- Documented the public offer structure without inventing prices: Prime and AI Roleplays include roleplays; Ultimate adds a dedicated L&D team, simulation creation and AI-led virtual classes. No amount was publicly displayed, so the profile recommends separating users, sessions, creation, integrations and support in the quote.
- Distinguished expert support and a dedicated L&D team from individual human coaching for learners. Edflex's published virtual-class description names an AI instructor; no included one-to-one human coaching was inferred.
- Sources read 2026-10-31:
  - https://www.edflex.com/roleplays
  - https://www.edflex.com/offres
  - https://www.edflex.com/nos-reseaux
  - https://www.edflex.com/integrations
  - https://www.edflex.com/coach-ia-formation
  - https://www.edflex.com/clients/edf-rationalisation-formation-digitale-et-engagement
- All numerical scores, criterion weights, `tested_on`, formats, use cases and relationship disclosure remained unchanged. Every other provider object remained unchanged. No price, funding approval, review, Google review, customer result or product-test result was invented.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,843 internal links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, internal targets and fragments, all 11 Edflex criterion sources, protected provider fields, journal/RSS publication and `git diff --check`.
- No layout/CSS change, device visual audit or field-performance measurement was made in this bounded cycle.
- Apex returned HTTP 200; `www.guide-rh.com` returned HTTP 503 from this environment. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-30 versus 2026-10-29; rolling 2026-10-24–2026-10-30 versus 2026-10-17–2026-10-23. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-11-01: Mursion contract model, French-evidence limits and onboarding uses
- Fresh main `ffbe70bff69dc4d01be1d5d194e105c153bbd281`; read README, CHECKLIST and the full progress log. No AGENTS.md found. The live Mursion profile and apex returned HTTP 200 before publication.
- Relied only on current official Mursion pages, all read directly and returning HTTP 200 on 2026-11-01. All 11 Mursion criteria now have a source link, up from eight.
- Documented the public contract model without inventing an amount: the terms describe a SaaS subscription, generally annual, with licences and support/simulation services defined and priced in a Statement of Work. The profile now lists the quote dimensions that must be separated.
- The public terms do not document Qualiopi or OPCO funding. Their silence is not treated as proof of ineligibility; buyers should verify the training provider, current certificate, eligible service and funder approval.
- The public customer-story archive names several international organizations but no detailed French case was identified. The profile explicitly states that this public selection does not prove the absence of French customers.
- Added onboarding and commercial teams as documented uses. H&R Block's editor-published case describes custom onboarding simulations for new call-centre agents. T-Mobile's case says the simulation program extended to B2B Sales onboarding. No promotional outcome figure was republished as an independently verified result.
- Sources read 2026-11-01:
  - https://www.mursion.com/order-terms/
  - https://www.mursion.com/customer-stories/
  - https://www.mursion.com/customer-story/new-call-center-agent-onboarding-at-hr-block/
  - https://www.mursion.com/customer-story/t-mobile-uses-vr-simulations/
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No price, French reference, funding approval, customer result, review, Google review or product-test result was invented.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 2,856 internal links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, internal targets and fragments, all 11 Mursion criterion sources, the two intended use-case additions, protected provider fields, journal/RSS publication and `git diff --check`.
- No layout/CSS change, device visual audit or field-performance measurement was made in this bounded cycle.
- Apex and the live Mursion profile returned HTTP 200; `www.guide-rh.com` returned HTTP 503. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-10-31 versus 2026-10-30; rolling 2026-10-25–2026-10-31 versus 2026-10-18–2026-10-24. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property and `coachello.ai` Search Console property; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## Operating rules
Read current main and this log before editing. Choose meaningful bounded improvements, not a daily page quota. Build/content checks must pass; validate changed links and structured data; push without force and verify deployment/live pages. Record verified results separately from hypotheses and pending checks. No paid services or outreach authorized.

## 2026-11-02: Hyperbound data transfers, AI governance and reference evidence
- Fresh main `962ed8309fba001285bfc200e40f87404af0b025`; read README, CHECKLIST and the current progress log. No AGENTS.md found. Apex, the live Hyperbound profile and sitemap returned HTTP 200 before publication.
- Relied only on current official Hyperbound pages read on 2026-11-02. All 11 Hyperbound criteria now have a source link, up from eight.
- Documented the privacy policy's distinction between controller and processor roles, DPA precedence, named AI providers and announced SCC/Data Privacy Framework transfer mechanisms. The Trust Center displays SOC 2 Type II, ISO 27001:2022 and four infrastructure subprocessors located in the United States. Because EU data residency is an offer option, the profile now asks for a service-level data map, current subprocessors, the signed DPA and applicable transfer safeguards rather than implying that every processing operation stays in the EU.
- Added practical AI-governance checks. The privacy policy names Anthropic, AWS AI, OpenAI and Azure AI and mentions a right not to be subject to automated decision-making, but does not establish AI Act conformity, score explainability or appropriate HR uses. Buyers should define a developmental purpose, employee notice, human oversight, recourse and prohibited uses.
- The public offer page describes Free, Practice and Perform, per-user pricing, volume discounts and multi-year savings without amounts. It does not document Qualiopi or OPCO funding; silence is not treated as proof of ineligibility. The public case-study library contains several international cases but no detailed French case identified in the review; this does not prove the absence of French customers.
- Sources read 2026-11-02:
  - https://www.hyperbound.ai/privacy-policy
  - https://security.hyperbound.ai/
  - https://www.hyperbound.ai/pricing-b
  - https://www.hyperbound.ai/case-studies
- All numerical scores, criterion weights, `tested_on`, formats, use cases and relationship disclosure remained unchanged. Every other provider object remained unchanged. No price amount, French reference, funding approval, review, Google review, customer result or product-test result was invented.
- Validation: `npm run check:content` and telemetry-disabled `npm run build` passed. Parsed 64 HTML pages, 2,727 internal links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, internal targets and fragments, all 11 Hyperbound criterion sources, protected provider fields, journal/RSS publication and `git diff --check`.
- No layout/CSS change, device visual audit or field-performance measurement was made in this bounded cycle.
- Apex, Hyperbound and sitemap returned HTTP 200; `www.guide-rh.com` returned HTTP 503. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-11-01 versus 2026-10-31; rolling 2026-10-26–2026-11-01 versus 2026-10-19–2026-10-25. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Guide RH Search Console, Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-11-03: Practicio manager onboarding, funding and support scope
- Fresh main `09e3545383e804c8052a28f6bd27da3fa8166bb9`; read README, CHECKLIST and the current progress log. No AGENTS.md found. Apex and the live Practicio profile returned HTTP 200 before publication.
- Relied only on current official Practicio pages read on 2026-11-03. All 11 Practicio criteria now have a source link, up from ten.
- Added Practicio to the onboarding guide only for the documented manager scope: its platform page describes preparing new managers for their first difficult conversations. No commercial-onboarding coverage or effectiveness was inferred.
- Qualified funding evidence. The public offer page describes monthly Pilot and annual Enterprise software licences, launch support and optional workshops, but does not document a Qualiopi certificate or OPCO funding. Its silence is not treated as proof of ineligibility; buyers should verify the training provider, current certificate, eligible service and funder approval.
- Distinguished launch support from individual human coaching. Initial scenario configuration is included, while webinars, in-person workshops and dedicated support are optional. Practicio says the product complements trainers and managers; this does not establish one-to-one human coaching for each learner.
- Updated French-reference evidence from the current client page without republishing satisfaction, completion or performance figures as independently verified results.
- Sources read 2026-11-03:
  - https://www.practicio.ai/plateforme
  - https://www.practicio.ai/tarifs
  - https://www.practicio.ai/securite-des-donnees
  - https://www.practicio.ai/clients
- All numerical scores, criterion weights, `tested_on`, formats and relationship disclosure remained unchanged. Every other provider object remained unchanged. No price amount, funding approval, review, Google review, customer result or product-test result was invented.
- Validation: `npm run check:content` and telemetry-disabled `npm run build` passed. Parsed 64 HTML pages, 2,736 internal links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified canonical equality, one H1 per page, complete sitemap coverage, internal targets and fragments, all 11 Practicio criterion sources, the intended onboarding addition, protected provider fields, journal/RSS publication and `git diff --check`.
- No layout/CSS change, device visual audit or field-performance measurement was made in this bounded cycle.
- Apex and Practicio returned HTTP 200; `www.guide-rh.com` returned HTTP 503. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-11-02 versus 2026-11-01; rolling 2026-10-27–2026-11-02 versus 2026-10-20–2026-10-26. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Guide RH Search Console, Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-11-04: MeltingSpot pricing, funding and support scope
- Fresh main `a28e0a86fc1279fc1d9248d861247cf021718a63`; read README, CHECKLIST and the current progress log. No AGENTS.md found. Apex, the live MeltingSpot profile and sitemap returned HTTP 200 before publication.
- Relied only on current official MeltingSpot pages read on 2026-11-04. All 11 MeltingSpot criteria now have a source link, up from nine.
- Corrected the pricing scope without changing the score: the public starting price of 1.50 EUR per monthly active user is presented for the general SaaS plan, while Corporate is tailored to volume, integrations and security. No amount specific to Roleplay was inferred. The profile now asks buyers to separate active users, AI credits, overages, integrations and support in the quote.
- Qualified funding evidence. The public pricing page describes software and implementation services but does not document Qualiopi certification or OPCO funding. Its silence is not treated as proof of ineligibility; buyers should verify the training provider, current certificate, eligible service and funder approval.
- Distinguished Melty, described as an AI agent, from a dedicated Customer Success Manager and custom onboarding. Those deployment services do not establish individual human coaching for learners.
- Sources read 2026-11-04:
  - https://meltingspot.io/en/products/roleplay
  - https://meltingspot.io/en/pricing
  - https://meltingspot.io/fr/get-a-quote
  - https://meltingspot.io/fr/blog/roleplay-ia-formation
- All numerical scores, criterion weights, `tested_on`, formats, use cases and relationship disclosure remained unchanged. Every other provider object remained unchanged. No promotional result, customer review, Google review, funding approval or product-test result was added.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages and 64 unique sitemap URLs. Verified exact canonicals, one H1 per page, JSON-LD syntax, complete sitemap coverage, internal targets/assets, all 11 MeltingSpot criterion sources, protected provider fields, profile content/date markers, journal/RSS publication and `git diff --check`.
- No layout/CSS change, device visual audit or field-performance measurement was made in this bounded cycle.
- Apex, MeltingSpot and sitemap returned HTTP 200; `www.guide-rh.com` returned HTTP 503. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-11-03 versus 2026-11-02; rolling 2026-10-28–2026-11-03 versus 2026-10-21–2026-10-27. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Guide RH Search Console, Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-11-05: Exec funding, French-reference limits and price verification
- Fresh main `ee8a1d4e750d4ffa1fe389e4a1b9bacfaf81eb2c`; read README, CHECKLIST and the current progress log. No AGENTS.md found. Apex, the live Exec profile and sitemap returned HTTP 200 before publication.
- Relied only on current official Exec pages read directly and returning HTTP 200 on 2026-11-05. All 11 Exec criteria now have a source link, up from nine. This completes criterion-level primary-source coverage for all 14 provider profiles.
- Rechecked the public pricing page. Free, Starter at 20 USD per seat/month with a five-seat minimum, Professional at 39 USD with a 15-seat minimum, annual billing and custom Enterprise pricing remain displayed. No conversion, tax or contract-total estimate was invented.
- Qualified funding evidence. Exec describes software plans, learner-certification features and coaching, but the public pages do not document Qualiopi certification or OPCO funding. Silence is not proof of ineligibility; buyers should verify the training provider, current certificate, eligible service and funder approval.
- Updated reference evidence from the current demonstration page, which names Private Health Management, Linear and Paramount. No detailed French case was identified in that public selection; this is not presented as proof that Exec has no French clients.
- Sources read 2026-11-05:
  - https://www.exec.com/pricing
  - https://www.exec.com/solutions/employee-training
  - https://www.exec.com/see-exec
- All numerical scores, criterion weights, `tested_on`, formats, use cases and relationship disclosure remained unchanged. Every other provider object remained unchanged. No customer outcome, Google review, funding approval or product-test result was added.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 3,650 links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified 64 unique titles and descriptions, exact canonicals, one H1 per page, French language declaration, complete sitemap coverage, internal targets/assets, all 11 Exec criterion sources, protected provider fields, profile content/date markers, journal/RSS publication and `git diff --check`.
- No layout/CSS change, device visual audit or field-performance measurement was made in this bounded cycle.
- Apex, Exec and sitemap returned HTTP 200; `www.guide-rh.com` returned HTTP 503. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-11-04 versus 2026-11-03; rolling 2026-10-29–2026-11-04 versus 2026-10-22–2026-10-28. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Guide RH Search Console, Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-11-06: comparison freshness and evidence-coverage transparency
- Fresh main `8709888f22d9322da76fb68d64e4ec89eb169c53`; read README, CHECKLIST and the current progress log. No AGENTS.md found. Apex, the live comparison and sitemap returned HTTP 200 before publication.
- Corrected a stale comparison date: `/roleplay-ia` still displayed 2026-10-30 despite provider updates through 2026-11-05. The visible date and Article `dateModified` now use the later of the comparison-specific revision date and all provider changelog dates. Future provider updates will therefore update the comparison without using the build date.
- Added a computed evidence-coverage statement to the comparison: 154 of 154 scored criteria link to a public source. The adjacent qualification states that a link shows only that the source was consulted and does not convert an editor declaration into a Guide RH test result.
- Technical source read 2026-11-06:
  - https://developers.google.com/search/docs/appearance/structured-data/article
- Google Search Central recommends `dateModified` for accurate Article date information. The implementation keeps the visible byline date and JSON-LD value identical rather than publishing a hidden or build-time freshness signal.
- Provider data remained byte-identical to main. All numerical scores, weights, rankings, `tested_on`, formats, use cases and relationship disclosures remained unchanged. No review, result, price or product test was added.
- Validation: `npm run check:content` and `npm run build` passed. Parsed 64 HTML pages, 3,653 links/assets, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified 64 unique titles and descriptions, exact canonicals, one H1 per page, French language declaration, complete sitemap coverage, internal targets/assets, visible date `2026-11-06`, matching Article `dateModified`, the computed `154/154` evidence marker, journal/RSS publication, byte-identical provider data and `git diff --check`.
- No CSS/layout change, device visual audit or field-performance measurement was made in this bounded cycle.
- Apex, comparison and sitemap returned HTTP 200; `www.guide-rh.com` returned HTTP 503. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-11-05 versus 2026-11-04; rolling 2026-10-30–2026-11-05 versus 2026-10-23–2026-10-29. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Guide RH Search Console, Bing or Cloudflare AI Crawl Control dataset. Crawling would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; the run report records GitHub deployment status and live verification.

## 2026-11-07: canonical sitemap and compatibility redirect
- Fresh main `48620fb869f7e78f9fd03044e3ee83e529e1c906`; read README, CHECKLIST and the current progress log. No AGENTS.md found. Before publication, the apex and `/sitemap.xml` returned HTTP 200, `/sitemap-index.xml` returned HTTP 404 and `www.guide-rh.com` returned HTTP 503.
- Kept `/sitemap.xml` as the sole canonical sitemap, as already declared in `robots.txt` and page metadata. Added a source-controlled HTTP 301 redirect from the obsolete documented `/sitemap-index.xml` URL to `/sitemap.xml` instead of publishing duplicate sitemap content.
- Updated the deployment README and checklist to name `/sitemap.xml` as canonical and explicitly test the compatibility redirect. Added a journal entry that documents the former 404, the 64-URL scope and the limits of the change.
- Technical sources read 2026-11-07:
  - https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
  - https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps/
  - https://vercel.com/docs/project-configuration/vercel-json
- Provider data remained byte-identical to main. All numerical scores, weights, rankings, `tested_on`, formats, use cases and relationship disclosures remained unchanged.
- Validation: `npm run check:content` and telemetry-disabled `npm run build` passed. Parsed 64 HTML pages, 2,683 internal references, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified exact canonicals, one H1 per page, complete sitemap coverage, internal targets/assets, canonical `robots.txt` declaration, exact redirect configuration, journal/RSS publication, byte-identical provider data and `git diff --check`.
- Apex, canonical sitemap, journal and RSS returned HTTP 200 after deployment; `/sitemap-index.xml` returned HTTP 301 to `/sitemap.xml`; `www.guide-rh.com` returned HTTP 503. No DNS change made.
- Traffic windows Europe/Paris: complete day 2026-11-06 versus 2026-11-05; rolling 2026-10-31–2026-11-06 versus 2026-10-24–2026-10-30. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests were unavailable, not zero.
- Access rechecked: Windsor exposed only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`. Vercel listed no teams and returned HTTP 403 for the Guide RH project scope.
- Published as `709b23d5a413a3b642e400fdb88e99a23d002579`; GitHub reported the Vercel deployment successful and production verification passed.

## 2026-11-08: accurate per-page sitemap modification dates
- Fresh main `709b23d5a413a3b642e400fdb88e99a23d002579`; read README, CHECKLIST and the progress log. No AGENTS.md found. The progress file in main was binary-corrupted by the 2026-11-07 publication; restored the intact parent version and reconstructed the 2026-11-07 entry before adding this cycle.
- Before publication, the apex, comparison and sitemap returned HTTP 200, the legacy sitemap URL returned HTTP 301 and `www.guide-rh.com` returned HTTP 503. The 64-URL sitemap contained zero `lastmod` elements.
- Added `lastmod` for the 61 URLs with verifiable editorial dates: homepage and journal from the latest journal entry; comparison and provider pages from recorded provider histories; alternatives from the profiles actually rendered; use-case and criterion guides from their page dates; glossary pages from their editorial publication date. The about, contact and legal pages remain undated because no dependable content date is declared.
- Corrected glossary Article `dateModified`: provider changes no longer update unrelated glossary definitions. No visible glossary copy changed.
- Technical sources read 2026-11-08:
  - https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
  - https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
  - https://www.sitemaps.org/protocol.html
- Google documents that `lastmod` should reflect the last significant page change and may be ignored when not consistently accurate. The sitemap protocol accepts `YYYY-MM-DD`; build time is not used as a freshness signal.
- Provider data remained byte-identical to main. All numerical scores, weights, rankings, `tested_on`, formats, use cases and relationship disclosures remained unchanged. No review, result, price or product test was added.
- Validation: `npm run check:content` and telemetry-disabled `npm run build` passed. Parsed 64 HTML pages, 2,685 internal references, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified 61 W3C-valid `lastmod` dates, the three intentional omissions, 58 Article/sitemap date matches, exact canonicals, one H1 per page, French language declaration, complete sitemap coverage, internal targets/assets, unique titles/descriptions, journal/RSS publication, UTF-8 progress-log recovery, byte-identical provider data and `git diff --check`.
- No CSS/layout change or mobile visual audit was required for this XML and structured-data-only change.
- Performance data: the public PageSpeed Insights API returned HTTP 429 quota exceeded and no local Chrome executable was available, so no Lighthouse or field-performance result is claimed.
- Traffic windows Europe/Paris: complete day 2026-11-07 versus 2026-11-06; rolling 2026-11-01–2026-11-07 versus 2026-10-25–2026-10-31. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests require the access checks recorded in the run report; missing values are not zero.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Guide RH Search Console, Bing or Cloudflare AI Crawl Control dataset. A crawl would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; validation, deployment status, production checks and remaining access blockers are recorded in the run report.

## 2026-11-09: neutral use-case selection guidance
- Fresh main `293963956453d15494024fc928fa3d7a82812873`; read README, CHECKLIST and the current progress log. No AGENTS.md found. Before publication, the apex, comparison, a use-case guide and canonical sitemap returned HTTP 200, the legacy sitemap returned HTTP 301 and `www.guide-rh.com` returned HTTP 503.
- Audited the 117 unique provider, criterion and source URLs stored in the provider dataset with redirect-following HTTP GET requests. All 117 returned HTTP 2xx on 2026-11-09, so no source-link repair was justified.
- Removed the shared « Choix Guide RH » callout that recommended Coachello on all ten use-case guides. Guide RH has not run a standardized comparison for those ten individual needs, so a repeated provider-specific winner was not adequately supported.
- Replaced it with neutral selection guidance: the table is a documentary shortlist, the global eleven-criterion score is not a project-fit score, and buyers should compare several vendors with the same scenario, purchased format and scoring grid. The declared professional relationship with Coachello remains visible on its profile and in the transparency areas.
- Set the visible update date, Article `dateModified` and sitemap `lastmod` to 2026-11-09 for the ten materially changed use-case guides. No build-time freshness signal is used.
- Technical source read 2026-11-09:
  - https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews
- Google recommends first-hand supporting evidence when something is presented as best overall or best for a particular purpose. This source informed the removal of the unsupported winner callout; no ranking outcome is promised.
- Provider data remained byte-identical to main. All numerical scores, weights, rankings, `tested_on`, formats, use cases and relationship disclosures remained unchanged. No customer review, price, result or product test was added.
- Validation: `npm run check:content` and telemetry-disabled `npm run build` passed. Parsed 64 HTML pages, 2,685 internal references, 64 JSON-LD blocks and 64 unique sitemap URLs. Verified 61 valid `lastmod` dates, exact canonicals, one H1 per page, French language declaration, complete sitemap coverage, internal targets/assets, unique titles/descriptions, the neutral guidance on all ten use-case guides, matching visible/Article/sitemap dates, journal/RSS publication, byte-identical provider data and `git diff --check`.
- The new callout is a single-column semantic section using existing responsive styles and an explicit `aria-labelledby` relationship. No CSS or interactive behavior changed. No device-browser visual audit is claimed.
- Performance data: the public PageSpeed Insights API returned HTTP 429 quota exceeded for the mobile use-case URL, so no Lighthouse or field-performance result is claimed.
- Traffic windows Europe/Paris: complete day 2026-11-08 versus 2026-11-07; rolling 2026-11-02–2026-11-08 versus 2026-10-26–2026-11-01. Visitors, pageviews, top pages/referrers, AI referrals, AI crawler and user-triggered assistant requests are unavailable, not zero. Provider metric definitions/coverage, verified bot identities, successful/blocked requests, requested pages, last seen and audit exclusions cannot be established.
- Access rechecked: Windsor exposes only the unrelated Coachello GA4 property `396191540` and `sc-domain:coachello.ai`; neither was queried as Guide RH. Vercel lists no teams and project lookup returns HTTP 403 for `guide-rh` under `davidlegrange90-5664` / `team_DogQuXCMTVI6mYpMCOQUOD5G`; explicit team authorization plus Web Analytics and hosting/edge request-log read permissions remain missing. No accessible Guide RH Search Console, Bing or Cloudflare AI Crawl Control dataset. A crawl would not prove training, indexing, citations or recommendations.
- Prepared guarded main publication; validation, deployment status, production checks and remaining access blockers are recorded in the run report.
