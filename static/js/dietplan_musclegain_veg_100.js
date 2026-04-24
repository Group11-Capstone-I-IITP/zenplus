const weekData = [
  {
    day: "Monday",
    kcal: 2200,
    meals: [
      { type: "Breakfast", name: "Chana Dal Chilla + Curd" },
      { type: "Lunch", name: "Rajma + Rice + Sabzi" },
      { type: "Snack", name: "Peanut Butter + Bread" },
      { type: "Dinner", name: "Paneer Bhurji + 3 Rotis" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 2180,
    meals: [
      { type: "Breakfast", name: "Soya Poha + Milk" },
      { type: "Lunch", name: "Chole + Brown Rice" },
      { type: "Snack", name: "Banana + Peanuts" },
      { type: "Dinner", name: "Dal Makhani + 3 Rotis" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 2220,
    meals: [
      { type: "Breakfast", name: "Moong Dal Cheela x3" },
      { type: "Lunch", name: "Paneer Rice Bowl" },
      { type: "Snack", name: "Roasted Chana + Jaggery" },
      { type: "Dinner", name: "Matar Paneer + Rice" },
    ],
  },
  {
    day: "Thursday",
    kcal: 2190,
    meals: [
      { type: "Breakfast", name: "Besan Chilla + Curd" },
      { type: "Lunch", name: "Soya Chunks Curry + Rice" },
      { type: "Snack", name: "Peanut Butter + Toast" },
      { type: "Dinner", name: "Rajma + 3 Rotis" },
    ],
  },
  {
    day: "Friday",
    kcal: 2210,
    meals: [
      { type: "Breakfast", name: "Idli x4 + Sambar" },
      { type: "Lunch", name: "Kadai Paneer + Rice" },
      { type: "Snack", name: "Mixed Sprouts Chaat" },
      { type: "Dinner", name: "Dal + Paneer Sabzi + 3 Rotis" },
    ],
  },
  {
    day: "Saturday",
    kcal: 2240,
    meals: [
      { type: "Breakfast", name: "Paratha x2 + Curd" },
      { type: "Lunch", name: "Chana Masala + Rice" },
      { type: "Snack", name: "Banana + Peanuts" },
      { type: "Dinner", name: "Paneer Pulao + Raita" },
    ],
  },
  {
    day: "Sunday",
    kcal: 2260,
    meals: [
      { type: "Breakfast", name: "Oats + Peanut Butter + Milk" },
      { type: "Lunch", name: "Panchmel Dal + Rice" },
      { type: "Snack", name: "Peanut Butter + Bread" },
      { type: "Dinner", name: "Soya Biryani + Raita" },
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
