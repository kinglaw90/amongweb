---
description: "Use when designing, building, or modifying any UI component, page, or section for the Among Web project. Covers the full design system: colors, typography, spacing, components, dark mode, motion, and layout patterns."
applyTo: "**/*.{tsx,ts,css,js}"
---

# Among Web — DESIGN.md

Conversion-focused Malaysian web agency. Deep navy-to-black surfaces, electric blue primary, WhatsApp green as a co-equal CTA. Inter typeface, pill buttons, 2xl card radius. Built to rank on Google and convert visitors on mobile.

---

## 01 / COLORS

### Brand & Primary

| Name | Hex | Role |
|---|---|---|
| Electric Blue | `#2563eb` | Primary CTA, buttons, active states |
| Blue Hover | `#1d4ed8` | CTA hover |
| Blue Mid | `#3b82f6` | Icon accents, bullet dots |
| Blue Light | `#60a5fa` | Text on dark surfaces, labels |
| Blue Tint | `#eff6ff` | Icon badge bg (light mode) |
| Blue Dark Tint | `#1e3a8a` / `blue-950/50` | Icon badge bg (dark mode) |

### Gradient Accents (Hero Headline)

| Name | Value | Role |
|---|---|---|
| Gradient Start | `#60a5fa` | Blue anchor |
| Gradient Mid | `#818cf8` | Indigo transition |
| Gradient End | `#c084fc` | Violet tail |
| Direction | `135deg` | Diagonal, top-left to bottom-right |

### WhatsApp CTA (separate brand colour — never downgrade to outline)

| Name | Hex | Role |
|---|---|---|
| WhatsApp Green | `#22c55e` | Primary WhatsApp button bg |
| WhatsApp Hover | `#16a34a` | Hover state |

### Surfaces

| Name | Tailwind | Hex | Role |
|---|---|---|---|
| Brand Black | `#03020f` | near-black | Hero bg, navbar dark |
| Page Dark | `slate-950` | `#020617` | Main dark page bg |
| Panel Dark | `slate-900` | `#0f172a` | Cards, sidepanels (dark) |
| Hover Dark | `slate-800` | `#1e293b` | Hover surface (dark) |
| Page Light | `white` | `#ffffff` | Main light page bg |
| Tint Light | `slate-50` | `#f8fafc` | Alternate section (light) |
| Card Light | `white` | `#ffffff` | Cards (light) |
| Footer | `slate-900` | `#0f172a` | Footer bg |

### Text

| Name | Tailwind | Hex | Role |
|---|---|---|---|
| Heading Light | `slate-900` | `#0f172a` | H1–H3 on light |
| Heading Dark | `white` | `#ffffff` | H1–H3 on dark |
| Body Light | `slate-500` | `#64748b` | Paragraphs, descriptions |
| Body Dark | `slate-400` | `#94a3b8` | Paragraphs on dark |
| Muted Light | `slate-400` | `#94a3b8` | Captions, help text |
| Muted Dark | `slate-500` | `#64748b` | Captions on dark |
| Link / Accent | `blue-600` | `#2563eb` | Links (light) |
| Link Dark | `blue-400` | `#60a5fa` | Links (dark) |

### Borders

| Name | Tailwind | Role |
|---|---|---|
| Border Light | `slate-100` | Dividers, card borders (light) |
| Border Dark | `slate-800` | Dividers, card borders (dark) |
| Border Subtle | `white/[0.06]` | Hairline borders on dark sections |

### Status

| Name | Hex | Role |
|---|---|---|
| Success | `#22c55e` | Checkmarks, green badges |
| Rating | `#fbbf24` | Star ratings (amber-400) |
| Avatar from | `#3b82f6` | Gradient avatar start |
| Avatar to | `#8b5cf6` | Gradient avatar end |

---

## 02 / TYPOGRAPHY

**Font family:** Inter (`var(--font-inter)`) — loaded via `next/font/google`, `display: swap`. Applied globally.
**Feature settings:** `'cv02', 'cv03', 'cv04', 'cv11'` — cleaner numerals and punctuation.

| Role | Size | Weight | Line Height | Tracking | Notes |
|---|---|---|---|---|---|
| Hero H1 | `clamp(2.75rem, 5.5vw, 4.25rem)` | 900 (black) | 1.04 | `-0.02em` | Homepage hero only, inline gradient |
| Page H1 | `text-4xl md:text-6xl` | 800 (extrabold) | tight (1.25) | tight | All page heroes |
| Section H2 | `text-3xl md:text-4xl` | 800 (extrabold) | tight | tight | Section headings |
| Card H3 | `text-lg md:text-xl` | 700 (bold) | snug | — | Card/sub-section titles |
| Eyebrow Label | `text-xs` | 600 (semibold) | — | widest (0.1em) | Always uppercase, always `text-blue-500` / `text-blue-400` on dark |
| Body | `text-base` | 400 | relaxed (1.625) | — | Paragraphs |
| Body Small | `text-sm` | 400 | relaxed | — | Card descriptions, captions |
| Micro | `text-xs` | 400–500 | — | — | Labels, badges, timestamps |
| Nav Links | `text-sm` | 500 | — | — | Navbar items |
| Button | `text-sm` | 600 | — | — | All button labels |

> **Rule:** Main headings are always `font-extrabold` (800). Never use `font-bold` (700) for H1/H2. Never hard-code `text-black`.

### Eyebrow Pattern (always use exactly this)

```tsx
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
  Section Label
</span>
```
On dark backgrounds: `text-blue-400`.

---

## 03 / BUTTONS

Defined as global Tailwind component utilities in `globals.css`. Always use class names, never inline equivalents.

| Variant | Class | Notes |
|---|---|---|
| Primary | `.btn-primary` | `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200` |
| Secondary | `.btn-secondary` | `border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold px-6 py-3 rounded-full transition-all duration-200` |
| WhatsApp | Inline | `bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200` |

> **Rule:** All buttons use `rounded-full` (pill). Never `rounded-md`. Always include a trailing `fi-rr-arrow-right` icon for directional CTAs. WhatsApp button always uses the green variant, never outline.

---

## 04 / CARDS

### Standard Card
```
bg-white dark:bg-slate-900
rounded-2xl
border border-slate-100 dark:border-slate-800
shadow-sm hover:shadow-md
transition-shadow duration-200
p-7
```

### Feature Strip (dark section, no external border)
Wrap all in: `grid ... gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]`
Each cell: `bg-slate-950 p-7 hover:bg-slate-900 transition-colors duration-200`

### Image Card (service/portfolio grid)
```
relative rounded-2xl overflow-hidden
group block
```
Image: `fill object-cover transition-transform duration-500 group-hover:scale-105`
Overlay: `absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent`

### Icon Badge (inside cards)
```
w-10 h-10 rounded-xl
bg-blue-600/15
flex items-center justify-center shrink-0
```
Icon: `fi fi-{name} text-lg text-blue-400`

### Check List Item
```tsx
<li className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
  <span className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
    <i className="fi fi-rr-check text-xs text-green-500" aria-hidden="true" />
  </span>
  Feature text
</li>
```

### Bullet Dot
```tsx
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
```

### Avatar Initials
```tsx
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
  {name.charAt(0)}
</div>
```

---

## 05 / FORMS

Contact form (used on `/contact` and `ContactForm` component).

| Element | Classes |
|---|---|
| Label | `block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5` |
| Input / Textarea | `w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors` |
| Error state | Add `border-red-400 focus:ring-red-500` |
| Submit button | `.btn-primary w-full justify-center` |

Focus ring: `2px solid #3b82f6` via Tailwind `focus:ring-2 focus:ring-blue-500`.

---

## 06 / SPACING

Based on Tailwind's default 4px base unit.

| Token | px | Usage |
|---|---|---|
| 1 | 4px | Micro gap |
| 2 | 8px | Icon-to-label gap |
| 3 | 12px | Tight internal padding |
| 4 | 16px | Standard internal padding |
| 5 | 20px | Card internal padding top/bottom |
| 6 | 24px | Gap between related items |
| 7 | 28px | Card padding (`p-7`) |
| 8 | 32px | Section sub-group gap |
| 10 | 40px | Bottom margin before CTA |
| 12 | 48px | Section title bottom margin |
| 14 | 56px | Section label + heading block |
| 16 | 64px | Grid gap in large layouts |
| 20 | 80px | Standard section `py-20` |
| 24 | 96px | Feature section `py-24` |
| 32 | 128px | Hero top padding `pt-32` |

### Container
```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   — standard
max-w-4xl mx-auto px-4 sm:px-6 lg:px-8   — hero / centered content
max-w-3xl mx-auto px-4 sm:px-6 lg:px-8   — FAQ / editorial
```

---

## 07 / RADIUS

| Token | Value | Usage |
|---|---|---|
| `rounded-full` | 9999px | **All buttons**, WhatsApp badge, avatar circles, bullet dots |
| `rounded-2xl` | 16px | **All cards**, panels, dropdowns, drawers |
| `rounded-xl` | 12px | Icon badges `w-10 h-10`, image cards internals |
| `rounded-lg` | 8px | Nav item hover bg, small input chips |
| `rounded-full` (micro) | 9999px | `w-1.5 h-1.5` bullet dots, `w-5 h-5` check badges |

> **Rule:** Cards → `rounded-2xl`. Buttons → `rounded-full`. Icon badges → `rounded-xl`. Never use `rounded-md` for either cards or buttons.

---

## 08 / ELEVATION

| Level | Classes | Usage |
|---|---|---|
| 0 — Flat | (none) | Page sections, table rows |
| 1 — Subtle | `shadow-sm` | Default card resting state |
| 2 — Lifted | `shadow-md` | Card hover state, CTA buttons hover |
| 3 — Elevated | `shadow-xl` | Dropdowns, mobile drawer, modals |
| Focus | `ring-2 ring-blue-500 ring-offset-2` | Interactive focus states |

Backdrop blur (glass effect): `backdrop-blur-md` — used on sticky navbar and mobile menu overlay.

Background ambient orbs (dark sections only):
```
w-96 h-96 rounded-full bg-blue-600 opacity-5 blur-3xl   (top-left)
w-96 h-96 rounded-full bg-violet-600 opacity-5 blur-3xl  (bottom-right)
```

---

## 09 / MOTION

| Pattern | Classes / Style | Usage |
|---|---|---|
| Standard hover | `transition-colors duration-200` | All interactive elements |
| Shadow lift | `shadow-sm hover:shadow-md transition-all duration-200` | Cards, buttons |
| Image zoom | `transition-transform duration-500 group-hover:scale-105` | Image cards |
| Slide drawer | `transition-transform duration-300 ease-in-out` | Mobile nav drawer |
| Parallax orb | `transition: transform 1s cubic-bezier(0.25,0.46,0.45,0.94)` | Hero background |
| Entry fadeUp | `animation: fadeUp 0.85s ease forwards` + `opacity: 0` initial | Hero headline |
| Chevron flip | `transition-transform duration-200 group-open:rotate-180` | FAQ accordion |

`fadeUp` keyframe is defined in `tailwind.config.js`: `translateY(24px) opacity(0)` → `translateY(0) opacity(1)`.

---

## 10 / ICONS

Icon set: **Flaticon Regular Rounded** (`fi-rr-*`) — loaded globally via `icon-set.css`.

```tsx
<i className="fi fi-rr-{name} text-lg text-blue-400" aria-hidden="true" />
```

Always `aria-hidden="true"` — icons are decorative.

| Icon class | Usage |
|---|---|
| `fi-rr-rocket` | Landing page, delivery speed |
| `fi-rr-building` | Company, business |
| `fi-rr-bags-shopping` | E-commerce |
| `fi-rr-browser` | CMS, web pages |
| `fi-rr-calendar` | Booking, scheduling |
| `fi-rr-users` | CRM, team |
| `fi-rr-laptop-code` | Web application, dev |
| `fi-rr-arrow-right` | Directional CTA |
| `fi-rr-check` | Feature checkmark |
| `fi-rr-search` | SEO |
| `fi-rr-bolt` | Speed, performance |
| `fi-rr-mobile` | Responsive, mobile |
| `fi-rr-lock` | SSL, security |
| `fi-rr-chart-mixed` | Analytics |
| `fi-rr-angle-small-down` | Chevron, accordion |
| `fi-rr-menu-burger` | Hamburger menu |
| `fi-rr-cross` | Close / dismiss |
| `fi-brands-whatsapp` | WhatsApp |

---

## 11 / HERO PATTERN

All inner page heroes follow this exact structure:

```tsx
<div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
  <div className="absolute inset-0" aria-hidden="true">
    <Image src={url} alt="" fill className="object-cover opacity-20" sizes="100vw" priority />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
  </div>
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">
      Eyebrow Label
    </span>
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
      Page Headline
    </h1>
    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
      Subheadline
    </p>
  </div>
</div>
```

---

## 12 / DO's AND DON'Ts

### Do
- Always `rounded-full` for buttons and badge shapes
- Always `rounded-2xl` for cards and panel containers
- Always `font-extrabold` for H1 and H2 headings
- Always `shrink-0` on icons and avatars inside flex containers
- Always pair `group` on parent with `group-hover:` on children
- Always add `max-w-2xl` or `max-w-xl` constraints to subheadlines
- Always add `dark:` variants for every color — never assume light-only
- Always `aria-hidden="true"` on decorative icons and background images
- Always `object-cover` with explicit `sizes` prop on `<Image fill>`
- Use `gap-px bg-white/[0.06]` wrapper for seamless dark grid dividers

### Don't
- ❌ Use `rounded-md` for cards or buttons
- ❌ Use `font-bold` for H1/H2 — always `font-extrabold`
- ❌ Hard-code `text-black` — use slate scale only
- ❌ Build custom shadows — use `shadow-sm / shadow-md / shadow-xl`
- ❌ Use color decoratively — blue = action, green = WhatsApp/success, amber = rating, violet = gradient accent only
- ❌ Downgrade the WhatsApp CTA to outline or secondary — it's always `bg-green-500`
- ❌ Use `transition-all` on elements where only one property changes — prefer `transition-colors` or `transition-transform`
- ❌ Skip `backdrop-blur-md` on sticky/glass elements

---

## 13 / RESPONSIVE

| Breakpoint | px | Strategy |
|---|---|---|
| Base | 0–639px | Mobile-first, single column, full-width buttons |
| `sm` | 640px | 2-column grids, side-by-side CTAs |
| `lg` | 1024px | Desktop nav visible, 3-column grids, 2-col hero splits |
| `xl` | 1280px | Wider text blocks in split layouts |

- Touch targets: minimum `44×44px` — all buttons and nav items meet this via `px-6 py-3` or `p-2` with icon size
- Mobile drawer: `w-72 sm:w-80`, slides in from right (`translate-x-full → translate-x-0`)
- Desktop nav: hidden below `lg`, shown via `hidden lg:flex`
- Images: `sizes` always specified — `100vw` for hero, `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw` for grid cards

---

## 14 / AGENT PROMPT GUIDE

Quick reference for generating Among Web UI:

```
Primary CTA:     bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-semibold
WhatsApp CTA:    bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-2.5 font-semibold
Card shell:      bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md p-7
Icon badge:      w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center
Page dark bg:    bg-slate-950 (#020617) or #03020f (brand hero)
Hero overlay:    bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950
Eyebrow label:   text-xs font-semibold tracking-widest uppercase text-blue-500 (light) / text-blue-400 (dark)
Section pad:     py-20 (standard) / py-24 (feature dark)
Container:       max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Heading font:    font-extrabold (always, no exceptions for H1/H2)
Body font:       text-slate-500 dark:text-slate-400 leading-relaxed
Border:          border-slate-100 dark:border-slate-800
```

Sample prompt: *"Build a pricing section for Among Web using DESIGN.md — dark bg-slate-950, blue pill CTA buttons, rounded-2xl cards with shadow-sm, Inter font, eyebrow label in blue-400."*


- **Clarity over decoration** — every visual element must earn its place. No decorative noise.
- **Dark-first, light-polished** — the hero and dark sections set the brand tone; light mode is clean and minimal.
- **Conversion-focused** — every section should guide the eye toward a CTA. Reduce cognitive load.
- **Malaysian market** — WhatsApp is a primary CTA, not secondary. Treat it as seriously as any form.
- **Mobile-first** — design for 375px first, then scale up gracefully.

---

## Color Palette

### Primary — Blue
| Usage | Class |
|---|---|
| Primary CTA buttons | `bg-blue-600 hover:bg-blue-700` |
| Accent text / links | `text-blue-600 dark:text-blue-400` |
| Icon backgrounds | `bg-blue-50 dark:bg-blue-950/50` |
| Section label text | `text-blue-500` (light) / `text-blue-400` (dark) |
| Active nav indicator | `text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40` |
| Bullet dots | `bg-blue-500` |

### Surface — Slate
| Usage | Class |
|---|---|
| Page light bg | `bg-white` |
| Page dark bg | `bg-slate-950` |
| Alternate section | `bg-slate-50 dark:bg-slate-900` |
| Card bg | `bg-white dark:bg-slate-900` |
| Footer | `bg-slate-900 dark:bg-slate-950` |
| Border light | `border-slate-100` |
| Border dark | `dark:border-slate-800` |
| Hero/dark bg | `bg-slate-950` or `#03020f` (near-black brand background) |

### Text
| Usage | Class |
|---|---|
| Headline (light) | `text-slate-900` |
| Headline (dark) | `dark:text-white` |
| Body (light) | `text-slate-500` |
| Body (dark) | `dark:text-slate-400` |
| Muted | `text-slate-400 dark:text-slate-500` |
| On dark bg | `text-white`, subtext `text-slate-400` |

### Accent / Brand Gradients
- **Hero gradient headline**: `linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)` (blue → indigo → violet)
- **Background orbs**: `bg-blue-600 opacity-5 blur-3xl` and `bg-violet-600 opacity-5 blur-3xl`
- **Image overlay** (on dark hero): `bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950`
- **Image overlay** (on cards): `bg-gradient-to-t from-black/75 via-black/20 to-transparent`

### WhatsApp CTA
Always `bg-green-500 hover:bg-green-600 text-white`. This is a brand-level button — never downgrade it to an outline variant.

---

## Typography

**Font**: Inter (`var(--font-inter)`) — loaded via Next.js with `display: swap`. Applied globally.

### Scale
| Role | Classes |
|---|---|
| H1 (hero) | `text-4xl md:text-6xl font-extrabold leading-tight tracking-tight` |
| H1 (page) | `text-4xl md:text-6xl font-extrabold leading-tight tracking-tight` |
| H2 (section) | `text-3xl md:text-4xl font-extrabold leading-tight` |
| H3 (card/subheading) | `text-lg md:text-xl font-bold leading-snug` |
| Section label (eyebrow) | `text-xs font-semibold tracking-widest uppercase` |
| Body | `text-base leading-relaxed` |
| Small / caption | `text-sm leading-relaxed` |
| Micro | `text-xs` |

### Section Label Pattern
Every major section gets an eyebrow label above the headline. Always use this exact pattern:
```tsx
<span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
  Section Name
</span>
```
On dark backgrounds use `text-blue-400`.

---

## Spacing & Layout

### Container
Always `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

For narrower hero/text content: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`.
For single-column editorial: `max-w-3xl mx-auto px-4 sm:px-6 lg:px-8`.

### Section Padding
| Section type | Classes |
|---|---|
| Standard | `py-20` |
| Generous (dark/feature) | `py-24` |
| Hero | `pt-32 pb-24` |
| Tight | `py-12` |

### Grid
- 3-column feature grids: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- 2-column (text + visual): `grid grid-cols-1 lg:grid-cols-2 gap-16 items-start`
- 4-column (footer): `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10`

---

## Component Patterns

### Buttons
Defined as global Tailwind utilities in `globals.css` — always use these, never inline equivalents:

```css
.btn-primary  → bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full
.btn-secondary → border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold px-6 py-3 rounded-full
```

Buttons always use `rounded-full` (pill shape), never `rounded-md`. Include a trailing icon arrow for directional CTAs:
```tsx
<i className="fi fi-rr-arrow-right text-sm" aria-hidden="true" />
```

### Cards
Standard card shell:
```tsx
className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-200 p-7"
```

Feature strip (dark bg, no external border):
```tsx
className="bg-slate-950 p-7 hover:bg-slate-900 transition-colors duration-200"
```
Wrap multiples in:
```tsx
className="grid ... gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]"
```

### Icon Badges
For icons inside cards or feature lists:
```tsx
<div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center shrink-0">
  <i className="fi fi-rr-{name} text-lg text-blue-400" aria-hidden="true" />
</div>
```

### Check List Items
```tsx
<li className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
  <span className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
    <i className="fi fi-rr-check text-xs text-green-500" aria-hidden="true" />
  </span>
  Feature text
</li>
```

### Bullet Dots
For simple inline bullet lists:
```tsx
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
```

### Avatar Initials
```tsx
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
  {name.charAt(0).toUpperCase()}
</div>
```

---

## Hero Section Pattern

All page heroes follow this structure:
```tsx
<div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
  {/* Background image at 20% opacity */}
  <div className="absolute inset-0" aria-hidden="true">
    <Image src="..." alt="" fill className="object-cover opacity-20" sizes="100vw" priority />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
  </div>
  {/* Content */}
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">
      Section Label
    </span>
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
      Headline
    </h1>
    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
      Subheadline
    </p>
  </div>
</div>
```

---

## Dark Mode

- Use `dark:` prefix on every surface, text, and border class — never assume light-only.
- Light surfaces: `bg-white` → `dark:bg-slate-950` or `dark:bg-slate-900`
- Borders: `border-slate-100` → `dark:border-slate-800`
- Muted text: `text-slate-500` → `dark:text-slate-400`
- The root dark background is `#03020f` (close to `slate-950`) — used in Navbar and Hero.

---

## Icons

Uses **flaticon** `fi-rr-*` (regular rounded) icon set via CSS class. Loaded globally via `icon-set.css`.

```tsx
<i className="fi fi-rr-{icon-name} text-lg text-blue-400" aria-hidden="true" />
```

Always add `aria-hidden="true"` to icon elements since they're decorative.

Common icons used in this project:
- `fi-rr-rocket` — landing page / fast delivery
- `fi-rr-building` — company / business
- `fi-rr-bags-shopping` — e-commerce
- `fi-rr-browser` — CMS / web
- `fi-rr-calendar` — booking
- `fi-rr-users` — CRM / team
- `fi-rr-laptop-code` — web app / development
- `fi-rr-arrow-right` — directional CTA
- `fi-rr-check` — feature checkmark
- `fi-rr-search` — SEO / search
- `fi-rr-bolt` — speed / performance
- `fi-rr-mobile` — responsive / mobile
- `fi-rr-lock` — SSL / security
- `fi-rr-chart-mixed` — analytics

---

## Motion & Transitions

- Standard hover transitions: `transition-colors duration-200` or `transition-all duration-200`
- Shadow on hover: `shadow-sm hover:shadow-md`
- Image zoom on hover: `transition-transform duration-500 group-hover:scale-105`
- Background orb parallax: `transition: transform 1s cubic-bezier(0.25,0.46,0.45,0.94)`
- Slide-in drawer: `transition-transform duration-300 ease-in-out`
- Rotate chevron: `transition-transform duration-200`
- Page entry animations keyframes: `fadeUp` (translateY 24px → 0, opacity 0 → 1) and `fadeIn` (opacity 0 → 1) — defined in `tailwind.config.js`
- **Never** use `transition-all` on elements with many properties changing simultaneously — prefer specific property transitions.

---

## Image Handling

- Always use Next.js `<Image>` with `fill` for full-bleed/cover images, `sizes` prop always specified.
- Background images: `opacity-10` to `opacity-20` on dark sections.
- Portfolio/card images: `object-cover` with aspect ratio controlled by parent.
- Unsplash images: use `?w=1600&q=85&auto=format&fit=crop` for hero, `?w=800&q=85&auto=format&fit=crop` for cards.

---

## Do's and Don'ts

**Do:**
- Use `rounded-2xl` for cards and panels, `rounded-full` for buttons and badges.
- Use `gap-px` + `bg-white/[0.06]` for seamless grid dividers on dark sections.
- Use `backdrop-blur-md` on glass/sticky elements.
- Use `shrink-0` on all icons and avatars inside flex containers.
- Always pair `group` on a parent with `group-hover:` on children for coordinated hover effects.
- Add `max-w-2xl` or `max-w-xl` to subheadlines to keep line lengths readable.

**Don't:**
- Don't use `rounded-md` or `rounded-lg` for cards — always `rounded-2xl`.
- Don't use `rounded-md` for buttons — always `rounded-full`.
- Don't use plain `border` without a specific color — always specify `border-slate-100 dark:border-slate-800`.
- Don't build a custom shadow — use `shadow-sm`, `shadow-md`, or `shadow-xl` from Tailwind.
- Don't use `font-bold` for main headings — always `font-extrabold`.
- Don't use color for decoration only — every color should carry meaning (blue = action, green = WhatsApp/success, amber = rating).
- Don't forget `aria-hidden="true"` on all decorative icons and background images.
- Don't hard-code `text-black` — always use slate scale for text.
