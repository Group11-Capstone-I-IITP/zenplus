const weekData = [
  {
    day: "Monday",
    kcal: 1800,
    meals: [
      { type: "Breakfast", name: "Egg Omelette + Brown Toast" },
      { type: "Lunch", name: "Grilled Chicken + Rice + Salad" },
      { type: "Snack", name: "Chicken Soup" },
      { type: "Dinner", name: "Fish Curry + 2 Rotis" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 1780,
    meals: [
      { type: "Breakfast", name: "Egg Bhurji + Multigrain Toast" },
      { type: "Lunch", name: "Mutton Keema + Dal + Rice" },
      { type: "Snack", name: "Boiled Eggs + Fruit" },
      { type: "Dinner", name: "Tandoori Chicken + Roti" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 1810,
    meals: [
      { type: "Breakfast", name: "Chicken Sandwich (grilled)" },
      { type: "Lunch", name: "Prawn Masala + Brown Rice" },
      { type: "Snack", name: "Greek Yogurt + Almonds" },
      { type: "Dinner", name: "Egg Curry + 2 Rotis" },
    ],
  },
  {
    day: "Thursday",
    kcal: 1790,
    meals: [
      { type: "Breakfast", name: "3-Egg Omelette + Salad" },
      { type: "Lunch", name: "Chicken Biryani (light) + Raita" },
      { type: "Snack", name: "Chicken Broth" },
      { type: "Dinner", name: "Fish Tikka + Sabzi + Roti" },
    ],
  },
  {
    day: "Friday",
    kcal: 1770,
    meals: [
      { type: "Breakfast", name: "Egg Paratha + Curd" },
      { type: "Lunch", name: "Grilled Fish + Dal + Rice" },
      { type: "Snack", name: "Boiled Eggs" },
      { type: "Dinner", name: "Chicken Stir-fry + 2 Rotis" },
    ],
  },
  {
    day: "Saturday",
    kcal: 1820,
    meals: [
      { type: "Breakfast", name: "Scrambled Eggs + Brown Toast" },
      { type: "Lunch", name: "Mutton Curry + Rice" },
      { type: "Snack", name: "Protein Shake / Egg" },
      { type: "Dinner", name: "Grilled Chicken + Salad" },
    ],
  },
  {
    day: "Sunday",
    kcal: 1830,
    meals: [
      { type: "Breakfast", name: "Full Egg Breakfast (3 eggs + toast)" },
      { type: "Lunch", name: "Chicken Dum Biryani + Raita" },
      { type: "Snack", name: "Chicken Soup" },
      { type: "Dinner", name: "Fish Curry + 2 Rotis" },
    ],
  },
];

const grid = document.getElementById("weekGrid");
weekData.forEach((d) => {
  const row = document.createElement("div");
  row.className = "week-row";
  row.innerHTML =
    '<div class="week-row-header" onclick="toggleWeek(this)"><span class="week-day-name">' +
    d.day +
    '</span><span class="week-day-kcal">' +
    d.kcal +
    ' kcal</span><span class="week-chevron">&#9660;</span></div><div class="week-meals">' +
    d.meals
      .map(
        (m) =>
          '<div class="week-meal-item"><div><div class="week-meal-type">' +
          m.type +
          "</div><div>" +
          m.name +
          "</div></div></div>",
      )
      .join("") +
    "</div>";
  grid.appendChild(row);
});
function switchTab(view, btn) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("view-day").style.display =
    view === "day" ? "block" : "none";
  document.getElementById("view-week").style.display =
    view === "week" ? "block" : "none";
}
function toggleMeal(card) {
  card.querySelector(".meal-detail").classList.toggle("open");
}
function toggleWeek(header) {
  const meals = header.nextElementSibling;
  const chev = header.querySelector(".week-chevron");
  const open = meals.classList.toggle("open");
  chev.style.transform = open ? "rotate(180deg)" : "";
}
