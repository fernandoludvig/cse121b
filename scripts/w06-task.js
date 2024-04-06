document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const recipeContainer = document.getElementById("recipeContainer");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query !== "") {
            searchRecipes(query);
        }
    });

    async function searchRecipes(query) {
        const apiKey = "243bb97f3fba4464b22cec19e8929ca5";
        const response = await fetch(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${apiKey}`);
        const data = await response.json();

        displayRecipes(data.results);
    }

    function displayRecipes(recipes) {
        recipeContainer.innerHTML = "";

        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            const recipeTitle = document.createElement("h2");
            recipeTitle.textContent = recipe.title;

            const recipeImage = document.createElement("img");
            recipeImage.src = `https://spoonacular.com/recipeImages/${recipe.image}`;

            recipeCard.appendChild(recipeTitle);
            recipeCard.appendChild(recipeImage);
            recipeContainer.appendChild(recipeCard);

            // Add click event listener to each recipe card
            recipeCard.addEventListener("click", () => {
                displayRecipeDetails(recipe.id); // Pass the recipe ID to fetch detailed information
            });
        });
    }

    async function displayRecipeDetails(recipeId) {
        const apiKey = "243bb97f3fba4464b22cec19e8929ca5";
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
        const recipeDetails = await response.json();

        // Example: Displaying recipe details in an alert
        alert(`Recipe Details:\nTitle: ${recipeDetails.title}\nInstructions: ${recipeDetails.instructions}`);
    }
});
