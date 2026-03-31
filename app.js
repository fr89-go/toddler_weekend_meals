const form = document.getElementById('planner-form');
const pantryInput = document.getElementById('pantry');
const avoidInput = document.getElementById('avoid');
const formMessage = document.getElementById('form-message');
const resultsContainer = document.getElementById('results');
const resultsEmpty = document.getElementById('results-empty');
const shoppingList = document.getElementById('shopping-list');
const shoppingEmpty = document.getElementById('shopping-empty');
const copyButton = document.getElementById('copy-list');
const copyStatus = document.getElementById('copy-status');

const mealOptions = {
  breakfast: [
    { name: 'Banana oatmeal', ingredients: ['oats', 'banana', 'milk'] },
    { name: 'Yogurt with berries', ingredients: ['yogurt', 'berries'] },
    { name: 'Scrambled eggs and toast', ingredients: ['eggs', 'bread'] }
  ],
  lunch: [
    { name: 'Veggie pasta', ingredients: ['pasta', 'zucchini', 'olive oil'] },
    { name: 'Chicken rice bowl', ingredients: ['chicken', 'rice', 'peas'] },
    { name: 'Sweet potato mash plate', ingredients: ['sweet potato', 'carrot', 'yogurt'] }
  ],
  dinner: [
    { name: 'Salmon and soft broccoli', ingredients: ['salmon', 'broccoli', 'rice'] },
    { name: 'Lentil soup', ingredients: ['lentils', 'carrot', 'onion'] },
    { name: 'Turkey meatballs and pasta', ingredients: ['ground turkey', 'pasta', 'tomato sauce'] }
  ]
};

let currentShoppingItems = [];

function normalizeItems(text) {
  return text
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function chooseMeal(type, pantryItems, avoidItems, offset = 0) {
  const candidates = mealOptions[type].filter((meal) =>
    meal.ingredients.every((ingredient) => !avoidItems.includes(ingredient))
  );

  if (!candidates.length) {
    return {
      name: 'No safe option available',
      ingredients: []
    };
  }

  const scored = candidates
    .map((meal) => ({
      ...meal,
      pantryMatchCount: meal.ingredients.filter((ingredient) => pantryItems.includes(ingredient)).length
    }))
    .sort((a, b) => b.pantryMatchCount - a.pantryMatchCount);

  return scored[offset % scored.length];
}

function renderPlan(plan) {
  const fragments = plan
    .map(
      (day) => `
        <article class="day-card" aria-label="${day.day}">
          <h3>${day.day}</h3>
          ${day.meals
            .map(
              (meal) => `
                <div class="meal-row">
                  <span class="meal-type">${meal.type}</span>
                  <div>
                    <p class="meal-name">${meal.name}</p>
                    <p class="hint">${meal.ingredients.length ? meal.ingredients.join(', ') : 'No ingredients listed'}</p>
                  </div>
                </div>
              `
            )
            .join('')}
        </article>
      `
    )
    .join('');

  resultsContainer.innerHTML = fragments;
  resultsContainer.hidden = false;
  resultsEmpty.hidden = true;
}

function renderShopping(items) {
  if (!items.length) {
    shoppingList.hidden = true;
    shoppingEmpty.hidden = false;
    shoppingEmpty.innerHTML = '<p>Great news — you already have all ingredients for this plan.</p>';
    return;
  }

  shoppingList.innerHTML = items
    .map(
      (item, index) => `
        <li>
          <input id="shop-${index}" type="checkbox" />
          <label for="shop-${index}">${item}</label>
        </li>
      `
    )
    .join('');

  shoppingList.hidden = false;
  shoppingEmpty.hidden = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = '';
  formMessage.classList.remove('error');
  copyStatus.textContent = '';

  const pantryItems = normalizeItems(pantryInput.value);
  const avoidItems = normalizeItems(avoidInput.value);

  if (!pantryItems.length) {
    formMessage.textContent = 'Please add at least one ingredient you already have.';
    formMessage.classList.add('error');
    resultsContainer.hidden = true;
    resultsEmpty.hidden = false;
    shoppingList.hidden = true;
    shoppingEmpty.hidden = false;
    shoppingEmpty.innerHTML = '<p>Your shopping list will appear after meals are generated.</p>';
    return;
  }

  const saturday = {
    day: 'Saturday',
    meals: [
      { type: 'Breakfast', ...chooseMeal('breakfast', pantryItems, avoidItems, 0) },
      { type: 'Lunch', ...chooseMeal('lunch', pantryItems, avoidItems, 0) },
      { type: 'Dinner', ...chooseMeal('dinner', pantryItems, avoidItems, 0) }
    ]
  };

  const sunday = {
    day: 'Sunday',
    meals: [
      { type: 'Breakfast', ...chooseMeal('breakfast', pantryItems, avoidItems, 1) },
      { type: 'Lunch', ...chooseMeal('lunch', pantryItems, avoidItems, 1) },
      { type: 'Dinner', ...chooseMeal('dinner', pantryItems, avoidItems, 1) }
    ]
  };

  const plan = [saturday, sunday];
  renderPlan(plan);

  const required = new Set(plan.flatMap((day) => day.meals.flatMap((meal) => meal.ingredients)));
  currentShoppingItems = Array.from(required)
    .filter((ingredient) => !pantryItems.includes(ingredient))
    .sort((a, b) => a.localeCompare(b));

  renderShopping(currentShoppingItems);
  formMessage.textContent = 'Weekend plan updated.';
});

copyButton.addEventListener('click', async () => {
  if (!currentShoppingItems.length) {
    copyStatus.textContent = 'Nothing to copy yet.';
    copyStatus.classList.add('error');
    return;
  }

  const text = currentShoppingItems.map((item) => `• ${item}`).join('\n');

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = 'Shopping list copied to clipboard.';
    copyStatus.classList.remove('error');
  } catch {
    copyStatus.textContent = 'Copy failed. Select and copy items manually.';
    copyStatus.classList.add('error');
  }
});
