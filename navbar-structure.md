# Proposed Navbar Structure & Rationale

Based on the client's voice record summary and your notes, here is the proposed structure for the website's navigation bar, alongside the rationale for why each section was created based on the transcript.

## Design Rationale (Traceability to Transcript)

1. **About Us:** 
   - *Transcript Source:* "Define Vision, Mission, Goal, Objective, Structure, and Campus Locations..."
   - *Reasoning:* These are foundational elements of the institution. Grouping them under a standard "About Us" tab makes it intuitive for visitors to learn about the Institute.

2. **Academic Programs:** 
   - *Transcript Source:* "Include various academic programs: Master, Bachelor (National and International Curriculum), Associate, and TVET."
   - *Reasoning:* Grouping all educational offerings here. The transcript specifically requested "National and International Curriculum" for the Bachelor's degree, which explicitly requires a **nested dropdown** (3rd-tier menu) to avoid cluttering the main list.

3. **Admissions:** 
   - *Transcript Source:* Your notes mention "Addmission -> Academic program -> Addmission".
   - *Reasoning:* While admissions lead to academic programs, separating "Admissions" into its own top-level link makes it highly visible for prospective students looking for requirements, dates, and application methods. 

4. **Student Life:** 
   - *Transcript Source:* "Detail Student Life activities, including Self-Study, Dormitory, Canteen (Food and Beverage), and Extra-Curriculum." & "Outline Social Events... Feature Graduation ceremonies..."
   - *Reasoning:* We created a dedicated "Facilities" sub-menu to group physical spaces (Dormitory, Canteen, Self-Study), and kept "Extra-Curricular", "Social Events", and "Graduation" as sibling items since they represent activities/events rather than physical spaces. The transcript emphasized photos for events and graduation, making this section highly visual.

5. **International Relations:** 
   - *Transcript Source:* "Establish Academic Exchange programs, specifically Lecture Exchange and Student Exchange (including Student Mobility)..." & Notes: "Asian partner, China + Asian, Europe partner".
   - *Reasoning:* We created a top-level "International Relations" category. Inside, we used a nested structure to separate the *Exchange Programs* (Lecturer vs. Student) from the *Partnerships* (Asian vs. European), keeping it highly organized.

6. **Journal & Research:** 
   - *Transcript Source:* Your notes mentioned "Journal".
   - *Reasoning:* Standard academic websites usually have a dedicated area for research and academic journals. This accommodates that specific keyword.

---

## Proposed `navLinks` Data Structure for `Navbar.tsx`

To implement this, you will need to update your `navLinks` array in `src/components/layout/Navbar.tsx`. The new requirement for nested menus (e.g., Bachelor -> National/International) means you will need to update the UI code to support a `nestedItems` property.

```typescript
const navLinks = [
  {
    name: { english: "About Us", khmer: "អំពីវិទ្យាស្ថាន" },
    href: "/about",
    subItems: [
      // Sourced from: "Define Vision, Mission, Goal, Objective, Structure, and Campus Locations"
      { label: { english: "Vision, Mission & Goals", khmer: "ទស្សនវិស័យ បេសកកម្ម និងគោលដៅ" }, href: "/about/vision-mission-goals" },
      { label: { english: "Organization Structure", khmer: "រចនាសម្ព័ន្ធស្ថាប័ន" }, href: "/about/structure" },
      { label: { english: "Founder & Principal", khmer: "ស្ថាបនិក និងនាយកវិទ្យាស្ថាន" }, href: "/about/founder-and-principal" },
      { label: { english: "Campus Locations", khmer: "ទីតាំងសាខា" }, href: "/about/campuses" },
      { label: { english: "Contact", khmer: "ទំនាក់ទំនង" }, href: "/about/contact" },
    ]
  },
  {
    name: { english: "Academic Programs", khmer: "កម្មវិធីសិក្សា" },
    href: "/programs",
    subItems: [
      // Sourced from: "Master, Bachelor (National and International Curriculum), Associate, and TVET"
      { label: { english: "Master Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់" }, href: "/programs/master" },
      { 
        label: { english: "Bachelor Programs", khmer: "ថ្នាក់បរិញ្ញាបត្រ" }, 
        href: "/programs/bachelor",
        nestedItems: [ // Requires UI update to render nested menus
          { label: { english: "National Curriculum", khmer: "កម្មវិធីសិក្សាថ្នាក់ជាតិ" }, href: "/programs/bachelor/national" },
          { label: { english: "International Curriculum", khmer: "កម្មវិធីសិក្សាអន្តរជាតិ" }, href: "/programs/bachelor/international" },
        ]
      },
      { label: { english: "Associate Programs", khmer: "ថ្នាក់បរិញ្ញាបត្ររង" }, href: "/programs/associate" },
      { label: { english: "TVET Programs", khmer: "កម្មវិធីបណ្តុះបណ្តាលបច្ចេកទេស និងវិជ្ជាជីវៈ" }, href: "/programs/tvet" },
    ]
  },
  {
    name: { english: "Admissions", khmer: "ការចុះឈ្មោះចូលរៀន" },
    href: "/admissions",
    subItems: [
      // Sourced from: "Addmission -> Academic program -> Addmission" notes
      { label: { english: "How to Apply", khmer: "របៀបចុះឈ្មោះ" }, href: "/admissions/how-to-apply" },
      { label: { english: "Requirements", khmer: "លក្ខខណ្ឌតម្រូវ" }, href: "/admissions/requirements" },
      { label: { english: "Intake Dates", khmer: "កាលបរិច្ឆេទចូលរៀន" }, href: "/admissions/intake-dates" },
      { label: { english: "Tuition Fees", khmer: "តម្លៃសិក្សា" }, href: "/admissions/tuition-fees" },
      { label: { english: "Scholarships", khmer: "អាហារូបករណ៍" }, href: "/scholarships" },
    ]
  },
  {
    name: { english: "Student Life", khmer: "ជីវិតនិស្សិត" },
    href: "/student-life",
    subItems: [
      { 
        label: { english: "Facilities", khmer: "បរិក្ខារ" }, 
        href: "/student-life/facilities",
        // Sourced from: "Self-Study, Dormitory, Canteen (Food and Beverage)"
        nestedItems: [
          { label: { english: "Self-Study Area", khmer: "កន្លែងស្វ័យសិក្សា" }, href: "/student-life/facilities/self-study" },
          { label: { english: "Dormitory", khmer: "អន្តេវាសិកដ្ឋាន" }, href: "/student-life/facilities/dormitory" },
          { label: { english: "Canteen (Food & Drink)", khmer: "អាហារដ្ឋាន" }, href: "/student-life/facilities/canteen" },
        ]
      },
      // Sourced from: "Extra-Curriculum" and "Social Events" and "Graduation"
      { label: { english: "Extra-Curricular", khmer: "សកម្មភាពក្រៅម៉ោង" }, href: "/student-life/extra-curricular" },
      { label: { english: "Social Events", khmer: "ព្រឹត្តិការណ៍សង្គម" }, href: "/student-life/social-events" },
      { label: { english: "Graduation", khmer: "ការបញ្ចប់ការសិក្សា" }, href: "/student-life/graduation" },
    ]
  },
  {
    name: { english: "International Relations", khmer: "ទំនាក់ទំនងអន្តរជាតិ" },
    href: "/international",
    subItems: [
      { 
        label: { english: "Academic Exchange", khmer: "កម្មវិធីផ្លាស់ប្តូរសិក្សា" }, 
        href: "/international/exchange",
        // Sourced from: "Lecture Exchange and Student Exchange (including Student Mobility)"
        nestedItems: [
          { label: { english: "Lecturer Exchange", khmer: "ការផ្លាស់ប្តូរសាស្ត្រាចារ្យ" }, href: "/international/exchange/lecturer" },
          { label: { english: "Student Exchange & Mobility", khmer: "ការផ្លាស់ប្តូរនិស្សិត" }, href: "/international/exchange/student" },
        ]
      },
      { 
        label: { english: "Our Partners", khmer: "ដៃគូសហការ" }, 
        href: "/international/partners",
        // Sourced from notes: "asian partner , china + asian, erupe partner"
        nestedItems: [
          { label: { english: "Asian Partners (incl. China)", khmer: "ដៃគូអាស៊ី" }, href: "/international/partners/asian" },
          { label: { english: "European Partners", khmer: "ដៃគូអឺរ៉ុប" }, href: "/international/partners/european" },
        ]
      },
    ]
  },
  {
    // Sourced from notes: "Jounal"
    name: { english: "Journal & Research", khmer: "ស្រាវជ្រាវ និងទិនានុប្បវត្តិ" },
    href: "/research",
    subItems: [
      { label: { english: "Academic Journal", khmer: "ទិនានុប្បវត្តិសិក្សា" }, href: "/research/journal" },
      { label: { english: "Publications", khmer: "ការបោះពុម្ពផ្សាយ" }, href: "/research/publications" },
    ]
  }
];
```

## Required UI Changes in `Navbar.tsx`

Because the client wants nested sub-menus (e.g., hovering over "Bachelor Programs" should reveal "National" and "International"), your current `Navbar.tsx` needs to be updated to support a 3rd tier of navigation.

1. **Type Definition Update:** You'll need to define an interface for the `navLinks` that includes an optional `nestedItems` array on the `subItems`.
2. **Desktop Rendering (`<nav className="hidden lg:flex...">`):** When rendering `subItems`, you need to check if `subItem.nestedItems` exists. If it does, render it as a button that triggers a sub-dropdown that pops out to the right side of the main dropdown.
3. **Mobile Rendering:** In the mobile menu (`{isOpen && ...}`), you'll need another level of accordion toggle for items that have `nestedItems`.

---

## Page Content Guidelines (Based on Client Transcript)

Since the client emphasized visual content and comprehensive documentation, here is a guide on how the actual page content for these sections should be structured when you start building the pages:

### 1. About Us Pages
- **Content:** Detailed textual documentation of the Vision, Mission, Goal, Objective, and Structure.
- **Visuals:** Professional photography of the campus locations, founders, and the principal. 
- **Layout:** Clean, authoritative layout with clear typography that conveys trust and prestige.

### 2. Academic Programs Pages
- **Content:** Comprehensive lists of modules or subjects for each program (Master, Bachelor, Associate, TVET). You must provide clear distinctions between the National and International Curricula.
- **Visuals:** Photos of students engaged in learning, modern classrooms, or specialized facilities.
- **Layout:** Use accordions or tabs to organize dense information (like semesters or course lists) without overwhelming the user.

### 3. Admissions Pages
- **Content:** Step-by-step application guides, clear data tables for tuition fees, and prominent intake dates.
- **Visuals:** Infographics showing the "Addmission -> Academic program -> Addmission" flow step-by-step.
- **Layout:** Highly actionable pages with prominent "Apply Now" buttons and downloadable requirement checklists.

### 4. Student Life Pages (Highly Visual)
- **Content:** Details on self-study areas, dormitory rules/amenities, canteen offerings (Food and Beverage), and overviews of extra-curricular activities.
- **Visuals (CRITICAL):** The client explicitly requested *photographic evidence* here. Include large, high-quality image galleries for social events, festivals, community activities, and especially **Graduation ceremonies** (they requested "multiple photos" for this).
- **Layout:** Masonry grids, sliders, or carousels for photo galleries. The design here should be vibrant and energetic.

### 5. International Relations Pages
- **Content:** Details on exchange programs (Lecturer and Student Mobility) and profiles of partner universities (Asian, China, and European).
- **Visuals (CRITICAL):** The client explicitly asked for **historical photos** of past lecture and student exchanges. Include logos of partner institutions.
- **Layout:** Interactive maps or grids showing partner locations, and a dedicated gallery component for historical exchange photos.

### 6. Next Steps & Collaboration
- **Documentation Gathering:** The transcript notes a "significant time commitment required... and the need for efficient collaboration with instructors."
- **Action Item:** Create a list of required documents and meeting schedules with instructors to gather all the course details and historical photos needed to populate these pages.

---

## File System Audit: What Exists vs. What Needs Creating

Based on an audit of your current `app/` directory routing, here is a status checklist of the proposed pages to help you track your progress.

### 1. About Us (`app/about/`)
- [x] `founder-and-principal/` (Exists)
- [x] `campuses/` (Exists)
- [x] `contact/` (Exists)
- [~] `vision-and-missions/` (Exists, but consider updating content to include "Goals & Objectives" as requested)
- [ ] `structure/` (**Needs Creation**)

### 2. Academic Programs (`app/programs/` - *New Folder*)
*Note: You currently have `app/admissions/master` and `app/admissions/bachelor`. I recommend migrating them to a dedicated `app/programs/` route to cleanly separate the "informational" program pages from the actual "admissions" process pages.*
- [~] `master/` (Currently exists in `app/admissions/master`)
- [~] `bachelor/` (Currently exists in `app/admissions/bachelor`. Needs sub-routes for `national` and `international` curricula)
- [ ] `associate/` (**Needs Creation**)
- [ ] `tvet/` (**Needs Creation**)

### 3. Admissions (`app/admissions/`)
- [x] `intake-dates/` (Exists)
- [x] `tuition-fees/` (Exists)
- [x] `app/scholarships/` (Exists in root level, which is fine)
- [ ] `how-to-apply/` (**Needs Creation**)
- [ ] `requirements/` (**Needs Creation**)

### 4. Student Life (`app/student-life/`)
- [ ] `facilities/self-study/` (**Needs Creation**)
- [ ] `facilities/dormitory/` (**Needs Creation**)
- [ ] `facilities/canteen/` (**Needs Creation**)
- [ ] `extra-curricular/` (**Needs Creation**)
- [~] `social-events/` (You currently have an `app/events/` folder, you could simply link the navbar to that existing route!)
- [ ] `graduation/` (**Needs Creation**)
*Note: Your existing `schedules` and `internships` pages were not mentioned in the transcript summary, but you should likely keep them in the navbar if they are still relevant to students.*

### 5. International Relations (`app/international/` - *New Folder*)
- [ ] `exchange/lecturer/` (**Needs Creation**)
- [ ] `exchange/student/` (**Needs Creation**)
- [ ] `partners/asian/` (**Needs Creation**)
- [ ] `partners/european/` (**Needs Creation**)

### 6. Journal & Research (`app/research/` - *New Folder*)
- [ ] `journal/` (**Needs Creation**)
- [ ] `publications/` (**Needs Creation**)

---

## Next Implementation Steps (How to Update & Implement)

Based on the audit above, here is how you should approach updating the existing pages versus implementing the new ones:

### 1. Updating Existing Pages (The `[~]` Items)
For pages that already exist but need updates based on the client's transcript:
- **`app/about/vision-and-missions/page.tsx`**: 
  - **Action:** Update the page title and textual content to include "Goals" and "Objectives". Ensure the UI layout can handle the additional text gracefully (perhaps by using a grid layout with distinct cards for Vision, Mission, Goal, and Objective).
- **`app/admissions/master` & `bachelor`**: 
  - **Action:** Move these folders into a new `app/programs/` directory.
  - **Update:** For the `bachelor` page, you must update the page layout to include a toggle switch or tabs that allow users to switch between viewing the **National Curriculum** and **International Curriculum** content seamlessly.

### 2. Implementing New Pages (The `[ ]` Items)
For pages that require entirely new implementations:
- **Prerequisite - Build Reusable Components:** Before creating the individual pages, I highly recommend building these reusable UI components in `src/components/`:
  - `<PhotoGallery />`: A Masonry grid or carousel component. You will need this on almost every new page (Student Life, Social Events, Graduation, and International Exchange historical photos).
  - `<CurriculumAccordion />`: An accordion component to cleanly list modules, subjects, and semesters for the Academic Programs.
  - `<PartnerLogoGrid />`: A responsive grid component for the International Relations Asian/European partner pages.
- **Page Implementation Strategy:**
  1. **Routing:** Create the missing folders and `page.tsx` files in the `app/` directory (e.g., `app/programs/associate/page.tsx`).
  2. **Consistency:** Wrap the content in your existing page layout container to ensure it matches the rest of the site.
  3. **Visuals:** Drop in the `<PhotoGallery />` where the transcript explicitly required "photographic evidence" or "historical photos".
