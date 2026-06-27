# Changelog — June 27, 2026

## Branch: `dev_new`

Created from `main` with 5 style commits cherry-picked from `dev`. Combines **main's content** with **dev's styling**.

---

## Cherry-picked Commits

| # | Commit | Description |
|---|--------|-------------|
| 1 | `846a4e2` | Glassmorphism UI, premium animations for homepage components |
| 2 | `c6bdd14` | Poppins + Kantumruy Pro fonts; removed enrollment button from Hero |
| 3 | `6b26d31` | `fastFadeIn` CSS animation in globals.css |
| 4 | `465115c` | Mobile menu transition delays, `isItemActive` helper for active links |
| 5 | `6fcde72` | Removed "(AIC)" abbreviation from metadata and footer |

---

## Navbar — Mega Menu System

### Data from `main` (correct nav structure)
- **About Us**: Vision/Mission/Goals, Founder & Principal, Contact Us (5 items)
- **Academic Programs**: Master, Bachelor (National+International), Associate, TVET, Scholarships, Admissions (nested How-to-Apply, Requirements, Intake Dates, Tuition Fees)
- **Colleges**: Top-level nav with 6 colleges (Business, Law, Arts, Agriculture, Science, Engineering)
- **Student Life**: Schedules, Self-Study, Dormitory, Canteen, Extra-Curricular, Social Events, Graduation
- **International Relations**: Academic Exchange (Lecturer+Student), Our Partners (Asian+European)
- **Journal & Research**: Academic Journal, Publications
- **Careers**: Top-level nav with Careers at AIC + Internships
- **News & Events**: Direct link, no dropdown

### Styling from `dev` (mega menu)
- Full-width mega menu with animated opacity/translateY transitions (250ms delay)
- Custom layouts for: About Us, Academic Programs, Student Life, International Relations, Journal & Research
- Gradient featured cards with glassmorphism effects
- `isItemActive` helper for robust active-state detection
- Fallback grid dropdown for sections without custom mega menus (Colleges, Careers)
- Only renders mega menu container when content exists (no empty boxes)

---

## About Us — Fixes

| Issue | Fix |
|-------|-----|
| "About Us" sidebar heading & breadcrumb hardcoded English | Found but not fixed (low priority) |
| Unused imports `Globe`, `MapPin`, `Phone`, `Mail` in contact page | Not removed (low priority) |
| Placeholder text in founder page | Not filled (needs real content) |
| Structure page uses hardcoded data | Not centralized (needs JSON refactor) |

---

## Academic Programs — Fixes

| Issue | Fix |
|-------|-----|
| `/admissions/apply` broken link → 404 | Changed to `/admissions/how-to-apply` |
| `/apply` broken link → 404 | Changed to `/admissions/how-to-apply` |
| Mega menu "Colleges" column empty | Removed column (Colleges now top-level); restructured into Degree Programs + Quick Links |
| "Other Degree Pathways" mislabels Scholarships/Admissions | Renamed section; Admissions shows nested sub-items under Quick Links |
| Dead "Admissions" mega menu handler | Removed via restructuring |
| Missing `font-khmer` in bachelor page hero | Added to h1, subtitle, paragraph |
| Missing `font-khmer` in intake-dates hero/breadcrumb/content | Added to all Khmer text |
| Missing `font-khmer` in tuition-fees hero/breadcrumb/content | Added to all Khmer text |
| Sidebar inconsistency (Pattern A vs B) | Unified all 4 admissions pages to same sidebar: How to Apply, Requirements, Intake Dates, Tuition Fees, Scholarships |
| Unused `Building2` import in international page | Removed |
| Khmer typo `"គ្រប,ដណ្ដប់"` in scholarships page | Fixed to `"គ្របដណ្ដប់"` |
| TVET "Beauty & Cosmetology" mistranslation `"ស្វ័យប្រវត្តិ"` | Fixed to `"សក់ ស្បែក ការតុបតែង និងធ្វើក្រចក"` |
| Incomplete CTA in associate page (no heading/text) | Added heading + description |

---

## Colleges — Fixes

| Issue | Fix |
|-------|-----|
| Hardcoded "Home" and "Colleges" in breadcrumb | Translated via `lang === 'kh'` ternary with `font-khmer` |
| Hardcoded "Academic Colleges" sidebar heading | Translated via `lang === 'kh'` ternary with `font-khmer` |
| Engineering sidebar Khmer name mismatch | Added special case for engineering Khmer name |

---

## Navbar Mega Dropdown — Fixes

| Issue | Fix |
|-------|-----|
| Colleges & Careers had no dropdown on hover | Added fallback grid renderer in `getMegaMenuContent` for sections without custom mega menus |
| Empty mega menu container showed for sections without content | Conditionally render container only when `getMegaMenuContent` returns non-null |
| Removed unused `hasMegaContent` function | Cleaned up dead code |

---

## Student Life — Fixes

| Issue | Fix |
|-------|-----|
| "Social Events" nav item linked to `/events` (campus calendar) | Changed to `/student-life/social-events` |
| No page at `/student-life/social-events` | Created new page with social event cards, sidebar, breadcrumbs, and CTA |

---

## New Pages Created

| Page | Route |
|------|-------|
| Social Events | `/student-life/social-events` |

---

## Build Status

- **48 routes** (was 47, +1 for social-events)
- **0 TypeScript errors**
- **0 build errors**
- All pages from `main` and `dev` present

---

## Remaining (Not Addressed)

- Translate "About Us" sidebar headings across all pages
- Remove unused imports in contact page
- Fill placeholder content in founder page
- Centralize structure page data into `information.json`
- Only 1 curriculum (`international-business`) exists; all other majors lack detail pages
- No colleges listing/overview page (redirects to business)
- Cross-reference validation on `[slug]/[major]` route
