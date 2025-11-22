# Customization Guide for Lumina Consulting Website

This guide outlines where to find and edit specific content within the project files to customize the website for your specific requirements.

## 1. General Configuration (Title, Colors)
**File:** `index.html`
- **Page Title**: Look for `<title>Lumina Strategy | Strategic Business Consulting</title>` inside the `<head>` tag. Change this to your company name.
- **Meta Description**: Update the `<meta name="description" ...>` tag for better SEO.
- **Theme Colors**: The Tailwind configuration is in the `<script>` tag in the head.
  - Change `primary` hex codes to change the dark blue/slate colors.
  - Change `accent` hex codes to change the highlight color (currently blue/sky).

## 2. Navigation & Company Name
**File:** `App.tsx`
- **Logo/Name**: Search for the text "Lumina" inside the `<nav>` section (around line 48).
- **Menu Links**: If you want to rename "Services" or "About", look for the `<button>` elements inside the nav.

## 3. Hero Section (Top of page)
**File:** `App.tsx`
- **Main Headline**: Search for "Clarity in". Note that the word "Complexity" is wrapped in a span for styling.
- **Subheadline**: Search for "We help forward-thinking organizations...".
- **Hero Image**: Search for the `<img>` tag with `alt="Modern Office Architecture"`.
  - **To change the image**: Replace the `src="..."` URL with a link to your own image.

## 4. Services Section
**File:** `App.tsx`
- **Service Content**: The content for Corporate Strategy, Operational Excellence, etc., is located in the `<ServiceCard />` components (around line 138).
  - Edit the `title=""` and `description=""` props directly.

## 5. About Section
**File:** `App.tsx`
- **Headlines & Text**: Search for "Why Lumina?" (around line 158).
- **Bullet Points**: The list of benefits ("Evidence-based decision making", etc.) is in an array `["...", "..."]`. You can add or remove items from this list.

## 6. Statistics (Results)
**File:** `components/Diagrams.tsx`
- **Stats Data**: The numbers (50+, $200M, 98%) are **not** in `App.tsx`. They are defined in the `StatsDisplay` component.
- **How to edit**: Open `components/Diagrams.tsx` and look for the `const stats = [...]` array (around line 28).

## 7. Testimonials
**File:** `App.tsx`
- **Quote**: Search for "Lumina transformed our operational model..." (around line 208).
- **Person**: Update the name "David Chen", the role "CEO, TechFlow Inc.", and the image URL.

## 8. Contact Section
**File:** `App.tsx`
- **Contact Details**: Search for "contact@luminastrategy.com", the phone number, or address (around line 233).
- **Form**: You can change the placeholders or labels in the form section.

## 9. Footer
**File:** `App.tsx`
- **Copyright**: Search for "Lumina Strategy Consulting" at the very bottom of the file to update the year and company name.

## 10. Icons
**File:** `App.tsx` and `components/Diagrams.tsx`
- The icons are imported from `lucide-react`. If you want different icons, you can import them at the top of the file (e.g., `import { NewIcon } from 'lucide-react'`) and replace the existing components.
