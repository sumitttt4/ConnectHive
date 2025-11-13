# Figma Implementation Guide

## Design Tokens (All Tokenized)

### Colors
```
Primary:
- blue-600: #2563eb (primary CTA, links, accents)
- blue-700: #1d4ed8 (hover states)
- blue-50: #eff6ff (light backgrounds, badges)

Neutrals:
- slate-900: #0f172a (headings, high contrast text) - 7:1 contrast
- slate-700: #334155 (body text) - 4.5:1 contrast
- slate-600: #475569 (secondary text)
- slate-500: #64748b (muted text)
- slate-200: #e2e8f0 (borders)
- slate-50: #f8fafc (light backgrounds)

Background:
- white: #ffffff (cards, main bg)
- slate-900: #0f172a (dark sections)
```

### Typography Styles
```
Display (Hero):
- Font: Inter
- Size: 36px / 44px / 56px (sm/md/lg)
- Weight: 600 (semibold)
- Color: slate-900

Heading 1:
- Size: 36px
- Weight: 600
- Color: slate-900

Heading 2:
- Size: 28px / 32px
- Weight: 600
- Color: slate-900

Heading 3:
- Size: 18px / 20px
- Weight: 600
- Color: slate-900

Body Large:
- Size: 18px
- Weight: 400
- Color: slate-700

Body:
- Size: 14px
- Weight: 400
- Color: slate-700

Caption:
- Size: 12px
- Weight: 400/500
- Color: slate-600
```

### Spacing System (8pt Grid)
```
4px (0.25rem)
8px (0.5rem)
12px (0.75rem)
16px (1rem)
24px (1.5rem)
32px (2rem)
40px (2.5rem)
48px (3rem)
64px (4rem)
96px (6rem)
```

### Border Radius
```
Default: 12px (0.75rem)
Small: 8px (0.5rem)
Full: 9999px (pills, avatars)
```

### Shadows
```
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

## Auto-Layout Patterns

### Hero Section
```
Direction: Horizontal (2 columns on desktop)
Gap: 48px (lg:gap-12)
Padding: 96px vertical, 16px horizontal
Alignment: Center
```

### Feature Cards
```
Direction: Horizontal (3 columns)
Gap: 24px (gap-6)
Padding: 24px
Card Padding: 24px
Auto-resize: Hug contents vertically
```

### Testimonial Cards
```
Direction: Horizontal (3 columns)
Gap: 24px (gap-6)
Card Padding: 20px (p-5)
Avatar: Fixed 40px (h-10 w-10)
Text: Line clamp 2 lines
```

### Navbar (Sticky)
```
Position: Fixed top
Direction: Horizontal
Height: 64px (h-16)
Gap: 24px
Backdrop Blur: enabled
Background: white/95 with backdrop-filter
Z-index: 40
```

### Sticky CTA
```
Position: Fixed
Bottom: 24px (md: 32px)
Right: 24px (md: 32px)
Z-index: 50
Shadow: shadow-lg
Hover: scale-105, shadow-xl
```

## Component Variants

### Button
**Primary** (`default`)
- Background: blue-600
- Text: white
- Hover: blue-700
- Focus: ring-2 ring-blue-600 ring-offset-2

**Outline** (`variant="outline"`)
- Border: slate-200
- Text: slate-700
- Background: white
- Hover: bg-accent

**Ghost** (`variant="ghost"`)
- Background: transparent
- Text: slate-700
- Hover: bg-accent

**Sizes:**
- sm: h-8, px-3
- default: h-9, px-4
- lg: h-10, px-6

### Card States
**Default**
- Border: slate-200
- Background: white
- Shadow: shadow-sm
- Radius: 12px

**Hover** (Feature Cards)
- Transform: translateY(-6px) scale(1.01)
- Shadow: shadow-md
- Duration: 200ms

**Hero Card** (Product Mockup)
- Glow effect: shadow-[0_0_80px_rgba(37,99,235,0.15)]
- Border: gradient or blue tint

### Avatar
**Default**
- Size: 40px (h-10 w-10) for testimonials
- Size: 72px (h-[72px] w-[72px]) for match cards
- Radius: Full (rounded-full)
- Fallback: blue-50 bg, blue-600 text

**Hover** (Match Card Avatar)
- Transform: translateY(-4px)
- Shadow: shadow-lg
- Duration: 200ms

## Animations

### Entrance (Hero)
```
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
Duration: 400ms
Easing: ease-out
```

### Hover Transitions
```
Buttons: transition-colors duration-150 ease-in-out
Cards: transition-all duration-200
Avatars: transition-transform duration-200
```

### Sticky CTA
```
Entrance: fade-in-up animation
Hover: scale-105 + shadow-xl
Triggers: After 300px scroll
```

## Export Checklist

### Assets to Export
- [ ] Hero mockup @ 2x PNG (for performance)
- [ ] Hero mockup SVG (for crisp scaling)
- [ ] Logo marks (PH, IH, Twitter/X icons)
- [ ] Avatar placeholders (if not using pravatar.cc)

### Component Library
- [ ] Button (all variants + states)
- [ ] Card (default + hover + hero)
- [ ] Avatar (2 sizes + fallback)
- [ ] Chip/Badge
- [ ] Input (with focus ring)
- [ ] Navbar (sticky variant)

### Design System Files
- [ ] Color palette (saved as styles)
- [ ] Typography scale (saved as text styles)
- [ ] Spacing tokens (documented)
- [ ] Shadow tokens (saved as effects)
- [ ] Border radius tokens

## Code-to-Figma Mapping

| Component | Figma Component Name | Variants |
|-----------|---------------------|----------|
| `Button` | Button | primary, outline, ghost × sm, default, lg |
| `Card` | Card | default, hover, hero |
| `Avatar` | Avatar | small (40px), large (72px) |
| `Chip` | Chip/Badge | default |
| `Navbar` | Navbar | sticky |
| `MatchCard` | Match Card | default, hover |
| `TestimonialCard` | Testimonial | compact |

## Responsive Breakpoints
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Approach
- Stack columns on mobile (flex-col)
- 2-column grid on tablet (md:grid-cols-2)
- 3-column grid on desktop (md:grid-cols-3)
- Reduce padding on mobile (py-12 → md:py-24)

## Notes for Developers

1. **No Local Overrides**: All colors, shadows, and text styles use Figma tokens
2. **Auto-Layout**: Every frame uses auto-layout for consistent spacing
3. **Component Props**: Button variants, card states built as Figma variants
4. **Export Settings**: 
   - PNG @ 2x for raster images
   - SVG for icons and mockups
   - Optimize SVGs before export
5. **Accessibility**: 
   - Text contrast ≥4.5:1 for body (slate-700)
   - Text contrast ≥7:1 for headings (slate-900)
   - Focus rings always visible (2px blue-600)

## Handoff Checklist
- [x] All components match code implementation
- [x] Color tokens applied (no hex codes in UI)
- [x] Text styles applied (no manual font sizing)
- [x] Auto-layout on all frames
- [x] Component variants created
- [ ] Assets exported @ 2x
- [x] Documentation complete
