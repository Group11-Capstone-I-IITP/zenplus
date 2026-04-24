const weekData = [
  {
    day: "Monday",
    kcal: 1650,
    meals: [
      { type: "Breakfast", name: "Boiled Eggs + Bread" },
      { type: "Lunch", name: "Chicken Dal + Rice" },
      { type: "Snack", name: "Boiled Egg + Chai" },
      { type: "Dinner", name: "Egg Curry + 2 Rotis" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 1630,
    meals: [
      { type: "Breakfast", name: "Egg Bhurji + Roti" },
      { type: "Lunch", name: "Fish Curry + Rice" },
      { type: "Snack", name: "Roasted Chana" },
      { type: "Dinner", name: "Chicken Keema + Dal + Roti" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 1660,
    meals: [
      { type: "Breakfast", name: "2-Egg Omelette + Bread" },
      { type: "Lunch", name: "Chicken Rice Bowl" },
      { type: "Snack", name: "Boiled Egg" },
      { type: "Dinner", name: "Egg Masala + 2 Rotis" },
    ],
  },
  {
    day: "Thursday",
    kcal: 1640,
    meals: [
      { type: "Breakfast", name: "Poha + Boiled Egg" },
      { type: "Lunch", name: "Chicken Keema + Dal + Rice" },
      { type: "Snack", name: "Cucumber + Curd" },
      { type: "Dinner", name: "Chicken Soup + Bread" },
    ],
  },
  {
    day: "Friday",
    kcal: 1620,
    meals: [
      { type: "Breakfast", name: "Boiled Eggs + Tea" },
      { type: "Lunch", name: "Fish Fry + Dal + Rice" },
      { type: "Snack", name: "Roasted Chana" },
      { type: "Dinner", name: "Egg Dal + 2 Rotis" },
    ],
  },
  {
    day: "Saturday",
    kcal: 1670,
    meals: [
      { type: "Breakfast", name: "Egg Paratha + Curd" },
      { type: "Lunch", name: "Chicken Curry + Rice" },
      { type: "Snack", name: "Buttermilk" },
      { type: "Dinner", name: "Grilled Chicken + Sabzi" },
    ],
  },
  {
    day: "Sunday",
    kcal: 1680,
    meals: [
      { type: "Breakfast", name: "Omelette + Toast" },
      { type: "Lunch", name: "Chicken Biryani (light) + Raita" },
      { type: "Snack", name: "Boiled Egg" },
      { type: "Dinner", name: "Egg Bhurji + 2 Rotis" },
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
