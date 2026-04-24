const weekData = [
  {
    day: "Monday",
    kcal: 2400,
    meals: [
      { type: "Breakfast", name: "Paneer Omelette + Toast" },
      { type: "Lunch", name: "Tofu Stir-fry + Brown Rice" },
      { type: "Snack", name: "Greek Yogurt + Nuts + Fruit" },
      { type: "Dinner", name: "Dal Makhani + Paneer + 3 Rotis" },
    ],
  },
  {
    day: "Tuesday",
    kcal: 2380,
    meals: [
      { type: "Breakfast", name: "Protein Smoothie + Paratha" },
      { type: "Lunch", name: "Rajma + Brown Rice + Raita" },
      { type: "Snack", name: "Paneer Tikka" },
      { type: "Dinner", name: "Matar Paneer + 3 Rotis" },
    ],
  },
  {
    day: "Wednesday",
    kcal: 2420,
    meals: [
      { type: "Breakfast", name: "Masala Oats + Boiled Eggs" },
      { type: "Lunch", name: "Soya Chunk Pulao + Raita" },
      { type: "Snack", name: "Peanut Butter + Banana" },
      { type: "Dinner", name: "Kadai Paneer + Rice + Roti" },
    ],
  },
  {
    day: "Thursday",
    kcal: 2390,
    meals: [
      { type: "Breakfast", name: "Chana Dal Cheela x3 + Curd" },
      { type: "Lunch", name: "Chole Bhature (light)" },
      { type: "Snack", name: "Sprouts + Paneer Salad" },
      { type: "Dinner", name: "Dal + Paneer Sabzi + 3 Rotis" },
    ],
  },
  {
    day: "Friday",
    kcal: 2410,
    meals: [
      { type: "Breakfast", name: "Idli x4 + Sambar + Paneer" },
      { type: "Lunch", name: "Palak Paneer + Brown Rice" },
      { type: "Snack", name: "Mixed Nuts + Yogurt" },
      { type: "Dinner", name: "Tofu Curry + 3 Rotis" },
    ],
  },
  {
    day: "Saturday",
    kcal: 2440,
    meals: [
      { type: "Breakfast", name: "Paneer Paratha x2 + Curd" },
      { type: "Lunch", name: "Chana Masala + Rice" },
      { type: "Snack", name: "Peanut Butter Toast + Milk" },
      { type: "Dinner", name: "Paneer Biryani + Raita" },
    ],
  },
  {
    day: "Sunday",
    kcal: 2460,
    meals: [
      { type: "Breakfast", name: "Protein Oats + Milk + Almonds" },
      { type: "Lunch", name: "Dal Tadka + Paneer + Rice" },
      { type: "Snack", name: "Greek Yogurt + Granola" },
      { type: "Dinner", name: "Soya Keema + 3 Rotis" },
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
