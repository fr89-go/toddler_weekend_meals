import unittest

from meal_planner import (
    SAMPLE_MEALS,
    Meal,
    build_shopping_list,
    filter_meals,
    select_weekend_meals,
)


class MealPlannerTests(unittest.TestCase):
    def test_filter_respects_all_constraints(self):
        meals = filter_meals(
            SAMPLE_MEALS,
            foods_to_avoid=["egg", "salmon"],
            max_prep_time=20,
            selected_preference="vegetarian",
        )
        self.assertTrue(meals)
        for meal in meals:
            self.assertNotIn("egg", {i.lower() for i in meal.ingredients})
            self.assertNotIn("salmon", {i.lower() for i in meal.ingredients})
            self.assertLessEqual(meal.prep_time_minutes, 20)
            self.assertIn("vegetarian", {p.lower() for p in meal.preferences})

    def test_balanced_plan_requires_all_meal_types(self):
        breakfast_only = [
            Meal(
                name="Only breakfast",
                meal_type="breakfast",
                prep_time_minutes=5,
                ingredients=("oats",),
                preferences=("vegetarian",),
            )
        ]
        with self.assertRaises(ValueError):
            select_weekend_meals(breakfast_only)

    def test_shopping_list_deduplicates(self):
        filtered = filter_meals(SAMPLE_MEALS, selected_preference="omnivore")
        plan = select_weekend_meals(filtered)
        shopping = build_shopping_list(plan)
        self.assertEqual(len(shopping), len(set(i.lower() for i in shopping)))


if __name__ == "__main__":
    unittest.main()
