# Indo Yachts UI System — Master Specification

## 1. Brand Positioning

Indo Yachts is a **luxury expedition charter brand**.

Design must communicate:

- Authority
- Calm confidence
- Generous space
- Understated luxury
- Precision
- Editorial elegance

Avoid:

- Playful design
- Over-decoration
- Overuse of gold
- Rounded consumer-style UI
- Loud gradients

---

# 2. Color System

## Primary Brand — Oxblood

| Token            | Value     | Usage                  |
| ---------------- | --------- | ---------------------- |
| `--oxblood`      | `#953334` | Primary CTA, headlines |
| `--oxblood-deep` | `#722728` | Hover state            |
| `--oxblood-dark` | `#5C1F20` | Darker accent          |

**Rules:**

- Never oversaturate oxblood.
- Never use bright red.
- Oxblood = authority, not urgency.

---

## Neutrals

| Token        | Value     | Usage              |
| ------------ | --------- | ------------------ |
| `--white`    | `#FFFFFF` | Primary background |
| `--snow`     | `#FAFAFA` | Section break      |
| `--mist`     | `#E8E8E8` | Borders            |
| `--silver`   | `#9A9A9A` | Labels             |
| `--pewter`   | `#6B6B6B` | Secondary text     |
| `--slate`    | `#4A4A4A` | Body               |
| `--charcoal` | `#1A1A1A` | Headlines          |

Never use warm off-whites except in controlled cream hero backgrounds.

---

## Expedition Palette (Deep Sea Context)

| Token          | Value     | Usage                 |
| -------------- | --------- | --------------------- |
| `--deep-sea`   | `#0A1628` | Dark sections, footer |
| `--abyss`      | `#061018` | Gradient endpoint     |
| `--lagoon`     | `#2B9E8F` | Accent CTA            |
| `--reef`       | `#1E7A6D` | Lagoon hover          |
| `--gold-muted` | `#B8A878` | Ratings, dividers     |

Gold is muted and never shiny.

---

# 3. Typography System

## Font Pairing

Primary Serif: **Cormorant Garamond**
Primary Sans: **Manrope**

Never substitute.

---

## Scale (16px base)

| Token         | Size |
| ------------- | ---- |
| `--text-xs`   | 9px  |
| `--text-sm`   | 11px |
| `--text-base` | 13px |
| `--text-md`   | 16px |
| `--text-lg`   | 18px |
| `--text-xl`   | 22px |
| `--text-2xl`  | 28px |
| `--text-3xl`  | 36px |
| `--text-4xl`  | 56px |
| `--text-5xl`  | 72px |

---

## Headline Rules

Font: Cormorant Garamond
Weight: 300
Line height: 1.05–1.1

Hero: 52–72px
Section titles: 36–56px
Subheadline: italic, weight 300

---

## Eyebrow Style

- Manrope
- 600 weight
- 0.15–0.2em letter spacing
- Uppercase
- 10–11px

Used for:

- Section labels
- Form eyebrow
- CTA eyebrow

---

## Body Copy

- Manrope
- 400 weight
- 1.7–1.85 line-height
- Slate color

Luxury = breathing room.

---

# 4. Spacing System

| Token | Value |
| ----- | ----- |
| XS    | 8px   |
| SM    | 16px  |
| MD    | 32px  |
| LG    | 64px  |
| XL    | 96px  |
| 2XL   | 128px |
| 3XL   | 192px |

**White space is mandatory.**

Never compress vertical spacing for convenience.

---

# 5. Layout Grid

Max container width:

- 1200px primary
- 1400px header
- 900px narrow reading width

Grid systems:

- 2 column split
- 3 column cards
- 4 column pillars

Mobile collapses to single column.

---

# 6. Header System

Derived from:

-
-

## Two Variants

### Header Dark (Transparent)

- Used over hero image
- White nav links
- White logo
- Background: transparent
- Scroll state converts to white background

### Header Light

- White background
- Deep-sea nav text
- Dark logo
- Subtle bottom border

---

## Header Height

96px fixed.

---

## Navigation

Font: Cormorant Garamond
Size: 18px
Weight: 400

Hover:

- Oxblood (light header)
- Soft white fade (dark header)

---

## Mega Menu

- White background
- 3px oxblood top border
- Drop shadow: subtle, deep
- 2-column grid (240px + 1fr)
- Featured cards include:

  - 3:2 image
  - Eyebrow
  - Serif title
  - Meta

Hover image zoom: 1.05 scale.

---

# 7. Footer System

Derived from

## Structure

- Deep Sea background
- Top vertical oxblood accent (48px)
- Center logo
- Horizontal nav links (11px uppercase)
- Bottom grid:

  - Left: sails + legal
  - Center: copyright
  - Right: IYBA

Bottom accent:

- 2px oxblood bar

Typography:

- 10px–11px
- Opacity reduced white

Luxury footer = calm + centered.

---

# 8. CTA Banner System

Derived from

## Structure

Background: Deep Sea
Centered content
Max width: 620px

Headline:

- Cormorant
- 28–38px

Body:

- Manrope
- 15px
- 0.7 opacity white

Button:

- Oxblood
- 12px uppercase
- 18px vertical padding
- Arrow shift on hover

---

# 9. Modal System

Overlay:

- rgba(10,22,40,0.95)

Modal:

- Max width 520px
- Top 3px oxblood accent
- Heavy drop shadow
- No rounded corners

---

## Form Fields

From

Fields:

- Name (required)
- Phone
- Email (required)
- Group size (required)
- Budget
- Textarea

Background:

- #F5F5F5 default
- White on focus
- Border gold-muted

No rounded inputs.

---

# 10. Button System

Primary:

- Oxblood background
- Uppercase
- 0.1em letter spacing

Hover:

- Oxblood-deep

Lagoon button:

- Used sparingly
- Diving contexts

No pill shapes.

---

# 11. Testimonial Systems

Derived from:

-
-

## Dark Featured Quote

- Deep Sea background
- Oversized quotation mark
- Serif italic quote
- Gold muted stars

## Split Layout

- 50/50 image + quote
- Gold divider line
- Navigation dots

## Minimal White Version

- Large serif quote
- Oxblood quote mark
- Thin gold divider

Testimonials must feel editorial, not commercial.

---

# 12. Hero Section

Height:

- 100vh
- Min 700px

Overlay:

- Deep Sea gradient 0.6 → 0.3 → 0.5

Headline:

- 52px serif
- Weight 300
- White

Scroll indicator:

- 1px oxblood fade line

---

# 13. Component Rules

## Cards

- No rounded corners
- 3:2 image ratio
- Subtle border or shadow
- Serif titles

## Dividers

- 1px mist (light)
- 1px rgba white 0.12 (dark)
- Gold muted for accent

---

# 14. Brand Pillars Layout

- 4 columns
- Serif titles
- Generous spacing
- No icons
- Text-driven

---

# 15. Animation Rules

Allowed:

- Subtle hover color transitions
- Image zoom 1.05
- Arrow shift 4px
- Fade in

Not allowed:

- Bounce
- Elastic easing
- Overly dynamic motion

---

# 16. Responsive Rules

Breakpoints:

- 1100px
- 768px
- 600px
- 480px

Grid collapses to single column.

Header becomes simplified.

Footer stacks vertically.

---

# 17. Absolute Do Not Break Rules

- Never change font pairing.
- Never add rounded corners.
- Never replace oxblood with red.
- Never tighten spacing.
- Never increase body text weight above 400.
- Never overuse gold.
- Never use playful UI patterns.

---

# 18. Implementation Priority Order

When building any new UI:

1. Typography
2. Spacing
3. Color correctness
4. Hierarchy
5. Alignment
6. Restraint

Luxury comes from subtraction.
