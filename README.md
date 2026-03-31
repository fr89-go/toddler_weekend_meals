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
