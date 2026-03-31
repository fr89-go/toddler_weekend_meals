# Toddler Weekend Meal Planner


A simple meal-planning helper for children aged **12 to 24 months**. It creates a balanced weekend plan (breakfast, lunch, dinner for Saturday and Sunday) and generates a deduplicated shopping list.

## What was improved

- Sample meals are now age-appropriate for toddlers 12–24 months (soft textures, lower salt/sugar, no obvious choking-risk foods such as whole nuts).
- Dataset includes a balanced mix of breakfasts, lunches, and dinners.
- Filtering now strictly applies all selected constraints:
  - foods to avoid
  - maximum prep time
  - selected preference (e.g., `omnivore` or `vegetarian`)
- Shopping list removes duplicate ingredients (case/whitespace normalized).

## How meal selection works

1. **Filter first**: meals are removed if they include avoided foods, exceed prep-time limit, or do not match the chosen preference.
2. **Group by meal type**: remaining meals are grouped into breakfast/lunch/dinner.
3. **Balanced weekend plan**: planner picks one meal per type for Saturday and one for Sunday. If only one option exists for a type, it is reused.
4. **Shopping list**: ingredients from all selected meals are merged, pantry items are excluded, and duplicates are removed.

## Files

- `meal_planner.py` – dataset + filtering + meal selection + shopping list logic.
- `test_meal_planner.py` – unit tests for filtering, balance validation, and deduplication.

## Run tests

```bash
python -m unittest -v
```
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
Open `http://localhost:8000`.

