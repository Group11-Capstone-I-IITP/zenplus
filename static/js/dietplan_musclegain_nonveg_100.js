const weekData = [
  {
    day: "Monday",
    kcal: 2300,
    meals: [
      { type: "Breakfast", name: "Egg Bhurji + 3 Rotis" },
      { type: "Lunch", name: "Chicken + Dal + Rice" },
      { type: "Snack", name: "Boiled Eggs + Banana" },
      { type: "Dinner", name: "Egg Curry + 3 Rotis + Dal" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 2280,
    meals: [
      { type: "Breakfast", name: "Omelette x3 + Bread" },
      { type: "Lunch", name: "Fish Curry + Rice + Dal" },
      { type: "Snack", name: "Boiled Eggs x2" },
      { type: "Dinner", name: "Chicken Keema + 3 Rotis" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 2320,
    meals: [
      { type: "Breakfast", name: "Egg Paratha x2 + Curd" },
      { type: "Lunch", name: "Chicken Rice Bowl (large)" },
      { type: "Snack", name: "Boiled Eggs + Peanuts" },
      { type: "Dinner", name: "Mutton Dal + Rice" },
    ],
  },
  {
    day: "Thursday",
    kcal: 2290,
    meals: [
      { type: "Breakfast", name: "Boiled Eggs x4 + Toast" },
      { type: "Lunch", name: "Grilled Chicken + Dal + Rice" },
      { type: "Snack", name: "Banana + Eggs" },
      { type: "Dinner", name: "Egg Bhurji + 3 Rotis" },
    ],
  },
  {
    day: "Friday",
    kcal: 2310,
    meals: [
      { type: "Breakfast", name: "Egg Poha" },
      { type: "Lunch", name: "Fish Masala + Rice + Dal" },
      { type: "Snack", name: "Boiled Eggs x2 + Chai" },
      { type: "Dinner", name: "Chicken Curry + 3 Rotis" },
    ],
  },
  {
    day: "Saturday",
    kcal: 2340,
    meals: [
      { type: "Breakfast", name: "Omelette + Paratha" },
      { type: "Lunch", name: "Chicken Biryani + Raita" },
      { type: "Snack", name: "Boiled Eggs + Roasted Chana" },
      { type: "Dinner", name: "Egg Dal + Rice" },
    ],
  },
  {
    day: "Sunday",
    kcal: 2360,
    meals: [
      { type: "Breakfast", name: "Full Egg Breakfast" },
      { type: "Lunch", name: "Mutton Curry + Rice" },
      { type: "Snack", name: "Boiled Eggs + Banana" },
      { type: "Dinner", name: "Chicken Stew + 3 Rotis" },
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
