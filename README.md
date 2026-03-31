# Toddler Weekend Meal Planner

A beginner-friendly single-page web app that builds a **Saturday + Sunday** meal plan (breakfast, lunch, dinner) for toddlers aged **12 to 24 months**.

## What this app does

- Lets you enter:
  - Child age in months (only 12-24 allowed)
  - Ingredients already at home
  - Foods to avoid
  - Maximum prep time
  - Meal preference (`quick`, `nutritious`, `low-mess`, `batch-cook`)
- Generates a full weekend plan:
  - Saturday breakfast, lunch, dinner
  - Sunday breakfast, lunch, dinner
- Shows, for each meal:
  - Meal name
  - Short description
  - Ingredients
  - Simple prep steps
  - Estimated prep time
- Creates:
  - One combined shopping list
  - A short prep-ahead section

## Meal data

- Uses built-in sample meal data only (no external APIs)
- Includes 20+ starter meals across breakfast, lunch, and dinner
- Every sample meal is designed for children aged 12-24 months
- Meals include helpful tags such as: `breakfast`, `lunch`, `dinner`, `quick`, `nutritious`, `low-mess`, `batch-cook`

## Project files

- `index.html` - app structure and form
- `styles.css` - clean mobile-friendly styling
- `script.js` - sample meals and planning logic

## Run locally

No build tools are required.

### Option 1: Open directly

1. Open `index.html` in your browser.

### Option 2: Use a tiny local server (recommended)

From this repository folder, run:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000`

## Notes

- This is a planning helper with sample data, not medical advice.
- Always cut food into toddler-safe sizes and check for allergy needs.
