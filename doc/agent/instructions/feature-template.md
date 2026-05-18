# FEATURE BREAKDOWN REQUEST

Please read the CLAUDE.md file and create a simple feature list for this project.

## Feature Template (Keep it Simple)

### Feature #X: [Feature Name]

**What it does:**
[1-2 sentences max]

**Must have:**
- [ ] Thing 1
- [ ] Thing 2
- [ ] Thing 3

**Depends on:**
Feature #Y (if applicable)

---

## Instructions

1. Read CLAUDE.md
2. List ALL features needed to complete the project
3. Number them in the order we should build them
4. Keep descriptions SHORT and clear
5. Group into phases (Setup, Pages, Backend, Polish)
6. **CREATE A SEPARATE .md FILE FOR EACH FEATURE** in `docs/features/` folder

---

## File Structure to Create
```
docs/
└── features/
    ├── 01_project_setup.md
    ├── 02_database_schema.md
    ├── 03_home_page.md
    ├── 04_rsvp_form.md
    ├── 05_admin_dashboard.md
    └── ...
```

---

## Individual Feature File Template

Each file should follow this format:
```markdown
# Feature #X: [Feature Name]

**Status:** 🔴 Not Started | 🟡 In Progress | 🟢 Completed

**Phase:** [Setup / Pages / Backend / Polish]

**Priority:** [Critical / High / Medium / Low]

---

## Description

[1-2 sentences describing what this feature does]

---

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
- [ ] Criterion 4

---

## Dependencies

**Must be completed after:**
- Feature #X: [Name]
- Feature #Y: [Name]

**Blocks:**
- Feature #Z: [Name]

---

## Implementation Notes

[Leave blank - to be filled during development]

---

## Testing Checklist

- [ ] Test case 1
- [ ] Test case 2
- [ ] Test case 3

---

## Completion Date

[To be filled when completed]
```

---

## Example Output 1: Simple Todo App

**Main Feature List (also create as `docs/FEATURES_OVERVIEW.md`):**
```
PHASE 1: SETUP
──────────────
Feature #1: Project initialization
Feature #2: Database schema

PHASE 2: PAGES
──────────────
Feature #3: Todo list page
Feature #4: Add todo form

PHASE 3: BACKEND
────────────────
Feature #5: Create todo API
Feature #6: Delete todo API

PHASE 4: POLISH
───────────────
Feature #7: Animations
Feature #8: Mobile responsive
```

**Individual Files Created:**

`docs/features/01_project_initialization.md`:
```markdown
# Feature #1: Project Initialization

**Status:** 🔴 Not Started

**Phase:** Setup

**Priority:** Critical

---

## Description

Initialize Next.js project with TypeScript, Tailwind CSS, and all required dependencies for the todo app.

---

## Acceptance Criteria

- [ ] Next.js 14+ installed and running
- [ ] TypeScript configured
- [ ] Tailwind CSS working
- [ ] Project runs on localhost:3000
- [ ] Git initialized

---

## Dependencies

**Must be completed after:**
- None (first feature)

**Blocks:**
- All other features

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] `npm run dev` starts without errors
- [ ] Tailwind classes render correctly
- [ ] TypeScript compilation works

---

## Completion Date

[To be filled when completed]
```

`docs/features/02_database_schema.md`:
```markdown
# Feature #2: Database Schema

**Status:** 🔴 Not Started

**Phase:** Setup

**Priority:** Critical

---

## Description

Create Supabase project and define the todos table with proper schema.

---

## Acceptance Criteria

- [ ] Supabase project created
- [ ] Todos table created
- [ ] Columns: id, title, completed, created_at
- [ ] RLS policies configured

---

## Dependencies

**Must be completed after:**
- Feature #1: Project initialization

**Blocks:**
- Feature #3: Todo list page
- Feature #4: Add todo form

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] Can insert todo via Supabase dashboard
- [ ] Can query todos
- [ ] RLS policies work correctly

---

## Completion Date

[To be filled when completed]
```

---

## Example Output 2: E-commerce Site

**Files to create:**
```
docs/
├── FEATURES_OVERVIEW.md
└── features/
    ├── 01_nextjs_setup.md
    ├── 02_database_setup.md
    ├── 03_product_list_page.md
    ├── 04_product_detail_page.md
    ├── 05_shopping_cart.md
    ├── 06_checkout_api.md
    ├── 07_mobile_responsive.md
    └── 08_loading_states.md
```

`docs/features/03_product_list_page.md`:
```markdown
# Feature #3: Product List Page

**Status:** 🔴 Not Started

**Phase:** Product Catalog

**Priority:** High

---

## Description

Display all products in a responsive grid layout with images, names, and prices.

---

## Acceptance Criteria

- [ ] Fetch products from Supabase
- [ ] Grid layout (3 columns desktop, 1 mobile)
- [ ] Product cards show image, name, price
- [ ] Click card to go to detail page
- [ ] Loading state while fetching

---

## Dependencies

**Must be completed after:**
- Feature #2: Database setup

**Blocks:**
- Feature #4: Product detail page

---

## Implementation Notes

[To be filled during development]

---

## Testing Checklist

- [ ] Products load correctly
- [ ] Grid is responsive
- [ ] Links work
- [ ] Images display properly

---

## Completion Date

[To be filled when completed]
```

---

## Example Output 3: Blog Platform

**Directory structure:**
```
docs/
├── FEATURES_OVERVIEW.md
└── features/
    ├── 01_project_init.md
    ├── 02_database_posts_authors.md
    ├── 03_auth_setup.md
    ├── 04_post_list_page.md
    ├── 05_single_post_page.md
    ├── 06_create_post_form.md
    ├── 07_admin_dashboard.md
    ├── 08_get_posts_api.md
    ├── 09_create_post_api.md
    ├── 10_delete_post_api.md
    ├── 11_comments_api.md
    ├── 12_search_functionality.md
    ├── 13_tags_categories.md
    ├── 14_rich_text_editor.md
    ├── 15_image_upload.md
    ├── 16_seo_optimization.md
    ├── 17_animations.md
    ├── 18_mobile_responsive.md
    └── 19_deploy_vercel.md
```

---

## Your Task

Now create:

1. **`docs/FEATURES_OVERVIEW.md`** - Complete feature list grouped by phases
2. **Individual feature files** in `docs/features/` - One `.md` file per feature

Use this naming convention:
- `01_project_setup.md`
- `02_database_schema.md`
- `03_supabase_config.md`
- `04_home_page_layout.md`
- `05_rsvp_form_page.md`
- etc.

Each file should follow the template above.

---

## Commands to Run First

Before generating features, create the directory:
```bash
mkdir -p docs/features
```

---

After creating all feature files, show me:
1. The complete file tree
2. A summary like: "Created 15 features across 4 phases"
3. Then ask: **"Ready to start implementing Feature #1?"**