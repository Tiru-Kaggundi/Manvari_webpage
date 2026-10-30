# Customization Guide for Manvari Partners Website

This guide outlines the architecture and key components of the Manvari Partners global executive search and recruitment consultancy web application.

## 1. Brand & General Configuration
- **File:** `index.html` & `metadata.json`
  - **Page Title & Meta**: Contains search engine tags targeting Global Executive Search, Retained & Contingency Recruitment, and HR Advisory.
  - **Colors & Typography**: Tailored around Chicago Maroon (`#800000`, darker `#4A0000`) and Executive Slate (`#0F172A`) with Playfair Display and Inter.

## 2. Executive Search Models
- **File:** `App.tsx` & `components/Diagrams.tsx`
  - Four core search engagement models:
    1. **Executive Search & Board Advisory**
    2. **Retained Search Mandates**
    3. **Specialized Contingency Search**
    4. **Strategic HR Consultancy**
  - Configurable data structures defined in `types.ts` (`SearchModel`).

## 3. Industry Practices & Functional Skillsets
- **File:** `App.tsx`
  - Covers Technology & Digital Infrastructure, Financial Services & Private Equity, Industrial & Advanced Manufacturing, Healthcare & Life Sciences, Consumer & Retail Brands, and Corporate Functions.
  - Interactive tab matrix showcasing representative mandates placed.

## 4. Search Methodology (6-Stage Lifecycle)
- **File:** `App.tsx`
  - Stages: Mandate Calibration, Global Market Intelligence, Confidential Direct Vetting, Calibrated Shortlist, Offer Structuring, and 100-Day Integration Guarantee.

## 5. Interactive Mandate Estimator
- **File:** `App.tsx`
  - Allows clients to customize search models, target seniority, and geographic placement horizon with dynamic timeline and candidate pool estimation, with 1-click bridge to the confidential inquiry form.

## 6. Executive Leadership
- **File:** `App.tsx`
  - Features CEO & Managing Partner S Agarwal, highlighting international executive talent acquisition and cross-border placement pedigree across Americas, EMEA, and Asia-Pacific.

## 7. Contact Information
- **File:** `App.tsx`
  - **Email**: sugandha.agarwal@gmail.com
  - **Phone**: +91-9980206008
  - **Address**: 737, 3rd B main, ISRO layout, Bengaluru, Karnataka, India, 560078
