const cityInput = document.querySelector('input[list="city"]');
const cityItems = Array.from(document.querySelectorAll(".city-item"));

function selectCity(item) {
    const cityName = item.querySelector("span")?.textContent?.trim();

    // Check if the clicked item is already selected
    if (item.classList.contains("selected")) {
        // If it is, unmark it and clear the input field
        item.classList.remove("selected");
        if (cityInput && cityInput.value === cityName) {
            cityInput.value = ""; 
        }
    } else {
        // Otherwise, remove 'selected' from all items and add to the clicked one
        cityItems.forEach((el) => el.classList.remove("selected"));
        item.classList.add("selected");
        
        // Update the hidden/visible input field
        if (cityInput && cityName) {
            cityInput.value = cityName;
        }
    }
}

cityItems.forEach((item) => {
    item.tabIndex = 0;
    item.setAttribute("role", "button");

    item.addEventListener("click", () => selectCity(item));
    item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectCity(item);
        }
    });
});