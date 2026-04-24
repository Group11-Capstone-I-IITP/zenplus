const weekData = [
  {
    day: "Monday",
    kcal: 2500,
    meals: [
      { type: "Breakfast", name: "Chicken Omelette + Brown Toast" },
      { type: "Lunch", name: "Grilled Chicken + Rice + Dal" },
      { type: "Snack", name: "Boiled Eggs + Greek Yogurt" },
      { type: "Dinner", name: "Mutton Curry + 3 Rotis" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 2480,
    meals: [
      { type: "Breakfast", name: "Scrambled Eggs x4 + Toast" },
      { type: "Lunch", name: "Fish Biryani + Raita" },
      { type: "Snack", name: "Chicken Sandwich" },
      { type: "Dinner", name: "Egg Bhurji + Dal + 3 Rotis" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 2520,
    meals: [
      { type: "Breakfast", name: "Omelette + Chicken Paratha" },
      { type: "Lunch", name: "Prawn Masala + Brown Rice + Dal" },
      { type: "Snack", name: "Boiled Eggs + Banana + Nuts" },
      { type: "Dinner", name: "Grilled Chicken + Sabzi + Rice" },
    ],
  },
  {
    day: "Thursday",
    kcal: 2490,
    meals: [
      { type: "Breakfast", name: "Egg + Chicken Sandwich" },
      { type: "Lunch", name: "Chicken Biryani (large) + Raita" },
      { type: "Snack", name: "Greek Yogurt + Nuts" },
      { type: "Dinner", name: "Fish Curry + 3 Rotis" },
    ],
  },
  {
    day: "Friday",
    kcal: 2510,
    meals: [
      { type: "Breakfast", name: "3-Egg Omelette + Brown Toast" },
      { type: "Lunch", name: "Mutton Keema + Rice + Dal" },
      { type: "Snack", name: "Boiled Eggs x3" },
      { type: "Dinner", name: "Tandoori Chicken + Roti + Salad" },
    ],
  },
  {
    day: "Saturday",
    kcal: 2540,
    meals: [
      { type: "Breakfast", name: "Full Breakfast — 4 Eggs + Toast" },
      { type: "Lunch", name: "Chicken Dum Biryani + Raita" },
      { type: "Snack", name: "Protein Shake + Chicken" },
      { type: "Dinner", name: "Fish Fry + Dal + Rice" },
    ],
  },
  {
    day: "Sunday",
    kcal: 2560,
    meals: [
      { type: "Breakfast", name: "Chicken Omelette + Paratha" },
      { type: "Lunch", name: "Mutton Rogan Josh + Rice" },
      { type: "Snack", name: "Boiled Eggs + Greek Yogurt" },
      { type: "Dinner", name: "Grilled Chicken + Egg Dal + Roti" },
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
