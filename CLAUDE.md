# CLAUDE.md - Wedding RSVP Project for Marie & Dante

## 🎯 Agent Role
You are a senior expert in modern web development specializing in cutting-edge stacks. You have mastered:
- **Next.js 14+** (App Router, Server Components, API Routes)
- **React 18+** (Hooks, Context, Performance)
- **TypeScript** (Strict types, Interfaces)
- **Tailwind CSS** (Responsive, Custom configs)
- **shadcn/ui** (Components, Theming)
- **Supabase** (Auth, Database, Real-time)
- **Framer Motion** (Smooth animations)
- **React Hook Form + Zod** (Validation)

### Expected Behavior:
- ✅ **Be critical and proactive**: Challenge technical choices if you see better solutions
- ✅ **Ask questions**: Never assume, always ask for clarification
- ✅ **Suggest improvements**: UX, performance, accessibility, SEO
- ✅ **Explain your decisions**: Justify why you choose a particular approach
- ✅ **Clean code**: Reusable components, Next.js best practices
- ✅ **Responsive first**: Mobile first, then desktop

---

## 📋 Project Description

Wedding RSVP website for Marie & Dante with 2 main pages + 1 admin dashboard.

### Tech Stack
```json
{
  "framework": "Next.js 14+ (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "ui": "shadcn/ui",
  "animations": "Framer Motion",
  "forms": "React Hook Form + Zod",
  "database": "Supabase (PostgreSQL)",
  "hosting": "Vercel",
  "libraries": [
    "react-hot-toast",
    "lucide-react",
    "swiper",
    "react-intersection-observer"
  ]
}
```

### Color Palette 🎨
```css
/* Main colors */
--champagne: #F7E7CE      /* Light champagne beige */
--champagne-dark: #E6D5B8 /* Dark champagne */
--grenadine: #C24D4D      /* Grenadine red */
--grenadine-dark: #A63D3D /* Dark grenadine */
--cream: #FAF7F2          /* Cream for backgrounds */
--gold: #D4AF37           /* Gold for accents */
--text-dark: #2C2C2C      /* Main text */
--text-light: #6B6B6B     /* Secondary text */
```

**Color Usage:**
- Backgrounds: Light champagne and cream
- Main buttons: Grenadine with grenadine-dark hover
- Accents: Gold for elegant details
- Text: Dark for readability

---

## 🏗️ Site Structure

### Page 1: Home (`/` or `/home`)

#### Section 1: Hero
```
┌─────────────────────────────────────┐
│                                     │
│      "Marie and Dante Wedding"      │
│        (Large, elegant title)       │
│                                     │
│   [Photo 1] [Photo 2] [Photo 3]    │
│   (Cascading fade-in animations     │
│    with Framer Motion)              │
│                                     │
└─────────────────────────────────────┘
```
**Specs:**
- Title: Font `Playfair Display` or `Great Vibes`, size ~64px
- Photos: Landscape format, 4:3 ratio, `fadeInUp` animations with delay
- Generous spacing between title and photos

#### Section 2: Locations (Horizontal Layout)
```
┌──────────────────┬──────────────────┐
│                  │                  │
│  [Church Photo]  │ [Restaurant Photo]│
│                  │                  │
│   📍 Location    │   📍 Location    │
│                  │                  │
└──────────────────┴──────────────────┘
```
**Specs:**
- Layout: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Photos: Same height, hover effect (slight zoom)
- "Location" buttons:
  - Grenadine color
  - Map Pin icon (lucide-react)
  - External links to Google Maps
  - `target="_blank" rel="noopener noreferrer"`

#### Section 3: RSVP (Centered)
```
┌─────────────────────────────────────┐
│                                     │
│           [RSVP Button]             │
│        (Large, centered, animated)  │
│                                     │
└─────────────────────────────────────┘
```
**Specs:**
- Large button (~300px width), generous height
- Subtle pulse animation
- Navigation to `/rsvp/[family]`

#### Section 4: Wedding List
```
┌─────────────────────────────────────┐
│         "Wedding List"              │
│                                     │
│  "Contribute to Our Happiness       │
│   We have created a special         │
│   wedding registry so that you      │
│   can contribute to our new         │
│   chapter in life. Every gift       │
│   is a blessing and a token of      │
│   affection that we will cherish    │
│   forever."                         │
│                                     │
│      [💝 Contribute via PayPal]     │
│                                     │
└─────────────────────────────────────┘
```
**Specs:**
- Slightly different background (champagne-dark)
- Centered text, max-width 600px
- PayPal button with heart icon
- External link to PayPal account

---

### Page 2: RSVP Form (`/rsvp/[family]`)

#### Dynamic Functionality
**URL: `/rsvp/Mosleh`** → Displays form for Mosleh family

#### Two States:

##### State 1: Form Not Submitted Yet
```
┌─────────────────────────────────────┐
│   RSVP - Mosleh Family              │
│                                     │
│   Phone Number: [____________]      │
│                                     │
│   Family Members Attending Church:  │
│   ☑ Marie                           │
│   ☑ Antoine                         │
│   ☐ Elie                            │
│   ☑ Adele                           │
│                                     │
│   Family Members Attending          │
│   Restaurant:                       │
│   ☑ Marie                           │
│   ☐ Antoine                         │
│   ☐ Elie                            │
│   ☑ Adele                           │
│                                     │
│   [Confirm Attendance]              │
│                                     │
└─────────────────────────────────────┘
```

##### State 2: Form Already Submitted
```
┌─────────────────────────────────────┐
│                                     │
│   ✅ Response Already Submitted     │
│                                     │
│   Thank you! Your response has      │
│   already been recorded.            │
│                                     │
│   If you need to change your        │
│   response, please contact          │
│   Marie or Dante directly.          │
│                                     │
│   [Back to Home]                    │
│                                     │
└─────────────────────────────────────┘
```

#### Form Interface
```typescript
interface RSVPFormData {
  familyName: string          // Pre-filled from URL
  phoneNumber: string         // Required
  
  // Church attendance
  churchAttendees: {
    memberId: string
    firstName: string
    attending: boolean
  }[]
  
  // Restaurant attendance
  restaurantAttendees: {
    memberId: string
    firstName: string
    attending: boolean
  }[]
}
```

**Specs:**
- Phone validation (format international or local)
- Two separate checkbox groups (church & restaurant)
- Same members listed in both groups
- Zod strict validation
- English error messages
- Success toast after submission
- Redirect to thank you page
- Store submission timestamp to prevent re-submission

---

### Page 3: Admin Dashboard (`/admin`)

#### Authentication
- Simple password protection (env variable)
- Or Supabase Auth for admin user
- Route: `/admin` or `/dashboard`

#### Dashboard Layout
```
┌─────────────────────────────────────────────────────────┐
│  Wedding RSVP Dashboard                    [Logout]     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  📊 Statistics                                          │
│  Total Families: 15                                     │
│  Total Responses: 12                                    │
│  Church Attendees: 42                                   │
│  Restaurant Attendees: 38                               │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  📋 Responses                                           │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │ Family: Mosleh              Date: 2026-01-15      │ │
│  │ Phone: +33 6 12 34 56 78                          │ │
│  │                                                   │ │
│  │ Church: ✅ Marie, ✅ Antoine, ❌ Elie, ✅ Adele   │ │
│  │ Restaurant: ✅ Marie, ❌ Antoine, ❌ Elie, ✅ Adele│ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │ Family: Dupond              Date: 2026-01-20      │ │
│  │ Phone: +33 6 98 76 54 32                          │ │
│  │                                                   │ │
│  │ Church: ✅ Martin, ✅ Josephine, ✅ Joseph        │ │
│  │ Restaurant: ✅ Martin, ✅ Josephine, ✅ Joseph    │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  [Export to CSV]                                        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Dashboard Features:**
- ✅ Statistics overview (total families, responses, attendees)
- ✅ List all responses with family details
- ✅ Show church vs restaurant attendance per person
- ✅ Filter by family name
- ✅ Sort by date submitted
- ✅ Export data to CSV
- ✅ Search functionality
- ✅ Responsive table/cards for mobile

---

## 🗄️ Database Structure (Supabase)

### Table: `families`
```sql
CREATE TABLE families (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_name TEXT UNIQUE NOT NULL,  -- Ex: "Mosleh"
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for fast search by name
CREATE INDEX idx_families_name ON families(family_name);
```

### Table: `members`
```sql
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,          -- Ex: "Marie", "Antoine"
  display_order INT DEFAULT 0,       -- For display sorting
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for fast retrieval of family members
CREATE INDEX idx_members_family ON members(family_id);
```

### Table: `rsvp_responses`
```sql
CREATE TABLE rsvp_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  phone_number TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(family_id)  -- Only one response per family
);

-- Index for dashboard queries
CREATE INDEX idx_rsvp_family ON rsvp_responses(family_id);
CREATE INDEX idx_rsvp_submitted ON rsvp_responses(submitted_at DESC);
```

### Table: `church_attendance`
```sql
CREATE TABLE church_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rsvp_id UUID REFERENCES rsvp_responses(id) ON DELETE CASCADE,
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  attending BOOLEAN NOT NULL,
  
  UNIQUE(rsvp_id, member_id)  -- Prevent duplicates
);

CREATE INDEX idx_church_rsvp ON church_attendance(rsvp_id);
```

### Table: `restaurant_attendance`
```sql
CREATE TABLE restaurant_attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rsvp_id UUID REFERENCES rsvp_responses(id) ON DELETE CASCADE,
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  attending BOOLEAN NOT NULL,
  
  UNIQUE(rsvp_id, member_id)  -- Prevent duplicates
);

CREATE INDEX idx_restaurant_rsvp ON restaurant_attendance(rsvp_id);
```

### Sample Data to Insert
```sql
-- Mosleh Family
INSERT INTO families (family_name) VALUES ('Mosleh');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE family_name = 'Mosleh'), 'Marie', 1),
  ((SELECT id FROM families WHERE family_name = 'Mosleh'), 'Antoine', 2),
  ((SELECT id FROM families WHERE family_name = 'Mosleh'), 'Elie', 3),
  ((SELECT id FROM families WHERE family_name = 'Mosleh'), 'Adele', 4);

-- Dupond Family
INSERT INTO families (family_name) VALUES ('Dupond');
INSERT INTO members (family_id, first_name, display_order) VALUES 
  ((SELECT id FROM families WHERE family_name = 'Dupond'), 'Martin', 1),
  ((SELECT id FROM families WHERE family_name = 'Dupond'), 'Josephine', 2),
  ((SELECT id FROM families WHERE family_name = 'Dupond'), 'Joseph', 3);
```

### Dashboard Query Example
```sql
-- Get all responses with attendance details
SELECT 
  f.family_name,
  rr.phone_number,
  rr.submitted_at,
  json_agg(DISTINCT jsonb_build_object(
    'member', m.first_name,
    'church', ca.attending,
    'restaurant', ra.attending
  ) ORDER BY m.display_order) as attendance
FROM rsvp_responses rr
JOIN families f ON f.id = rr.family_id
JOIN members m ON m.family_id = f.id
LEFT JOIN church_attendance ca ON ca.rsvp_id = rr.id AND ca.member_id = m.id
LEFT JOIN restaurant_attendance ra ON ra.rsvp_id = rr.id AND ra.member_id = m.id
GROUP BY f.family_name, rr.phone_number, rr.submitted_at
ORDER BY rr.submitted_at DESC;
```

---

## 🔧 Technical Configuration

### Environment Variables (`.env.local`)
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Admin Dashboard
ADMIN_PASSWORD=your_secure_password
# or use Supabase Auth with specific admin email

# PayPal
NEXT_PUBLIC_PAYPAL_LINK=https://paypal.me/yourlink

# Google Maps
NEXT_PUBLIC_CHURCH_MAP_LINK=https://maps.google.com/...
NEXT_PUBLIC_RESTAURANT_MAP_LINK=https://maps.google.com/...
```

### Tailwind Config (`tailwind.config.ts`)
```typescript
export default {
  theme: {
    extend: {
      colors: {
        champagne: {
          DEFAULT: '#F7E7CE',
          dark: '#E6D5B8',
        },
        grenadine: {
          DEFAULT: '#C24D4D',
          dark: '#A63D3D',
        },
        cream: '#FAF7F2',
        gold: '#D4AF37',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        vibes: ['Great Vibes', 'cursive'],
      },
    },
  },
}
```

---

## 📝 Required API Routes

### `GET /api/family/[name]`
Retrieves family info and members
```typescript
// Response
{
  family: { id: string, family_name: string },
  members: [
    { id: string, first_name: string, display_order: number }
  ],
  hasSubmitted: boolean  // Check if RSVP already exists
}
```

### `POST /api/rsvp`
Saves RSVP response
```typescript
// Request Body
{
  family_id: string,
  phone_number: string,
  church_attendance: [
    { member_id: string, attending: boolean }
  ],
  restaurant_attendance: [
    { member_id: string, attending: boolean }
  ]
}

// Response
{
  success: true,
  message: "RSVP submitted successfully"
}
```

### `GET /api/admin/responses`
Get all RSVP responses (requires auth)
```typescript
// Response
{
  statistics: {
    total_families: number,
    total_responses: number,
    church_attendees: number,
    restaurant_attendees: number
  },
  responses: [
    {
      family_name: string,
      phone_number: string,
      submitted_at: string,
      members: [
        {
          first_name: string,
          church: boolean,
          restaurant: boolean
        }
      ]
    }
  ]
}
```

### `POST /api/admin/login`
Admin authentication
```typescript
// Request
{ password: string }

// Response
{ success: boolean, token?: string }
```

---

## ✅ Development Checklist

### Phase 1: Setup
- [ ] Initialize Next.js + TypeScript
- [ ] Configure Tailwind with custom colors
- [ ] Install shadcn/ui and components
- [ ] Configure Supabase client
- [ ] Create database tables
- [ ] Insert sample family data

### Phase 2: Home Page
- [ ] Hero with styled title
- [ ] Photo gallery with animations
- [ ] Locations section (church + restaurant)
- [ ] RSVP button
- [ ] Wedding list section

### Phase 3: RSVP Page
- [ ] Dynamic route `/rsvp/[family]`
- [ ] Fetch family data
- [ ] Check if already submitted
- [ ] Form with React Hook Form
- [ ] Two checkbox groups (church & restaurant)
- [ ] Phone number validation
- [ ] Zod validation
- [ ] API submission
- [ ] Thank you page
- [ ] "Already submitted" state

### Phase 4: Admin Dashboard
- [ ] Admin route `/admin`
- [ ] Password protection / Auth
- [ ] Statistics cards
- [ ] Response list with filters
- [ ] Search functionality
- [ ] Export to CSV
- [ ] Responsive design

### Phase 5: API
- [ ] GET family route
- [ ] POST RSVP route
- [ ] GET admin responses route
- [ ] POST admin login route
- [ ] Error handling
- [ ] Server-side validation

### Phase 6: Polish
- [ ] Mobile responsive
- [ ] Framer Motion animations
- [ ] English error messages
- [ ] SEO meta tags
- [ ] Performance optimization
- [ ] Loading states
- [ ] Error boundaries

---

## 🚨 Key Points

### Critical Features
1. **Prevent Re-submission**: Check `hasSubmitted` before showing form
2. **Two Attendance Lists**: Separate checkboxes for church and restaurant
3. **Phone Required**: Validation for phone number format
4. **Admin Security**: Protect dashboard with password/auth
5. **All English**: Every label, message, button text in English

### Technical Challenges
- **State Management**: Track submission status per family
- **Form Validation**: Ensure at least one checkbox checked per section
- **Database Consistency**: Atomic transactions for RSVP submission
- **Dashboard Performance**: Optimize queries for large datasets
- **Export Feature**: Generate CSV with proper formatting

### Questions to Clarify
1. **Phone Format**: International (+33...) or local (06...)?
2. **Admin Access**: Single password or multiple admin users?
3. **Email Notifications**: Send confirmation to families?
4. **Date Limit**: Block submissions after specific date?
5. **Analytics**: Track page views, form abandonment?
6. **Backup**: Auto-backup of responses?

---

## 📞 Communication Protocol

**Before coding a major feature:**
1. Describe your approach
2. Ask for validation
3. Suggest alternatives if relevant

**When in doubt:**
- Ask the question explicitly
- Propose 2-3 options with pros/cons
- Wait for confirmation

**After each feature:**
- Summarize what was done
- Highlight points to test
- Propose next steps

---

## 🎯 Final Objective

An elegant, performant, and user-friendly wedding website where:
- Guests discover wedding information
- Each family easily RSVPs via personalized URL
- Separate tracking for church and restaurant attendance
- Data is properly stored in database
- Admins can view and export all responses
- No re-submission allowed (with clear messaging)
- Experience is smooth on mobile and desktop
- Design reflects wedding elegance (champagne & grenadine)
- **Everything is in English**

**Let's build something beautiful! 💍✨**