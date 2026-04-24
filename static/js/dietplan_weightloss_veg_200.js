const weekData = [
  {
    day: "Monday",
    kcal: 1720,
    meals: [
      { type: "Breakfast", name: "Paneer Bhurji + Toast" },
      { type: "Lunch", name: "Rajma + Brown Rice + Raita" },
      { type: "Snack", name: "Sprouts Chaat" },
      { type: "Dinner", name: "Palak Paneer + 2 Rotis" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 1700,
    meals: [
      { type: "Breakfast", name: "Masala Oats + Milk" },
      { type: "Lunch", name: "Chole Masala + Jeera Rice" },
      { type: "Snack", name: "Greek Yogurt + Fruit" },
      { type: "Dinner", name: "Tofu Stir-fry + Roti" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 1730,
    meals: [
      { type: "Breakfast", name: "Moong Dal Cheela + Paneer" },
      { type: "Lunch", name: "Dal Makhani + Brown Rice" },
      { type: "Snack", name: "Roasted Makhana" },
      { type: "Dinner", name: "Mixed Veg Curry + 2 Rotis" },
    ],
  },
  {
    day: "Thursday",
    kcal: 1710,
    meals: [
      { type: "Breakfast", name: "Soya Poha" },
      { type: "Lunch", name: "Kadai Paneer + Roti" },
      { type: "Snack", name: "Sprouts + Lemon" },
      { type: "Dinner", name: "Dalia Khichdi + Curd" },
    ],
  },
  {
    day: "Friday",
    kcal: 1690,
    meals: [
      { type: "Breakfast", name: "Idli + Sambar (4 pcs)" },
      { type: "Lunch", name: "Palak Dal + Rice" },
      { type: "Snack", name: "Fruit Chaat" },
      { type: "Dinner", name: "Paneer Tikka + 2 Rotis" },
    ],
  },
  {
    day: "Saturday",
    kcal: 1740,
    meals: [
      { type: "Breakfast", name: "Veg Paratha + Curd" },
      { type: "Lunch", name: "Chana Masala + Rice" },
      { type: "Snack", name: "Buttermilk + Almonds" },
      { type: "Dinner", name: "Lasooni Palak + Roti" },
    ],
  },
  {
    day: "Sunday",
    kcal: 1750,
    meals: [
      { type: "Breakfast", name: "Paneer Toast + Tea" },
      { type: "Lunch", name: "Healthy Pav Bhaji" },
      { type: "Snack", name: "Roasted Chana" },
      { type: "Dinner", name: "Matar Paneer + 2 Rotis" },
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
