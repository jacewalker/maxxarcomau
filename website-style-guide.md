# Maddy Website Style Guide

A repeatable style guide for building Maddy brand websites. Based on the landing page at callmaddy.au.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS 3.4
- **Fonts**: Google Fonts (Inter, Outfit)
- **Icons**: Inline SVGs (Heroicons style)
- **Forms**: React Hook Form + Zod validation

---

## Typography

### Font Families

```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
}
```

| Usage | Font | Weight | Class |
|-------|------|--------|-------|
| Headings (H1-H3) | Outfit | Bold (700) / Extra Bold (800) | `font-display font-bold` |
| Body text | Inter | Regular (400) | `font-sans` |
| Labels & UI | Inter | Medium (500) | `font-medium` |
| Buttons | Inter | Bold (700) | `font-bold` |
| Brand name | Inter | Extra Bold (800) | `font-extrabold` |

### Type Scale

| Element | Desktop Size | Mobile Size | Line Height | Classes |
|---------|-------------|-------------|-------------|---------|
| H1 (Hero) | 7xl (72px) | 5xl (48px) | 1.1 | `text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight` |
| H2 (Section) | 5xl (48px) | 4xl (36px) | 1.2 | `text-4xl sm:text-5xl` |
| H3 (Card) | xl (20px) | xl (20px) | 1.4 | `text-xl font-bold` |
| Body Large | xl (20px) | lg (18px) | 1.6 | `text-xl leading-relaxed` |
| Body | base (16px) | base (16px) | 1.6 | `text-base leading-relaxed` |
| Small/Caption | sm (14px) | sm (14px) | 1.5 | `text-sm` |
| Tiny | xs (12px) | xs (12px) | 1.4 | `text-xs` |

---

## Colour Palette

### Primary Colours

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Maddy Blue | `#2563EB` | `bg-maddy-blue` / `text-maddy-blue` | Primary CTAs, links, accents |
| Maddy Dark | `#0B1120` | `bg-maddy-dark` | Hero backgrounds, dark sections |
| Clinical White | `#F8FAFC` | `bg-clinical-white` | Light backgrounds, nav |
| Ink Charcoal | `#1E293B` | `bg-ink-charcoal` / `text-ink-charcoal` | Footer, primary text |

### Accent Colours

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Accent Teal | `#0D9488` | `bg-accent-teal` / `text-accent-teal` | Success states, secondary accent |
| Accent Purple | `#7C3AED` | `bg-accent-purple` | Tech/AI feeling, gradients |

### Surface & Text Colours

| Name | Hex | Tailwind Class | Usage |
|------|-----|----------------|-------|
| Surface White | `#FFFFFF` | `bg-surface-white` | Card backgrounds |
| Surface Grey | `#F1F5F9` | `bg-surface-grey` | Section backgrounds |
| Text Primary | `#1E293B` | `text-text-primary` | Headings, important text |
| Text Secondary | `#64748B` | `text-text-secondary` | Body text, descriptions |

### Status Colours

| Name | Hex | Usage |
|------|-----|-------|
| Success Green | `#22C55E` | Checkmarks, success states |
| Error Red | `#EF4444` | Form errors, alerts |

---

## Colour Usage in Tailwind

```typescript
// tailwind.config.ts
colors: {
  'maddy-dark': '#0B1120',
  'maddy-blue': '#2563EB',
  'maddy-light': '#F8FAFC',
  'accent-teal': '#0D9488',
  'accent-purple': '#7C3AED',
  'surface-white': '#FFFFFF',
  'surface-grey': '#F1F5F9',
  'text-primary': '#1E293B',
  'text-secondary': '#64748B',
  'clinical-white': '#F8FAFC',
  'ink-charcoal': '#1E293B',
}
```

---

## Spacing & Layout

### Container

```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

- Max width: `1280px` (7xl)
- Horizontal padding: `16px` mobile, `24px` tablet, `32px` desktop

### Section Spacing

| Element | Spacing | Classes |
|---------|---------|---------|
| Section padding | 96px vertical | `py-24` |
| Section heading margin | 64px bottom | `mb-16` |
| Card grid gap | 32px | `gap-8` |
| Card internal padding | 32px | `p-8` |
| Stack gap (content) | 16-24px | `space-y-4` or `space-y-6` |

### Grid Layouts

```html
<!-- 4-column feature grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<!-- 3-column pricing grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">

<!-- 2-column hero layout -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
```

---

## Components

### Buttons

#### Primary Button (CTA)

```html
<button class="px-8 py-4 bg-maddy-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-maddy-blue/25">
  Get Early Access
</button>
```

#### Secondary Button (Ghost)

```html
<button class="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
  See How It Works
</button>
```

#### Tertiary Button (Light)

```html
<button class="w-full py-3 px-4 bg-surface-grey text-maddy-dark font-bold rounded-xl hover:bg-gray-200 transition-colors">
  Join Waitlist
</button>
```

#### Nav Button

```html
<button class="px-6 py-2 bg-maddy-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
  Join Waitlist
</button>
```

### Cards

#### Feature Card

```html
<div class="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-maddy-blue/20 hover:-translate-y-1">
  <div class="w-12 h-12 bg-maddy-blue/5 rounded-xl flex items-center justify-center text-maddy-blue mb-6 group-hover:bg-maddy-blue group-hover:text-white transition-colors">
    <!-- Icon SVG -->
  </div>
  <h3 class="text-xl font-bold text-maddy-dark mb-3">Feature Title</h3>
  <p class="text-text-secondary leading-relaxed">Feature description text.</p>
</div>
```

#### Step Card (How It Works)

```html
<div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative z-10 h-full hover:-translate-y-2 transition-transform duration-300">
  <div class="w-16 h-16 bg-maddy-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-maddy-blue/20">
    <!-- Icon SVG -->
  </div>
  <div class="absolute -top-4 -right-4 text-6xl font-display font-bold text-gray-100 -z-10">
    01
  </div>
  <h3 class="text-xl font-bold text-maddy-dark mb-4">Step Title</h3>
  <p class="text-text-secondary leading-relaxed text-sm">Step description.</p>
</div>
```

#### Pricing Card (Standard)

```html
<div class="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
  <h3 class="text-xl font-bold text-maddy-dark mb-2">Plan Name</h3>
  <div class="flex items-baseline gap-1 mb-6">
    <span class="text-4xl font-bold text-maddy-dark">$199</span>
    <span class="text-gray-500">/month</span>
  </div>
  <p class="text-gray-500 mb-8 text-sm">Plan description.</p>
  <ul class="space-y-4 mb-8">
    <!-- Feature list items -->
  </ul>
  <button class="w-full py-3 px-4 ...">Join Waitlist</button>
</div>
```

#### Pricing Card (Featured)

```html
<div class="bg-maddy-dark rounded-3xl p-8 shadow-xl border border-maddy-blue/20 relative transform md:-translate-y-4">
  <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maddy-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
    Most Popular
  </div>
  <!-- Content with white/gray text -->
</div>
```

### Form Inputs

```html
<input
  type="text"
  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maddy-blue focus:border-transparent transition-all outline-none"
  placeholder="Placeholder text"
/>
```

### Badges & Pills

#### Status Badge

```html
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maddy-blue/10 border border-maddy-blue/20 backdrop-blur-sm">
  <span class="flex h-2 w-2 rounded-full bg-accent-teal animate-pulse"></span>
  <span class="text-sm font-medium text-blue-200 tracking-wide">
    Built for Australian Allied Health
  </span>
</div>
```

#### Feature Tag

```html
<div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maddy-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
  Most Popular
</div>
```

### Info Boxes

#### Highlight Box

```html
<table class="w-100% border-collapse bg-[#EFF6FF] border-left: 4px solid #2563EB rounded-[4px]">
  <tr>
    <td class="p-5">
      <h2 class="text-[#1E40AF] text-lg font-semibold mb-3">Title</h2>
      <ul><!-- Content --></ul>
    </td>
  </tr>
</table>
```

---

## Background Effects

### Hero Gradient Blobs

```html
<div class="absolute top-0 left-1/4 w-96 h-96 bg-maddy-blue/20 rounded-full blur-3xl mix-blend-screen animate-pulse" />
<div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl mix-blend-screen" />
```

### Section Decorative Blobs

```html
<div class="absolute top-1/4 left-0 w-64 h-64 bg-maddy-blue/5 rounded-full blur-3xl" />
<div class="absolute bottom-1/4 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl" />
```

### Glass Effect

```html
<div class="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl">
```

---

## Animations

### Tailwind Config

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-out',
  'slide-up': 'slideUp 0.5s ease-out',
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
},
```

### Common Animation Classes

| Effect | Class |
|--------|-------|
| Fade in | `animate-fade-in` |
| Slide up | `animate-slide-up` |
| Pulse | `animate-pulse` |
| Bounce | `animate-bounce` |
| Spin (loading) | `animate-spin` |

### Hover Transitions

```html
<!-- Scale on hover -->
<button class="transform hover:scale-105 transition-all">

<!-- Lift on hover -->
<div class="hover:-translate-y-1 transition-transform duration-300">

<!-- Colour transition -->
<a class="hover:text-maddy-blue transition-colors">
```

---

## Navigation

### Fixed Header

```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-clinical-white/95 backdrop-blur-sm border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo + Nav items + CTA -->
    </div>
  </div>
</nav>
```

### Nav Links

```html
<a href="#section" class="text-ink-charcoal hover:text-maddy-blue transition-colors">
  Link Text
</a>
```

---

## Footer

```html
<footer class="bg-ink-charcoal text-white py-12 mt-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Columns -->
    </div>
    <div class="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>
```

---

## Modal

```html
<!-- Overlay -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
  <!-- Modal Card -->
  <div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-slide-up">
    <!-- Close Button -->
    <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10">
      <svg class="w-6 h-6"><!-- X icon --></svg>
    </button>
    <div class="p-8">
      <!-- Content -->
    </div>
  </div>
</div>
```

---

## Icons

Use inline SVGs with Heroicons style (outline, 24x24 viewBox, strokeWidth 2).

```html
<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="..." />
</svg>
```

### Icon Sizes

| Context | Size | Class |
|---------|------|-------|
| Feature card icon | 24px | `w-6 h-6` |
| Step card icon | 32px | `w-8 h-8` |
| Small inline | 20px | `w-5 h-5` |
| Tiny | 16px | `w-4 h-4` |

### Icon Containers

```html
<!-- Feature icon (interactive) -->
<div class="w-12 h-12 bg-maddy-blue/5 rounded-xl flex items-center justify-center text-maddy-blue group-hover:bg-maddy-blue group-hover:text-white transition-colors">

<!-- Step icon (solid) -->
<div class="w-16 h-16 bg-maddy-blue text-white rounded-2xl flex items-center justify-center shadow-lg shadow-maddy-blue/20">

<!-- Small status icon -->
<div class="p-2 rounded-lg bg-green-500/10">
  <svg class="w-5 h-5 text-green-400">
```

---

## Responsive Breakpoints

Use Tailwind's default breakpoints:

| Breakpoint | Min Width | Prefix |
|------------|-----------|--------|
| Mobile | 0px | (none) |
| Tablet | 640px | `sm:` |
| Small Desktop | 768px | `md:` |
| Desktop | 1024px | `lg:` |
| Large Desktop | 1280px | `xl:` |

### Common Patterns

```html
<!-- Text sizing -->
<h1 class="text-5xl sm:text-6xl lg:text-7xl">

<!-- Grid columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<!-- Spacing -->
<section class="py-16 lg:py-24">

<!-- Show/hide -->
<div class="hidden md:flex">
<div class="md:hidden">
```

---

## Checklist for New Pages

- [ ] Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container
- [ ] Section padding: `py-24`
- [ ] Headings use `font-display font-bold text-maddy-dark`
- [ ] Body text uses `text-text-secondary leading-relaxed`
- [ ] Primary buttons use `bg-maddy-blue text-white rounded-xl`
- [ ] Cards use `bg-white rounded-2xl shadow-sm border border-gray-100`
- [ ] Add hover states with `transition-all` or `transition-colors`
- [ ] Include decorative gradient blobs on hero/feature sections
- [ ] Use `backdrop-blur-sm` for glass effects
- [ ] Smooth scroll enabled via `scroll-behavior: smooth`
