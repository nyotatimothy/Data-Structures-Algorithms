task: |
  Edit the content of my HTML/CSS resume to align with the provided Job Description (JD). 
  Keep layout, HTML structure, class names, and CSS untouched. Only edit text nodes.

inputs:
  job_description: "{{PASTE_JD_HERE}}"
  resume_html: "{{PASTE_RESUME_HTML_HERE}}"

rules:
  - Preserve role titles exactly as written in the resume.
  - Do not fabricate information. Use only facts already present.
  - Do not alter HTML/CSS structure, IDs, classes, or styles. Only text content may change.
  - If the JD specifies a minimum years of experience (e.g., "5+ years", "10+ years"), 
    explicitly state that minimum, even if more experience exists.
  - Adjust the resume focus window based on JD:
      - If JD requests 5+ years: foreground last 5–7 years of roles.
      - If JD requests 10+ years: foreground last 10–12 years of roles.
      - Roles much older than the JD horizon: remove or collapse into an "Earlier Experience" 
        section if it exists.
  - Highlight strengths already in the resume that match JD (backend, frontend, leadership, cloud, etc.).
  - Match tone and terminology of the JD using only existing resume content.
  - Apply changes uniformly across sections (if removed from skills, also remove from role bullets).
  - Do not invent metrics or tools not already listed.
  - Maintain dates and titles as-is.

priorities:
  - Reorder the top Summary/Skills to emphasize JD-critical strengths.
  - In most recent roles (based on JD-relevant years), move JD-relevant bullets to the top.
  - Merge, trim, or delete off-target bullets.
  - Minimize or collapse much older roles beyond JD-relevant window.
  - Reorder technologies/skills list to mirror JD focus.

allowed_changes:
  - Rewording bullets for clarity and JD alignment.
  - Reordering bullets within roles.
  - Deleting or merging bullets for conciseness.
  - Consolidating duplicate points.
  - Reducing total experience phrasing to the JD’s stated minimum.

prohibited_changes:
  - Altering job titles, dates, employers, or degrees.
  - Adding new employers, tools, certifications, or achievements not in resume.
  - Changing or reformatting HTML/CSS structure.

output_format:
  - Block 1: Edited resume HTML wrapped in:
      ```html
      <!-- EDITED_RESUME_HTML_START -->
      {{EDITED_RESUME_HTML}}
      <!-- EDITED_RESUME_HTML_END -->
      ```
  - Block 2: Change Log JSON wrapped in:
      ```json
      {
        "summary": "Overview of edits",
        "jd_focus": ["backend","cloud","leadership"],
        "highlights_brought_forward": [
          {"from_section":"Experience > Role X","to_section":"Summary","reason":"JD emphasizes backend"}
        ],
        "removed_or_minimized": [
          {"item":"Legacy role from 2010","reason":"Beyond JD horizon"}
        ],
        "uniformity_actions": [
          {"change":"Removed legacy mobile skill from skills and Role Y bullets"}
        ],
        "years_statement": {
          "jd_minimum":"5+ years",
          "resume_phrase_used":"5+ years",
          "note":"Actual >5 but stated exactly at JD minimum"
        },
        "risk_checks": {
          "titles_unchanged": true,
          "no_fabrication": true,
          "structure_unchanged": true,
          "dates_unchanged": true
        }
      }
      ```

failure_mode: |
  If JD requires skills or experience absent from resume, omit them.
  Do not fabricate. Return the best aligned edit possible.
