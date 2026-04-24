const weekData = [
  {
    day: "Monday",
    kcal: 1580,
    meals: [
      { type: "Breakfast", name: "Moong Dal Chilla" },
      { type: "Lunch", name: "Dal + Rice + Aloo Sabzi" },
      { type: "Snack", name: "Roasted Chana" },
      { type: "Dinner", name: "Palak Dal + 2 Rotis" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 1560,
    meals: [
      { type: "Breakfast", name: "Poha with peanuts" },
      { type: "Lunch", name: "Rajma + Brown Rice" },
      { type: "Snack", name: "Banana" },
      { type: "Dinner", name: "Vegetable Khichdi" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 1590,
    meals: [
      { type: "Breakfast", name: "Oats Upma" },
      { type: "Lunch", name: "Chole + 2 Rotis" },
      { type: "Snack", name: "Buttermilk" },
      { type: "Dinner", name: "Lauki Sabzi + Dal + Roti" },
    ],
  },
  {
    day: "Thursday",
    kcal: 1570,
    meals: [
      { type: "Breakfast", name: "Besan Chilla" },
      { type: "Lunch", name: "Sambar + Rice" },
      { type: "Snack", name: "Sprouts Chaat" },
      { type: "Dinner", name: "Mix Veg + 2 Rotis" },
    ],
  },
  {
    day: "Friday",
    kcal: 1550,
    meals: [
      { type: "Breakfast", name: "Idli + Sambar (3 pcs)" },
      { type: "Lunch", name: "Dal Fry + Jeera Rice" },
      { type: "Snack", name: "Roasted Makhana" },
      { type: "Dinner", name: "Masoor Dal + Roti" },
    ],
  },
  {
    day: "Saturday",
    kcal: 1600,
    meals: [
      { type: "Breakfast", name: "Vegetable Daliya" },
      { type: "Lunch", name: "Chana Dal + Rice" },
      { type: "Snack", name: "Cucumber + Lemon" },
      { type: "Dinner", name: "Methi Thepla + Curd" },
    ],
  },
  {
    day: "Sunday",
    kcal: 1610,
    meals: [
      { type: "Breakfast", name: "Wheat Upma" },
      { type: "Lunch", name: "Panchmel Dal + 2 Rotis" },
      { type: "Snack", name: "Roasted Chana" },
      { type: "Dinner", name: "Dalia Khichdi" },
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
