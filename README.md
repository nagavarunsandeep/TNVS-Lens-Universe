# 🌌 TNVS Lens Universe (TLU)

<div align="center">

[![Universe Status](https://img.shields.io/badge/System-Active%20%7C%20Production%20Ready-007bff?style=for-the-badge&logo=rocket&logoColor=white)](TLU.html)
[![Active Lenses](https://img.shields.io/badge/Core%20Modules-5%20Specialized%20Lenses-23d5ab?style=for-the-badge)](TLU.html)
[![API Layer](https://img.shields.io/badge/Live%20APIs-OpenFDA%20%7C%20HuggingFace%20%7C%20OSRM%20%7C%20Open--Meteo-8dd0ff?style=for-the-badge)](#-integrated-apis--services)
[![UI Interface](https://img.shields.io/badge/Interface-Glassmorphism%20%7C%20Dark%20%26%20Light-ee7752?style=for-the-badge)](tnvs_style.css)

**An all-in-one web portal that turns complex data into clear, actionable tools for healthcare, farming, aquaculture, travel, and fitness.**

[Explore Lenses](#-explore-the-lenses) • [System Flow](#-how-the-system-works) • [Feature Deep Dive](#-interactive-feature-deep-dive) • [Formulas & Math](#-built-in-calculators--logic) • [Quickstart](#-getting-started)

---

</div>

## 📖 What is TNVS Lens Universe?

**TNVS Lens Universe (TLU)** brings 5 dedicated information and prediction tools into a single, cohesive dashboard. Instead of jumping between multiple websites and tools, users can instantly search, calculate, and analyze real-world scenarios across medicine, agriculture, water quality, trip planning, and health metrics[cite: 1, 3, 4, 8, 10].

---

## 🗺️ How the System Works

The platform operates as a unified hub connecting individual specialized applications:

* **Central Gateway (`TLU.html`):** The primary landing page featuring client-side search, category filter pills (`Health`, `Agriculture`, `Aquaculture`, `Mobility`, `Wellness`), dynamic animated starfields, and 3D interactive tilt cards[cite: 1, 2].
* **PharmaLens Module (`PharmaLens.html`):** Connects with OpenFDA and Hugging Face OCR to deliver medication lookups, image extraction, and audio-visual dosage reminders[cite: 7, 8].
* **AgriLens Module (`AgriLens.html`):** Runs soil chemistry scoring, deficit fertilizer math, and crop yield profit forecasting[cite: 3].
* **AquaLens Module (`AquaLens.html`):** Evaluates water salinity, chemical thresholds, daily feeding biomass, and drinking water safety[cite: 4].
* **RouteLens Module (`RouteLens.html`):** Integrates Leaflet mapping, OSRM turn-by-turn routing, multi-brand cab price calculations, terrain elevation charts, and PDF itinerary exports[cite: 10].
* **FitLens Module (`FitLens.html`):** Calculates metabolic rates (Mifflin-St Jeor), macronutrient distributions, body fat percentages, and daily water needs[cite: 6].

---

## 🚀 Explore the Lenses

| Lens | Domain | Core Purpose | Quick Highlights |
| :--- | :--- | :--- | :--- |
| ⚕️ **PharmaLens** | **Health** | Medicine lookup & dosage companion[cite: 1] | Instant name/symptom search, OCR box scanning, and automated pill alarms[cite: 7, 8]. |
| 🌱 **AgriLens** | **Agriculture** | Smart crop matching & farm budgeting[cite: 1] | Soil test analysis, custom fertilizer dosing (Urea/DAP/MOP), and revenue estimates[cite: 3]. |
| 🐟 **AquaLens** | **Aquaculture** | Water chemistry & aquaculture advisor[cite: 1] | Salinity matching for fish/shrimp, pond stocking rates, and drinking water checks[cite: 4]. |
| 🗺️ **RouteLens** | **Mobility** | AI trip planner & ride aggregator[cite: 1] | Live map polylines, cab price comparison (Uber/Ola/Rapido), and PDF trip exports[cite: 10]. |
| 🏋️ **FitLens** | **Wellness** | Nutrition, calorie & body goal calculator[cite: 1] | TDEE metabolic math, US Navy body fat estimation, and daily macro breakdowns[cite: 6]. |

---

## 🔍 Interactive Feature Deep Dive

<details>
<summary><b>⚕️ 1. PharmaLens — Medication Intelligence & Pill Reminders (Click to expand)</b></summary>

<br>

* **Dual Search Mode:** Find medicines by generic/brand name (e.g., Paracetamol, Dolo, Zyrtec) or by describing common symptoms (e.g., headache, fever, acid reflux)[cite: 7, 8].
* **Live OpenFDA Integration:** Automatically fetches usage guidelines, side effects, dosage advice, precautions, and boxed warnings from official FDA drug labels[cite: 8].
* **Smart Optical Character Recognition (OCR):** Upload photos of prescription bottles or packaging, or use your live device camera to extract text using the Hugging Face `microsoft/trocr-base-printed` AI model[cite: 7, 8].
* **Automated Audio-Visual Pill Alarms:** Add medications directly to your daily schedule[cite: 7, 8]. An active background timer triggers native browser alerts, popup banners, and synthesized chime sounds via the Web Audio API when it is time for a dose[cite: 8].
* **Drug Interaction Quick-Check:** Displays guidelines to prevent risky drug combinations (such as multiple NSAIDs, alcohol interactions, or antacid absorption interference)[cite: 7].

</details>

<details>
<summary><b>🌱 2. AgriLens — Soil Precision & Farm Profit Planner (Click to expand)</b></summary>

<br>

* **Crop Viability Matcher:** Enter local weather conditions (temperature, humidity, rainfall), season (Kharif, Rabi, Zaid), and soil parameters (pH, soil type, N-P-K levels) to score the best crops[cite: 3].
* **Fertilizer Deficit Calculation:** Analyzes nitrogen, phosphorus, and potassium gaps against ideal crop baselines ($120\text{--}60\text{--}60\text{ kg/ha}$) and determines exact amounts of Urea (46% N), DAP (18% N, 46% P), and MOP (60% K) needed for the specified farm area[cite: 3].
* **Yield & Revenue Estimator:** Calculates expected harvest tonnage and uses market benchmarks to forecast gross income, total production costs ($40\%$), and net profit[cite: 3].
* **Irrigation Scheduling:** Generates watering cycles and moisture management tips tailored to Drip, Sprinkler, Canal/Flood, or Rainfed systems[cite: 3].

</details>

<details>
<summary><b>🐟 3. AquaLens — Aquaculture Assistant & Water Quality Checker (Click to expand)</b></summary>

<br>

* **Culture Recommender:** Matches water salinity and pH to suitable species across Freshwater ($<1\text{ ppt}$ for Tilapia/Carp), Low-Brackish ($1\text{--}10\text{ ppt}$ for Milkfish), Brackish ($10\text{--}25\text{ ppt}$ for Tiger Prawns/Sea Bass), and Marine ($>25\text{ ppt}$ for Grouper)[cite: 4].
* **Critical Water Alerts:** Displays warnings if pH drifts outside safe limits ($6.5\text{--}9.0$) or if Dissolved Oxygen falls below $4.0\text{ mg/L}$[cite: 4].
* **Pond Stocking & Daily Feeding:** Estimates optimal fingerling/post-larvae stocking capacity for pond size and calculates daily feed requirements based on biomass consumption models[cite: 4].
* **Drinking Water Assessment:** Tests drinking water samples against recommended ranges for pH ($6.5\text{--}8.5$), Total Dissolved Solids ($\text{TDS} < 500\text{ ppm}$), and hardness[cite: 4].

</details>

<details>
<summary><b>🗺️ 4. RouteLens — Travel Assistant & Ride Price Comparison (Click to expand)</b></summary>

<br>

* **Interactive Mapping & Route Polyline:** Uses OpenStreetMap geocoding and the OSRM routing engine to display driving routes with optional stopovers (Via) on an interactive Leaflet map[cite: 10].
* **Multi-Service Cab Comparison:** Compares estimated fares and trip durations across Uber, Ola, and Rapido, complete with direct booking deep links[cite: 10].
* **Self-Drive & Toll Cost Estimator:** Calculates real-time fuel costs based on vehicle mileage and fuel price, factors in estimated highway tolls, and includes round-trip calculations[cite: 10].
* **Terrain Elevation Profiling:** Generates an interactive Chart.js elevation chart showing gradient and climbs along the travel path[cite: 10].
* **PDF Itinerary & Route QR Code:** Exports detailed timeline schedules to PDF via `jsPDF` and generates scannable QR codes for mobile navigation[cite: 10].
* **Traveler Toolkit:** Real-time destination weather, local clock, currency converter, interactive packing checklist, SOS numbers, and an embedded travel assistant chatbot[cite: 10].

</details>

<details>
<summary><b>🏋️ 5. FitLens — Health Metrics & Nutrition Target Sizer (Click to expand)</b></summary>

<br>

* **Energy Expenditure Calculator:** Computes Basal Metabolic Rate (BMR) via the Mifflin-St Jeor formula and calculates Total Daily Energy Expenditure (TDEE) across activity levels[cite: 6].
* **Goal-Driven Calorie Targets:** Adjusts caloric intake based on personal goals (Maintenance, 0.5 kg/week Fat Loss, or 0.5 kg/week Muscle Gain)[cite: 6].
* **Macronutrient Distribution:** Splits target calories into Carbohydrates ($40\%$), Protein ($30\%$), and Healthy Fats ($30\%$) in total grams[cite: 6].
* **Hydration Calculator:** Computes baseline daily water intake based on body weight ($35\text{ ml/kg}$) and adds bonus water for workout duration ($350\text{ ml per } 30\text{ min}$)[cite: 6].
* **US Navy Body Fat Estimation:** Calculates body fat percentages using circumference measurements of the neck, waist, height, and hips (for females)[cite: 6].

</details>

---

## 🧮 Built-in Calculators & Logic

* **BMR & TDEE Calculations (FitLens):**
  * $\text{BMR}_{\text{Male}} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age} + 5$[cite: 6]
  * $\text{BMR}_{\text{Female}} = 10 \times \text{weight (kg)} + 6.25 \times \text{height (cm)} - 5 \times \text{age} - 161$[cite: 6]
  * $\text{TDEE} = \text{BMR} \times \text{Activity Multiplier (1.2 to 1.9)}$[cite: 6]
* **Hydration Intake Target (FitLens):**
  * $\text{Daily Water (Liters)} = (\text{weight (kg)} \times 0.035) + \left(\frac{\text{workout minutes}}{30} \times 0.35\right)$[cite: 6]
* **Fertilizer Deficit Requirements (AgriLens):**
  * $\text{Deficit P} = \max(0, 60 - \text{soil P})$[cite: 3]
  * $\text{DAP Needed (kg)} = \left(\frac{\text{Deficit P}}{0.46}\right) \times \text{Farm Area (ha)}$[cite: 3]
  * $\text{Urea N Contribution} = \left(\frac{\text{DAP (kg)}}{\text{Farm Area}}\right) \times 0.18$[cite: 3]
  * $\text{Urea Needed (kg)} = \left(\frac{\max(0, (120 - \text{soil N}) - \text{Urea N})}{0.46}\right) \times \text{Farm Area (ha)}$[cite: 3]
  * $\text{MOP Needed (kg)} = \left(\frac{\max(0, 60 - \text{soil K})}{0.60}\right) \times \text{Farm Area (ha)}$[cite: 3]
* **Haversine Distance Model (RouteLens):**
  * $d = 2R \cdot \arcsin\left(\sqrt{\sin^2\left(\frac{\Delta\text{lat}}{2}\right) + \cos(\text{lat}_1)\cos(\text{lat}_2)\sin^2\left(\frac{\Delta\text{lon}}{2}\right)}\right)$[cite: 10]

---

## 🌐 Integrated APIs & Services

* **OpenFDA Drug Label API:** Fetches structured medicine usage, dosage, and warning profiles[cite: 8].
* **Hugging Face Inference API:** Uses the `microsoft/trocr-base-printed` OCR model to process prescription and packaging images[cite: 8].
* **OpenStreetMap Nominatim:** Provides debounced address autocomplete and geocoding[cite: 10].
* **OSRM Routing Engine:** Delivers polyline coordinates, multi-stop itineraries, and travel time estimates[cite: 10].
* **Open-Meteo API:** Provides destination weather conditions and elevation path sampling[cite: 10].
* **ExchangeRate-API:** Delivers multi-currency conversion rates[cite: 10].

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
* Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari)[cite: 1, 8].
* A local static server to support camera input and local asset loading without CORS restrictions[cite: 8].

### Running the App Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/tnvs-lens-universe.git](https://github.com/your-username/tnvs-lens-universe.git)
   cd tnvs-lens-universe
