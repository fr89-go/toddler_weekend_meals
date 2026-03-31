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


const form = document.querySelector("#planner-form");
const weekendPlanEl = document.querySelector("#weekendPlan");
const shoppingListEl = document.querySelector("#shoppingList");
const prepAheadEl = document.querySelector("#prepAhead");
const formMessageEl = document.querySelector("#form-message");
const resultsEmptyEl = document.querySelector("#results-empty");
const shoppingEmptyEl = document.querySelector("#shopping-empty");
const prepEmptyEl = document.querySelector("#prep-empty");
const copyButton = document.querySelector("#copy-list");
const copyStatusEl = document.querySelector("#copy-status");

let currentShoppingItems = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessageEl.textContent = "";
  formMessageEl.classList.remove("error");
  copyStatusEl.textContent = "";

  const ageMonths = Number(document.querySelector("#ageMonths").value);
  const maxPrepTime = Number(document.querySelector("#maxPrepTime").value);
  const mealPreference = document.querySelector("#mealPreference").value;
  const ingredientsAtHome = parseCommaList(
    document.querySelector("#ingredientsAtHome").value
  );
  const foodsToAvoid = parseCommaList(document.querySelector("#foodsToAvoid").value);

  if (ageMonths < 12 || ageMonths > 24) {
    formMessageEl.textContent = "Please enter an age between 12 and 24 months.";
    formMessageEl.classList.add("error");
    return;
  }

  const plannedMeals = generateWeekendPlan({
    ageMonths,
    ingredientsAtHome,
    foodsToAvoid,
    maxPrepTime,
    mealPreference
  });

  renderPlan(plannedMeals);
  renderShoppingList(buildShoppingList(plannedMeals, ingredientsAtHome));
  renderPrepAhead(buildPrepAhead(plannedMeals));
  formMessageEl.textContent = "Weekend plan updated.";
  weekendPlanEl.scrollIntoView({ behavior: "smooth", block: "start" });
});

copyButton.addEventListener("click", async () => {
  if (!currentShoppingItems.length) {
    copyStatusEl.textContent = "Nothing to copy yet.";
    copyStatusEl.classList.add("error");
    return;
  }

  const listText = currentShoppingItems.map((item) => `• ${item}`).join("\n");

  try {
    await navigator.clipboard.writeText(listText);
    copyStatusEl.textContent = "Shopping list copied to clipboard.";
    copyStatusEl.classList.remove("error");
  } catch {
    copyStatusEl.textContent = "Copy failed. Select and copy items manually.";
    copyStatusEl.classList.add("error");
  }
});

function parseCommaList(value) {
  return value
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function generateWeekendPlan(preferences) {
  const { ageMonths, foodsToAvoid, maxPrepTime, mealPreference } = preferences;
  const chosenNames = new Set();

  return SLOTS.map((slot) => {
    const candidates = MEALS.filter((meal) => {
      const hasAvoidedFood = meal.ingredients.some((ingredient) =>
        foodsToAvoid.some((avoid) => ingredient.toLowerCase().includes(avoid))
      );

      return (
        meal.mealType === slot.mealType &&
        meal.ageMinMonths <= ageMonths &&
        meal.ageMaxMonths >= ageMonths &&
        !hasAvoidedFood &&
        meal.prepTime <= maxPrepTime
      );
    });

    const prioritized = [...candidates].sort((a, b) => {
      const aMatch = a.tags.includes(mealPreference) ? 1 : 0;
      const bMatch = b.tags.includes(mealPreference) ? 1 : 0;
      if (aMatch !== bMatch) return bMatch - aMatch;
      return a.prepTime - b.prepTime;
    });

    let selected = prioritized.find((meal) => !chosenNames.has(meal.name));

    if (!selected) {
      const fallback = MEALS.filter(
        (meal) =>
          meal.mealType === slot.mealType &&
          meal.ageMinMonths <= ageMonths &&
          meal.ageMaxMonths >= ageMonths
      ).sort((a, b) => a.prepTime - b.prepTime);
      selected = fallback.find((meal) => !chosenNames.has(meal.name)) || fallback[0];
    }

    chosenNames.add(selected.name);

    return {
      day: slot.day,
      mealType: slot.mealType,
      meal: selected
    };
  });
}

function renderPlan(plannedMeals) {
  weekendPlanEl.innerHTML = "";

  const groupedByDay = plannedMeals.reduce((acc, entry) => {
    if (!acc[entry.day]) {
      acc[entry.day] = [];
    }
    acc[entry.day].push(entry);
    return acc;
  }, {});

  Object.entries(groupedByDay).forEach(([day, entries]) => {
    const dayCard = document.createElement("article");
    dayCard.className = "day-card";
    dayCard.setAttribute("aria-label", day);

    dayCard.innerHTML = `<h3>${day}</h3>`;

    entries.forEach(({ mealType, meal }) => {
      const row = document.createElement("div");
      row.className = "meal-row";
      row.innerHTML = `
        <span class="meal-type">${mealType}</span>
        <div>
          <p class="meal-name">${meal.name}</p>
          <p class="meal-meta">${meal.prepTime} min · ${meal.ingredients.join(", ")}</p>
        </div>
      `;
      dayCard.appendChild(row);
    });

    weekendPlanEl.appendChild(dayCard);
  });

  resultsEmptyEl.hidden = true;
  weekendPlanEl.hidden = false;
}

function renderShoppingList(items) {
  currentShoppingItems = items;

  if (!items.length) {
    shoppingListEl.hidden = true;
    shoppingListEl.innerHTML = "";
    shoppingEmptyEl.hidden = false;
    shoppingEmptyEl.innerHTML = "<p>Great news — you already have all ingredients for this plan.</p>";
    return;
  }

  shoppingListEl.innerHTML = items
    .map(
      (item, index) => `
        <li>
          <input id="shop-${index}" type="checkbox" />
          <label for="shop-${index}">${item}</label>
        </li>
      `
    )
    .join("");

  shoppingEmptyEl.hidden = true;
  shoppingListEl.hidden = false;
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

function buildShoppingList(plannedMeals, ingredientsAtHome) {
  const required = new Set(
    plannedMeals.flatMap(({ meal }) => meal.ingredients.map((item) => item.toLowerCase()))
  );
  ingredientsAtHome.forEach((item) => required.delete(item.toLowerCase()));

  return [...required].sort();
}

function buildPrepAhead(plannedMeals) {
  const prepTips = new Set();

  plannedMeals.forEach(({ meal }) => {
    if (meal.tags.includes("batch-cook")) {
      prepTips.add(`Batch-cook a double portion of ${meal.name} for freezer-friendly leftovers.`);
    }

    if (meal.ingredients.includes("cooked rice")) {
      prepTips.add("Cook extra plain rice on Friday evening and refrigerate for up to 2 days.");
    }

    if (meal.ingredients.some((item) => item.includes("carrot") || item.includes("zucchini"))) {
      prepTips.add("Pre-chop and steam carrots/zucchini in advance to cut prep time.");
    }

    if (meal.mealType === "breakfast") {
      prepTips.add("Wash and portion fruit ahead for quicker breakfast assembly.");
    }
  });

  return [...prepTips];
}
