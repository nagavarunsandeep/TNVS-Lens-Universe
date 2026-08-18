# 🌌 TNVS Lens Universe (TLU)

<div align="center">

[![Universe Version](https://img.shields.io/badge/Release-v2.5.0-007bff?style=for-the-badge&logo=rocket&logoColor=white)](TLU.html)
[![Lenses Loaded](https://img.shields.io/badge/Specialized%20Lenses-5%20Active-23d5ab?style=for-the-badge)](TLU.html)
[![AI & APIs](https://img.shields.io/badge/Integrations-OpenFDA%20%7C%20HuggingFace%20%7C%20OSRM%20%7C%20Open--Meteo-8dd0ff?style=for-the-badge)](#-third-party-apis--cloud-services)
[![Architecture](https://img.shields.io/badge/Design-Glassmorphism%20%7C%20Vanilla%20JS-ee7752?style=for-the-badge)](tnvs_style.css)

**A high-performance, responsive multi-domain intelligence suite featuring decision calculators, computer vision OCR, algorithmic matching engines, route optimization, and health telemetry.**

[🚀 Explore Lenses](#-deep-dive-specialized-lenses) • [📐 Mathematical Models](#-algorithmic-models--formulas) • [🏗️ System Architecture](#%EF%B8%8F-system-architecture) • [📂 Project Structure](#-repository-structure) • [⚡ Quickstart](#-getting-started)

---

</div>

## 📌 Executive Summary

**TNVS Lens Universe (TLU)** is a modular, client-side intelligence dashboard delivering real-time predictions, medical informatics, agricultural soil chemistry calculations, aquaculture biomass sizing, and mobility routing[cite: 1, 3, 4, 8, 10]. Built with glassmorphism aesthetics, canvas starfield particles, and reactive search filtering, the suite allows users to switch between domains and launch targeted analytical tools[cite: 1, 2].

---

## 🏗️ System Architecture

```text
                                  +---------------------------------------+
                                  |       TNVS Lens Universe Hub          |
                                  |    (TLU.html / tnvs_style.css)        |
                                  +-------------------+-------------------+
                                                      |
         +--------------------+-----------------------+--------------------+----------------------+
         |                    |                       |                    |                      |
         v                    v                       v                    v                      v
  +--------------+     +--------------+        +--------------+     +--------------+       +--------------+
  |  PharmaLens  |     |   AgriLens   |        |   AquaLens   |     |  RouteLens   |       |   FitLens    |
  | (Health AI)  |     |  (Soil Math) |        | (Aquaculture)|     | (Mobility AI)|       | (Nutri-Calc) |
  +-------+------+     +-------+------+        +-------+------+     +-------+------+       +-------+------+
          |                    |                       |                    |                      |
  [OpenFDA REST API]   [NPK Deficit Engine]   [Water Chem Matrix]   [OSRM Leaflet Engine]   [Mifflin-St Jeor]
  [HuggingFace OCR]    [MSP Revenue Forecast] [Biomass Feed Math]   [Open-Meteo Weather]    [US Navy Body Fat]
  [Web Audio & Alerts] [Irrigation Planner]   [TDS/Hardness Check]  [jsPDF & QRCode.js]     [Hydration Sizer]
```[cite: 1, 3, 4, 8, 10]

---

## 🔍 The Specialized Lenses

### 1. ⚕️ PharmaLens — Medication & Diagnostic Assistant
A clinical reference utility combining offline pharmacology data, live federal registry queries, prescription OCR, and dosage alarms[cite: 7, 8].

<details>
<summary><b>Click to expand PharmaLens feature list & technical specs</b></summary>

* **Hybrid Drug Resolution Engine:**
  * Searches local databases containing brand names, active components, indication profiles, dosage tables, food interactions, and storage guidelines.
  * Queries the **OpenFDA REST API** (`api.fda.gov/drug/label.json`) for generic labels, warnings, and boxed advisories.
* **Prescription & Pill Box OCR:**
  * Connects with the **Hugging Face Inference API** utilizing `microsoft/trocr-base-printed` for optical character recognition directly from images or live camera streams[cite: 7, 8].
  * Fallback parser sanitizes local image filenames to extract potential drug targets when network OCR is offline.
* **Synthesized Audio & Multi-Layer Pill Reminders:**
  * Background daemon monitors timers every 10 seconds via `setInterval`[cite: 8].
  * Generates audio notification tones using the **Web Audio API** (`AudioContext` dual sine wave oscillator at 587.33 Hz and 880 Hz) alongside native browser notifications and in-app toasts[cite: 8].
* **Safety & Interaction Screening:** Provides baseline contraindication warnings (e.g., NSAID stacking, antibiotic-alcohol precautions, and antacid timing)[cite: 7].

</details>

---

### 2. 🌱 AgriLens — Soil Agronomy & Farm Plan Optimizer
An agronomic decision engine evaluating soil test parameters and weather data to rank crop viability and generate farm budgets[cite: 3].

<details>
<summary><b>Click to expand AgriLens feature list & technical specs</b></summary>

* **Algorithmic Crop Ranking:** Scores crop suitability (Rice, Wheat, Maize, Millets, Cotton, Sugarcane, Groundnut) based on temperature, humidity, rainfall, season, soil pH, and N-P-K mineral levels[cite: 3].
* **NPK Fertilizer Deficit Calculator:**
  * Standardizes crop requirements against a $120\text{--}60\text{--}60\text{ kg/ha}$ NPK target[cite: 3].
  * Calculates exact supplemental needs for **Urea (46% N)**, **DAP (18% N, 46% P)**, and **MOP/Potash (60% K)** based on farm area[cite: 3].
* **Economic Yield & Net Profit Forecaster:**
  * Applies crop yield metrics (e.g., Sugarcane at $70\text{ t/ha}$, Rice at $4.5\text{ t/ha}$) multiplied by market rates (MSP)[cite: 3].
  * Forecasts gross revenue, input expenses ($40\%$), and net margins[cite: 3].
* **Irrigation Water Schedule:** Recommends delivery cadences for drip, sprinkler, canal/flood, and rainfed configurations[cite: 3].

</details>

---

### 3. 🐟 AquaLens — Water Chemistry & Aquaculture Sizing
A water quality evaluation engine and aquatic culture matching system[cite: 4].

<details>
<summary><b>Click to expand AquaLens feature list & technical specs</b></summary>

* **Aquatic Habitat Matcher:** Categorizes salinity levels into Freshwater ($<1\text{ ppt}$), Low-Brackish ($1\text{--}10\text{ ppt}$), Brackish ($10\text{--}25\text{ ppt}$), and Marine ($>25\text{ ppt}$) to suggest candidate species (Tilapia, Carp, Milkfish, Tiger Prawn, Sea Bass, Grouper)[cite: 4].
* **Water Quality Bounds Warnings:** Checks dissolved oxygen ($\text{DO} < 4.0\text{ mg/L}$) and acidity limits ($\text{pH} < 6.5$ or $> 9.0$)[cite: 4].
* **Biomass & Feed Estimation:** Calculates pond stocking count based on surface area and calculates daily feed requirements using a standard $3\%$ body weight consumption index[cite: 4].
* **Drinking Water Parameter Analyzer:** Evaluates human consumption water safety based on pH range ($6.5\text{--}8.5$), Total Dissolved Solids ($\text{TDS} < 500\text{ ppm}$), and calcium carbonate hardness ($60\text{--}120\text{ mg/L}$)[cite: 4].

</details>

---

### 4. 🗺️ RouteLens — Multi-Modal Route & Travel Intelligence
An interactive mapping and trip itinerary aggregator integrating multi-vendor rideshare estimates, terrain metrics, and travel safety[cite: 10].

<details>
<summary><b>Click to expand RouteLens feature list & technical specs</b></summary>

* **Geocoding & Polyline Routing:**
  * OpenStreetMap Nominatim API debounced search with coordinate caching[cite: 10].
  * OSRM driving engine supporting multi-waypoint / via stops, rendering turn-by-turn routing polylines over Leaflet.js[cite: 10].
* **Elevation Profile Generation:** Fetches point elevation arrays from Open-Meteo to plot terrain contours via Chart.js[cite: 10].
* **Multi-Carrier Cab Simulator:**
  * Compares pricing and duration across Uber (Go, Moto, Premier), Ola (Mini, Bike, Auto), and Rapido (Bike, Auto, Cab)[cite: 10].
  * Generates direct booking deep links[cite: 10].
* **Self-Drive & Toll Economics:** Computes mileage-based fuel consumption, adds estimated highway tolls, and accounts for round trips[cite: 10].
* **Document Export & Route QR:**
  * Exports trip itineraries to formatted PDF documents with `jsPDF`[cite: 10].
  * Encodes the dynamic route into QR codes via `qrcode.js` for mobile sharing[cite: 10].
* **Travel Companion Utilities:** Live destination weather, timezone clock, currency conversion via ExchangeRate-API, interactive packing list, SOS emergency numbers, and a travel chatbot[cite: 10].

</details>

---

### 5. 🏋️ FitLens — Metabolic Health & Body Composition
A nutritional and metabolic planning system based on validated anthropometric equations[cite: 6].

<details>
<summary><b>Click to expand FitLens feature list & technical specs</b></summary>

* **Basal & Daily Energy Expenditure:**
  * BMR calculated through the Mifflin-St Jeor equation[cite: 6].
  * Total Daily Energy Expenditure (TDEE) scaled by physical activity multipliers ($1.2\text{--}1.9$) and goal caloric deficits/surpluses ($\pm 500\text{ kcal}$)[cite: 6].
* **Macronutrient Split:** Splits target calories into $40\%$ Carbohydrates, $30\%$ Protein, and $30\%$ Fats[cite: 6].
* **Hydration Calculator:** Calculates daily water targets from body weight ($35\text{ ml/kg}$) and workout duration ($350\text{ ml per } 30\text{ min}$)[cite: 6].
* **Body Fat Estimation (US Navy Method):** Estimates body fat percentages using circumference measurements of the waist, neck, height, and hips (for females)[cite: 6].
* **Athletic Nutrition Protocols:** Pre/post-workout protein synthesis guidelines and macro source suggestions[cite: 6].

</details>

---

## 🧮 Algorithmic Models & Formulas

```latex
1. Basal Metabolic Rate (Mifflin-St Jeor):
   BMR (Male)   = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) + 5
   BMR (Female) = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) - 161

2. Total Daily Energy Expenditure (TDEE):
   TDEE = BMR * Activity_Multiplier

3. Hydration Sizing (Liters/Day):
   Water_Target = (weight_kg * 0.035) + ((workout_minutes / 30) * 0.35)

4. Agricultural NPK Fertilizer Deficit Model:
   Deficit_P = max(0, 60 - soil_P)
   DAP_kg    = (Deficit_P / 0.46) * Area_ha
   Urea_N    = (DAP_kg / Area_ha) * 0.18
   Urea_kg   = (max(0, (120 - soil_N) - Urea_N) / 0.46) * Area_ha
   MOP_kg    = (max(0, 60 - soil_K) / 0.60) * Area_ha

5. Haversine Great-Circle Distance:
   d = 2 * R * asin( sqrt( sin²(Δlat/2) + cos(lat1) * cos(lat2) * sin²(Δlon/2) ) )
```[cite: 3, 6, 10]

---

## 🌐 Third-Party APIs & Cloud Services

| Service | Provider | Purpose | Lens Integration |
| :--- | :--- | :--- | :--- |
| **OpenFDA Label API** | U.S. FDA | Live drug usage, warnings & dosage lookup[cite: 8] | `PharmaLens`[cite: 8] |
| **TrOCR Inference** | Hugging Face | Optical Character Recognition for prescriptions[cite: 8] | `PharmaLens`[cite: 8] |
| **Nominatim Geocoding** | OpenStreetMap | Autocomplete search for global coordinates[cite: 10] | `RouteLens`[cite: 10] |
| **OSRM Engine** | Project OSRM | Polyline generation, multi-leg durations[cite: 10] | `RouteLens`[cite: 10] |
| **Forecast & Elevation** | Open-Meteo | Live weather reports & route terrain profiling[cite: 10] | `RouteLens`[cite: 10] |
| **Exchange Rates** | ExchangeRate-API | Multi-currency conversions[cite: 10] | `RouteLens`[cite: 10] |

---

## 📂 Repository Structure

```text
TNVS-Lens-Universe/
├── TLU.html                     # Central Lens Hub & Interactive Search Portal
├── tnvs_style.css               # Starfield CSS, theme engine & base glassmorphism
│
├── PharmaLens/                  # Health & Pharmacology Suite
│   ├── PharmaLens.html          # Camera scanner, search & pill scheduler UI
│   ├── script.js                # OpenFDA API, HuggingFace OCR, Web Audio alarms
│   └── style.css                # Drug card styles, theme overrides & print layout
│
├── AgriLens/                    # Agriculture & Soil Science
│   └── AgriLens.html            # Crop confidence matrix, NPK math & yield estimator
│
├── AquaLens/                    # Aquaculture & Hydrochemistry
│   └── AquaLens.html            # Salinity classifier, biomass feed & water test
│
├── RouteLens/                   # Mobility, Routing & Logistics
│   └── RouteLens.html           # Leaflet maps, OSRM engine, ride simulator, jsPDF
│
└── FitLens/                     # Wellness & Body Composition
    ├── FitLens.html             # Mifflin-St Jeor calculator, US Navy body fat
    └── FitLens.css              # Custom progress gauges & card components
```[cite: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

---

## ⚡ Getting Started

### Prerequisites
* Any modern web browser supporting ES6+, HTML5 Canvas, Web Audio API, and CSS Variables (Chrome, Firefox, Safari, Edge)[cite: 1, 2, 8].
* Local HTTP server environment to avoid CORS restrictions on local asset loads.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/tnvs-lens-universe.git](https://github.com/your-username/tnvs-lens-universe.git)
   cd tnvs-lens-universe
