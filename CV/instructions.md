task: |
  Edit the content of my HTML/CSS resume to align with the provided Job Description (JD).
  Keep layout, HTML structure, IDs, classes, and CSS unchanged. Edit text nodes only.

inputs:
  job_description: "{{PASTE_JD_HERE}}"
  resume_html: "{{PASTE_RESUME_HTML_HERE}}"

structure:
  # Use IDs if present; else match by headings.
  sections:
    contact: ["#contact-info"]
    summary: ["#summary","Summary"]
    achievements: ["#achievements","Key Achievements"]
    experience: ["#experience","Experience"]
    skills: ["#skills","Skills"]
    education: ["#education","Education"]

rules:
  - Preserve all job titles exactly; do not rename or re-level.
  - Do not change dates, employers, degrees, or certifications.
  - No fabrication. Use only facts present in the resume.
  - Keep HTML/CSS structure and attributes intact. Edit text nodes only.
  - Mirror JD tone and terminology only where matching skills already exist.
  - If JD specifies a minimum years-of-experience:
      - State exactly that minimum (e.g., "5+ years", "10+ years") in Summary.
      - Do not exceed the JD minimum even if resume shows more.
  - Recency window is JD-driven:
      - Parse dates in Experience; compute years relative to today.
      - If JD minimum is 5+ → emphasize ~last 5–7 years.
      - If JD minimum is 7+ → emphasize ~last 7–9 years.
      - If JD minimum is 10+ → emphasize ~last 10–12 years.
      - If unspecified → default to last 5–7 years.
  - Older roles beyond the selected window: minimize or collapse into an existing “Earlier Experience” line if present.
  - Uniform edits: if a skill/tech is minimized in Skills, remove or downplay matching bullets in Experience.
  - Keep existing metrics; do not invent numbers or tools.

priorities:
  - Summary: rewrite to foreground JD-critical strengths already present; include JD minimum years if specified.
  - Achievements: keep JD-relevant items; bring strongest to the top; trim off-target items.
  - Experience: within the JD window, move JD-relevant bullets to the top; merge or delete weaker bullets.
  - Older Experience: collapse/minimize while preserving titles and dates.
  - Skills: reorder to surface JD-relevant tech already listed; remove low-relevance items for focus.
  - Education: leave unchanged unless JD requires emphasis.

conditional_phrasing_examples:
  - jd_pattern: "5+ years"
    apply:
      summary_line:
        - "5+ years of experience in {{focus_area}}"
        - "5+ years delivering {{key_outcomes}} with {{tech_stack}}"
      recency_focus: "Emphasize roles and achievements from the last 5–7 years"
  - jd_pattern: "7+ years"
    apply:
      summary_line:
        - "7+ years in {{focus_area}}"
      recency_focus: "Emphasize the last 7–9 years"
  - jd_pattern: "10+ years"
    apply:
      summary_line:
        - "10+ years across {{focus_area}}"
        - "Senior {{role_type}} with 10+ years leading {{initiatives}}"
      recency_focus: "Emphasize the last 10–12 years"
  - jd_pattern: "range (e.g., 3–5 years)"
    apply:
      summary_line:
        - "{{upper_bound}} years in {{focus_area}}"
      recency_focus: "Emphasize within the past {{upper_bound}}–{{upper_bound_plus_two}} years"
  - jd_pattern: "unspecified"
    apply:
      summary_line:
        - "Experienced {{role_type}} in {{focus_area}}"
      recency_focus: "Default to last 5–7 years"

tone_alignment_templates:
  directive:
    detect: "JD uses verbs like own, lead, drive"
    convert:
      - "Owns {{area}} for {{scope}}"
      - "Leads {{team_size}} to deliver {{outcome}}"
      - "Drives {{kpi}} by {{metric_if_present}}"
  collaborative:
    detect: "JD emphasizes partnership and cross-functional work"
    convert:
      - "Partners with {{teams}} to deliver {{outcome}}"
      - "Collaborates with {{stakeholders}} to align on {{initiative}}"
  technical_depth:
    detect: "JD stresses hands-on tooling"
    convert:
      - "Implements {{tech}} to achieve {{result}}"
      - "Optimizes {{system}} via {{method}}"

allowed_changes:
  - Rewrite sentences for clarity and JD alignment.
  - Reorder bullets within roles and sections.
  - Delete or merge bullets that are off-target.
  - Consolidate duplicates.
  - Convert total experience phrasing to the JD minimum.

prohibited_changes:
  - Changing titles, employers, dates, degrees, or adding new ones.
  - Adding tools, metrics, or claims not present.
  - Altering or reordering HTML containers, IDs, classes, or CSS.

output_format:
  - Edited resume HTML:
      wrapper_start: "<!-- EDITED_RESUME_HTML_START -->"
      wrapper_end: "<!-- EDITED_RESUME_HTML_END -->"
  - Change Log JSON template:
      schema: |
        {
          "summary": "Concise overview of changes",
          "jd_focus": ["backend","cloud","leadership"],
          "highlights_brought_forward": [
            {"from_section":"achievements","to_section":"summary","reason":"JD emphasis"}
          ],
          "removed_or_minimized": [
            {"item":"Older role beyond JD window","reason":"Recency alignment"}
          ],
          "uniformity_actions": [
            {"change":"Removed deprecated skill from skills and matching role bullets"}
          ],
          "years_statement": {
            "jd_minimum":"5+ years",
            "resume_phrase_used":"5+ years",
            "note":"Total tenure is higher but intentionally stated at JD minimum"
          },
          "risk_checks": {
            "titles_unchanged": true,
            "no_fabrication": true,
            "structure_unchanged": true,
            "dates_unchanged": true
          }
        }

failure_mode: |
  If the JD requires skills or experience not present, omit them and proceed.
  Do not fabricate. Maintain consistency across Summary, Achievements, Experience, and Skills.
