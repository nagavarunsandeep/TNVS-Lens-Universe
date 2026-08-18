# 🌌 TNVS Lens Universe

<div align="center">

![TNVS Lens Universe Banner](https://img.shields.io/badge/TNVS-Lens%20Universe-007bff?style=for-the-badge&logo=rocket&logoColor=white)
![Build Status](https://img.shields.io/badge/Build-Passing-23d5ab?style=for-the-badge)
![Specialized Tools](https://img.shields.io/badge/Specialized%20Lenses-5%20Tools-8dd0ff?style=for-the-badge)
![UI/UX](https://img.shields.io/badge/UI-Responsive%20%7C%20Glassmorphism-ee7752?style=for-the-badge)

**An intelligent multi-lens suite delivering actionable insights, predictive calculators, and real-time assistants across health, agriculture, aquaculture, mobility, and wellness.**

[Explore Lenses](#-the-specialized-lenses) • [Core Features](#-core-features--architecture) • [Project Structure](#-project-directory-structure) • [Getting Started](#-getting-started) • [Tech Stack](#%EF%B8%8F-technology-stack)

---

</div>

## 📖 Overview

**TNVS Lens Universe (TLU)** is a unified web hub designed to consolidate specialized decision-making utilities into one intuitive interface. Featuring glassmorphism aesthetics, dynamic starfield particle backgrounds, instant keyword filtering, and modular calculators, the universe hosts 5 dedicated tools tailored for everyday life, travel, wellness, and domain-specific planning.

---

## 🚀 The Specialized Lenses

| Lens | Category | Description | Key Capabilities |
| :--- | :--- | :--- | :--- |
| ⚕️ **PharmaLens** | **Health** | Medication identifier, symptom lookup, and regimen manager. | Drug autocomplete, OpenFDA API integration, OCR pill/box scan, daily alarm scheduler, drug interactions guide. |
| 🌱 **AgriLens** | **Agriculture** | Soil intelligence, seasonal crop match, and farm financial planner. | Crop yield & fit confidence scoring, NPK fertilizer calculator (Urea/DAP/MOP), revenue and profit forecasting, irrigation cycle advisor. |
| 🐟 **AquaLens** | **Aquaculture** | Water chemical parameter analyzer and aquatic culture assistant. | Salinity/pH species recommendation (Freshwater, Brackish, Marine), pond stocking density, daily feed estimator, drinking water hardness/TDS tester. |
| 🗺️ **RouteLens** | **Mobility** | AI trip planner, live route mapper, and mobility aggregator. | Leaflet routing, elevation profile chart, multi-vendor ride estimate (Uber, Ola, Rapido), fuel & toll calculator, PDF export & QR code sharing. |
| 🏋️ **FitLens** | **Wellness** | Health, nutrition, and metabolic target planner. | BMI assessment, BMR/TDEE calculation (Mifflin-St Jeor), macronutrient distribution, hydration goal planner, US Navy body fat estimator. |

---

## ✨ Core Features & Architecture

* **🔮 Interactive Discovery Portal:** Real-time client-side search across all lenses with category filter pills (`Health`, `Agriculture`, `Aquaculture`, `Mobility`, `Wellness`) and 3D interactive tilt cards.
* **🌓 Dual Theme Architecture:** Universal light/dark and cyber modes powered by CSS variable injection and persistent `localStorage` states.
* **🧪 API & Real-Time Integrations:**
  * **OpenFDA REST API:** Live lookup for official drug indications, dosage guidelines, adverse reactions, and warnings.
  * **Hugging Face Inference API:** OCR processing via `microsoft/trocr-base-printed` for prescription/box scanning.
  * **OpenStreetMap & OSRM:** Dynamic geocoding, multi-waypoint turn-by-turn routing, and interactive polyline rendering.
  * **Open-Meteo API:** Destination weather forecasting and elevation profiling.
  * **ExchangeRate API:** Real-time multi-currency conversions.
* **📊 Client-Side Utility Calculators:** Offline calculations for agricultural fertilizer requirements, crop revenue, pond bio-mass feeding rates, fuel economics, and macro nutritional breakdowns.
* **📱 Progressive Visual Scaffold:** Pure responsive layouts utilizing Bootstrap 5, Tailwind CSS, custom CSS Glassmorphism panels, and canvas particle backgrounds.

---

## 📂 Project Directory Structure

```text
TNVS-Lens-Universe/
│
├── TLU.html                     # Central Universe Dashboard & Search Hub
├── tnvs_style.css               # Global glassmorphism, animated gradients & starfield themes
│
├── PharmaLens/                  # Health & Medication Intelligence
│   ├── PharmaLens.html          # Camera scanner, search & pill scheduler UI
│   ├── script.js                # OpenFDA fetch, Hugging Face OCR & notification manager
│   └── style.css                # Drug card collapsible grid & printable layout styles
│
├── AgriLens/                    # Agriculture & Soil Precision
│   └── AgriLens.html            # NPK fertilizer, crop scoring & revenue estimator
│
├── AquaLens/                    # Aquaculture & Water Chemistry
│   └── AquaLens.html            # Salinity culture matcher & drinking water quality checker
│
├── RouteLens/                   # Smart Mobility & Itineraries
│   └── RouteLens.html           # Leaflet mapping, ride price simulation, packing list & PDF exporter
│
└── FitLens/                     # Wellness & Body Composition
    ├── FitLens.html             # TDEE, macronutrient, body fat & diet suggestions
    └── FitLens.css              # Custom metric progress bars & wellness styling
