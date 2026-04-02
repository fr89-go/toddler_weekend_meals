const MEALS = [
  {
    name: "Banana Oat Porridge",
    mealType: "breakfast",
    description: "Creamy oats mashed with banana for an easy toddler breakfast.",
    ingredients: ["rolled oats", "milk", "banana", "cinnamon"],
    steps: [
      "Cook oats with milk until soft.",
      "Mash banana and stir in.",
      "Cool slightly before serving."
    ],
    prepTime: 10,
    tags: ["breakfast", "quick", "nutritious", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Apple Yogurt Bowl",
    mealType: "breakfast",
    description: "Soft grated apple mixed with plain yogurt and oats.",
    ingredients: ["plain yogurt", "apple", "quick oats", "chia seeds"],
    steps: [
      "Grate apple finely.",
      "Mix yogurt, oats, and apple.",
      "Top with a tiny sprinkle of chia seeds."
    ],
    prepTime: 8,
    tags: ["breakfast", "quick", "nutritious"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Mini Veggie Egg Muffins",
    mealType: "breakfast",
    description: "Soft baked egg bites with spinach and bell pepper.",
    ingredients: ["eggs", "spinach", "bell pepper", "cheese"],
    steps: [
      "Whisk eggs and chopped veggies.",
      "Pour into mini muffin tray.",
      "Bake until set and cool."
    ],
    prepTime: 25,
    tags: ["breakfast", "nutritious", "batch-cook", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Avocado Toast Fingers",
    mealType: "breakfast",
    description: "Whole-grain toast fingers topped with mashed avocado.",
    ingredients: ["whole-grain bread", "avocado", "olive oil", "lemon juice"],
    steps: [
      "Toast bread lightly.",
      "Mash avocado with a drop of lemon juice.",
      "Spread and slice into toddler fingers."
    ],
    prepTime: 10,
    tags: ["breakfast", "quick", "nutritious"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Berry Cottage Cheese Pancakes",
    mealType: "breakfast",
    description: "Soft mini pancakes with cottage cheese and berries.",
    ingredients: ["cottage cheese", "egg", "flour", "berries"],
    steps: [
      "Blend cottage cheese, egg, and flour.",
      "Cook mini pancakes on a skillet.",
      "Top with mashed berries."
    ],
    prepTime: 20,
    tags: ["breakfast", "nutritious", "batch-cook"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Peach Overnight Oats",
    mealType: "breakfast",
    description: "No-cook oats softened overnight with peach.",
    ingredients: ["rolled oats", "milk", "peach", "yogurt"],
    steps: [
      "Mix oats, milk, and yogurt.",
      "Refrigerate overnight.",
      "Stir in diced soft peach before serving."
    ],
    prepTime: 7,
    tags: ["breakfast", "quick", "batch-cook", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Chicken Veggie Rice Bowl",
    mealType: "lunch",
    description: "Soft rice with shredded chicken and steamed vegetables.",
    ingredients: ["cooked rice", "chicken breast", "carrot", "peas"],
    steps: [
      "Steam vegetables until soft.",
      "Cook and shred chicken finely.",
      "Mix with warm rice."
    ],
    prepTime: 25,
    tags: ["lunch", "nutritious", "batch-cook", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Lentil Tomato Pasta",
    mealType: "lunch",
    description: "Small pasta tossed with mild lentil tomato sauce.",
    ingredients: ["small pasta", "red lentils", "tomato", "carrot", "olive oil"],
    steps: [
      "Boil pasta until very soft.",
      "Cook lentils with tomato and carrot.",
      "Mix pasta and sauce."
    ],
    prepTime: 30,
    tags: ["lunch", "nutritious", "batch-cook"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Sweet Potato Bean Mash",
    mealType: "lunch",
    description: "Mashed sweet potato and white beans with mild herbs.",
    ingredients: ["sweet potato", "white beans", "olive oil", "parsley"],
    steps: [
      "Steam sweet potato until soft.",
      "Warm beans and mash together.",
      "Add olive oil and parsley."
    ],
    prepTime: 18,
    tags: ["lunch", "quick", "nutritious", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Turkey Veggie Meatballs",
    mealType: "lunch",
    description: "Tender baked turkey meatballs with zucchini and oats.",
    ingredients: ["ground turkey", "zucchini", "egg", "oats"],
    steps: [
      "Mix turkey, grated zucchini, egg, and oats.",
      "Roll mini meatballs.",
      "Bake until cooked through."
    ],
    prepTime: 28,
    tags: ["lunch", "batch-cook", "low-mess", "nutritious"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Cheesy Broccoli Quinoa",
    mealType: "lunch",
    description: "Soft quinoa mixed with broccoli florets and cheese.",
    ingredients: ["quinoa", "broccoli", "cheddar cheese", "milk"],
    steps: [
      "Cook quinoa until fluffy and soft.",
      "Steam broccoli and chop finely.",
      "Stir in cheese and milk until creamy."
    ],
    prepTime: 22,
    tags: ["lunch", "nutritious", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Hummus Veggie Pinwheels",
    mealType: "lunch",
    description: "Soft wrap pinwheels with hummus and grated veggies.",
    ingredients: ["whole-wheat tortilla", "hummus", "cucumber", "carrot"],
    steps: [
      "Spread hummus on tortilla.",
      "Add grated veggies.",
      "Roll tightly and slice into soft rounds."
    ],
    prepTime: 12,
    tags: ["lunch", "quick", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Salmon Potato Cakes",
    mealType: "dinner",
    description: "Soft potato cakes with flaky salmon and dill.",
    ingredients: ["salmon", "potato", "egg", "dill"],
    steps: [
      "Steam potato and mash.",
      "Flake cooked salmon and mix with egg.",
      "Pan-cook small cakes until set."
    ],
    prepTime: 30,
    tags: ["dinner", "nutritious", "batch-cook"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Mild Chicken Noodle Soup",
    mealType: "dinner",
    description: "Comforting soup with soft noodles, chicken, and veggies.",
    ingredients: ["chicken", "small noodles", "carrot", "celery", "broth"],
    steps: [
      "Simmer chicken and veggies in broth.",
      "Add noodles and cook until soft.",
      "Cool and shred chicken finely."
    ],
    prepTime: 27,
    tags: ["dinner", "nutritious", "low-mess", "batch-cook"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Tofu Veggie Stir-Soft",
    mealType: "dinner",
    description: "Very soft tofu with tiny-cut vegetables and rice.",
    ingredients: ["tofu", "rice", "zucchini", "carrot", "low-sodium soy sauce"],
    steps: [
      "Cook rice until soft.",
      "Sauté finely diced veggies until tender.",
      "Add tofu cubes and combine with rice."
    ],
    prepTime: 20,
    tags: ["dinner", "quick", "nutritious", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Beef and Veggie Shepherd Mash",
    mealType: "dinner",
    description: "Lean beef with peas and carrot topped with potato mash.",
    ingredients: ["lean ground beef", "peas", "carrot", "potato", "milk"],
    steps: [
      "Cook beef with diced carrot and peas.",
      "Prepare smooth mashed potato.",
      "Layer beef mix and potato and warm through."
    ],
    prepTime: 35,
    tags: ["dinner", "nutritious", "batch-cook", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Creamy Pumpkin Risotto",
    mealType: "dinner",
    description: "Soft rice cooked with pumpkin puree and parmesan.",
    ingredients: ["arborio rice", "pumpkin puree", "onion", "parmesan", "broth"],
    steps: [
      "Cook onion and rice gently.",
      "Add broth gradually until soft.",
      "Stir in pumpkin puree and parmesan."
    ],
    prepTime: 30,
    tags: ["dinner", "nutritious", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Veggie Mac and Cheese",
    mealType: "dinner",
    description: "Soft macaroni with cheese sauce and hidden cauliflower.",
    ingredients: ["macaroni", "cauliflower", "cheddar cheese", "milk", "butter"],
    steps: [
      "Boil macaroni until very soft.",
      "Blend steamed cauliflower with milk and cheese.",
      "Mix sauce into macaroni."
    ],
    prepTime: 25,
    tags: ["dinner", "quick", "low-mess", "batch-cook"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Pear Spinach Smooth Oat Bowl",
    mealType: "breakfast",
    description: "Warm oats blended with pear and spinach for extra nutrients.",
    ingredients: ["oats", "pear", "spinach", "milk"],
    steps: [
      "Cook oats with milk.",
      "Blend pear and spinach until smooth.",
      "Stir blend into oats and warm briefly."
    ],
    prepTime: 12,
    tags: ["breakfast", "nutritious", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Ricotta Banana Toast Bites",
    mealType: "breakfast",
    description: "Soft toast squares with ricotta and mashed banana.",
    ingredients: ["whole-grain bread", "ricotta", "banana"],
    steps: [
      "Toast bread lightly.",
      "Spread ricotta and mashed banana.",
      "Cut into bite-size squares."
    ],
    prepTime: 9,
    tags: ["breakfast", "quick", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Chicken Avocado Pasta",
    mealType: "lunch",
    description: "Tiny pasta mixed with shredded chicken and avocado sauce.",
    ingredients: ["tiny pasta", "chicken", "avocado", "yogurt", "peas"],
    steps: [
      "Cook pasta and peas until soft.",
      "Blend avocado with yogurt.",
      "Mix with shredded chicken and pasta."
    ],
    prepTime: 20,
    tags: ["lunch", "quick", "nutritious"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Soft Veggie Fritters",
    mealType: "lunch",
    description: "Pan-cooked fritters with zucchini, carrot, and egg.",
    ingredients: ["zucchini", "carrot", "egg", "flour", "olive oil"],
    steps: [
      "Grate vegetables and squeeze excess moisture.",
      "Mix with egg and flour.",
      "Cook small fritters until tender."
    ],
    prepTime: 18,
    tags: ["lunch", "quick", "batch-cook", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Turkey Lentil Stew",
    mealType: "dinner",
    description: "Mild stew with turkey, lentils, and soft vegetables.",
    ingredients: ["ground turkey", "lentils", "carrot", "tomato", "broth"],
    steps: [
      "Brown turkey lightly.",
      "Add lentils, vegetables, and broth.",
      "Simmer until lentils are very soft."
    ],
    prepTime: 32,
    tags: ["dinner", "nutritious", "batch-cook", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  },
  {
    name: "Egg Fried Rice (Toddler Style)",
    mealType: "dinner",
    description: "Soft rice with egg and finely chopped vegetables.",
    ingredients: ["cooked rice", "egg", "peas", "carrot", "sesame oil"],
    steps: [
      "Scramble egg until soft.",
      "Cook tiny-cut vegetables until tender.",
      "Stir in rice and egg and warm through."
    ],
    prepTime: 15,
    tags: ["dinner", "quick", "low-mess"],
    ageMinMonths: 12,
    ageMaxMonths: 24
  }
];

const SLOTS = [
  { day: "Saturday", mealType: "breakfast" },
  { day: "Saturday", mealType: "lunch" },
  { day: "Saturday", mealType: "dinner" },
  { day: "Sunday", mealType: "breakfast" },
  { day: "Sunday", mealType: "lunch" },
  { day: "Sunday", mealType: "dinner" }
];

const SHOPPING_CATEGORIES = {
  Fresh: ["banana", "apple", "peach", "pear", "spinach", "bell pepper", "carrot", "peas", "sweet potato", "zucchini", "cucumber", "broccoli", "potato", "celery", "pumpkin puree", "onion", "dill", "parsley", "cauliflower", "berries", "tomato", "lemon juice", "avocado"],
  Fridge: ["milk", "plain yogurt", "yogurt", "cheese", "cottage cheese", "ricotta", "eggs", "egg", "chicken", "chicken breast", "ground turkey", "lean ground beef", "tofu", "salmon", "butter", "parmesan", "cheddar cheese"],
  Cupboard: ["rolled oats", "oats", "quick oats", "small pasta", "tiny pasta", "macaroni", "quinoa", "arborio rice", "cooked rice", "rice", "small noodles", "flour", "olive oil", "chia seeds", "white beans", "hummus", "whole-wheat tortilla", "whole-grain bread", "red lentils", "lentils", "broth", "low-sodium soy sauce", "sesame oil", "cinnamon"],
  Freezer: []
};

const form = document.querySelector("#planner-form");
const weekendPlanEl = document.querySelector("#weekendPlan");
const shoppingGroupsEl = document.querySelector("#shoppingGroups");
const prepAheadEl = document.querySelector("#prepAhead");
const reuseTipsEl = document.querySelector("#reuseTips");
const formMessageEl = document.querySelector("#form-message");
const resultsEmptyEl = document.querySelector("#results-empty");
const shoppingEmptyEl = document.querySelector("#shopping-empty");
const prepEmptyEl = document.querySelector("#prep-empty");
const reuseEmptyEl = document.querySelector("#reuse-empty");
const copyButton = document.querySelector("#copy-list");
const copyStatusEl = document.querySelector("#copy-status");
const loadingStateEl = document.querySelector("#loading-state");
const planButton = document.querySelector("#plan-button");

let currentPlan = [];
let currentShoppingGroups = {};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  resetMessages();

  const ageMonths = Number(document.querySelector("#ageMonths").value);
  const maxPrepTime = Number(document.querySelector("#maxPrepTime").value);
  const priorities = getSelectedPriorities();
  const ingredientsAtHome = parseCommaList(document.querySelector("#ingredientsAtHome").value);
  const foodsToAvoid = parseCommaList(document.querySelector("#foodsToAvoid").value);

  if (ageMonths < 12 || ageMonths > 24) {
    formMessageEl.textContent = "Please enter an age between 12 and 24 months.";
    formMessageEl.classList.add("error");
    return;
  }

  showLoading(true);
  await wait(900);

  currentPlan = generateWeekendPlan({
    ageMonths,
    ingredientsAtHome,
    foodsToAvoid,
    maxPrepTime,
    priorities
  });

  renderPlan(currentPlan, { ageMonths, maxPrepTime, priorities, foodsToAvoid, ingredientsAtHome });
  currentShoppingGroups = buildGroupedShoppingList(currentPlan, ingredientsAtHome);
  renderShoppingGroups(currentShoppingGroups);
  renderPrepAhead(buildPrepAhead(currentPlan));
  renderReuseTips(buildReuseTips(currentPlan));

  showLoading(false);
  formMessageEl.textContent = "Weekend plan updated successfully.";
  weekendPlanEl.scrollIntoView({ behavior: "smooth", block: "start" });
});

copyButton.addEventListener("click", async () => {
  copyStatusEl.classList.remove("error");
  const text = buildShoppingCopyText(currentShoppingGroups);
  if (!text.trim()) {
    copyStatusEl.textContent = "Nothing to copy yet.";
    copyStatusEl.classList.add("error");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    copyStatusEl.textContent = "Shopping list copied to clipboard.";
  } catch {
    copyStatusEl.textContent = "Copy failed. Please copy manually.";
    copyStatusEl.classList.add("error");
  }
});

weekendPlanEl.addEventListener("click", (event) => {
  const stepsBtn = event.target.closest("[data-action='toggle-steps']");
  if (stepsBtn) {
    const mealId = Number(stepsBtn.dataset.mealId);
    toggleSteps(mealId, stepsBtn);
    return;
  }

  const swapBtn = event.target.closest("[data-action='swap-meal']");
  if (swapBtn) {
    const mealId = Number(swapBtn.dataset.mealId);
    swapMeal(mealId);
  }
});

function getSelectedPriorities() {
  return [...document.querySelectorAll("input[name='priorities']:checked")].map((input) => input.value);
}

function resetMessages() {
  formMessageEl.textContent = "";
  formMessageEl.classList.remove("error");
  copyStatusEl.textContent = "";
  copyStatusEl.classList.remove("error");
}

function showLoading(isLoading) {
  loadingStateEl.hidden = !isLoading;
  planButton.disabled = isLoading;
  planButton.textContent = isLoading ? "Planning..." : "Plan my weekend";
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseCommaList(value) {
  return value
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function generateWeekendPlan(preferences) {
  const { ageMonths, foodsToAvoid, maxPrepTime, priorities, ingredientsAtHome } = preferences;
  const chosenNames = new Set();

  return SLOTS.map((slot, index) => {
    const candidates = getCandidates(slot.mealType, {
      ageMonths,
      foodsToAvoid,
      maxPrepTime,
      priorities,
      ingredientsAtHome
    });

    const selected = candidates.find((meal) => !chosenNames.has(meal.name)) || candidates[0];
    chosenNames.add(selected.name);

    return {
      id: index,
      day: slot.day,
      mealType: slot.mealType,
      meal: selected
    };
  });
}

function getCandidates(mealType, filters) {
  const { ageMonths, foodsToAvoid, maxPrepTime, priorities, ingredientsAtHome } = filters;

  const valid = MEALS.filter((meal) => {
    const hasAvoidedFood = meal.ingredients.some((ingredient) =>
      foodsToAvoid.some((avoid) => ingredient.toLowerCase().includes(avoid))
    );
    return (
      meal.mealType === mealType &&
      meal.ageMinMonths <= ageMonths &&
      meal.ageMaxMonths >= ageMonths &&
      !hasAvoidedFood
    );
  });

  const strict = valid.filter((meal) => meal.prepTime <= maxPrepTime);
  const pool = strict.length ? strict : valid;

  return [...pool].sort((a, b) => scoreMeal(b, priorities, ingredientsAtHome) - scoreMeal(a, priorities, ingredientsAtHome));
}

function scoreMeal(meal, priorities, ingredientsAtHome) {
  let score = 0;
  priorities.forEach((priority) => {
    if (meal.tags.includes(priority)) score += 3;
  });

  if (priorities.includes("use-at-home")) {
    const hits = meal.ingredients.filter((item) => ingredientsAtHome.includes(item.toLowerCase())).length;
    score += hits * 2;
  }

  score += Math.max(0, 40 - meal.prepTime) / 20;
  return score;
}

function renderPlan(plannedMeals, preferences) {
  const groupedByDay = plannedMeals.reduce((acc, entry) => {
    if (!acc[entry.day]) acc[entry.day] = [];
    acc[entry.day].push(entry);
    return acc;
  }, {});

  weekendPlanEl.innerHTML = "";

  Object.entries(groupedByDay).forEach(([day, entries]) => {
    const section = document.createElement("article");
    section.className = "day-section";
    section.innerHTML = `<h3>${day}</h3>`;

    entries.forEach((entry) => {
      const card = document.createElement("article");
      card.className = "meal-card";
      const nutritionScore = getNutritionScore(entry.meal);
      const ingredientsPreview = entry.meal.ingredients.slice(0, 4).join(", ");
      card.innerHTML = `
        <div class="meal-head">
          <div class="meal-title-group">
            <p class="meal-type">${entry.mealType}</p>
            <p class="meal-name">${entry.meal.name}</p>
          </div>
          <div class="meal-stats">
            <p class="meal-stat meal-stat-prep"><strong>Prep time</strong><span>${entry.meal.prepTime} min</span></p>
            <p class="meal-stat meal-stat-nutrition"><strong>Nutrition score</strong><span>${nutritionScore}/10</span></p>
          </div>
        </div>
        <div class="meal-image meal-image-${entry.mealType}">
          <div class="meal-image-content">
            <span class="meal-image-icon" aria-hidden="true">${getMealIcon(entry.mealType)}</span>
            <span class="meal-image-caption">Recipe preview</span>
          </div>
        </div>
        <p class="meal-description">${getMealReason(entry.meal, preferences)}</p>
        <p class="meal-ingredients"><strong>Ingredients:</strong> ${ingredientsPreview}${entry.meal.ingredients.length > 4 ? "..." : ""}</p>
        <div class="meal-actions">
          <button class="meal-btn" type="button" data-action="toggle-steps" data-meal-id="${entry.id}" aria-expanded="false">Show steps</button>
          <button class="meal-btn" type="button" data-action="swap-meal" data-meal-id="${entry.id}">Swap meal</button>
        </div>
        <ol class="meal-steps" id="meal-steps-${entry.id}" hidden>
          ${entry.meal.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      `;

      section.appendChild(card);
    });

    weekendPlanEl.appendChild(section);
  });

  resultsEmptyEl.hidden = true;
  weekendPlanEl.hidden = false;
}

function getNutritionScore(meal) {
  let score = 6;
  if (meal.tags.includes("nutritious")) score += 2;
  if (meal.ingredients.length >= 4) score += 1;
  if (meal.tags.includes("low-mess")) score += 1;
  if (meal.prepTime > 30) score -= 1;
  return Math.max(1, Math.min(10, score));
}

function getMealIcon(mealType) {
  if (mealType === "breakfast") return "☀️";
  if (mealType === "lunch") return "🥗";
  return "🍲";
}

function getMealReason(meal, preferences) {
  const matchedPriority = preferences.priorities.find((priority) => meal.tags.includes(priority));
  if (matchedPriority) {
    return `Chosen because it fits your “${formatPriorityLabel(matchedPriority)}” priority and stays toddler-friendly.`;
  }

  if (meal.prepTime <= preferences.maxPrepTime) {
    return "Chosen because it matches your prep-time target and age range.";
  }

  return "Chosen as the closest age-appropriate backup option for this meal slot.";
}

function formatPriorityLabel(value) {
  return value === "use-at-home" ? "Use what I already have" : value.replace("-", " ");
}

function toggleSteps(mealId, button) {
  const stepsEl = document.querySelector(`#meal-steps-${mealId}`);
  const isHidden = stepsEl.hidden;
  stepsEl.hidden = !isHidden;
  button.textContent = isHidden ? "Hide steps" : "Show steps";
  button.setAttribute("aria-expanded", String(isHidden));
}

function swapMeal(mealId) {
  const currentEntry = currentPlan.find((entry) => entry.id === mealId);
  if (!currentEntry) return;

  const ageMonths = Number(document.querySelector("#ageMonths").value);
  const maxPrepTime = Number(document.querySelector("#maxPrepTime").value);
  const priorities = getSelectedPriorities();
  const ingredientsAtHome = parseCommaList(document.querySelector("#ingredientsAtHome").value);
  const foodsToAvoid = parseCommaList(document.querySelector("#foodsToAvoid").value);

  const candidates = getCandidates(currentEntry.mealType, {
    ageMonths,
    foodsToAvoid,
    maxPrepTime,
    priorities,
    ingredientsAtHome
  }).filter((meal) => meal.name !== currentEntry.meal.name);

  if (!candidates.length) {
    formMessageEl.textContent = `No alternate ${currentEntry.mealType} meal found with your settings.`;
    formMessageEl.classList.add("error");
    return;
  }

  currentEntry.meal = candidates[0];
  renderPlan(currentPlan, { ageMonths, maxPrepTime, priorities });
  currentShoppingGroups = buildGroupedShoppingList(currentPlan, ingredientsAtHome);
  renderShoppingGroups(currentShoppingGroups);
  renderPrepAhead(buildPrepAhead(currentPlan));
  renderReuseTips(buildReuseTips(currentPlan));
  formMessageEl.textContent = `${capitalize(currentEntry.mealType)} swapped.`;
}

function buildGroupedShoppingList(plannedMeals, ingredientsAtHome) {
  const required = new Set(plannedMeals.flatMap(({ meal }) => meal.ingredients.map((item) => item.toLowerCase())));
  ingredientsAtHome.forEach((item) => required.delete(item.toLowerCase()));

  const grouped = { Fresh: [], Fridge: [], Cupboard: [], Freezer: [] };

  [...required].sort().forEach((item) => {
    const category = Object.entries(SHOPPING_CATEGORIES).find(([, words]) => words.includes(item))?.[0] || "Cupboard";
    grouped[category].push(item);
  });

  return grouped;
}

function renderShoppingGroups(groups) {
  const hasItems = Object.values(groups).some((items) => items.length);
  if (!hasItems) {
    shoppingGroupsEl.hidden = true;
    shoppingGroupsEl.innerHTML = "";
    shoppingEmptyEl.hidden = false;
    shoppingEmptyEl.innerHTML = "<p>Great news — you already have everything for this plan.</p>";
    return;
  }

  shoppingGroupsEl.innerHTML = Object.entries(groups)
    .map(([group, items]) => {
      if (!items.length) return "";
      return `
        <article class="shopping-group">
          <h3>${group}</h3>
          <p class="list-subtitle">${items.length} item${items.length === 1 ? "" : "s"}</p>
          <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `;
    })
    .join("");

  shoppingEmptyEl.hidden = true;
  shoppingGroupsEl.hidden = false;
}

function buildShoppingCopyText(groups) {
  return Object.entries(groups)
    .filter(([, items]) => items.length)
    .map(([group, items]) => `${group}
${items.map((item) => `- ${item}`).join("\n")}`)
    .join("\n\n");
}

function renderPrepAhead(items) {
  if (!items.length) {
    prepAheadEl.hidden = true;
    prepAheadEl.innerHTML = "";
    prepEmptyEl.hidden = false;
    return;
  }

  prepAheadEl.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  prepEmptyEl.hidden = true;
  prepAheadEl.hidden = false;
}

function renderReuseTips(items) {
  if (!items.length) {
    reuseTipsEl.hidden = true;
    reuseTipsEl.innerHTML = "";
    reuseEmptyEl.hidden = false;
    return;
  }

  reuseTipsEl.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
  reuseEmptyEl.hidden = true;
  reuseTipsEl.hidden = false;
}

function buildPrepAhead(plannedMeals) {
  const tips = new Set();
  plannedMeals.forEach(({ meal }) => {
    if (meal.tags.includes("batch-cook")) {
      tips.add(`Batch-cook ${meal.name} and save toddler-size portions for another day.`);
    }
    if (meal.ingredients.includes("cooked rice") || meal.ingredients.includes("rice")) {
      tips.add("Cook one big pot of rice on Friday night to use through the weekend.");
    }
    if (meal.ingredients.some((i) => ["carrot", "zucchini", "broccoli"].includes(i))) {
      tips.add("Pre-chop and steam hard vegetables so weekend meals come together faster.");
    }
  });
  return [...tips];
}

function buildReuseTips(plannedMeals) {
  const tips = [];
  const saturdayDinner = plannedMeals.find((item) => item.day === "Saturday" && item.mealType === "dinner")?.meal;
  const sundayLunch = plannedMeals.find((item) => item.day === "Sunday" && item.mealType === "lunch")?.meal;

  if (saturdayDinner && sundayLunch) {
    tips.push(`Make extra ${saturdayDinner.name} on Saturday and reuse leftovers in Sunday lunch sides.`);
  }

  const ingredientUse = new Map();
  plannedMeals.forEach(({ meal, day, mealType }) => {
    meal.ingredients.forEach((ingredient) => {
      if (!ingredientUse.has(ingredient)) ingredientUse.set(ingredient, []);
      ingredientUse.get(ingredient).push(`${day} ${mealType}`);
    });
  });

  ingredientUse.forEach((uses, ingredient) => {
    if (uses.length > 1 && tips.length < 4) {
      tips.push(`Prep ${ingredient} once and reuse it across ${uses.slice(0, 2).join(" and ")}.`);
    }
  });

  return tips.slice(0, 4);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
