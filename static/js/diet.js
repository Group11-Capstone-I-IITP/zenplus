// Global variables to "remember" choices
let userGoal = "";
let userDiet = "";

// Standard page switcher
function showPage(pageNumber) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + pageNumber).classList.add("active");
}

// Saves Goal and goes to Page 2
function selectGoal(goal) {
  userGoal = goal.toLowerCase().replace(" ", ""); // Converts "Weight Loss" to "weightloss"
  document.getElementById("goal-name").innerText = goal + " Plan";
  showPage(2);
}

// Saves Diet and goes to Page 4
function selectDiet(type) {
  userDiet = type.toLowerCase().replace("-", ""); // Converts "Non-Veg" to "nonveg"

  // Update the text on the budget page
  document.getElementById("budget-header-main").innerText =
    "Select " + type + " Diet Budget";
  document.getElementById("budget-header-sub").innerText =
    "Select " + type + " Diet Budget";

  showPage(4);
}

// The Magic Logic: Combines everything to hit the right Flask route
function goToFinalPage(budget) {
  // Build the route name: /dietplan_weightloss_veg_100
  // Notice we removed the .html and added a leading slash
  const routeName = "/dietplan_" + userGoal + "_" + userDiet + "_" + budget;

  // Redirect the browser to that Flask route
  window.location.href = routeName;
}
