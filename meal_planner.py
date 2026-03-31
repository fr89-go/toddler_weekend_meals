"""Toddler weekend meal planning helpers.

The planner targets children aged 12-24 months and includes:
- Age-appropriate sample meals
- Filtering by foods to avoid, max prep time, and preference
- Balanced weekend plans (breakfast/lunch/dinner for both days)
- Deduplicated shopping lists
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Iterable, List, Sequence

MEAL_TYPES = ("breakfast", "lunch", "dinner")


@dataclass(frozen=True)
class Meal:
    name: str
    meal_type: str
    prep_time_minutes: int
    ingredients: Sequence[str]
    preferences: Sequence[str]


# Meals are intentionally soft-textured / age-appropriate for 12-24 months.
# Avoided items include whole nuts, honey, high-salt processed foods, and choking risks.
SAMPLE_MEALS: List[Meal] = [
    Meal(
        name="Banana Oatmeal with Yogurt",
        meal_type="breakfast",
        prep_time_minutes=10,
        ingredients=("rolled oats", "banana", "whole milk yogurt", "cinnamon"),
        preferences=("omnivore", "vegetarian"),
    ),
    Meal(
        name="Scrambled Egg and Soft Toast Fingers",
        meal_type="breakfast",
        prep_time_minutes=12,
        ingredients=("egg", "whole grain bread", "butter", "milk"),
        preferences=("omnivore", "vegetarian"),
    ),
    Meal(
        name="Berry Cottage Cheese Pancakes",
        meal_type="breakfast",
        prep_time_minutes=18,
        ingredients=("cottage cheese", "egg", "oat flour", "blueberries"),
        preferences=("omnivore", "vegetarian"),
    ),
    Meal(
        name="Turkey and Sweet Potato Mash",
        meal_type="lunch",
        prep_time_minutes=25,
        ingredients=("ground turkey", "sweet potato", "olive oil", "peas"),
        preferences=("omnivore",),
    ),
    Meal(
        name="Lentil Veggie Stew",
        meal_type="lunch",
        prep_time_minutes=30,
        ingredients=("red lentils", "carrot", "zucchini", "olive oil"),
        preferences=("omnivore", "vegetarian"),
    ),
    Meal(
        name="Avocado Bean Quesadilla",
        meal_type="lunch",
        prep_time_minutes=15,
        ingredients=("whole wheat tortilla", "black beans", "avocado", "mild cheddar"),
        preferences=("omnivore", "vegetarian"),
    ),
    Meal(
        name="Salmon Rice and Broccoli Florets",
        meal_type="dinner",
        prep_time_minutes=25,
        ingredients=("salmon", "rice", "broccoli", "olive oil"),
        preferences=("omnivore",),
    ),
    Meal(
        name="Tofu Noodle Stir-Soft",
        meal_type="dinner",
        prep_time_minutes=20,
        ingredients=("soft tofu", "egg noodles", "carrot", "sesame oil"),
        preferences=("omnivore", "vegetarian"),
    ),
    Meal(
        name="Chicken and Butternut Pasta",
        meal_type="dinner",
        prep_time_minutes=28,
        ingredients=("chicken thigh", "small pasta", "butternut squash", "olive oil"),
        preferences=("omnivore",),
    ),
]


def _normalize_food_name(food: str) -> str:
    return " ".join(food.strip().lower().split())


def filter_meals(
    meals: Iterable[Meal],
    foods_to_avoid: Iterable[str] | None = None,
    max_prep_time: int | None = None,
    selected_preference: str = "omnivore",
) -> List[Meal]:
    """Return meals that satisfy all user constraints."""
    avoid = {_normalize_food_name(food) for food in (foods_to_avoid or [])}
    preference = selected_preference.strip().lower()

    filtered: List[Meal] = []
    for meal in meals:
        ingredients = {_normalize_food_name(ing) for ing in meal.ingredients}
        meal_prefs = {pref.strip().lower() for pref in meal.preferences}

        if avoid.intersection(ingredients):
            continue
        if max_prep_time is not None and meal.prep_time_minutes > max_prep_time:
            continue
        if preference and preference not in meal_prefs:
            continue

        filtered.append(meal)
    return filtered


def select_weekend_meals(meals: Sequence[Meal]) -> Dict[str, List[Meal]]:
    """Build a balanced Saturday/Sunday plan with breakfast/lunch/dinner each day.

    Strategy:
    - Group filtered meals by meal type.
    - For each meal type, choose up to two meals (for Sat + Sun).
    - If only one meal is available for a type, it is reused.
    - Raise a ValueError when any required meal type is missing.
    """
    grouped: Dict[str, List[Meal]] = {meal_type: [] for meal_type in MEAL_TYPES}
    for meal in meals:
        if meal.meal_type in grouped:
            grouped[meal.meal_type].append(meal)

    missing = [meal_type for meal_type, options in grouped.items() if not options]
    if missing:
        missing_types = ", ".join(missing)
        raise ValueError(f"Cannot create balanced plan; missing meal types: {missing_types}")

    plan = {"saturday": [], "sunday": []}
    for meal_type in MEAL_TYPES:
        options = grouped[meal_type]
        plan["saturday"].append(options[0])
        plan["sunday"].append(options[1] if len(options) > 1 else options[0])
    return plan


def build_shopping_list(plan: Dict[str, List[Meal]], pantry_items: Iterable[str] | None = None) -> List[str]:
    """Build a deduplicated shopping list excluding pantry items."""
    pantry = {_normalize_food_name(item) for item in (pantry_items or [])}

    canonical_to_original: Dict[str, str] = {}
    for day_meals in plan.values():
        for meal in day_meals:
            for ingredient in meal.ingredients:
                canonical = _normalize_food_name(ingredient)
                if canonical in pantry:
                    continue
                canonical_to_original.setdefault(canonical, ingredient)

    return [canonical_to_original[key] for key in sorted(canonical_to_original)]


if __name__ == "__main__":
    filtered_meals = filter_meals(
        SAMPLE_MEALS,
        foods_to_avoid=["egg"],
        max_prep_time=25,
        selected_preference="vegetarian",
    )
    weekend_plan = select_weekend_meals(filtered_meals)
    shopping = build_shopping_list(weekend_plan, pantry_items=["olive oil", "rice"])

    for day, meals in weekend_plan.items():
        print(day.title())
        for meal in meals:
            print(f" - {meal.meal_type.title()}: {meal.name}")

    print("\nShopping list:")
    for item in shopping:
        print(f" - {item}")
